// Pintasan membantu pengurus menemukan pekerjaan utamanya.
const OFFICER_WORK_V86 = {
  SUPERADMIN: ['Administrator', 'Lihat jadwal, tugas, dan catatan gereja di sini.', ['rapat','akses','keuangan']],
  ADMIN: ['Administrator', 'Lihat jadwal, tugas, dan catatan gereja di sini.', ['rapat','akses','keuangan']],
  KETUA_JEMAAT: ['Ketua jemaat', 'Lihat hasil rapat, tugas, dan kegiatan gereja.', ['rapat','tindak_lanjut','program']],
  PENDETA: ['Pendeta', 'Ikuti keputusan majelis dan perkembangan pelayanan.', ['rapat','keputusan','program']],
  SEKRETARIS: ['Sekretaris', 'Siapkan notulen, surat, dan dokumen pelayanan.', ['rapat','surat','dokumen']],
  KEUANGAN: ['Bendahara', 'Catat uang masuk dan keluar, lalu periksa anggaran.', ['keuangan','rapbj','program']],
  PENGURUS: ['Pengurus', 'Lihat tugas dan susun kegiatan departemen.', ['tindak_lanjut','program','usulan']],
  MAJELIS: ['Anggota majelis', 'Ajukan bahan rapat dan pantau keputusan pelayanan.', ['usulan','keputusan','tindak_lanjut']],
  VIEWER: ['Pembaca', 'Baca informasi rapat, keputusan, dan program yang tersedia.', ['rapat','keputusan','program']]
};

function canPublishV86() {
  const user = state.authV84.user;
  return !!user && ['SUPERADMIN','ADMIN','KETUA_JEMAAT','SEKRETARIS'].includes(user.role || user.ROLE);
}

function officerProfileV86() {
  const user = state.authV84.user;
  return OFFICER_WORK_V86[user && (user.role || user.ROLE)] || ['Pengurus', 'Pilih menu sesuai tugas pelayanan Anda.', []];
}

function renderOfficerWorkspaceV86() {
  const user=state.authV84.user, welcome=document.getElementById('officerWelcomeV86');
  if(!welcome)return;welcome.hidden=!user;if(!user)return;
  const [,description]=officerProfileV86();
  welcome.innerHTML=`<header><div><small>${esc(user.position || simpleRoleLabelV87(user.role || user.ROLE))} · ${state.year}</small><h2>Halo, ${esc(user.name || user.username || 'pengurus')}.</h2><p>${esc(description)}</p></div><button class="officer-help-button" onclick="openOfficerGuideV86()">Cara pakai</button></header>`;
}

function applyOfficerControlsV86() {
  const user = state.authV84.user;
  const permissions = user && user.permissions || {};
  const config = PAGE_CREATE_V83[state.page];
  const finance = document.querySelector('#dashboard .finance-console');
  if (finance) finance.hidden = !hasPageAccessV84('keuangan') && !hasPageAccessV84('rapbj');
  document.querySelectorAll('[onclick^="editEntity("]').forEach(button => {
    const match = button.getAttribute('onclick').match(/editEntity\('([^']+)'/);
    if (match) button.hidden = !canWriteEntityV84(match[1]);
  });
  const add = document.getElementById('addButton');
  if (add) add.hidden = !config || !canWriteEntityV84(config.entity);
  const mobileAdd = document.querySelector('#mobileActionBarV7 button[onclick="openQuickActionsV7()"]');
  if (mobileAdd) mobileAdd.hidden = !(permissions.write || []).length;
  document.querySelectorAll('[data-publication-control]').forEach(button => { button.hidden = !canPublishV86(); });
  document.querySelectorAll('.island-utility-row-v7 button[onclick="openSettingsCenterV8()"], .island-utility-row-v7 button[onclick="openSystemHealthV7()"]')
    .forEach(button => { button.hidden = !permissions.settings; });
  document.querySelectorAll('#quickActionsV7 button[onclick^="quickCreateV7("]').forEach(button => {
    const match = button.getAttribute('onclick').match(/quickCreateV7\('([^']+)'\)/);
    button.hidden = !match || match[1] === 'keputusan' || !canWriteEntityV84(match[1]);
  });
  const currentQuick = document.querySelector('#quickActionsV7 button[onclick="quickCreateCurrentPageV7()"]');
  if (currentQuick) currentQuick.hidden = !config || !canWriteEntityV84(config.entity);
  renderOfficerWorkspaceV86();
  renderSimpleNavigationV87();
}

function publicationCollectionsV86() {
  const data = state.data || {};
  return {
    notulen: {label:'Catatan rapat', rows:data.notulen || [], id:'ID_NOTULEN', title:'JUDUL'},
    keputusan: {label:'Keputusan', rows:data.keputusan || [], id:'ID_KEPUTUSAN', title:'KEPUTUSAN'},
    program: {label:'Program kerja', rows:data.programs || [], id:'ID_PROGRAM', title:'NAMA_PROGRAM'},
    dokumen: {label:'Dokumen', rows:data.documents || [], id:'ID_DOKUMEN', title:'JUDUL'}
  };
}

function openPublicationCenterV86() {
  if (!canPublishV86()) { toast('Akun ini belum bisa mengatur informasi untuk jemaat.'); return; }
  closeDynamicIsland();
  setText('actionTitle', 'Informasi untuk jemaat');
  document.getElementById('actionBody').innerHTML = `<div class="publication-panel">
    <p>Pilih informasi yang ingin dibagikan. Jemaat baru bisa melihatnya setelah Anda menekan Tampilkan ke jemaat.</p>
    <div class="publication-filters">
      <label for="publicationTypeV86">Jenis informasi<select id="publicationTypeV86">${Object.entries(publicationCollectionsV86()).map(([key, value]) => `<option value="${key}">${value.label}</option>`).join('')}</select></label>
      <label for="publicationSearchV86">Cari judul atau isi<input id="publicationSearchV86" type="search" placeholder="Cari dalam tahun ${state.year}"></label>
    </div>
    <p class="publication-count" id="publicationCountV86" role="status"></p>
    <div id="publicationRowsV86"></div>
    <p>Perubahan isi akan mengembalikan informasi menjadi internal. Untuk dokumen, periksa juga isi file dan izin tautannya di Google Drive. Penarikan di sini menghapusnya dari viewer; izin file di Drive dikelola terpisah.</p>
    </div>`;
  document.getElementById('publicationTypeV86').onchange = renderPublicationRowsV86;
  document.getElementById('publicationSearchV86').oninput = renderPublicationRowsV86;
  renderPublicationRowsV86();
  document.getElementById('actionModal').classList.add('show');
}

function publicationReasonV86(entity, row) {
  if (entity === 'notulen' && !['Disetujui','Final'].includes(row.STATUS)) return 'Menunggu persetujuan rapat.';
  if (entity === 'keputusan') {
    const parent = (state.data.notulen || []).find(item => String(item.ID_NOTULEN) === String(row.ID_NOTULEN));
    if (!parent || parent.PUBLIKASI !== 'Publik' || !['Disetujui','Final'].includes(parent.STATUS)) return 'Tampilkan catatan rapat yang sudah disetujui terlebih dahulu.';
  }
  if (entity === 'program' && row.STATUS === 'Dibatalkan') return 'Program ini dibatalkan.';
  if (entity === 'dokumen' && (row.STATUS || 'Aktif') !== 'Aktif') return 'Dokumen ini tidak aktif.';
  return '';
}

function renderPublicationRowsV86() {
  const type = document.getElementById('publicationTypeV86');
  if (!type) return;
  const entity = type.value;
  const config = publicationCollectionsV86()[entity];
  const search = document.getElementById('publicationSearchV86').value.trim().toLocaleLowerCase('id');
  const rows = config.rows.filter(row => String(row[config.title] || '').toLocaleLowerCase('id').includes(search));
  setText('publicationCountV86', `${rows.length} informasi · ${rows.filter(row => row.PUBLIKASI === 'Publik' && !publicationReasonV86(entity, row)).length} tampil ke jemaat · tahun ${state.year}`);
  const target = document.getElementById('publicationRowsV86');
  target.innerHTML = rows.length ? rows.map(row => {
    const published = row.PUBLIKASI === 'Publik';
    const reason = publicationReasonV86(entity, row);
    const visible = published && !reason;
    return `<article class="publication-row"><div>
      <span class="publication-state ${visible ? 'is-public' : ''}">${visible ? 'Tampil ke jemaat' : published ? 'Belum bisa ditampilkan' : 'Internal'}</span>
      <strong>${esc(row[config.title] || 'Tanpa judul')}</strong>
      <small>${esc(row.STATUS || 'Tanpa status')}${row.PUBLIKASI_OLEH ? ' · Diatur oleh ' + esc(row.PUBLIKASI_OLEH) : ''}</small>
      ${reason ? `<small>${esc(reason)}</small>` : ''}</div>
      <button type="button" data-publication-id="${esc(row[config.id])}" aria-pressed="${published}" ${reason && !published ? 'disabled' : ''} aria-label="${published ? 'Sembunyikan dari jemaat' : 'Tampilkan ke jemaat'}: ${esc(row[config.title] || 'Tanpa judul')}">${published ? 'Lihat / sembunyikan' : 'Lihat tampilan jemaat'}</button></article>`;
  }).join('') : '<p>Belum ada informasi yang cocok dengan pencarian ini.</p>';
  target.querySelectorAll('[data-publication-id]').forEach(button => {
    button.onclick = () => {
      const row = config.rows.find(item => String(item[config.id]) === button.dataset.publicationId);
      if (row) {button.dataset.publishEntity=entity;button.dataset.publishId=row[config.id];previewPublicationV88(button);}
    };
  });
}

function setPublicationFromUiV86(entity, row, button) {
  if (!canPublishV86()) return;
  const config = publicationCollectionsV86()[entity];
  const publish = row.PUBLIKASI !== 'Publik';
  button.disabled = true;
  button.textContent = 'Menyimpan…';
  google.script.run.withSuccessHandler(result => {
    row.PUBLIKASI = result.publication;
    row.PUBLIKASI_OLEH = state.authV84.user.name || state.authV84.user.username;
    renderPublicationRowsV86();
    toast(publish ? 'Informasi sudah tampil untuk jemaat.' : 'Informasi hanya terlihat oleh pengurus.');
  }).withFailureHandler(error => {
    renderPublicationRowsV86();
    notifyErrorV88(error);
  }).setPublicPublicationV86(state.authV84.token, entity, row[config.id], publish);
}

function openOfficerGuideV86() {
  closeDynamicIsland();
  openActionModal('Cara pakai',`<div class="officer-guide"><h3>Mulai dari lima menu</h3><p>Ringkasan mendahulukan tugas yang terlambat, tugas terdekat, dan rapat yang menunggu persetujuan. Di HP, pilih menu utama lalu pilih Bagian yang ingin dibuka.</p><h3>Menyiapkan dan mencatat rapat</h3><p>Buka Rapat, lalu buat rapat. Di Persiapan, pilih usulan masuk dan lihat tugas rapat sebelumnya. Di Catatan rapat, isi pembahasan, keputusan, serta penanggung jawab dan batas waktu bila diperlukan. Keputusan dan tugas dibuat otomatis dari catatan ini.</p><h3>Sesudah rapat</h3><p>Tekan Minta persetujuan. Pengurus yang diberi izin dapat menyetujui hasil rapat. Buka bagian Tugas untuk memperbarui status pekerjaan.</p><h3>Program dan anggaran</h3><p>Buat program, lalu bendahara memilih Atur anggaran pada program tersebut. Saat mencatat transaksi, pilih anggaran yang dipakai agar rincian sumber dana dan departemen terisi.</p><h3>Keuangan</h3><p>Catat uang masuk dan keluar di Transaksi. Lihat saldo di Ringkasan. Di Laporan, cocokkan saldo dan unduh laporan bulanan.</p><h3>Inventaris, kartu, dan foto</h3><p>Administrasi memuat surat, dokumen, kartu inventaris, pengurus, dan jemaat. Kartu anggota, kartu keluarga, dan potong foto tetap ada pada bagian Jemaat.</p><h3>Informasi untuk jemaat</h3><p>Tekan Lihat tampilan jemaat, periksa isinya, lalu pilih Tampilkan ke jemaat. Status Internal berarti hanya pengurus yang bisa melihatnya. Jika isinya diubah, periksa lagi sebelum dibagikan.</p><h3>Mengisi formulir</h3><p>Isian sementara belum menjadi data resmi. Tekan Simpan setelah selesai. Foto dan file perlu dipilih lagi kalau formulir ditutup. Pesan gagal tetap terlihat sampai ditutup; Coba lagi muncul jika aman untuk mengulang.</p><h3>Data lama dan salinan data</h3><p>Pilih tahun di atas untuk membuka data lama. Arsip tahunan, akun pengurus, dan salinan data ada di Pengaturan. Salinan data mencakup tabel; file lampiran di Drive tetap perlu disimpan terpisah.</p></div>`,'');
}

function createOfficerBackupV86(button) {
  button.disabled = true;
  button.textContent = 'Membuat salinan data…';
  google.script.run.withSuccessHandler(result => {
    const target = document.getElementById('governanceBackupResultV86');
    if (target) {
      target.textContent = 'Salinan data berhasil dibuat. ';
      const link = document.createElement('a');
      link.textContent = result.name;
      if (/^https:\/\//i.test(result.url || '')) link.href = result.url;
      link.target = '_blank'; link.rel = 'noopener';
      target.appendChild(link);
    }
    button.disabled = false; button.textContent = 'Buat salinan data';
    toast('Salinan data berhasil dibuat.');
  }).withFailureHandler(error => {
    button.disabled = false; button.textContent = 'Buat salinan data';
    const target = document.getElementById('governanceBackupResultV86');
    if (target) target.textContent = errorMessage(error);
    toast('Salinan data belum berhasil dibuat.');
  }).createGovernanceBackupV86(state.authV84.token);
}

document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.createElement('nav');
  navigation.id = 'officerNavigationV86'; navigation.className = 'officer-navigation';
  navigation.setAttribute('aria-label', 'Pintasan pengurus'); navigation.hidden = true;
  document.querySelector('.workspace').prepend(navigation);
  const welcome = document.createElement('section');
  welcome.id = 'officerWelcomeV86'; welcome.className = 'officer-welcome'; welcome.hidden = true;
  document.getElementById('dashboard').prepend(welcome);
  const utility = document.querySelector('.island-utility-row-v7');
  const publish = document.createElement('button');
  publish.type = 'button'; publish.textContent = 'Informasi jemaat';
  publish.dataset.publicationControl = ''; publish.onclick = openPublicationCenterV86;
  publish.hidden = true;
  const help = document.createElement('button');
  help.type = 'button'; help.textContent = 'Panduan pengurus'; help.onclick = openOfficerGuideV86;
  utility.appendChild(help);
  const toggle = document.getElementById('islandToggle');
  toggle.setAttribute('aria-controls', 'officerExpandedMenuV86');
  document.querySelector('.island-expand').id = 'officerExpandedMenuV86';
  const label = document.createElement('span'); label.textContent = 'Menu'; toggle.appendChild(label);
  const message = document.getElementById('toast');
  message.setAttribute('role', 'status'); message.setAttribute('aria-live', 'polite');
  document.querySelectorAll('.close-button').forEach(button => button.setAttribute('aria-label', 'Tutup'));
  applyOfficerControlsV86();
});


/* Alur sederhana. Nama kolom lama tetap dipakai agar arsip tetap terbaca. */
const WORKSPACE_GROUPS_V87 = [
  {id:'ringkasan', label:'Ringkasan', pages:['dashboard','kalender']},
  {id:'rapat', label:'Rapat', pages:['rapat','usulan','keputusan','tindak_lanjut']},
  {id:'program', label:'Program & Anggaran', pages:['program','rapbj']},
  {id:'keuangan', label:'Keuangan', pages:['keuangan']},
  {id:'administrasi', label:'Administrasi', pages:['surat','dokumen','inventaris','pengurus','jemaat']}
];
const SIMPLE_PAGE_LABELS_V87 = {dashboard:'Ringkasan',kalender:'Jadwal',rapat:'Daftar rapat',usulan:'Usulan masuk',keputusan:'Keputusan',tindak_lanjut:'Tugas',program:'Program',rapbj:'Anggaran tahunan',keuangan:'Keuangan',surat:'Surat',dokumen:'Dokumen',inventaris:'Inventaris',pengurus:'Pengurus',jemaat:'Jemaat',arsip:'Arsip tahunan',akses:'Akun pengurus',aktivitas:'Riwayat perubahan'};
function simpleLabelV87(value) {
  return ({'Belum Dimulai':'Belum dikerjakan','Proses':'Sedang dikerjakan','Draft':'Belum selesai','Final':'Selesai','Realisasi':'Sudah dipakai','PIC':'Penanggung jawab','Deadline':'Batas waktu','Preview':'Lihat tampilan','Pratinjau':'Lihat tampilan','Rekonsiliasi':'Pencocokan saldo','Notulen':'Catatan rapat','Upload':'Pilih file','Download':'Unduh','Export':'Unduh','Dashboard':'Ringkasan','Perlu Revisi':'Perlu diperbaiki','Menunggu Persetujuan':'Menunggu persetujuan'})[value] || value;
}
function groupForPageV87(page) { return WORKSPACE_GROUPS_V87.find(group => group.pages.includes(page)); }
function firstGroupPageV87(id) {
  const group = WORKSPACE_GROUPS_V87.find(item => item.id === id);
  return group && group.pages.find(hasPageAccessV84) || 'dashboard';
}
function navigateGroupV87(id) { shellNavigate(firstGroupPageV87(id)); }
function renderSimpleNavigationV87() {
  const user = state.authV84.user;
  const nav = document.getElementById('officerNavigationV86');
  if (!nav) return;
  nav.hidden = !user;
  const group = groupForPageV87(state.page);
  document.querySelectorAll('[data-group]').forEach(button => {
    const item = WORKSPACE_GROUPS_V87.find(x => x.id === button.dataset.group);
    button.hidden = !user || !item.pages.some(hasPageAccessV84);
    button.classList.toggle('active', !!group && group.id === item.id);
  });
  if (!user) return;
  const groups = WORKSPACE_GROUPS_V87.filter(item => item.pages.some(hasPageAccessV84));
  nav.innerHTML = `<div class="main-menu-v87">${groups.map(item => `<button type="button" data-main-group="${item.id}" ${group && item.id === group.id ? 'aria-current="page"' : ''}>${item.label}</button>`).join('')}</div>
    ${group && group.pages.length > 1 && group.id !== 'ringkasan' ? `<div class="section-menu-v87" aria-label="Bagian ${group.label}">${group.pages.filter(hasPageAccessV84).map(page => `<button type="button" data-section-page="${page}" ${state.page === page ? 'aria-current="page"' : ''}>${SIMPLE_PAGE_LABELS_V87[page]}</button>`).join('')}</div>` : ''}`;
  if (group && group.pages.length > 1 && group.id !== 'ringkasan') {
    const sections = group.pages.filter(hasPageAccessV84);
    nav.insertAdjacentHTML('beforeend', `<label class="mobile-section-v88">Bagian<select aria-label="Bagian halaman">${sections.map(page => `<option value="${page}" ${state.page===page?'selected':''}>${SIMPLE_PAGE_LABELS_V87[page]}</option>`).join('')}</select></label>`);
    nav.querySelector('.mobile-section-v88 select').onchange = event => openPage(event.target.value);
  }
  nav.querySelectorAll('[data-main-group]').forEach(button => button.onclick = () => navigateGroupV87(button.dataset.mainGroup));
  nav.querySelectorAll('[data-section-page]').forEach(button => button.onclick = () => openPage(button.dataset.sectionPage));
  setText('pageTitle', group ? group.label : SIMPLE_PAGE_LABELS_V87[state.page]);
  document.querySelectorAll('.island-utility-row-v7 button[onclick="openWorkspaceSettingsV87()"]')
    .forEach(button => button.hidden = !['arsip','akses','aktivitas'].some(hasPageAccessV84) && !user.permissions.settings);
  renderFinanceTabsV87();
}
function renderSimpleDashboardV87() {
  const target=document.getElementById('simpleDashboardV87');
  if(!target || !state.data || !state.authV84.user)return;
  const summary=state.data.summary || {}, today=localIsoDate(new Date());
  const tasks=priorityTasksV88(state.data.tindakLanjut || []);
  const pending=(state.data.notulen || []).filter(row=>row.STATUS==='Menunggu Persetujuan');
  const next=(state.data.notulen || []).filter(row=>String(row.TANGGAL || '').slice(0,10)>=today && row.STATUS!=='Dibatalkan').sort((a,b)=>String(a.TANGGAL).localeCompare(String(b.TANGGAL)))[0];
  const programs=(state.data.programs || []).filter(row=>!['Selesai','Dibatalkan'].includes(row.STATUS));
  target.innerHTML=`<div class="summary-grid-v87">
    ${hasPageAccessV84('tindak_lanjut')?`<article><small>PERLU DIKERJAKAN</small><h3>${tasks.length ? tasks.length+' tugas belum selesai':'Belum ada tugas'}</h3><ul class="priority-list-v88">${tasks.slice(0,3).map(row=>`<li><strong>${esc(row.URAIAN)}</strong><small>${esc(row.PIC || 'Belum ada penanggung jawab')}</small><small class="${taskDueV88(row).late?'overdue-v88':''}">${esc(taskDueV88(row).label)}</small></li>`).join('')}</ul><button onclick="openPage('tindak_lanjut')">Lihat semua tugas</button></article>`:''}
    ${hasPageAccessV84('rapat')?`<article><small>RAPAT</small><h3>${pending.length?pending.length+' rapat menunggu persetujuan':next?esc(next.JUDUL):'Belum ada jadwal rapat'}</h3>${pending.length?`<p>${esc(pending[0].JUDUL)}</p><button onclick="detailNotulen('${escJs(pending[0].ID_NOTULEN)}')">${canApproveMeetingV87()?'Periksa hasil rapat':'Lihat hasil rapat'}</button>`:''}${next?`<p>${pending.length?'Berikutnya: '+esc(next.JUDUL)+'<br>':''}${dateLabel(next.TANGGAL)} · ${esc(next.TEMPAT || 'Tempat belum diisi')}</p>${!pending.length?`<button onclick="detailNotulen('${escJs(next.ID_NOTULEN)}')">Buka rapat</button>`:''}`:!pending.length?`<p>Jadwal berikutnya akan muncul di sini.</p>${canWriteEntityV84('notulen')?'<button onclick="quickCreateV7(\'notulen\')">Buat rapat</button>':''}`:''}${hasPageAccessV84('kalender')?'<button class="subtle-v87" onclick="openPage(\'kalender\')">Lihat jadwal</button>':''}</article>`:''}
    ${hasPageAccessV84('keuangan')?`<article><small>KEUANGAN ${state.year}</small><h3>Saldo dana gereja</h3>${Object.entries(summary.funds || {}).map(([name,fund])=>`<p>${esc(name)}<strong>${money(fund.balance || 0)}</strong></p>`).join('')}<button onclick="openPage('keuangan')">Buka keuangan</button></article>`:hasPageAccessV84('program')?`<article><small>KEGIATAN</small><h3>${programs.length} program berjalan</h3><p>Lihat kegiatan dan siapa yang mengurusnya.</p><button onclick="openPage('program')">Lihat program</button></article>`:''}
  </div>`;
}

function relevantNotificationsV87(data) {
  const permissions = state.authV84.user && state.authV84.user.permissions || {};
  const notifications = (data.notifications || []).filter(item => hasPageAccessV84(item.page) && (item.id !== 'backup' || permissions.settings));
  return {...data, notifications, count:notifications.length};
}
function renderFinanceTabsV87(selected) {
  const root = document.querySelector('#keuangan .finance-command-v8');
  if (!root) return;
  state.financeTabV87 = selected || state.financeTabV87 || 'transaksi';
  let nav = document.getElementById('financeTabsV87');
  if (!nav) {
    nav = document.createElement('nav'); nav.id = 'financeTabsV87'; nav.className = 'section-menu-v87';
    nav.setAttribute('aria-label','Bagian keuangan'); root.querySelector('.finance-command-head-v8').after(nav);
    const reports = document.createElement('section'); reports.id='financeReportsV87'; reports.className='simple-panel-v87';
    reports.innerHTML='<h3>Laporan bulanan</h3><p>Pilih bulan di atas. Cocokkan saldo, periksa transaksi, lalu tutup bulan jika sudah selesai.</p><button onclick="downloadFinanceMonthlyPdfV8()">Unduh laporan PDF</button> <button data-finance-write onclick="openFinanceGovernanceV8()">Periksa & tutup bulan</button>';
    root.appendChild(reports);
    const extra = document.createElement('details'); extra.id='financeExtraV87'; extra.className='simple-extra-v87';
    extra.innerHTML='<summary>Target perpuluhan & persembahan</summary>';
    const ministry = root.querySelector('.finance-ministry-v8'); if (ministry) extra.appendChild(ministry); root.appendChild(extra);
  }
  nav.innerHTML = [['transaksi','Transaksi'],['ringkasan','Ringkasan'],['laporan','Laporan']].map(([id,label])=>`<button onclick="renderFinanceTabsV87('${id}')" ${state.financeTabV87 === id ? 'aria-current="page"' : ''}>${label}</button>`).join('');
  const sections = {'transaksi':['.finance-filter-v8'],'ringkasan':['.finance-pulse-v8','.finance-trend-v8','.finance-funds-v8','#financeExtraV87'],'laporan':['#financeReportsV87','.finance-reconciliation-v8']};
  Object.entries(sections).forEach(([id,selectors])=>selectors.forEach(selector=>{const el=root.querySelector(selector);if(el)el.hidden=id!==state.financeTabV87;}));
  root.querySelectorAll('[data-finance-write],button[onclick="openFinanceGovernanceV8()"],button[onclick="openFinanceTargetV702()"],button[onclick="quickCreateV7(\'keuangan\')"]').forEach(button=>button.hidden=!canWriteEntityV84('keuangan'));
}
function renderSimpleFieldsV87(entity, fields, data) {
  const optional = {
    notulen:['JENIS_RAPAT','WAKTU_SELESAI','CATATAN'], agenda:['NO_URUT','STATUS','DEPARTEMEN','ANGGARAN','SUMBER_DANA'],
    usulan:['TANGGAL_USUL','DEPARTEMEN','ESTIMASI_ANGGARAN','SUMBER_DANA','STATUS','CATATAN'],
    tindak_lanjut:['ID_KEPUTUSAN','DEPARTEMEN','PROGRESS','CATATAN'],
    program:['DESKRIPSI','ID_RAPBJ','SUMBER_DANA','ANGGARAN','REALISASI','CATATAN'], rapbj:['KATEGORI','STATUS','CATATAN'], jemaat:['NOMOR_ANGGOTA','TANGGAL_BAPTIS','TANGGAL_BERGABUNG','CATATAN'],
    keuangan:['ID_NOTULEN','ID_AGENDA','CATATAN'], inventaris:['TANGGAL_PEROLEHAN','NILAI','STATUS','CATATAN']
  };
  const visible = fields.filter(field => !(entity === 'notulen' && field.key === 'STATUS'));
  const extra = field => (optional[entity] || []).includes(field.key) && !field.required;
  const render = field => {
    let configured = {...field};
    if (entity === 'tindak_lanjut' && field.key === 'STATUS') {
      configured.options = ['Belum Dimulai','Proses','Selesai'];
      if (data.STATUS && !configured.options.includes(data.STATUS)) configured.options.push(data.STATUS);
    }
    return renderField(configured, data[field.key] ?? '', data);
  };
  return `${entity === 'agenda' && (state.data.programs || []).length ? `<label class="form-hint-v87">Pakai anggaran program (boleh kosong)<select id="agendaProgramV87"><option value="">Isi sendiri</option>${state.data.programs.map(row=>`<option value="${esc(row.ID_PROGRAM)}">${esc(row.NAMA_PROGRAM)}</option>`).join('')}</select></label>` : ''}<div class="form-grid">${visible.filter(field=>!extra(field)).map(render).join('')}</div>${visible.some(extra) ? `<details class="simple-extra-v87"><summary>Rincian tambahan (boleh dikosongkan)</summary><div class="form-grid">${visible.filter(extra).map(render).join('')}</div></details>` : ''}${entity==='program' ? '<p class="form-hint-v87">Setelah program disimpan, bendahara dapat mengisi anggaran lewat tombol Atur anggaran pada program.</p>' : ''}${entity==='agenda' ? '<p class="form-hint-v87">Isi keputusan sekali di sini. Jika ada penanggung jawab atau batas waktu, tugasnya akan dibuat otomatis.</p>' : ''}`;
}
function bindSimpleFormV87(entity, data) {
  const form = document.getElementById('dynamicForm');
  const programSelect = document.getElementById('agendaProgramV87');
  if (programSelect) programSelect.onchange = () => {
    const program = (state.data.programs || []).find(row => String(row.ID_PROGRAM) === programSelect.value);
    if (!program) return;
    ['ANGGARAN','SUMBER_DANA','DEPARTEMEN'].forEach(key => {
      const field=form.elements.namedItem(key); if (!field) return;
      if (field.tagName==='SELECT' && ![...field.options].some(option=>option.value===String(program[key] || ''))) field.add(new Option(program[key] || '',program[key] || ''));
      field.value=program[key] || (key==='ANGGARAN' ? 0 : '');
    });
    const extra=form.querySelector('details');if(extra)extra.open=true;form.dispatchEvent(new Event('input'));
  };
  const link = form.elements.namedItem('ID_RAPBJ');
  if (link && ['program','keuangan'].includes(entity)) link.addEventListener('change', () => {
    const budget = (state.data.rapbj || []).find(row=>String(row.ID_RAPBJ)===link.value);
    if (!budget) return;
    const keys = entity === 'program' ? ['DEPARTEMEN','SUMBER_DANA','ANGGARAN'] : ['DEPARTEMEN','SUMBER_DANA','KATEGORI'];
    keys.forEach(key=>{const input=form.elements.namedItem(key);if(input && budget[key] !== undefined){if(input.tagName==='SELECT' && ![...input.options].some(o=>o.value===String(budget[key])))input.add(new Option(budget[key],budget[key]));input.value=budget[key];}});form.dispatchEvent(new Event('input'));
  });
  // Optional details can contain a required field from an older draft.
  form.addEventListener('invalid', event => { const details = event.target.closest('details'); if(details) details.open=true; }, true);
}
function meetingOriginV87(item) {
  const parent = (state.data.notulen || []).find(row=>String(row.ID_NOTULEN)===String(item.ID_NOTULEN));
  return parent && hasPageAccessV84('rapat') ? `<button class="origin-link-v87" onclick="detailNotulen('${escJs(parent.ID_NOTULEN)}')">Dari rapat: ${esc(parent.JUDUL)}</button>` : '';
}
function publicationControlV87(entity,row) {
  if(!canPublishV86())return '';
  const config=publicationCollectionsV86()[entity],published=row.PUBLIKASI==='Publik';
  return `<span class="publication-state-v88 ${published?'public':''}">${published?'Tampil ke jemaat':'Internal'}</span><button type="button" class="mini-button publication-local-v87" data-publish-entity="${entity}" data-publish-id="${esc(row[config.id])}" onclick="previewPublicationV88(this)">${published?'Lihat / sembunyikan':'Lihat tampilan jemaat'}</button>`;
}

function toggleRecordPublicationV87(button) {
  const entity=button.dataset.publishEntity, config=publicationCollectionsV86()[entity];
  const row=config.rows.find(item=>String(item[config.id])===button.dataset.publishId);
  if (!row) return;
  button.disabled=true;
  google.script.run.withSuccessHandler(result=>{
    row.PUBLIKASI=result.publication;
    renderNotulen(); renderDecisions(); renderPrograms(); renderDocuments(); applyOfficerControlsV86();
    if(document.getElementById('detailModal').classList.contains('show') && state.detail && entity==='notulen' && String(state.detail.ID_NOTULEN)===String(row.ID_NOTULEN)){Object.assign(state.detail,row);renderNotulenDetail(state.detail);}
    if(button.isConnected && button.id==='confirmPublicationV88')closeActionModal();
    toast(result.publication==='Publik'?'Sudah tampil untuk jemaat.':'Hanya terlihat oleh pengurus.');
  }).withFailureHandler(error=>{button.disabled=false;notifyErrorV88(error);}).setPublicPublicationV86(state.authV84.token,entity,row[config.id],row.PUBLIKASI!=='Publik');
}
function changeTaskStatusV87(id,select) {
  const previous=select.dataset.previous, requested=select.value, account=state.authV84.token, year=state.year;
  select.disabled=true;
  google.script.run.withSuccessHandler(result=>{
    if(account!==state.authV84.token || year!==state.year)return;
    const row=(state.data.tindakLanjut || []).find(row=>String(row.ID_TINDAK_LANJUT)===String(id));
    if(row && result.task)Object.assign(row,result.task);
    else {loadData();return;}
    renderTasks();renderSimpleDashboardV87();refreshNotificationBadgeV8();
    if(state.detail && document.getElementById('detailModal').classList.contains('show'))renderNotulenDetail(state.detail);
    toast('Status tugas sudah tersimpan.');
  }).withFailureHandler(error=>{
    select.disabled=false;select.value=previous;
    notifyErrorV88(error,()=>{
      if(account!==state.authV84.token || year!==state.year)return;
      const current=[...document.querySelectorAll('.task-status-v87')].find(el=>el.getAttribute('onchange')?.includes("'"+id+"'"));
      if(current && !current.disabled){current.value=requested;changeTaskStatusV87(id,current);}
    });
  }).updateTaskStatusV87(account,id,requested);
}

function openProgramBudgetV87(id) {
  const program=(state.data.programs || []).find(row=>String(row.ID_PROGRAM)===String(id));
  if(!program || !canWriteEntityV84('rapbj'))return;
  const budget=(state.data.rapbj || []).find(row=>String(row.ID_RAPBJ)===String(program.ID_RAPBJ));
  openActionModal('Anggaran: '+program.NAMA_PROGRAM,`<p>Isi anggaran untuk program ini.</p><form id="programBudgetFormV87"><div class="form-grid">${renderField({key:'ANGGARAN',label:'Jumlah anggaran',type:'number',required:true},budget?budget.ANGGARAN:program.ANGGARAN || 0,{})}${renderField({key:'SUMBER_DANA',label:'Sumber dana',type:'source',required:true},budget?budget.SUMBER_DANA:program.SUMBER_DANA || 'Kas Jemaat',{})}${renderField({key:'CATATAN',label:'Catatan (boleh kosong)',type:'textarea',full:true},budget?budget.CATATAN:'',{})}</div><button type="submit">Simpan anggaran</button></form>`,'');
  const form=document.getElementById('programBudgetFormV87');bindFormFeedbackV88(form);
  form.onsubmit=event=>{
    event.preventDefault();if(form.dataset.saving==='true' || !form.reportValidity())return;
    const button=form.querySelector('button[type=submit]'),account=state.authV84.token,year=state.year;
    form.dataset.saving='true';button.disabled=true;button.textContent='Menyimpan…';
    google.script.run.withSuccessHandler(result=>{
      if(account!==state.authV84.token || year!==state.year)return;
      if(result.program && result.budget){
        Object.assign(program,result.program);
        const existing=state.data.rapbj.find(row=>String(row.ID_RAPBJ)===String(result.budget.ID_RAPBJ));
        if(existing)Object.assign(existing,result.budget);else state.data.rapbj.push(result.budget);
        const summary=state.data.summary;summary.rapbjPlan=state.data.rapbj.reduce((total,row)=>total+Number(row.ANGGARAN || 0),0);summary.rapbjRemaining=summary.rapbjPlan-Number(summary.rapbjRealized || 0);
        renderPrograms();renderRapbj();renderSimpleDashboardV87();
      } else loadData();
      if(form.isConnected)closeActionModal();toast('Anggaran sudah tersimpan.');
    }).withFailureHandler(error=>{
      form.dataset.saving='false';button.disabled=false;button.textContent='Simpan anggaran';
      notifyErrorV88(error,()=>{if(form.isConnected && account===state.authV84.token && year===state.year)form.requestSubmit();});
    }).saveProgramBudgetV87(account,id,Object.fromEntries(new FormData(form)));
  };
}

function openWorkspaceSettingsV87() {
  closeDynamicIsland();
  const p=state.authV84.user && state.authV84.user.permissions || {};
  openActionModal('Pengaturan',`<div class="settings-links-v87">${['akses','arsip','aktivitas'].filter(hasPageAccessV84).map(page=>`<button onclick="closeActionModal();openPage('${page}')">${SIMPLE_PAGE_LABELS_V87[page]}</button>`).join('')}${p.settings ? '<button onclick="closeActionModal();openSettingsCenterV8()">Pengaturan gereja</button><button onclick="createOfficerBackupV86(this)">Buat salinan data</button><button onclick="closeActionModal();openSystemHealthV7()">Periksa aplikasi</button>' : ''}</div><p id="governanceBackupResultV86" role="status"></p>`,'');
}
function simpleRoleLabelV87(role) { return ({ADMIN:'Administrator',SUPERADMIN:'Administrator utama',SEKRETARIS:'Sekretariat',KEUANGAN:'Bendahara',MAJELIS:'Anggota majelis',KETUA_JEMAAT:'Ketua jemaat',PENDETA:'Pendeta',PENGURUS:'Pengurus',VIEWER:'Pembaca'})[role] || role; }
function openMeetingProposalsV87(id) {
  const rows=(state.data.usulan || []).filter(row=>!['Diterima','Ditolak'].includes(row.STATUS));
  openActionModal('Pilih usulan untuk rapat',`<div>${rows.map(row=>`<article class="simple-panel-v87"><strong>${esc(row.JUDUL_USULAN)}</strong><p>${esc(row.LATAR_BELAKANG || '')}</p><button data-proposal-id="${esc(row.ID_USULAN)}">Masukkan ke rapat</button></article>`).join('') || '<p>Belum ada usulan baru.</p>'}</div>`,'');
  document.querySelectorAll('[data-proposal-id]').forEach(button=>button.onclick=()=>{button.disabled=true;google.script.run.withSuccessHandler(()=>{closeActionModal();loadData(()=>detailNotulen(id));toast('Usulan masuk ke rapat.');}).withFailureHandler(error=>{button.disabled=false;notifyErrorV88(error);}).approveAgendaProposal(button.dataset.proposalId,id,state.authV84.token);});
}
function setMeetingTabV87(tab) { state.meetingTabV87=tab; if(state.detail && document.getElementById('detailModal').classList.contains('show'))renderNotulenDetail(state.detail); }
function canApproveMeetingV87() {
  const p=state.authV84.user && state.authV84.user.permissions || {};
  return p.approveMeeting === undefined ? !!p.meeting : !!p.approveMeeting;
}
/* Tindakan yang dipakai sehari-hari. */
function priorityTasksV88(rows) {
  return rows.filter(row=>!['Selesai','Dibatalkan'].includes(row.STATUS)).slice().sort((a,b)=>{
    const da=taskDateV88(a),db=taskDateV88(b);
    return (da || '9999').localeCompare(db || '9999') || String(a.URAIAN || '').localeCompare(String(b.URAIAN || ''),'id');
  });
}
function taskDateV88(row) {
  const value=String(row.TARGET_SELESAI || '').slice(0,10);
  return /^\d{4}-\d{2}-\d{2}$/.test(value)?value:'';
}
function taskDueV88(row) {
  const date=taskDateV88(row),today=localIsoDate(new Date()),week=new Date();week.setDate(week.getDate()+7);
  if(!date)return {label:'Belum ada batas waktu',late:false};
  if(date<today)return {label:'Terlambat · '+dateLabel(date),late:true};
  if(date===today)return {label:'Selesaikan hari ini',late:false};
  if(date<=localIsoDate(week))return {label:'7 hari ke depan · '+dateLabel(date),late:false};
  return {label:'Batas waktu: '+dateLabel(date),late:false};
}
function notifyErrorV88(error,retry) {toast(errorMessage(error),{kind:'error',retry});}
function meetingActionsV88(detail) {
  const id=escJs(detail.ID_NOTULEN),locked=String(detail.LOCKED).toLowerCase()==='true',waiting=detail.STATUS==='Menunggu Persetujuan',approved=['Disetujui','Final'].includes(detail.STATUS);
  const editor=canWriteEntityV84('notulen'),writer=canWriteEntityV84('agenda') && !locked;
  let primary='',hint='';
  const other=[`<button type="button" onclick="downloadPdf('notulen','${id}')">Unduh catatan PDF</button>`];
  if(waiting){hint='Hasil rapat sudah dikirim untuk diperiksa.';if(canApproveMeetingV87()){primary=`<button class="meeting-primary-v88" onclick="openReviewAction('${id}','approve')">Setujui hasil rapat</button>`;other.push(`<button onclick="openReviewAction('${id}','revise')">Minta perbaikan</button>`);}}
  else if(approved || locked){hint='Hasil rapat sudah disetujui. Lanjutkan tugas yang perlu dikerjakan.';primary='<button class="meeting-primary-v88" onclick="setMeetingTabV87(\'tugas\')">Lihat tugas rapat</button>';if(canApproveMeetingV87())other.push(`<button onclick="openReviewAction('${id}','unlock')">Buka untuk diperbaiki</button>`);}
  else if(writer && !(detail.AGENDA || []).length){hint='Mulai dengan menambahkan pembahasan rapat.';primary=`<button class="meeting-primary-v88" onclick="addAgenda('${id}')">Tambah pembahasan</button>`;}
  else if(editor){hint=detail.STATUS==='Perlu Revisi'?'Perbaiki catatan, lalu kirim untuk diperiksa lagi.':'Periksa catatan dan daftar hadir sebelum meminta persetujuan.';primary=`<button class="meeting-primary-v88" onclick="reviewMeeting('${id}','submit')">Minta persetujuan</button>`;}
  else {hint='Buka bagian di bawah untuk melihat hasil rapat.';}
  if(!locked && editor)other.push(`<button onclick="editEntity('notulen','${id}')">Ubah jadwal rapat</button>`);
  const publication=publicationControlV87('notulen',detail);if(publication)other.push(publication);
  return `<p class="meeting-hint-v88">${hint}</p><div class="meeting-cover-actions">${primary}<details class="more-actions-v88"><summary>Pilihan lainnya</summary><div>${other.join('')}</div></details></div>`;
}
function previewPublicationV88(button) {
  const entity=button.dataset.publishEntity,config=publicationCollectionsV86()[entity];
  const row=config?.rows.find(item=>String(item[config.id])===button.dataset.publishId);if(!row)return;
  const published=row.PUBLIKASI==='Publik',reason=publicationReasonV86(entity,row);
  // Only show fields the public viewer sends; notes, contacts and finances stay private.
  const fields={notulen:[['Judul',row.JUDUL],['Tanggal',row.TANGGAL?dateLabel(row.TANGGAL):'' ],['Jenis rapat',row.JENIS_RAPAT],['Tempat',row.TEMPAT]],keputusan:[['Nomor',row.NO_KEPUTUSAN],['Keputusan',row.KEPUTUSAN],['Departemen',row.DEPARTEMEN],['Batas waktu',row.TARGET_SELESAI?dateLabel(row.TARGET_SELESAI):'' ],['Status',simpleLabelV87(row.STATUS)]],program:[['Program',row.NAMA_PROGRAM],['Departemen',row.DEPARTEMEN],['Mulai',row.TANGGAL_MULAI?dateLabel(row.TANGGAL_MULAI):'' ],['Selesai',row.TANGGAL_SELESAI?dateLabel(row.TANGGAL_SELESAI):'' ],['Status',simpleLabelV87(row.STATUS)]],dokumen:[['Judul',row.JUDUL],['Tanggal',row.TANGGAL?dateLabel(row.TANGGAL):'' ],['Jenis',row.KATEGORI],['Nomor',row.NOMOR_DOKUMEN]]}[entity];
  const url=entity==='dokumen' && /^https:\/\/[^\s<>"']+$/i.test(String(row.FILE_URL || ''))?row.FILE_URL:'';
  openActionModal('Tampilan untuk jemaat',`<span class="publication-state-v88 ${published?'public':''}">${published?'Tampil ke jemaat':'Internal · hanya untuk pengurus'}</span><p>Jemaat akan melihat informasi berikut.</p><article class="publication-preview-v88">${fields.filter(([,value])=>value).map(([label,value])=>`<p><small>${label}</small><br><strong>${esc(value)}</strong></p>`).join('')}${url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Buka dokumen</a>`:''}</article>${reason && !published?`<p role="status">${esc(reason)}</p>`:''}<button id="confirmPublicationV88" data-publish-entity="${entity}" data-publish-id="${esc(row[config.id])}" ${reason && !published?'disabled':''}>${published?'Sembunyikan dari jemaat':'Tampilkan ke jemaat'}</button>`,'');
  const confirmButton=document.getElementById('confirmPublicationV88');confirmButton.onclick=()=>toggleRecordPublicationV87(confirmButton);
}
function draftKeyV88(entity,ref) {return ['MGV88:DRAFT',state.authV84.user?.id || state.authV84.user?.username || 'unknown',state.year,entity,ref].map(encodeURIComponent).join(':');}
function setDraftStatusV88(form,text) {
  if(!form || !state.editing)return;
  const banner=form.querySelector('#draftBannerV7');if(!banner)return;
  let status=banner.querySelector('#draftStatusV7');if(!status){status=document.createElement('span');status.id='draftStatusV7';banner.appendChild(status);}
  status.setAttribute('role','status');status.textContent=text+(form.querySelector('input[type=file]')?' Foto dan file perlu dipilih lagi jika formulir ditutup.':'');
}
function saveLocalDraftV88(form) {
  if(!state.editing || form.dataset.dirty!=='true')return null;
  const payload={entity:form.dataset.draftEntity,referenceId:form.dataset.draftRef,year:state.year,data:Object.fromEntries([...new FormData(form)].filter(([,value])=>typeof value==='string')),savedAt:Date.now()};
  try{localStorage.setItem(draftKeyV88(payload.entity,payload.referenceId),JSON.stringify(payload));setDraftStatusV88(form,'Isian tersimpan di perangkat ini. Tekan Simpan jika sudah selesai.');return payload;}
  catch(_){setDraftStatusV88(form,'Isian belum bisa disimpan sementara. Jangan tutup formulir sebelum menekan Simpan.');return null;}
}
function bindFormFeedbackV88(form) {
  form.querySelectorAll('.field').forEach((field,index)=>{
    const input=field.querySelector('input,select,textarea'),label=field.querySelector('label');if(!input)return;
    if(!input.id)input.id=form.id+'-field-'+index;
    if(label)label.htmlFor=input.id;
    const error=document.createElement('p');error.className='field-error-v88';error.id=input.id+'-error';error.hidden=true;field.appendChild(error);input.setAttribute('aria-describedby',error.id);
    input.addEventListener('invalid',()=>{
      const details=input.closest('details');if(details)details.open=true;
      input.setAttribute('aria-invalid','true');error.hidden=false;
      error.textContent=input.validity.valueMissing?'Bagian ini perlu diisi.':input.validity.typeMismatch?'Periksa format isian ini.':input.validity.rangeUnderflow?'Angkanya terlalu kecil.':input.validity.rangeOverflow?'Angkanya terlalu besar.':'Periksa kembali isian ini.';
    });
    input.addEventListener('input',()=>{input.removeAttribute('aria-invalid');error.hidden=true;});
    input.addEventListener('change',()=>{if(input.checkValidity()){input.removeAttribute('aria-invalid');error.hidden=true;}});
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  const password=document.getElementById('loginPinV84');
  const toggle=document.getElementById('togglePasswordV89');
  const caps=document.getElementById('capsLockV89');
  if(password&&toggle){
    toggle.addEventListener('click',()=>{
      const reveal=password.type==='password';password.type=reveal?'text':'password';
      toggle.textContent=reveal?'Sembunyikan':'Lihat';toggle.setAttribute('aria-pressed',String(reveal));
      toggle.setAttribute('aria-label',reveal?'Sembunyikan kata sandi':'Tampilkan kata sandi');password.focus();
    });
    ['keydown','keyup'].forEach(type=>password.addEventListener(type,event=>{if(caps)caps.hidden=!event.getModifierState('CapsLock');}));
    password.addEventListener('blur',()=>{if(caps)caps.hidden=true;});
  }
  const note=document.createElement('div');note.id='connectionNoteV88';note.setAttribute('role','status');note.hidden=true;document.body.prepend(note);
  const connection=()=>{note.hidden=navigator.onLine;note.textContent='Internet terputus. Isian formulir disimpan sementara di perangkat ini jika penyimpanan tersedia.';};
  window.addEventListener('offline',connection);window.addEventListener('online',connection);connection();
  window.addEventListener('beforeunload',event=>{
    const form=document.getElementById('dynamicForm');
    if(state.savingEntityV83 || (state.editing && form?.dataset.dirty==='true')){saveLocalDraftV88(form);event.preventDefault();event.returnValue='';}
  });
});

document.addEventListener('DOMContentLoaded',()=>{
  Object.assign(window.MG_PAGE_TITLES,SIMPLE_PAGE_LABELS_V87);
  const target=document.createElement('div');target.id='simpleDashboardV87';document.getElementById('dashboard').insertBefore(target,document.querySelector('#dashboard > .page-signature'));
  document.querySelectorAll('.scene-rail h2').forEach(el=>{const page=el.closest('.page');if(page && SIMPLE_PAGE_LABELS_V87[page.id])el.textContent=SIMPLE_PAGE_LABELS_V87[page.id];});
  renderSimpleNavigationV87();renderSimpleDashboardV87();
});
