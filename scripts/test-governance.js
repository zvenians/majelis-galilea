const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

// Pengujian memakai data contoh, tanpa menyentuh spreadsheet jemaat.
function createRuntime() {
  const context = vm.createContext({console});
  new vm.Script(fs.readFileSync(path.join(__dirname, '../apps-script/Code.gs'), 'utf8')).runInContext(context);
  const permissions = context.rolePermissionMatrixV84_();
  const accounts = [{ID_USER:'USR-1', USERNAME:'sekretaris', NAMA:'Sekretaris', ROLE:'SEKRETARIS', STATUS:'Aktif'}];
  const sessions = new Map();
  sessions.set('secretary-token', JSON.stringify({id:'USR-1', role:'SEKRETARIS'}));
  const data = {
    notulen: [
      {ID_NOTULEN:'N1', TAHUN:2026, JUDUL:'Rapat internal', STATUS:'Disetujui', LOCKED:true},
      {ID_NOTULEN:'N2', TAHUN:2026, JUDUL:'Rapat untuk jemaat', STATUS:'Disetujui', PUBLIKASI:'Publik', LOCKED:true},
      {ID_NOTULEN:'N3', TAHUN:2026, JUDUL:'Draft', STATUS:'Draft', PUBLIKASI:'Publik'}
    ],
    keputusan: [
      {ID_KEPUTUSAN:'K1', ID_NOTULEN:'N2', KEPUTUSAN:'Keputusan internal', STATUS:'Aktif'},
      {ID_KEPUTUSAN:'K2', ID_NOTULEN:'N2', KEPUTUSAN:'Pelayanan masyarakat', PUBLIKASI:'Publik', STATUS:'Aktif'},
      {ID_KEPUTUSAN:'K3', ID_NOTULEN:'N1', KEPUTUSAN:'Keputusan rapat tertutup', PUBLIKASI:'Publik'}
    ],
    programs: [
      {ID_PROGRAM:'P1', NAMA_PROGRAM:'Rencana internal', STATUS:'Rencana'},
      {ID_PROGRAM:'P2', NAMA_PROGRAM:'Bakti sosial', PUBLIKASI:'Publik', STATUS:'Rencana'},
      {ID_PROGRAM:'P3', NAMA_PROGRAM:'Dibatalkan', PUBLIKASI:'Publik', STATUS:'Dibatalkan'}
    ],
    documents: [
      {ID_DOKUMEN:'D1', JUDUL:'Dokumen internal', STATUS:'Aktif'},
      {ID_DOKUMEN:'D2', JUDUL:'Panduan jemaat', STATUS:'Aktif', PUBLIKASI:'Publik', FILE_URL:'https://example.org/panduan.pdf'},
      {ID_DOKUMEN:'D3', JUDUL:'Dokumen tidak aktif', STATUS:'Arsip', PUBLIKASI:'Publik'},
      {ID_DOKUMEN:'D4', JUDUL:'Tautan tidak aman', STATUS:'Aktif', PUBLIKASI:'Publik', FILE_URL:'javascript:alert(1)'}
    ],
    keuangan:[{NOMINAL:999999, CATATAN:'Catatan keuangan internal'}],
    jemaat:[{NAMA:'Data anggota internal', ALAMAT:'Alamat pribadi'}],
    agenda:[], kehadiran:[], usulan:[], tindakLanjut:[], rapbj:[], inventaris:[], pengurus:[], letters:[]
  };
  const sheets = {};
  const schema = vm.runInContext('APP.SCHEMA', context);
  const entities = context.publicationEntitiesV86_();
  const collections = {notulen:'notulen', keputusan:'keputusan', program:'programs', dokumen:'documents'};
  for (const [entity, config] of Object.entries(entities)) {
    const headers = [...schema[config.sheet]];
    if (data[collections[entity]].some(row => row.PUBLIKASI)) headers.push('PUBLIKASI');
    const rows = data[collections[entity]];
    let capacity = headers.length;
    sheets[config.sheet] = {
      headers, rows,
      getLastColumn: () => headers.length,
      getMaxColumns: () => capacity,
      insertColumnsAfter: (_, count) => { capacity += count; },
      getRange: (row, col, height = 1, width = 1) => ({
        getDisplayValues: () => [headers.slice(col - 1, col - 1 + width)],
        getValues: () => [headers.slice(col - 1, col - 1 + width).map(key => rows[row - 2]?.[key] || '')],
        setValue: value => { if (row === 1) headers[col - 1] = value; else rows[row - 2][headers[col - 1]] = value; },
        setValues: values => values[0].forEach((value, index) => { rows[row - 2][headers[col - 1 + index]] = value; })
      })
    };
  }
  const audits = [];
  const backups = [];
  context.getAppData = () => structuredClone(data);
  context.getSheet_ = name => sheets[name];
  context.findRowById_ = (sheet, key, id) => { const index = sheet.rows.findIndex(row => row[key] === id); return index < 0 ? 0 : index + 2; };
  context.rowToObject_ = (sheet, row) => ({...sheet.rows[row - 2]});
  context.findObjectById_ = (name, key, id) => sheets[name].rows.find(row => row[key] === id);
  context.readSheet_ = name => name === 'AKSES_ROLE' ? accounts : sheets[name]?.rows || [];
  context.authCacheV84_ = () => ({get:key => sessions.get(key.replace('MG-AUTH-V84-','')), put:(key,value) => sessions.set(key.replace('MG-AUTH-V84-',''),value), remove:key => sessions.delete(key.replace('MG-AUTH-V84-',''))});
  context.getSettingSafe_ = () => '';
  context.currentYear_ = () => 2026;
  context.settingBoolV8_ = () => true;
  context.audit_ = (...args) => audits.push(args);
  context.withDocumentLock_ = callback => callback();
  context.SpreadsheetApp = {getActiveSpreadsheet:() => ({getId:() => 'fixture-database'}), flush:() => {}};
  context.Utilities = {formatDate:() => '20261012-230000'};
  context.getOrCreateFolder_ = name => ({name});
  context.DriveApp = {getFileById:id => ({makeCopy:(name,folder) => {
    backups.push({id,name,folder});
    return {getId:()=>'fixture-backup',getName:()=>name,getUrl:()=>'https://docs.google.com/spreadsheets/d/fixture-backup'};
  }})};
  context.ContentService = {MimeType:{JSON:'application/json'}, createTextOutput:text => ({text, setMimeType(){return this;}})};
  return {context, data, sheets, accounts, sessions, permissions, audits, backups};
}

function runTests() {
  const {context:c, data, sheets, accounts, audits} = createRuntime();
  const publicData = c.getPublicViewerDataV84({year:2026});
  assert.deepEqual(Array.from(publicData.meetings, row => row.id), ['N2']);
  assert.deepEqual(Array.from(publicData.decisions, row => row.decision), ['Pelayanan masyarakat']);
  assert.deepEqual(Array.from(publicData.programs, row => row.name), ['Bakti sosial']);
  assert.equal(publicData.documents.length, 2);
  assert.equal(publicData.documents[1].url, '');
  assert.ok(!JSON.stringify(publicData).includes('Alamat pribadi'));
  assert.ok(!JSON.stringify(publicData).includes('Catatan keuangan'));
  const congregation = c.getCongregationViewerDataV8(2026);
  assert.equal(congregation.approvedMeetings.length, 1);
  assert.equal(congregation.finance, null);
  assert.equal(congregation.nextMeeting, null);

  assert.throws(() => c.setPublicPublicationV86('', 'notulen', 'N1', true), /AUTH_REQUIRED/);
  for (const role of ['MAJELIS','PENGURUS','KEUANGAN','VIEWER','PENDETA']) {
    accounts[0].ROLE = role;
    assert.throws(() => c.setPublicPublicationV86('secretary-token','notulen','N1',true), /Publikasi hanya/);
  }
  accounts[0].ROLE = 'SEKRETARIS';
  assert.throws(() => c.setPublicPublicationV86('secretary-token','notulen','N3',true), /harus disetujui/);
  assert.throws(() => c.setPublicPublicationV86('secretary-token','keputusan','K3',true), /Publikasikan notulen/);
  assert.throws(() => c.setPublicPublicationV86('secretary-token','program','P3',true), /dibatalkan/);
  assert.throws(() => c.setPublicPublicationV86('secretary-token','dokumen','D3',true), /dokumen aktif/);
  assert.throws(() => c.setPublicPublicationV86('secretary-token','jemaat','USR-1',true), /tidak valid/);
  assert.throws(() => c.setPublicPublicationV86('secretary-token','notulen','N1','true'), /tidak valid/);
  assert.throws(() => c.setPublicPublicationV86('secretary-token','notulen','missing',true), /tidak ditemukan/);

  for (const role of ['SEKRETARIS','KETUA_JEMAAT','ADMIN']) {
    accounts[0].ROLE = role;
    assert.equal(c.setPublicPublicationV86('secretary-token','notulen','N1',true).publication, 'Publik');
  }
  assert.equal(data.notulen[0].LOCKED, true);
  assert.equal(data.notulen[0].STATUS, 'Disetujui');
  assert.ok(audits.some(row => row[0] === 'PUBLISH_PUBLIC'));
  assert.equal(sheets.NOTULEN.headers.filter(key => key === 'PUBLIKASI_OLEH').length, 1);
  c.setPublicPublicationV86('secretary-token','notulen','N2',false);
  assert.equal(c.getPublicViewerDataV84({year:2026}).decisions.length, 1);
  assert.ok(!JSON.stringify(c.getPublicViewerDataV84({year:2026})).includes('Pelayanan masyarakat'));
  assert.ok(audits.some(row => row[0] === 'WITHDRAW_PUBLIC'));

  accounts[0].ROLE = 'VIEWER';
  assert.deepEqual(Array.from(c.getAuthContextV84('secretary-token').user.permissions.write), []);
  assert.throws(() => c.saveEntity('program', {}, 'secretary-token'), /Akses ditolak/);
  accounts[0].STATUS = 'Nonaktif';
  assert.equal(c.getAuthContextV84('secretary-token').authenticated, false);
  assert.equal(c.getAuthContextV84('secretary-token').authenticated, false);

  const fresh = createRuntime();
  let captured;
  fresh.context.saveEntityInternal_ = (entity,payload) => { captured = payload; return {success:true}; };
  fresh.context.saveEntity('program', {NAMA_PROGRAM:'Uji', PUBLIKASI:'Publik', PUBLIKASI_OLEH:'Palsu'}, 'secretary-token');
  assert.equal(captured.PUBLIKASI, undefined);
  assert.equal(captured.PUBLIKASI_OLEH, undefined);
  const dispatch = body => fresh.context.doPost({postData:{contents:JSON.stringify(body)}}).text;
  assert.match(dispatch({action:'getAppData',args:[]}), /AUTH_REQUIRED/);
  assert.match(dispatch({action:'getAppData',args:[],authToken:'secretary-token'}), /Unknown or disabled action/);
  assert.match(dispatch({action:'getPublicViewerDataV84',args:[{year:2026}]}), /"success":true/);
  assert.match(dispatch({action:'setPublicPublicationV86',args:['secretary-token','notulen','N1',true],authToken:'secretary-token'}), /"publication":"Publik"/);

  // Pengeditan isi mencabut publikasi walaupun payload lama membawa flag Publik.
  const editing = createRuntime();
  editing.context.validateEntity_ = () => {};
  editing.context.processEntityPayload_ = () => {};
  editing.context.normalizeWrite_ = (_, value) => value;
  editing.context.saveEntity('program', {ID_PROGRAM:'P2', NAMA_PROGRAM:'Isi yang berubah', PUBLIKASI:'Publik'}, 'secretary-token');
  assert.equal(editing.data.programs[1].PUBLIKASI, 'Internal');
  assert.ok(!JSON.stringify(editing.context.getPublicViewerDataV84({year:2026})).includes('Isi yang berubah'));

  const backup = createRuntime();
  assert.throws(() => backup.context.createGovernanceBackupV86('secretary-token'), /Akses ditolak/);
  assert.equal(backup.backups.length, 0);
  backup.accounts[0].ROLE = 'ADMIN';
  const copied = backup.context.createGovernanceBackupV86('secretary-token');
  assert.equal(copied.success, true);
  assert.equal(backup.backups[0].id, 'fixture-database');
  assert.ok(backup.audits.some(row => row[0] === 'BACKUP_DATABASE'));

  const google = createRuntime();
  google.context.getSuperadminEmail_ = () => 'admin@example.org';
  google.sessions.set('google-token',JSON.stringify({AUTH_PROVIDER:'GOOGLE',GOOGLE_EMAIL:'admin@example.org',role:'SUPERADMIN'}));
  assert.equal(google.context.getAuthContextV84('google-token').authenticated, true);
  google.context.getSuperadminEmail_ = () => 'replacement@example.org';
  assert.equal(google.context.getAuthContextV84('google-token').authenticated, false);

  for (const file of ['admin/index.html','apps-script/index.html','viewer/index.html']) {
    const html = fs.readFileSync(path.join(__dirname,'..',file), 'utf8');
    for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) new vm.Script(match[1], {filename:file});
  }
  console.log('Governance checks passed: publication, role changes, account deactivation, edit revocation, backup permissions, Google owner handover, dispatch, and frontend syntax.');
}

if (require.main === module) runTests();
module.exports = {createRuntime};
