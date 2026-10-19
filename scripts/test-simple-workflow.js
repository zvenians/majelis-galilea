const assert=require('node:assert/strict');
const {createWorkspaceRuntime}=require('./fixtures/workspace-runtime');
const {context:c,tables,app,dispatch}=createWorkspaceRuntime();
const rows=key=>tables[app.SHEETS[key]].rows;
// One status change leaves the task's text, author and notes untouched.
assert.throws(()=>c.updateTaskStatusV87('VIEWER','T1','Selesai'),/Akses ditolak/);
assert.throws(()=>c.updateTaskStatusV87('MAJELIS','T1','Unknown'),/status/);
let result=dispatch({action:'updateTaskStatusV87',args:['MAJELIS','T1','Selesai'],authToken:'MAJELIS'}).result;
assert.equal(result.success,true);assert.equal(rows('TINDAK_LANJUT')[0].PROGRESS,100);
assert.equal(rows('TINDAK_LANJUT')[0].CATATAN,'Catatan yang harus tetap tersimpan');
c.updateTaskStatusV87('MAJELIS','T1','Proses');assert.equal(rows('TINDAK_LANJUT')[0].PROGRESS,99);
// The treasurer can set only the budget of a program without gaining program-edit rights.
assert.throws(()=>c.saveProgramBudgetV87('SEKRETARIS','P1',{ANGGARAN:100,SUMBER_DANA:'Kas Jemaat'}),/Akses ditolak/);
assert.throws(()=>c.saveProgramBudgetV87('KEUANGAN','P1',{ANGGARAN:-1,SUMBER_DANA:'Kas Jemaat'}),/anggaran/);
assert.throws(()=>c.saveProgramBudgetV87('KEUANGAN','P1',{ANGGARAN:10,SUMBER_DANA:'Palsu'}),/sumber dana/);
result=dispatch({action:'saveProgramBudgetV87',args:['KEUANGAN','P1',{ANGGARAN:750000,SUMBER_DANA:'Kas Jemaat'}],authToken:'KEUANGAN'}).result;
assert.equal(result.success,true,JSON.stringify(result));assert.equal(rows('RAPBJ').length,1);
assert.equal(rows('PROGRAM')[0].ID_RAPBJ,rows('RAPBJ')[0].ID_RAPBJ);
c.saveProgramBudgetV87('KEUANGAN','P1',{ANGGARAN:800000,SUMBER_DANA:'Sumbangan'});
assert.equal(rows('RAPBJ').length,1);assert.equal(rows('PROGRAM')[0].ANGGARAN,800000);
assert.equal(rows('PROGRAM')[0].PIC,'Maria');assert.equal(rows('RAPBJ')[0].ANGGARAN,800000);
rows('PROGRAM').push({...rows('PROGRAM')[0],ID_PROGRAM:'P2'});
assert.throws(()=>c.saveProgramBudgetV87('KEUANGAN','P1',{ANGGARAN:500,SUMBER_DANA:'Kas Jemaat'}),/beberapa program/);
// Accepting the same proposal twice does not duplicate an agenda.
c.approveAgendaProposal('U1','N1','SEKRETARIS');
const length=rows('AGENDA').length;c.approveAgendaProposal('U1','N1','SEKRETARIS');assert.equal(rows('AGENDA').length,length);
// A meeting decision creates its task once and retains progress on later edits.
c.saveEntity('agenda',{...rows('AGENDA')[0],KEPUTUSAN:'Kunjungi keluarga baru',PIC:'Maria',DEADLINE:'2026-10-29'},'SEKRETARIS');
assert.equal(rows('KEPUTUSAN').length,1);const task=rows('TINDAK_LANJUT').find(row=>row.ID_KEPUTUSAN);
c.updateTaskStatusV87('MAJELIS',task.ID_TINDAK_LANJUT,'Selesai');
c.saveEntity('agenda',{...rows('AGENDA')[0],PEMBAHASAN:'Catatan tambahan'},'SEKRETARIS');
assert.equal(rows('KEPUTUSAN').length,1);assert.equal(rows('TINDAK_LANJUT').find(row=>row.ID_KEPUTUSAN).STATUS,'Selesai');
// Approval is explicit and refreshed from the account on every request.
const secretary=rows('ACCESS').find(row=>row.ROLE==='SEKRETARIS');
assert.equal(c.safeRoleUserV84_(secretary).permissions.approveMeeting,true); // Preserve legacy rights.
secretary.BOLEH_SETUJUI_RAPAT=false;
c.reviewNotulen('N1','submit','','SEKRETARIS');
assert.throws(()=>c.reviewNotulen('N1','approve','','SEKRETARIS'),/izin menyetujui/);
c.saveEntity('notulen',{...rows('NOTULEN')[0],STATUS:'Disetujui',LOCKED:true},'SEKRETARIS');
assert.equal(rows('NOTULEN')[0].STATUS,'Menunggu Persetujuan');
c.reviewNotulen('N1','approve','','ADMIN');assert.equal(rows('NOTULEN')[0].LOCKED,true);
assert.throws(()=>c.saveEntity('notulen',{...rows('NOTULEN')[0],_ALLOW_LOCKED_EDIT:true},'ADMIN'),/dikunci/);
assert.throws(()=>c.approveAgendaProposal('U1','N1','SEKRETARIS'),/disetujui/);
assert.throws(()=>c.saveEntity('agenda',{...rows('AGENDA')[0],PEMBAHASAN:'Tidak boleh diubah'},'SEKRETARIS'),/sudah disetujui/);
// Editing an account persists explicit approval rights and keeps legacy role permissions.
c.saveAccessUserV84('ADMIN',{id:'SEKRETARIS',username:'sekretaris',name:'Sekretaris baru',role:'SEKRETARIS',status:'Aktif',position:'Sekretaris gereja',canApprove:false});
assert.equal(c.getAuthContextV84('SEKRETARIS').user.permissions.approveMeeting,false);
assert.equal(c.getAuthContextV84('SEKRETARIS').user.position,'Sekretaris gereja');
assert.throws(()=>c.saveAccessUserV84('ADMIN',{id:'SEKRETARIS',username:'nama-baru',role:'SEKRETARIS'}),/kata sandi baru/);
assert.equal(tables[app.SHEETS.ACCESS].headers.filter(key=>key==='BOLEH_SETUJUI_RAPAT').length,1);
const created=c.saveAccessUserV84('ADMIN',{username:'anggota-baru',name:'Anggota baru',role:'MAJELIS',pin:'contoh123',canApprove:true});
assert.equal(rows('ACCESS').find(row=>row.ID_USER===created.id).BOLEH_SETUJUI_RAPAT,true);
// If a program link cannot be saved, a new budget must not be left behind.
const rollback=createWorkspaceRuntime(), programTable=rollback.tables[rollback.app.SHEETS.PROGRAM];
const getRange=programTable.getRange.bind(programTable);
programTable.getRange=(...args)=>{const range=getRange(...args);range.setValues=()=>{throw new Error('Simulated write failure');};return range;};
assert.throws(()=>rollback.context.saveProgramBudgetV87('KEUANGAN','P1',{ANGGARAN:100,SUMBER_DANA:'Kas Jemaat'}),/write failure/);
assert.equal(rollback.tables[rollback.app.SHEETS.RAPBJ].rows.length,0);
assert.equal(programTable.rows[0].ID_RAPBJ,undefined);
assert.equal(rows('INVENTARIS')[0].NAMA_BARANG,'Proyektor');assert.equal(rows('JEMAAT')[0].NAMA_KELUARGA,'Simatupang');
console.log('Simple workflow checks passed: task updates, linked budgets, permissions, proposal deduplication, meeting → decision → task, approval, and preserved records.');
