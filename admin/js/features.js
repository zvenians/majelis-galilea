/* =========================================================
   MAJELIS GALILEA V7 — FRONTEND FEATURE SUITE
========================================================= */

/* ---------- 1. GLOBAL SEARCH ---------- */

function openGlobalSearchV7() {
  closeDynamicIsland();
  closeQuickActionsV7();

  document
    .getElementById(
      'globalSearchV7'
    )
    .classList.add(
      'show'
    );

  const input =
    document.getElementById(
      'globalSearchInputV7'
    );

  setTimeout(
    () =>
      input.focus(),
    60
  );
}


function closeGlobalSearchV7() {
  document
    .getElementById(
      'globalSearchV7'
    )
    .classList.remove(
      'show'
    );
}


function runGlobalSearchV7(
  query
) {
  const target =
    document.getElementById(
      'globalSearchResultsV7'
    );

  query =
    String(
      query ||
      ''
    )
    .trim();

  if (
    query.length <
    2
  ) {
    target.innerHTML = `
      <div class="search-empty-v7">
        <i></i>
        <strong>Cari rapat, tugas, anggota, atau dokumen</strong>
        <span>Ketik setidaknya 2 huruf</span>
      </div>
    `;

    return;
  }

  target.innerHTML = `
    <div class="search-loading-v7">
      mencari “${esc(query)}”...
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      rows => {
        target.innerHTML =
          rows.length
            ? rows
                .map(
                  item => `
                    <button
                      class="search-result-v7"
                      onclick="openSearchResultV7(
                        '${escJs(item.page)}',
                        '${escJs(item.type)}',
                        '${escJs(item.id)}'
                      )">

                      <span class="search-type-v7">
                        ${esc(item.type)}
                      </span>

                      <strong>
                        ${esc(item.title)}
                      </strong>

                      <small>
                        ${esc(item.meta || '')}
                      </small>

                      <b>↗</b>

                    </button>
                  `
                )
                .join('')
            : `
              <div class="search-empty-v7">
                <i></i>
                <strong>Tidak ditemukan.</strong>
                <span>Coba kata lain atau pilih tahun lain.</span>
              </div>
            `;
      }
    )

    .withFailureHandler(
      error => {
        target.innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .globalSearchV7(
      query,
      state.year,
      40,
      state.authV84.token
    );
}


function openSearchResultV7(
  page,
  type,
  id
) {
  closeGlobalSearchV7();

  openPage(
    page
  );

  if (
    type ===
    'notulen'
  ) {
    detailNotulen(
      id
    );
    return;
  }

  if (
    type ===
    'dokumen'
  ) {
    previewDocumentV7(
      id
    );
    return;
  }

  if (
    [
      'pengurus',
      'jemaat'
    ].includes(
      type
    )
  ) {
    openPersonViewerV7(
      type,
      id
    );
    return;
  }

  if (
    [
      'agenda',
      'keputusan',
      'tindak_lanjut',
      'rapbj'
    ].includes(
      type
    )
  ) {
    openRelationshipV7(
      type,
      id
    );

    return;
  }

  if (
    [
      'usulan',
      'program',
      'keuangan',
      'inventaris'
    ].includes(
      type
    )
  ) {
    editEntity(
      type,
      id
    );
  }
}


/* ---------- 2. QUICK ACTION ---------- */

function openQuickActionsV7() {
  closeDynamicIsland();

  const label =
    document.getElementById(
      'quickCurrentPageLabelV7'
    );

  if (label) {
    label.textContent =
      (
        window.MG_PAGE_TITLES[
          state.page
        ] ||
        state.page
      );
  }

  document
    .getElementById(
      'quickActionsV7'
    )
    .classList.add(
      'show'
    );
}


function closeQuickActionsV7() {
  document
    .getElementById(
      'quickActionsV7'
    )
    .classList.remove(
      'show'
    );
}


function quickCreateV7(
  entity
) {
  closeQuickActionsV7();

  openForm(
    entity,
    defaultEntityData(
      entity
    )
  );
}


function quickCreateCurrentPageV7() {
  createForCurrentPageV83();
}


/* ---------- 3 + 8. INTELLIGENCE ---------- */

function loadDashboardIntelligenceV7() {
  const target =
    document.getElementById(
      'intelligenceListV7'
    );

  if (!target) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      data => {
        const messages =
          data.messages ||
          [];

        target.innerHTML =
          messages.length
            ? messages
                .map(
                  (
                    item,
                    index
                  ) => `
                    <button
                      class="intel-row-v7 ${esc(item.severity || '')}"
                      onclick="openPage('${escJs(item.page || 'dashboard')}')">

                      <span>
                        ${String(index + 1).padStart(2,'0')}
                      </span>

                      <strong>
                        ${esc(item.title)}
                      </strong>

                      <b>
                        ${Number(item.count || 0)}
                      </b>

                    </button>
                  `
                )
                .join('')
            : `
              <div class="intel-clear-v7">
                <i></i>
                <strong>Tidak ada isu prioritas.</strong>
                <span>Semua indikator utama berada dalam kondisi normal.</span>
              </div>
            `;
      }
    )

    .withFailureHandler(
      () => {
        target.innerHTML = `
          <div class="intel-clear-v7">
            Ringkasan belum tersedia.
          </div>
        `;
      }
    )

    .getDashboardIntelligenceV7(
      state.year
    );
}



function openFundHistoryV7(
  source
) {
  const rows =
    state.data.keuangan
      .filter(
        item =>
          item.SUMBER_DANA ===
          source
      )
      .slice(
        0,
        40
      );

  const totalIn =
    rows
      .filter(
        item =>
          item.JENIS ===
          'Pemasukan'
      )
      .reduce(
        (
          sum,
          item
        ) =>
          sum +
          Number(
            item.NOMINAL ||
            0
          ),
        0
      );

  const totalOut =
    rows
      .filter(
        item =>
          item.JENIS ===
          'Pengeluaran'
      )
      .reduce(
        (
          sum,
          item
        ) =>
          sum +
          Number(
            item.NOMINAL ||
            0
          ),
        0
      );

  openActionModal(
    source,
    `
      <div class="fund-history-summary-v7">

        <div>
          <small>Masuk</small>
          <strong>${money(totalIn)}</strong>
        </div>

        <div>
          <small>Keluar</small>
          <strong>${money(totalOut)}</strong>
        </div>

        <div>
          <small>Selisih Tahun Ini</small>
          <strong>${money(totalIn - totalOut)}</strong>
        </div>

      </div>

      <div class="record-list">

        ${
          rows.length
            ? rows
                .map(
                  item => `
                    <div class="record-row">

                      <div class="record-main">

                        <strong>
                          ${esc(item.DESKRIPSI || item.KATEGORI || 'Transaksi')}
                        </strong>

                        <span>
                          ${dateLabel(item.TANGGAL)}
                          · ${esc(item.JENIS)}
                        </span>

                      </div>

                      <strong>
                        ${item.JENIS === 'Pengeluaran' ? '−' : '+'}
                        ${money(item.NOMINAL)}
                      </strong>

                    </div>
                  `
                )
                .join('')
            : emptyState(
                'Belum ada transaksi.'
              )
        }

      </div>
    `
  );
}


/* ---------- 4 + 5. RELATIONSHIP & TIMELINE ---------- */

function openRelationshipV7(
  entity,
  id
) {
  const modal =
    document.getElementById(
      'relationshipModalV7'
    );

  modal.classList.add(
    'show'
  );

  setText(
    'relationTitleV7',
    'Memuat relasi...'
  );

  document.getElementById(
    'relationGraphV7'
  ).innerHTML = `
    <div class="relation-loading-v7">
      menghubungkan data...
    </div>
  `;

  document.getElementById(
    'relationTimelineV7'
  ).innerHTML = '';

  switchRelationTabV7(
    'graph'
  );

  google.script.run

    .withSuccessHandler(
      data => {
        renderRelationshipV7(
          data
        );
      }
    )

    .withFailureHandler(
      error => {
        document.getElementById(
          'relationGraphV7'
        ).innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getRelationshipGraphV7(
      entity,
      id
    );
}


function renderRelationshipV7(
  data
) {
  setText(
    'relationTitleV7',
    'Jejak ' +
    String(
      data.entity ||
      'data'
    )
    .replaceAll(
      '_',
      ' '
    )
  );

  const typeOrder = [
    'notulen',
    'agenda',
    'keputusan',
    'tindak_lanjut',
    'program',
    'rapbj',
    'keuangan'
  ];

  const groups = {};

  (
    data.nodes ||
    []
  )
  .forEach(
    node => {
      if (
        !groups[
          node.type
        ]
      ) {
        groups[
          node.type
        ] = [];
      }

      groups[
        node.type
      ].push(
        node
      );
    }
  );

  const ordered =
    Object.keys(
      groups
    )
    .sort(
      (
        a,
        b
      ) =>
        (
          typeOrder.indexOf(
            a
          ) ===
          -1
            ? 99
            : typeOrder.indexOf(
                a
              )
        ) -
        (
          typeOrder.indexOf(
            b
          ) ===
          -1
            ? 99
            : typeOrder.indexOf(
                b
              )
        )
    );

  document.getElementById(
    'relationGraphV7'
  ).innerHTML =
    ordered.length
      ? ordered
          .map(
            (
              type,
              groupIndex
            ) => `
              <section class="relation-stage-v7">

                <header>
                  <span>
                    ${String(groupIndex + 1).padStart(2,'0')}
                  </span>
                  <strong>
                    ${esc(type.replaceAll('_',' '))}
                  </strong>
                </header>

                <div>

                  ${
                    groups[type]
                      .map(
                        node => `
                          <article class="relation-node-v7">

                            <small>
                              ${esc(node.status || type)}
                            </small>

                            <strong>
                              ${esc(node.title)}
                            </strong>

                            <span>
                              ${esc(node.meta || '')}
                            </span>

                          </article>
                        `
                      )
                      .join('')
                  }

                </div>

              </section>
            `
          )
          .join('')
      : emptyState(
          'Belum ada relasi untuk data ini.'
        );

  const timeline =
    data.timeline ||
    [];

  document.getElementById(
    'relationTimelineV7'
  ).innerHTML =
    timeline.length
      ? timeline
          .map(
            item => `
              <article class="timeline-event-v7">

                <time>
                  ${dateTimeLabel(item.timestamp)}
                </time>

                <i></i>

                <div>
                  <small>
                    ${esc(item.action || 'UPDATE')}
                  </small>
                  <strong>
                    ${esc(item.description || '')}
                  </strong>
                  ${
                    item.user
                      ? `<span>${esc(item.user)}</span>`
                      : ''
                  }
                </div>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Belum ada timeline.'
        );
}


function switchRelationTabV7(
  tab
) {
  document
    .querySelectorAll(
      '[data-relation-tab]'
    )
    .forEach(
      button => {
        button.classList.toggle(
          'active',
          button.dataset.relationTab ===
          tab
        );
      }
    );

  document
    .getElementById(
      'relationGraphV7'
    )
    .classList.toggle(
      'hidden',
      tab !==
      'graph'
    );

  document
    .getElementById(
      'relationTimelineV7'
    )
    .classList.toggle(
      'hidden',
      tab !==
      'timeline'
    );
}


function closeRelationshipV7() {
  document
    .getElementById(
      'relationshipModalV7'
    )
    .classList.remove(
      'show'
    );
}


/* ---------- 6. AUTOSAVE ---------- */

function draftReferenceV7(
  entity,
  data
) {
  const id =
    getEntityId(
      entity,
      data ||
      {}
    );

  return (
    id ||
    (
      'NEW-' +
      entity +
      '-' +
      state.year
    )
  );
}


const draftQueueV88=new Map();
function queueDraftV88(key,account,operation) {
  const next=(draftQueueV88.get(key) || Promise.resolve()).then(()=>account===state.authV84.token?operation():undefined).catch(()=>{});
  draftQueueV88.set(key,next);
  next.then(()=>{if(draftQueueV88.get(key)===next)draftQueueV88.delete(key);});
  return next;
}
function attachAutosaveV7(entity,data) {
  const form=document.getElementById('dynamicForm'),ref=draftReferenceV7(entity,data),account=state.authV84.token,year=state.year;
  const session={};form.draftSessionV88=session;
  form.dataset.draftEntity=entity;form.dataset.draftRef=ref;form.dataset.dirty='false';form.dataset.revision='0';
  const key=draftKeyV88(entity,ref);
  try{const local=JSON.parse(localStorage.getItem(key) || 'null');if(local?.data)showDraftRestoreBannerV7(local.data);}catch(_){}
  queueDraftV88(key,account,()=>new Promise(resolve=>{
    google.script.run.withSuccessHandler(draft=>{
      if(form.draftSessionV88===session && state.editing && year===state.year && account===state.authV84.token && form.dataset.dirty!=='true' && !state.pendingDraftDataV7 && draft?.data)showDraftRestoreBannerV7(draft.data);
      resolve();
    }).withFailureHandler(()=>resolve()).getDraftV7(entity,key,year);
  }));
  form.oninput=()=>{
    clearTimeout(state.draftTimer);form.dataset.dirty='true';form.dataset.revision=String(Number(form.dataset.revision)+1);
    saveLocalDraftV88(form);
    state.draftTimer=setTimeout(()=>saveAutosaveV7(),800);
  };
}

function currentFormDraftDataV7() {
  const form =
    document.getElementById(
      'dynamicForm'
    );

  if (!form) {
    return {};
  }

  return Object.fromEntries(
    new FormData(
      form
    )
    .entries()
  );
}


function saveAutosaveV7() {
  const form=document.getElementById('dynamicForm');
  if(!form || !state.editing || form.dataset.dirty!=='true' || state.savingEntityV83)return;
  const payload=saveLocalDraftV88(form),revision=form.dataset.revision,account=state.authV84.token,session=form.draftSessionV88;
  if(!payload)return;
  const key=draftKeyV88(payload.entity,payload.referenceId);payload.referenceId=key;
  queueDraftV88(key,account,()=>new Promise(resolve=>{
    const finish=text=>{if(account===state.authV84.token && state.editing && form.draftSessionV88===session && form.dataset.revision===revision)setDraftStatusV88(form,text);resolve();};
    google.script.run.withSuccessHandler(()=>finish('Isian tersimpan sementara. Tekan Simpan jika sudah selesai.')).withFailureHandler(()=>finish('Isian tersimpan di perangkat ini. Belum tersimpan di sistem.')).saveDraftV7(payload);
  }));
}

function showDraftRestoreBannerV7(data) {
  const banner=document.getElementById('draftBannerV7');if(!banner)return;
  state.pendingDraftDataV7=data || {};
  banner.classList.add('has-draft');
  banner.innerHTML='<span id="draftStatusV7" role="status">Ada isian sebelumnya yang belum disimpan.</span><button type="button" onclick="restoreDraftFieldsV7(state.pendingDraftDataV7);document.getElementById(\'dynamicForm\').dispatchEvent(new Event(\'input\'))">Pakai isian sebelumnya</button>';
}

function restoreDraftFieldsV7(
  data
) {
  const form =
    document.getElementById(
      'dynamicForm'
    );

  Object.keys(
    data ||
    {}
  )
  .forEach(
    key => {
      const field =
        form.elements[
          key
        ];

      if (
        field && field.type !== 'file'
      ) {
        field.value =
          data[
            key
          ] ??
          '';
      }
    }
  );

  const banner =
    document.getElementById(
      'draftBannerV7'
    );

  if (banner) {
    banner.classList.remove(
      'has-draft'
    );

    banner.innerHTML = `
      <span class="draft-dot-v7"></span>
      <span id="draftStatusV7">Isian dikembalikan. Tekan Simpan jika sudah selesai.</span>
    `;
  }

  toast(
    'Isian sebelumnya sudah dikembalikan.'
  );
}


function clearAutosaveAfterSaveV7(entity,old,result) {
  clearTimeout(state.draftTimer);state.pendingDraftDataV7=null;
  document.getElementById('dynamicForm').dataset.dirty='false';
  const account=state.authV84.token,year=state.year;
  const refs=new Set([draftReferenceV7(entity,old || {}),result?.id].filter(Boolean));
  refs.forEach(ref=>{
    const key=draftKeyV88(entity,ref);try{localStorage.removeItem(key);}catch(_){}
    queueDraftV88(key,account,()=>new Promise(resolve=>google.script.run.withSuccessHandler(()=>resolve()).withFailureHandler(()=>resolve()).deleteDraftV7(entity,key,year)));
  });
}

/* ---------- 7. SMART CARRY FORWARD ---------- */

function openCarryForwardV7(
  notulenId
) {
  const modal =
    document.getElementById(
      'carryForwardModalV7'
    );

  modal.dataset.notulenId =
    notulenId;

  modal.classList.add(
    'show'
  );

  const body =
    document.getElementById(
      'carryForwardBodyV7'
    );

  body.innerHTML = `
    <div class="carry-loading-v7">
      Memeriksa tugas rapat sebelumnya...
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      data => {
        const items =
          data.items ||
          [];

        if (
          !items.length
        ) {
          body.innerHTML = `
            <div class="carry-clear-v7">
              <i></i>
              <strong>Tidak ada tugas yang perlu dilanjutkan.</strong>
              <span>Semua tugas rapat sebelumnya sudah selesai.</span>
            </div>
          `;

          return;
        }

        body.innerHTML = `

          ${
            data.previousMeeting
              ? `
                <p class="carry-source-v7">
                  Rapat sebelumnya:
                  <strong>${esc(data.previousMeeting.title)}</strong>
                  · ${dateLabel(data.previousMeeting.date)}
                </p>
              `
              : ''
          }

          <div class="carry-list-v7">

            ${
              items
                .map(
                  item => `
                    <label class="${item.fromPreviousMeeting ? 'priority' : ''}">

                      <input
                        type="checkbox"
                        value="${esc(item.id)}"
                        ${item.fromPreviousMeeting ? 'checked' : ''}>

                      <span>

                        <strong>
                          ${esc(item.title)}
                        </strong>

                        <small>
                          ${esc(item.pic || 'Penanggung jawab belum diisi')}
                          · ${Number(item.progress || 0)}%
                          ${item.target ? ' · ' + dateLabel(item.target) : ''}
                        </small>

                      </span>

                    </label>
                  `
                )
                .join('')
            }

          </div>

          <div class="form-actions">

            <button
              class="mini-button"
              onclick="closeCarryForwardV7()">
              Lewati
            </button>

            <button
              class="form-save"
              onclick="applyCarryForwardFromModalV7()">
              Masukkan ke Agenda
            </button>

          </div>
        `;
      }
    )

    .withFailureHandler(
      error => {
        body.innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getSmartCarryForwardV7(
      state.year,
      notulenId
    );
}


function applyCarryForwardFromModalV7() {
  const modal =
    document.getElementById(
      'carryForwardModalV7'
    );

  const ids =
    Array.from(
      modal.querySelectorAll(
        'input[type="checkbox"]:checked'
      )
    )
    .map(
      input =>
        input.value
    );

  if (
    !ids.length
  ) {
    closeCarryForwardV7();
    return;
  }

  google.script.run

    .withSuccessHandler(
      result => {
        closeCarryForwardV7();

        toast(
          result.created.length +
          ' tugas dimasukkan ke pembahasan rapat.'
        );

        loadData(() => detailNotulen(modal.dataset.notulenId));
      }
    )

    .withFailureHandler(
      error => {
        notifyErrorV88(error);
      }
    )

    .applyCarryForwardV7(
      modal.dataset.notulenId,
      ids
    );
}


function closeCarryForwardV7() {
  document
    .getElementById(
      'carryForwardModalV7'
    )
    .classList.remove(
      'show'
    );
}


/* ---------- 9. PHOTO CROP + VIEWER ---------- */

function openPhotoCropV7(
  file
) {
  state.croppedPhotoPayload =
    null;

  if (
    file.size >
    5 *
    1024 *
    1024
  ) {
    toast(
      'Foto maksimal 5 MB.'
    );
    return;
  }

  const reader =
    new FileReader();

  reader.onload =
    () => {
      const image =
        new Image();

      image.onload =
        () => {
          state.photoCrop = {
            image,
            zoom:
              1,
            fileName:
              file.name
          };

          document
            .getElementById(
              'photoCropZoomV7'
            )
            .value =
              1;

          drawPhotoCropV7();

          document
            .getElementById(
              'photoCropModalV7'
            )
            .classList.add(
              'show'
            );
        };

      image.src =
        reader.result;
    };

  reader.readAsDataURL(
    file
  );
}


function drawPhotoCropV7() {
  if (
    !state.photoCrop
  ) {
    return;
  }

  const canvas =
    document.getElementById(
      'photoCropCanvasV7'
    );

  const ctx =
    canvas.getContext(
      '2d'
    );

  const image =
    state.photoCrop.image;

  const zoom =
    Number(
      document
        .getElementById(
          'photoCropZoomV7'
        )
        .value ||
      1
    );

  state.photoCrop.zoom =
    zoom;

  const baseScale =
    Math.max(
      canvas.width /
      image.width,
      canvas.height /
      image.height
    );

  const scale =
    baseScale *
    zoom;

  const width =
    image.width *
    scale;

  const height =
    image.height *
    scale;

  const x =
    (
      canvas.width -
      width
    ) /
    2;

  const y =
    (
      canvas.height -
      height
    ) /
    2;

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.drawImage(
    image,
    x,
    y,
    width,
    height
  );
}


function applyPhotoCropV7() {
  const canvas =
    document.getElementById(
      'photoCropCanvasV7'
    );

  const dataUrl =
    canvas.toDataURL(
      'image/jpeg',
      .88
    );

  state.croppedPhotoPayload = {
    name:
      'profile-' +
      Date.now() +
      '.jpg',
    mimeType:
      'image/jpeg',
    base64:
      dataUrl.split(',')[1]
  };

  const preview =
    document.getElementById(
      'photoPratinjau'
    );

  if (preview) {
    preview.innerHTML = `
      <img
        src="${dataUrl}"
        alt="Pratinjau">
    `;
  }

  closePhotoCropV7();

  toast(
    'Potongan foto siap disimpan.'
  );
}


function closePhotoCropV7() {
  document
    .getElementById(
      'photoCropModalV7'
    )
    .classList.remove(
      'show'
    );

  if (
    !state.croppedPhotoPayload
  ) {
    const input =
      document.getElementById(
        'photoInput'
      );

    if (input) {
      input.value =
        '';
    }
  }
}


function openPersonViewerV7(
  entity,
  id
) {
  const rows =
    getCollection(
      entity
    );

  const idField =
    getEntityIdField(
      entity
    );

  const item =
    rows.find(
      row =>
        String(
          row[
            idField
          ]
        ) ===
        String(
          id
        )
    );

  if (!item) {
    return;
  }

  const displayName =
    entity ===
    'jemaat'
      ? memberFullNameV82(
          item
        )
      : item.NAMA;

  setText(
    'previewTitleV7',
    displayName
  );

  if (
    entity ===
    'jemaat'
  ) {
    document.getElementById(
      'previewBodyV7'
    ).innerHTML = `
      <div class="member-profile-preview-v82">

        <div class="member-profile-photo-v82">

          ${
            item.FOTO_URL
              ? `
                <img
                  src="${esc(item.FOTO_URL)}"
                  alt="${esc(displayName)}">
              `
              : `
                <div>
                  ${initials(displayName)}
                </div>
              `
          }

        </div>

        <section>

          <small>ANGGOTA JEMAAT</small>

          <h2>${esc(displayName)}</h2>

          <p>
            Keluarga ${esc(memberFamilyNameV82(item) || '-')}
            ${item.POSISI_KELUARGA ? ' · ' + esc(item.POSISI_KELUARGA) : ''}
          </p>

          <dl>

            <div>
              <dt>No. Anggota</dt>
              <dd>${esc(item.NOMOR_ANGGOTA || '-')}</dd>
            </div>

            <div>
              <dt>Tempat / Tanggal Lahir</dt>
              <dd>
                ${esc(item.TEMPAT_LAHIR || '-')}
                ${item.TANGGAL_LAHIR ? ' · ' + dateLabel(item.TANGGAL_LAHIR) : ''}
              </dd>
            </div>

            <div>
              <dt>Telepon</dt>
              <dd>${esc(item.NO_TELEPON || item.NO_WHATSAPP || '-')}</dd>
            </div>

            <div>
              <dt>Alamat</dt>
              <dd>${esc(item.ALAMAT || '-')}</dd>
            </div>

            <div>
              <dt>Status</dt>
              <dd>${esc(item.STATUS || 'Aktif')}</dd>
            </div>

          </dl>

          <div class="member-profile-actions-v82">

            <button
              onclick="
                closePratinjauV7();
                openMemberIdentityV82('${id}');
              ">
              Kartu PNG / PDF
            </button>

            <button
              onclick="
                closePratinjauV7();
                editEntity('jemaat','${id}');
              ">
              Edit Data
            </button>

          </div>

        </section>

      </div>
    `;
  }
  else {
    document.getElementById(
      'previewBodyV7'
    ).innerHTML =
      item.FOTO_URL
        ? `
          <div class="person-preview-v7">
            <img
              src="${esc(item.FOTO_URL)}"
              alt="${esc(displayName)}">
            <strong>${esc(displayName)}</strong>
            <span>
              ${esc(item.DEPARTEMEN || '')}
            </span>
          </div>
        `
        : `
          <div class="person-preview-v7">
            <div class="person-initial-v7">
              ${initials(displayName)}
            </div>
            <strong>${esc(displayName)}</strong>
            <span>Belum ada foto.</span>
          </div>
        `;
  }

  document
    .getElementById(
      'previewModalV7'
    )
    .classList.add(
      'show'
    );
}


/* ---------- 10. DOCUMENT PREVIEW ---------- */

function previewDocumentV7(
  id
) {
  const item =
    state.data.documents
      .find(
        row =>
          String(
            row.ID_DOKUMEN
          ) ===
          String(
            id
          )
      );

  if (!item) {
    return;
  }

  setText(
    'previewTitleV7',
    item.JUDUL
  );

  const body =
    document.getElementById(
      'previewBodyV7'
    );

  if (
    !item.FILE_ID
  ) {
    body.innerHTML = `
      <div class="preview-empty-v7">
        Dokumen ini belum memiliki file.
      </div>
    `;

    document
      .getElementById(
        'previewModalV7'
      )
      .classList.add(
        'show'
      );

    return;
  }

  body.innerHTML = `
    <div class="preview-loading-v7">
      menyiapkan preview...
    </div>
  `;

  document
    .getElementById(
      'previewModalV7'
    )
    .classList.add(
      'show'
    );

  google.script.run

    .withSuccessHandler(
      info => {
        body.innerHTML =
          info.imageUrl
            ? `
              <img
                class="document-image-preview-v7"
                src="${esc(info.imageUrl)}"
                alt="${esc(info.name)}">
            `
            : `
              <iframe
                class="document-frame-v7"
                src="${esc(info.previewUrl)}"
                allow="autoplay">
              </iframe>
            `;
      }
    )

    .withFailureHandler(
      error => {
        body.innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getFilePratinjauInfoV7(
      item.FILE_ID
    );
}


function closePratinjauV7() {
  document
    .getElementById(
      'previewModalV7'
    )
    .classList.remove(
      'show'
    );

  document.getElementById(
    'previewBodyV7'
  ).innerHTML = '';
}


/* ---------- 12. MOBILE ACTION BAR ---------- */

function updateMobileActionBarV7(
  page
) {
  const pdf =
    document.getElementById(
      'mobilePdfV7'
    );

  if (!pdf) {
    return;
  }

  const pdfPages = [
    'rapat',
    'usulan',
    'keputusan',
    'tindak_lanjut',
    'program',
    'rapbj',
    'keuangan',
    'inventaris',
    'pengurus',
    'jemaat',
    'dokumen'
  ];

  pdf.disabled =
    !pdfPages.includes(
      page
    );
}


/* ---------- 13. MEETING MODE ---------- */

function startMeetingModeV7(
  notulenId
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      data => {
        hideLoader();

        state.meetingMode = {
          data,
          index:
            0
        };

        document
          .getElementById(
            'meetingModeV7'
          )
          .classList.add(
            'show'
          );

        renderMeetingModeV7();
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .getMeetingModeDataV7(
      notulenId
    );
}


function renderMeetingModeV7() {
  const mode =
    state.meetingMode;

  if (!mode) {
    return;
  }

  const detail =
    mode.data.detail;

  const agenda =
    detail.AGENDA ||
    [];

  setText(
    'meetingModeTitleV7',
    detail.JUDUL
  );

  setText(
    'meetingModeCounterV7',
    agenda.length
      ? (
          (
            mode.index +
            1
          ) +
          ' / ' +
          agenda.length
        )
      : '0 / 0'
  );

  document.getElementById(
    'meetingModeAgendaV7'
  ).innerHTML = `
    <div class="meeting-meta-v7">

      <small>
        ${dateLabel(detail.TANGGAL)}
      </small>

      <strong>
        Kuorum ${detail.QUORUM.percent}%
      </strong>

    </div>

    ${
      agenda.length
        ? agenda
            .map(
              (
                item,
                index
              ) => `
                <button
                  class="${index === mode.index ? 'active' : ''}"
                  onclick="goMeetingAgendaV7(${index})">

                  <span>
                    ${String(index + 1).padStart(2,'0')}
                  </span>

                  <strong>
                    ${esc(item.AGENDA)}
                  </strong>

                </button>
              `
            )
            .join('')
        : `
          <div class="meeting-empty-v7">
            Belum ada agenda.
          </div>
        `
    }
  `;

  if (
    !agenda.length
  ) {
    document.getElementById(
      'meetingModeCanvasV7'
    ).innerHTML = `
      <div class="meeting-empty-canvas-v7">

        <span>AGENDA</span>
        <h2>Belum ada agenda rapat.</h2>

        <button
          onclick="
            closeMeetingModeV7();
            addAgenda('${detail.ID_NOTULEN}');
          ">
          + Buat Agenda
        </button>

      </div>
    `;

    return;
  }

  const item =
    agenda[
      mode.index
    ];

  const officers =
    mode.data.options.officers ||
    [];

  const sources =
    mode.data.options.sources ||
    [];

  document.getElementById(
    'meetingModeCanvasV7'
  ).innerHTML = `

    <div class="meeting-scene-index-v7">
      AGENDA ${String(mode.index + 1).padStart(2,'0')}
    </div>

    <h1>
      ${esc(item.AGENDA)}
    </h1>

    <div class="meeting-editor-grid-v7">

      <label class="full">

        <span>Pembahasan</span>

        <textarea id="mmDiscussionV7">${esc(item.PEMBAHASAN || '')}</textarea>

      </label>

      <label class="full decision">

        <span>Keputusan</span>

        <textarea id="mmDecisionV7">${esc(item.KEPUTUSAN || '')}</textarea>

      </label>

      <label>

        <span>Penanggung jawab</span>

        <select id="mmPicV7">

          <option value="">
            Belum ditentukan
          </option>

          ${
            officers
              .map(
                officer => `
                  <option
                    value="${esc(officer.label)}"
                    ${officer.label === item.PIC ? 'selected' : ''}>
                    ${esc(officer.label)}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </label>

      <label>

        <span>Batas waktu</span>

        <input
          id="mmDeadlineV7"
          type="date"
          value="${esc(item.DEADLINE || '')}">

      </label>

      <label>

        <span>Anggaran</span>

        <input
          id="mmBudgetV7"
          type="number"
          value="${Number(item.ANGGARAN || 0)}">

      </label>

      <label>

        <span>Sumber Dana</span>

        <select id="mmSourceV7">

          ${
            sources
              .map(
                source => `
                  <option
                    value="${esc(source)}"
                    ${source === item.SUMBER_DANA ? 'selected' : ''}>
                    ${esc(source)}
                  </option>
                `
              )
              .join('')
          }

        </select>

      </label>

    </div>

    <footer class="meeting-nav-v7">

      <button
        onclick="previousMeetingAgendaV7()"
        ${mode.index === 0 ? 'disabled' : ''}>
        ← Sebelumnya
      </button>

      <button
        onclick="nextMeetingAgendaV7()"
        ${mode.index >= agenda.length - 1 ? 'disabled' : ''}>
        Berikutnya →
      </button>

    </footer>
  `;
}


function goMeetingAgendaV7(
  index
) {
  state.meetingMode.index =
    index;

  renderMeetingModeV7();
}


function previousMeetingAgendaV7() {
  if (
    !state.meetingMode ||
    state.meetingMode.index <=
    0
  ) {
    return;
  }

  state.meetingMode.index--;

  renderMeetingModeV7();
}


function nextMeetingAgendaV7() {
  const agenda =
    state.meetingMode
      .data
      .detail
      .AGENDA ||
    [];

  if (
    state.meetingMode.index >=
    agenda.length -
    1
  ) {
    return;
  }

  state.meetingMode.index++;

  renderMeetingModeV7();
}


function saveMeetingAgendaV7() {
  const mode =
    state.meetingMode;

  if (!mode) {
    return;
  }

  const item =
    mode.data.detail.AGENDA[
      mode.index
    ];

  if (!item) {
    return;
  }

  const data = {
    ...item,
    PEMBAHASAN:
      document.getElementById(
        'mmDiscussionV7'
      ).value,
    KEPUTUSAN:
      document.getElementById(
        'mmDecisionV7'
      ).value,
    PIC:
      document.getElementById(
        'mmPicV7'
      ).value,
    DEADLINE:
      document.getElementById(
        'mmDeadlineV7'
      ).value,
    ANGGARAN:
      document.getElementById(
        'mmBudgetV7'
      ).value,
    SUMBER_DANA:
      document.getElementById(
        'mmSourceV7'
      ).value
  };

  google.script.run

    .withSuccessHandler(
      () => {
        toast(
          'Agenda tersimpan.'
        );

        google.script.run
          .withSuccessHandler(
            fresh => {
              state.meetingMode.data =
                fresh;

              renderMeetingModeV7();
            }
          )
          .getMeetingModeDataV7(
            mode.data.detail.ID_NOTULEN
          );
      }
    )

    .withFailureHandler(
      error => {
        notifyErrorV88(error);
      }
    )

    .saveEntity(
      'agenda',
      data
    ,
       state.authV84.token
     );
}


function closeMeetingModeV7() {
  const id =
    state.meetingMode &&
    state.meetingMode.data
      ? state.meetingMode.data.detail.ID_NOTULEN
      : '';

  document
    .getElementById(
      'meetingModeV7'
    )
    .classList.remove(
      'show'
    );

  state.meetingMode =
    null;

  if (
    id
  ) {
    loadData(
      () => {
        detailNotulen(
          id
        );
      }
    );
  }
}


/* ---------- 15. SYSTEM HEALTH ---------- */

function openSystemHealthV7() {
  closeDynamicIsland();

  document
    .getElementById(
      'healthModalV7'
    )
    .classList.add(
      'show'
    );

  document.getElementById(
    'healthGridV7'
  ).innerHTML = `
    <div class="health-loading-v7">
      memeriksa koneksi...
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      data => {
        const backupText =
          data.backup.last
            ? (
                'Terakhir ' +
                dateTimeLabel(
                  data.backup.last
                ) +
                (
                  data.backup.ageDays !== null
                    ? ' · ' +
                      data.backup.ageDays +
                      ' hari lalu'
                    : ''
                )
              )
            : 'Belum ada arsip tahunan';

        document.getElementById(
          'healthGridV7'
        ).innerHTML = `

          ${healthTileV7(
            'Tabel data',
            data.spreadsheet.ok,
            data.spreadsheet.name ||
            'Tidak terhubung'
          )}

          ${healthTileV7(
            'Google Drive',
            data.drive.ok,
            data.drive.folder ||
            'Tidak tersedia'
          )}

          ${healthTileV7(
            'Pembuatan PDF',
            data.pdf.ok,
            data.pdf.note
          )}

          ${healthTileV7(
            'Salinan data',
            data.backup.healthy,
            backupText
          )}

        `;
      }
    )

    .withFailureHandler(
      error => {
        document.getElementById(
          'healthGridV7'
        ).innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getSystemHealthV7();
}


function healthTileV7(
  title,
  ok,
  meta
) {
  return `
    <article class="health-tile-v7 ${ok ? 'ok' : 'warning'}">

      <i></i>

      <small>
        ${esc(title)}
      </small>

      <strong>
        ${ok ? 'Siap' : 'Perlu perhatian'}
      </strong>

      <span>
        ${esc(meta || '')}
      </span>

    </article>
  `;
}


function closeSystemHealthV7() {
  document
    .getElementById(
      'healthModalV7'
    )
    .classList.remove(
      'show'
    );
}


/* ---------- INIT FEATURE BINDINGS ---------- */

function initV7Features() {
  const search =
    document.getElementById(
      'globalSearchInputV7'
    );

  if (
    search
  ) {
    search.addEventListener(
      'input',
      event => {
        clearTimeout(
          state.searchTimer
        );

        state.searchTimer =
          setTimeout(
            () => {
              runGlobalSearchV7(
                event.target.value
              );
            },
            220
          );
      }
    );
  }

  const zoom =
    document.getElementById(
      'photoCropZoomV7'
    );

  if (
    zoom
  ) {
    zoom.addEventListener(
      'input',
      drawPhotoCropV7
    );
  }

  document.addEventListener(
    'keydown',
    event => {
      if (
        (
          event.ctrlKey ||
          event.metaKey
        ) &&
        String(
          event.key
        ).toLowerCase() ===
          'k'
      ) {
        event.preventDefault();
        openGlobalSearchV7();
      }

      if (
        event.key ===
        'Escape'
      ) {
        closeGlobalSearchV7();
        closeQuickActionsV7();
      }
    }
  );

  updateMobileActionBarV7(
    state.page
  );
}




/* =========================================================
   MAJELIS GALILEA V8 — GLOBAL ADMINISTRATION SUITE
========================================================= */

/* ---------- 15. NOTIFICATION CENTER ---------- */

function refreshNotificationBadgeV8() {
  const badge =
    document.getElementById(
      'notificationBadgeV8'
    );

  if (!badge) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      data => {
        data = relevantNotificationsV87(data);
        badge.textContent =
          Number(
            data.count ||
            0
          );

        badge.classList.toggle(
          'has-items',
          Number(
            data.count ||
            0
          ) >
          0
        );
      }
    )

    .withFailureHandler(
      () => {}
    )

    .getNotificationCenterV8(
      state.year
    );
}


function openNotificationCenterV8() {
  closeDynamicIsland();

  const modal =
    document.getElementById(
      'notificationCenterV8'
    );

  modal.classList.add(
    'show'
  );

  const list =
    document.getElementById(
      'notificationListV8'
    );

  list.innerHTML = `
    <div class="v8-loading">
      memeriksa notifikasi...
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      data => {
        data = relevantNotificationsV87(data);
        list.innerHTML =
          data.notifications.length
            ? data.notifications
                .map(
                  item => `
                    <button
                      class="notification-row-v8 ${esc(item.level)}"
                      onclick="
                        closeNotificationCenterV8();
                        openPage('${escJs(item.page)}');
                      ">

                      <i></i>

                      <span>
                        <strong>${esc(item.title)}</strong>
                        <small>${esc(item.detail || '')}</small>
                      </span>

                      <b>↗</b>

                    </button>
                  `
                )
                .join('')
            : `
              <div class="notification-clear-v8">
                <i></i>
                <strong>Tidak ada notifikasi prioritas.</strong>
                <span>Semua indikator utama terlihat aman.</span>
              </div>
            `;
      }
    )

    .withFailureHandler(
      error => {
        list.innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getNotificationCenterV8(
      state.year
    );
}


function closeNotificationCenterV8() {
  document
    .getElementById(
      'notificationCenterV8'
    )
    .classList.remove(
      'show'
    );
}


/* ---------- 16. SETTING CENTER ---------- */

function openSettingsCenterV8() {
  closeDynamicIsland();

  document
    .getElementById(
      'settingsCenterV8'
    )
    .classList.add(
      'show'
    );

  document.getElementById(
    'settingsBodyV8'
  ).innerHTML = `
    <div class="v8-loading">
      memuat pengaturan...
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      data => {
        renderSettingsCenterV8(
          data
        );
      }
    )

    .withFailureHandler(
      error => {
        document.getElementById(
          'settingsBodyV8'
        ).innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getSettingsCenterV8();
}


function settingInputV8(
  key,
  label,
  value,
  type = 'text'
) {
  if (
    type ===
    'checkbox'
  ) {
    return `
      <label class="setting-toggle-v8">

        <span>
          <strong>${esc(label)}</strong>
          <small>${esc(key)}</small>
        </span>

        <input
          type="checkbox"
          name="${key}"
          ${String(value).toLowerCase() === 'true' ? 'checked' : ''}>

      </label>
    `;
  }

  return `
    <label class="setting-field-v8">

      <span>${esc(label)}</span>

      <input
        type="${type}"
        name="${key}"
        value="${esc(value || '')}">

    </label>
  `;
}


function renderSettingsCenterV8(
  data
) {
  const s =
    data.settings;

  document.getElementById(
    'settingsBodyV8'
  ).innerHTML = `

    <section class="settings-group-v8">

      <header>
        <small>IDENTITAS & RAPAT</small>
        <h3>Dasar sistem</h3>
      </header>

      <div class="settings-grid-v8">

        ${settingInputV8('CHURCH_NAME','Nama Gereja',s.CHURCH_NAME)}
        ${settingInputV8('QUORUM_PERCENT','Jumlah peserta minimum (%)',s.QUORUM_PERCENT,'number')}
        ${settingInputV8('BACKUP_WARNING_DAYS','Ingatkan salinan data setelah (hari)',s.BACKUP_WARNING_DAYS,'number')}
        ${settingInputV8('ARCHIVE_FOLDER_NAME','Folder Arsip Drive',s.ARCHIVE_FOLDER_NAME)}
        ${settingInputV8('DOCUMENT_FOLDER_NAME','Folder Dokumen Drive',s.DOCUMENT_FOLDER_NAME)}
        ${settingInputV8('MEDIA_FOLDER_NAME','Folder Media Drive',s.MEDIA_FOLDER_NAME)}

      </div>

      <div class="setting-logo-action-v8">
        <span>
          <strong>Logo Utama</strong>
          <small>Logo yang sama dipakai pada website dan PDF.</small>
        </span>

        <button
          type="button"
          onclick="triggerLogoFromSettingsV8()">
          Ganti Logo
        </button>
      </div>

    </section>


    <section class="settings-group-v8">

      <header>
        <small>KEUANGAN</small>
        <h3>Target & pengesahan</h3>
      </header>

      <div class="settings-grid-v8">

        ${settingInputV8('TARGET_PERPULUHAN_BULANAN','Target Perpuluhan / Bulan',s.TARGET_PERPULUHAN_BULANAN,'number')}
        ${settingInputV8('TARGET_PERSEMBAHAN_TERPADU_BULANAN','Target Persembahan Terpadu / Bulan',s.TARGET_PERSEMBAHAN_TERPADU_BULANAN,'number')}
        ${settingInputV8('FINANCE_REPORT_PREFIX','Awalan nomor laporan keuangan',s.FINANCE_REPORT_PREFIX)}
        ${settingInputV8('FINANCE_TREASURER_NAME','Nama Bendahara (PDF)',s.FINANCE_TREASURER_NAME)}
        ${settingInputV8('FINANCE_CHAIR_NAME','Nama Ketua Jemaat (PDF)',s.FINANCE_CHAIR_NAME)}

      </div>

    </section>


    <section class="settings-group-v8">

      <header>
        <small>NOMOR DOKUMEN</small>
        <h3>Awalan nomor dokumen</h3>
      </header>

      <div class="settings-grid-v8">

        ${settingInputV8('DOC_PREFIX_SK','Surat Keputusan',s.DOC_PREFIX_SK)}
        ${settingInputV8('DOC_PREFIX_SM','Surat Masuk',s.DOC_PREFIX_SM)}
        ${settingInputV8('DOC_PREFIX_SKEL','Surat Keluar',s.DOC_PREFIX_SKEL)}
        ${settingInputV8('DOC_PREFIX_PROP','Proposal',s.DOC_PREFIX_PROP)}
        ${settingInputV8('DOC_PREFIX_LAP','Laporan',s.DOC_PREFIX_LAP)}
        ${settingInputV8('DOC_PREFIX_FORM','Formulir',s.DOC_PREFIX_FORM)}
        ${settingInputV8('DOC_PREFIX_DOC','Dokumen Lain',s.DOC_PREFIX_DOC)}

      </div>

      <div class="settings-toggle-grid-v8 compact">
        ${settingInputV8('AUTO_DOC_NUMBER','Nomor dokumen otomatis',s.AUTO_DOC_NUMBER,'checkbox')}
      </div>

    </section>


    <section class="settings-group-v8">

      <header>
        <small>SURAT SEKRETARIS</small>
        <h3>Kop, nomor & arsip surat</h3>
      </header>

      <div class="settings-grid-v8">

        ${settingInputV8('LETTER_DENOMINATION_NAME','Nama Denominasi',s.LETTER_DENOMINATION_NAME)}
        ${settingInputV8('LETTER_CHURCH_NAME','Nama Jemaat pada Kop',s.LETTER_CHURCH_NAME)}
        ${settingInputV8('LETTER_CITY','Kota Surat',s.LETTER_CITY)}
        ${settingInputV8('LETTER_ADDRESS','Alamat / Lokasi Kop',s.LETTER_ADDRESS)}
        ${settingInputV8('LETTER_CONTACT','Kontak',s.LETTER_CONTACT)}
        ${settingInputV8('LETTER_EMAIL','Email',s.LETTER_EMAIL)}
        ${settingInputV8('LETTER_OFFICIAL_LOGO_URL','URL Logo Advent Resmi',s.LETTER_OFFICIAL_LOGO_URL)}
        ${settingInputV8('LETTER_NUMBER_ORG','Kode Organisasi Nomor Surat',s.LETTER_NUMBER_ORG)}
        ${settingInputV8('LETTER_FOLDER_NAME','Folder Surat Keluar',s.LETTER_FOLDER_NAME)}
        ${settingInputV8('LETTER_SIGNATURE_FOLDER_NAME','Folder Tanda Tangan',s.LETTER_SIGNATURE_FOLDER_NAME)}
        ${settingInputV8('LETTER_FOOTER_TEXT','Teks Footer Surat',s.LETTER_FOOTER_TEXT)}

      </div>

    </section>


    <section class="settings-group-v8">

      <header>
        <small>TAMPILAN JEMAAT</small>
        <h3>Informasi yang ditampilkan</h3>
      </header>

      <div class="settings-toggle-grid-v8">

        ${settingInputV8('VIEWER_SHOW_FINANCE','Ringkasan Keuangan',s.VIEWER_SHOW_FINANCE,'checkbox')}
        ${settingInputV8('VIEWER_SHOW_MINISTRY_PROGRESS','Pencapaian perpuluhan & persembahan',s.VIEWER_SHOW_MINISTRY_PROGRESS,'checkbox')}
        ${settingInputV8('VIEWER_SHOW_PROGRAMS','Program Kerja',s.VIEWER_SHOW_PROGRAMS,'checkbox')}
        ${settingInputV8('VIEWER_SHOW_APPROVED_MEETINGS','Rapat Disetujui',s.VIEWER_SHOW_APPROVED_MEETINGS,'checkbox')}

      </div>

    </section>
  `;
}


function saveSettingsCenterV8(
  event
) {
  event.preventDefault();

  const form =
    document.getElementById(
      'settingsFormV8'
    );

  const data =
    Object.fromEntries(
      new FormData(
        form
      )
      .entries()
    );

  [
    'AUTO_DOC_NUMBER',
    'VIEWER_SHOW_FINANCE',
    'VIEWER_SHOW_MINISTRY_PROGRESS',
    'VIEWER_SHOW_PROGRAMS',
    'VIEWER_SHOW_APPROVED_MEETINGS'
  ]
  .forEach(
    key => {
      data[
        key
      ] =
        Boolean(
          form.elements[
            key
          ] &&
          form.elements[
            key
          ].checked
        );
    }
  );

  google.script.run

    .withSuccessHandler(
      () => {
        closeSettingsCenterV8();

        toast(
          'Pengaturan disimpan.'
        );

        loadData();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .saveSettingsCenterV8(
      data,
       state.authV84.token
    );
}


function triggerLogoFromSettingsV8() {
  closeSettingsCenterV8();

  const input =
    document.getElementById(
      'logoInput'
    );

  if (input) {
    input.click();
  }
}


function closeSettingsCenterV8() {
  document
    .getElementById(
      'settingsCenterV8'
    )
    .classList.remove(
      'show'
    );
}


/* ---------- 14. TAMPILAN JEMAAT ---------- */

function openCongregationViewerV8() {
  closeDynamicIsland();

  const viewer =
    document.getElementById(
      'congregationViewerV8'
    );

  viewer.classList.add(
    'show'
  );

  document.getElementById(
    'viewerBodyV8'
  ).innerHTML = `
    <div class="viewer-loading-v8">
      menyiapkan tampilan jemaat...
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      data => {
        renderCongregationViewerV8(
          data
        );
      }
    )

    .withFailureHandler(
      error => {
        document.getElementById(
          'viewerBodyV8'
        ).innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getCongregationViewerDataV8(
      state.year
    );
}


function renderCongregationViewerV8(
  data
) {
  setText(
    'viewerChurchV8',
    data.church
  );

  const meeting =
    data.nextMeeting;

  document.getElementById(
    'viewerBodyV8'
  ).innerHTML = `

    <section class="viewer-hero-v8">

      <span>
        GMAHK GALILEA
      </span>

      <h1>
        Informasi
        <br>
        jemaat.
      </h1>

      <p>
        ${data.year}
      </p>

    </section>


    <section class="viewer-next-v8">

      <small>RAPAT MAJELIS BERIKUTNYA</small>

      ${
        meeting
          ? `
            <h2>${esc(meeting.JUDUL || meeting.title || 'Rapat Majelis')}</h2>
            <p>
              ${dateLabel(meeting.TANGGAL || meeting.date)}
              ·
              ${esc(meeting.JENIS_RAPAT || meeting.type || '')}
            </p>
          `
          : `
            <h2>Belum ada jadwal rapat berikutnya.</h2>
          `
      }

    </section>


    ${
      data.finance
        ? `
          <section class="viewer-finance-v8">

            <article>
              <small>Pemasukan</small>
              <strong>${money(data.finance.income)}</strong>
            </article>

            <article>
              <small>Pengeluaran</small>
              <strong>${money(data.finance.expense)}</strong>
            </article>

            <article>
              <small>Saldo</small>
              <strong>${money(data.finance.balance)}</strong>
            </article>

          </section>
        `
        : ''
    }


    ${
      data.ministry
        ? `
          <section class="viewer-ministry-v8">

            <header>
              <small>BULAN BERJALAN</small>
              <h2>Perpuluhan & persembahan</h2>
            </header>

            <div>

              <article>

                <span>Perpuluhan</span>
                <strong>${money(data.ministry.perpuluhan.month)}</strong>
                <small>
                  ${
                    data.ministry.perpuluhan.targetMonth > 0
                      ? data.ministry.perpuluhan.percentMonth + '% target'
                      : 'target belum diatur'
                  }
                </small>

              </article>

              <article>

                <span>Persembahan Terpadu</span>
                <strong>${money(data.ministry.persembahanTerpadu.month)}</strong>
                <small>
                  ${
                    data.ministry.persembahanTerpadu.targetMonth > 0
                      ? data.ministry.persembahanTerpadu.percentMonth + '% target'
                      : 'target belum diatur'
                  }
                </small>

              </article>

            </div>

          </section>
        `
        : ''
    }


    ${
      data.programs.length
        ? `
          <section class="viewer-list-v8">

            <header>
              <small>PROGRAM KERJA</small>
              <h2>Sedang berjalan</h2>
            </header>

            ${
              data.programs
                .map(
                  item => `
                    <article>

                      <span>
                        ${esc(item.department || '')}
                      </span>

                      <strong>
                        ${esc(item.name)}
                      </strong>

                      <small>
                        ${esc(item.status || '')}
                      </small>

                    </article>
                  `
                )
                .join('')
            }

          </section>
        `
        : ''
    }


    ${
      data.approvedMeetings.length
        ? `
          <section class="viewer-list-v8">

            <header>
              <small>RAPAT TERBARU</small>
              <h2>Catatan administrasi</h2>
            </header>

            ${
              data.approvedMeetings
                .map(
                  item => `
                    <article>

                      <span>
                        ${dateLabel(item.date)}
                      </span>

                      <strong>
                        ${esc(item.title)}
                      </strong>

                      <small>
                        ${esc(item.type || '')}
                      </small>

                    </article>
                  `
                )
                .join('')
            }

          </section>
        `
        : ''
    }

  `;
}


function closeCongregationViewerV8() {
  document
    .getElementById(
      'congregationViewerV8'
    )
    .classList.remove(
      'show'
    );
}





/* =========================================================
   MAJELIS GALILEA V8.1 — SECRETARY + BIRTHDAY FRONTEND
========================================================= */

function renderBirthdayCenterV81() {
  const target =
    document.getElementById(
      'birthdayMonthListV81'
    );

  if (!target) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      data => {
        state.birthdayV81 =
          data;

        setText(
          'birthdayMonthTitleV81',
          data.monthLabel +
          ' ' +
          data.year
        );

        setText(
          'birthdayTodayCountV81',
          data.today.length +
          ' hari ini'
        );

        document.getElementById(
          'birthdayTodayV81'
        ).innerHTML =
          data.today.length
            ? data.today
                .map(
                  item => `
                    <button
                      onclick="editEntity('jemaat','${item.id}')">

                      <strong>${esc(item.name)}</strong>

                      <span>
                        ${item.turningAge}
                        tahun
                        ${item.family ? ' · ' + esc(item.family) : ''}
                      </span>

                    </button>
                  `
                )
                .join('')
            : `
              <div class="birthday-clear-v81">
                Tidak ada ulang tahun hari ini.
              </div>
            `;

        target.innerHTML =
          data.thisMonth.length
            ? data.thisMonth
                .map(
                  item => `
                    <button
                      class="${item.isToday ? 'today' : ''}"
                      onclick="editEntity('jemaat','${item.id}')">

                      <time>
                        ${String(item.day).padStart(2,'0')}
                      </time>

                      <span>
                        <strong>${esc(item.name)}</strong>
                        <small>
                          ${item.turningAge} tahun
                          ${item.family ? ' · ' + esc(item.family) : ''}
                        </small>
                      </span>

                      <b>
                        ${item.isToday ? 'Hari ini' : ''}
                      </b>

                    </button>
                  `
                )
                .join('')
            : `
              <div class="birthday-clear-v81">
                Belum ada anggota yang berulang tahun bulan ini.
              </div>
            `;
      }
    )

    .withFailureHandler(
      error => {
        target.innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getBirthdayCenterV81();
}


function loadSecretaryLetterModuleV81() {
  const form =
    document.getElementById(
      'secretaryLetterFormV81'
    );

  if (!form) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      data => {
        state.secretaryV81 =
          data;

        hydrateSecretaryLetterV81(
          data
        );

        renderSecretaryLetterArchiveV81(
          data.letters ||
          []
        );
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .getSecretaryLetterBootstrapV81(
      state.year
    );
}


function renderSecretaryLettersV81() {
  if (
    state.page ===
    'surat'
  ) {
    loadSecretaryLetterModuleV81();
  }
}


function hydrateSecretaryLetterV81(
  data
) {
  const category =
    document.getElementById(
      'letterCategoryV81'
    );

  category.innerHTML =
    data.categories
      .map(
        item => `
          <option value="${esc(item.key)}">
            ${esc(item.label)}
          </option>
        `
      )
      .join('');

  const date =
    document.getElementById(
      'letterDateV81'
    );

  if (
    !date.value
  ) {
    date.value =
      data.today;
  }

  const first =
    data.categories[0];

  if (
    first
  ) {
    setText(
      'letterTemplateHintV81',
      first.hint ||
      ''
    );

    document.getElementById(
      'letterSubjectV81'
    ).value =
      first.perihal ||
      '';
  }

  const defaults =
    data.defaultSigners ||
    [];

  defaults.forEach(
    (
      signer,
      index
    ) => {
      if (!signer) {
        return;
      }

      const number =
        index +
        1;

      const name =
        document.getElementById(
          'signer' +
          number +
          'NameV81'
        );

      const role =
        document.getElementById(
          'signer' +
          number +
          'RoleV81'
        );

      if (
        name &&
        !name.value
      ) {
        name.value =
          signer.name ||
          '';
      }

      if (
        role &&
        !role.value
      ) {
        role.value =
          signer.role ||
          '';
      }
    }
  );

  refreshLetterNumberV81();

  if (
    !document.getElementById(
      'letterBodyV81'
    ).value.trim()
  ) {
    applySecretaryTemplateV81();
  }
  else {
    refreshSecretaryPratinjauV81();
  }
}


function secretaryFormObjectV81() {
  const form =
    document.getElementById(
      'secretaryLetterFormV81'
    );

  return Object.fromEntries(
    new FormData(
      form
    )
    .entries()
  );
}


function onSecretaryCategoryChangeV81() {
  const key =
    document.getElementById(
      'letterCategoryV81'
    ).value;

  const config =
    state.secretaryV81 &&
    state.secretaryV81.categories
      ? state.secretaryV81.categories.find(
          item =>
            item.key ===
            key
        )
      : null;

  if (
    config
  ) {
    setText(
      'letterTemplateHintV81',
      config.hint ||
      ''
    );

    document.getElementById(
      'letterSubjectV81'
    ).value =
      config.perihal ||
      '';
  }

  refreshLetterNumberV81();
  applySecretaryTemplateV81();
}


function refreshLetterNumberV81() {
  const category =
    document.getElementById(
      'letterCategoryV81'
    );

  const date =
    document.getElementById(
      'letterDateV81'
    );

  if (
    !category ||
    !category.value ||
    !date ||
    !date.value
  ) {
    return;
  }

  const number =
    document.getElementById(
      'letterNumberV81'
    );

  number.value =
    'menyiapkan...';

  google.script.run

    .withSuccessHandler(
      result => {
        number.value =
          result.number;

        refreshSecretaryPratinjauV81();
      }
    )

    .withFailureHandler(
      error => {
        number.value =
          'error';

        notifyErrorV88(error);
      }
    )

    .getNextLetterNumberV81(
      category.value,
      date.value
    );
}


function applySecretaryTemplateV81() {
  const payload =
    secretaryFormObjectV81();

  google.script.run

    .withSuccessHandler(
      result => {
        document.getElementById(
          'letterBodyV81'
        ).value =
          result.body ||
          '';

        if (
          !document.getElementById(
            'letterSubjectV81'
          ).value
        ) {
          document.getElementById(
            'letterSubjectV81'
          ).value =
            result.perihal ||
            '';
        }

        refreshSecretaryPratinjauV81();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .getSecretaryLetterTemplateV81(
      payload
    );
}


function secretaryRecipientPratinjauV81(
  data
) {
  return [
    'Kepada Yth.',
    data.TUJUAN_JABATAN,
    data.TUJUAN_NAMA,
    data.TUJUAN_INSTANSI,
    data.TUJUAN_ALAMAT,
    'di Tempat'
  ]
  .filter(Boolean)
  .map(
    esc
  )
  .join(
    '<br>'
  );
}


function refreshSecretaryPratinjauV81() {
  const preview =
    document.getElementById(
      'letterPratinjauV81'
    );

  if (!preview) {
    return;
  }

  const data =
    secretaryFormObjectV81();

  const settings =
    state.secretaryV81
      ? state.secretaryV81.settings
      : {
          denomination:
            'Gereja Masehi Advent Hari Ketujuh di Indonesia',
          church:
            'GMAHK Galilea',
          city:
            'Balikpapan',
          address:
            'Balikpapan, Kalimantan Timur',
          contact:
            '',
          email:
            '',
          officialLogoUrl:
            '/assets/adventist-logo.png'
        };

  const signer =
    number => {
      const name =
        data[
          'SIGNER_' +
          number +
          '_NAME'
        ];

      const role =
        data[
          'SIGNER_' +
          number +
          '_ROLE'
        ];

      if (!name) {
        return '';
      }

      return `
        <div>

          <span>
            ${esc(role || 'Penandatangan')}
          </span>

          <i>
            tanda tangan
          </i>

          <strong>
            ${esc(name)}
          </strong>

        </div>
      `;
    };

  preview.innerHTML = `

    <header class="letter-preview-head-v822">

      <div class="letter-preview-logo-v822">

        <img
          src="/assets/adventist-logo.png"
          alt="Logo Gereja Masehi Advent Hari Ketujuh"
          referrerpolicy="no-referrer">

      </div>

      <div class="letter-preview-denomination-v822">

        <strong>
          ${esc(settings.denomination || 'Gereja Masehi Advent Hari Ketujuh di Indonesia')}
        </strong>

        <span>
          SEVENTH-DAY ADVENTIST CHURCH
        </span>

      </div>

      <i class="letter-preview-divider-v822"></i>

      <div class="letter-preview-local-v822">

        <strong>
          ${esc(settings.church || 'GMAHK Galilea')}
        </strong>

        <span>
          ${esc(settings.address || 'Balikpapan, Kalimantan Timur')}
        </span>

        ${
          settings.contact
            ? `<span>${esc(settings.contact)}</span>`
            : ''
        }

        ${
          settings.email
            ? `<span>${esc(settings.email)}</span>`
            : ''
        }

      </div>

    </header>

    <div class="letter-preview-rule-v822"></div>

    <p class="letter-preview-date-v81">
      ${esc(settings.city || 'Balikpapan')},
      ${data.TANGGAL_SURAT ? dateLabel(data.TANGGAL_SURAT) : '—'}
    </p>

    <table class="letter-preview-meta-v81">

      <tr>
        <th>Nomor</th>
        <td>:</td>
        <td>${esc(document.getElementById('letterNumberV81').value || '—')}</td>
      </tr>

      <tr>
        <th>Lampiran</th>
        <td>:</td>
        <td>${esc(data.LAMPIRAN || '-')}</td>
      </tr>

      <tr>
        <th>Perihal</th>
        <td>:</td>
        <td><strong>${esc(data.PERIHAL || '—')}</strong></td>
      </tr>

    </table>

    <div class="letter-preview-recipient-v81">
      ${secretaryRecipientPratinjauV81(data)}
    </div>

    <p>
      Dengan hormat,
    </p>

    <div class="letter-preview-body-v81">
      <p>${
        esc(
          data.ISI_SURAT ||
          'Isi surat akan tampil di sini.'
        )
        .replaceAll(
          '\n\n',
          '</p><p>'
        )
        .replaceAll(
          '\n',
          '<br>'
        )
      }</p>
    </div>

    <p>
      Hormat kami,
    </p>

    <div class="letter-preview-signers-v81">
      ${signer(1)}
      ${signer(2)}
      ${signer(3)}
    </div>

    <footer>
      ${esc(settings.church)}
      ·
      ${esc(settings.address || '')}
    </footer>
  `;
}


async function generateSecretaryLetterFromFormV81(
  event
) {
  event.preventDefault();

  const payload =
    secretaryFormObjectV81();

  for (
    let slot = 1;
    slot <= 3;
    slot++
  ) {
    const input =
      document.getElementById(
        'signer' +
        slot +
        'FileV81'
      );

    if (
      input &&
      input.files &&
      input.files[0]
    ) {
      if (
        input.files[0].size >
        3 *
        1024 *
        1024
      ) {
        toast(
          'File tanda tangan maksimal 3 MB.'
        );

        return;
      }

      payload[
        'SIGNER_' +
        slot +
        '_DATA'
      ] =
        await fileToPayload(
          input.files[0]
        );
    }
  }

  showLoader();

  google.script.run

    .withSuccessHandler(
      result => {
        downloadBase64FileV8(
          result
        );

        hideLoader();

        toast(
          'Surat ' +
          result.number +
          ' berhasil dibuat.'
        );

        resetSecretaryLetterV81(
          false
        );

        loadData(
          () => {
            openPage(
              'surat',
              false
            );
          }
        );
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .generateSecretaryLetterV81(
      payload,
       state.authV84.token
    );
}


function renderSecretaryLetterArchiveV81(
  rows
) {
  setText(
    'letterArchiveCountV81',
    rows.length +
    ' surat'
  );

  document.getElementById(
    'secretaryLetterArchiveV81'
  ).innerHTML =
    rows.length
      ? rows
          .map(
            row => `
              <article>

                <div class="secretary-letter-code-v81">
                  ${esc(row.KODE_KATEGORI || 'SRT')}
                </div>

                <div>

                  <small>
                    ${dateLabel(row.TANGGAL_SURAT)}
                    ·
                    ${esc(row.NOMOR_SURAT)}
                  </small>

                  <strong>
                    ${esc(row.PERIHAL || 'Surat Keluar')}
                  </strong>

                  <span>
                    Tujuan:
                    ${esc(
                      row.TUJUAN_INSTANSI ||
                      row.TUJUAN_NAMA ||
                      row.TUJUAN_JABATAN ||
                      '-'
                    )}
                  </span>

                </div>

                <div class="record-actions">

                  <button
                    class="mini-button"
                    onclick="downloadSecretaryLetterArchiveV81('${row.ID_SURAT}')">
                    Unduh
                  </button>

                  ${
                    row.PDF_URL
                      ? `
                        <button
                          class="mini-button"
                          onclick="window.open('${escJs(row.PDF_URL)}','_blank')">
                          Drive
                        </button>
                      `
                      : ''
                  }

                  <button
                    class="mini-button"
                    onclick="deleteSecretaryLetterArchiveV81('${row.ID_SURAT}')">
                    Hapus
                  </button>

                </div>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Belum ada surat keluar.'
        );
}


function downloadSecretaryLetterArchiveV81(
  id
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      result => {
        downloadBase64FileV8(
          result
        );

        hideLoader();
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .downloadSecretaryLetterV81(
      id
    );
}


function deleteSecretaryLetterArchiveV81(
  id
) {
  if (
    !confirm(
      'Hapus surat ini dari register dan Drive?'
    )
  ) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      () => {
        toast(
          'Surat dihapus.'
        );

        loadSecretaryLetterModuleV81();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .deleteSecretaryLetterV81(
      id,
       state.authV84.token
    );
}


function resetSecretaryLetterV81(
  reload = true
) {
  const form =
    document.getElementById(
      'secretaryLetterFormV81'
    );

  if (!form) {
    return;
  }

  form.reset();

  [
    1,
    2,
    3
  ]
  .forEach(
    slot => {
      const input =
        document.getElementById(
          'signer' +
          slot +
          'FileV81'
        );

      if (input) {
        input.value =
          '';
      }
    }
  );

  if (
    reload
  ) {
    loadSecretaryLetterModuleV81();
  }
}





/* =========================================================
   MAJELIS GALILEA V8.2 — MEMBERSHIP IDENTITY FRONTEND
========================================================= */

function openSelectedFamilyIdentityV82() {
  const family =
    state.memberFiltersV82.family;

  if (!family) {
    toast(
      'Pilih nama keluarga terlebih dahulu.'
    );

    return;
  }

  openFamilyIdentityV82(
    family
  );
}


function openMemberIdentityV82(
  id
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      data => {
        hideLoader();

        state.identityV82 = {
          mode:
            'member',
          id,
          data
        };

        setText(
          'identityTitleV82',
          data.cardTitle
        );

        document
          .getElementById(
            'membershipIdentityV82'
          )
          .classList.add(
            'show'
          );

        drawMemberIdentityCanvasV82(
          data
        );
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .getMemberIdentityDataV82(
      id
    );
}


function openFamilyIdentityV82(
  familyName
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      data => {
        hideLoader();

        state.identityV82 = {
          mode:
            'family',
          familyName,
          data
        };

        setText(
          'identityTitleV82',
          data.cardTitle
        );

        document
          .getElementById(
            'membershipIdentityV82'
          )
          .classList.add(
            'show'
          );

        drawFamilyIdentityCanvasV82(
          data
        );
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .getFamilyIdentityDataV82(
      familyName
    );
}


function closeMembershipIdentityV82() {
  document
    .getElementById(
      'membershipIdentityV82'
    )
    .classList.remove(
      'show'
    );
}


function canvasRoundRectV82(
  ctx,
  x,
  y,
  width,
  height,
  radius
) {
  const r =
    Math.min(
      radius,
      width /
      2,
      height /
      2
    );

  ctx.beginPath();

  ctx.moveTo(
    x +
    r,
    y
  );

  ctx.lineTo(
    x +
    width -
    r,
    y
  );

  ctx.quadraticCurveTo(
    x +
    width,
    y,
    x +
    width,
    y +
    r
  );

  ctx.lineTo(
    x +
    width,
    y +
    height -
    r
  );

  ctx.quadraticCurveTo(
    x +
    width,
    y +
    height,
    x +
    width -
    r,
    y +
    height
  );

  ctx.lineTo(
    x +
    r,
    y +
    height
  );

  ctx.quadraticCurveTo(
    x,
    y +
    height,
    x,
    y +
    height -
    r
  );

  ctx.lineTo(
    x,
    y +
    r
  );

  ctx.quadraticCurveTo(
    x,
    y,
    x +
    r,
    y
  );

  ctx.closePath();
}


function loadCanvasImageV82(
  src
) {
  return new Promise(
    resolve => {
      if (!src) {
        resolve(
          null
        );

        return;
      }

      const image =
        new Image();

      image.onload =
        () =>
          resolve(
            image
          );

      image.onerror =
        () =>
          resolve(
            null
          );

      image.src =
        src;
    }
  );
}


function drawCoverImageV82(
  ctx,
  image,
  x,
  y,
  width,
  height,
  radius
) {
  ctx.save();

  canvasRoundRectV82(
    ctx,
    x,
    y,
    width,
    height,
    radius
  );

  ctx.clip();

  const scale =
    Math.max(
      width /
      image.width,
      height /
      image.height
    );

  const dw =
    image.width *
    scale;

  const dh =
    image.height *
    scale;

  ctx.drawImage(
    image,
    x +
    (
      width -
      dw
    ) /
    2,
    y +
    (
      height -
      dh
    ) /
    2,
    dw,
    dh
  );

  ctx.restore();
}


function wrapCanvasTextV82(
  ctx,
  text,
  x,
  y,
  maxWidth,
  lineHeight,
  maxLines = 3
) {
  const words =
    String(
      text ||
      ''
    )
    .split(/\s+/)
    .filter(Boolean);

  let line =
    '';

  let lineCount =
    0;

  for (
    let index = 0;
    index < words.length;
    index++
  ) {
    const test =
      line
        ? (
            line +
            ' ' +
            words[index]
          )
        : words[index];

    if (
      ctx.measureText(
        test
      ).width >
        maxWidth &&
      line
    ) {
      ctx.fillText(
        line,
        x,
        y +
        lineCount *
        lineHeight
      );

      line =
        words[index];

      lineCount++;

      if (
        lineCount >=
        maxLines
      ) {
        return lineCount;
      }
    }
    else {
      line =
        test;
    }
  }

  if (
    line &&
    lineCount <
    maxLines
  ) {
    ctx.fillText(
      line,
      x,
      y +
      lineCount *
      lineHeight
    );

    lineCount++;
  }

  return lineCount;
}


function drawIdentityLogoV82(
  ctx,
  logo,
  x,
  y,
  size
) {
  ctx.save();

  ctx.fillStyle =
    '#FFFFFF';

  canvasRoundRectV82(
    ctx,
    x,
    y,
    size,
    size,
    30
  );

  ctx.fill();

  if (logo) {
    ctx.drawImage(
      logo,
      x +
      15,
      y +
      15,
      size -
      30,
      size -
      30
    );
  }
  else {
    ctx.fillStyle =
      '#650A15';

    ctx.font =
      '900 42px Arial';

    ctx.textAlign =
      'center';

    ctx.textBaseline =
      'middle';

    ctx.fillText(
      'GMAHK',
      x +
      size /
      2,
      y +
      size /
      2
    );

    ctx.textAlign =
      'left';

    ctx.textBaseline =
      'alphabetic';
  }

  ctx.restore();
}


function drawExportStampV82(
  ctx,
  text,
  width,
  height
) {
  ctx.fillStyle =
    'rgba(255,255,255,.58)';

  ctx.font =
    '500 22px Arial';

  ctx.textAlign =
    'center';

  ctx.fillText(
    text ||
    'Majelis Galilea',
    width /
    2,
    height -
    30
  );

  ctx.textAlign =
    'left';
}


async function drawMemberIdentityCanvasV82(
  data
) {
  const canvas =
    document.getElementById(
      'identityCanvasV82'
    );

  canvas.width =
    1600;

  canvas.height =
    1000;

  const ctx =
    canvas.getContext(
      '2d'
    );

  const member =
    data.member;

  const [
    logo,
    photo
  ] =
    await Promise.all([
      loadCanvasImageV82(
        data.logoDataUrl
      ),
      loadCanvasImageV82(
        member.photoDataUrl
      )
    ]);

  const gradient =
    ctx.createLinearGradient(
      0,
      0,
      1600,
      1000
    );

  gradient.addColorStop(
    0,
    '#3D0710'
  );

  gradient.addColorStop(
    .52,
    '#650A15'
  );

  gradient.addColorStop(
    1,
    '#1F1618'
  );

  ctx.fillStyle =
    gradient;

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle =
    'rgba(255,255,255,.05)';

  ctx.beginPath();

  ctx.arc(
    1450,
    50,
    410,
    0,
    Math.PI *
    2
  );

  ctx.fill();

  drawIdentityLogoV82(
    ctx,
    logo,
    90,
    75,
    110
  );

  ctx.fillStyle =
    '#E6C9CE';

  ctx.font =
    '700 24px Arial';

  ctx.fillText(
    data.cardTitle,
    235,
    108
  );

  ctx.fillStyle =
    '#FFFFFF';

  ctx.font =
    '800 43px Arial';

  ctx.fillText(
    data.church,
    235,
    158
  );

  // Photo
  const photoX =
    90;

  const photoY =
    270;

  const photoW =
    390;

  const photoH =
    500;

  ctx.fillStyle =
    '#F0E4E6';

  canvasRoundRectV82(
    ctx,
    photoX,
    photoY,
    photoW,
    photoH,
    45
  );

  ctx.fill();

  if (photo) {
    drawCoverImageV82(
      ctx,
      photo,
      photoX,
      photoY,
      photoW,
      photoH,
      45
    );
  }
  else {
    ctx.fillStyle =
      '#650A15';

    ctx.font =
      '900 95px Arial';

    ctx.textAlign =
      'center';

    ctx.fillText(
      initials(
        member.fullName
      ),
      photoX +
      photoW /
      2,
      photoY +
      photoH /
      2 +
      30
    );

    ctx.textAlign =
      'left';
  }

  // Member identity
  ctx.fillStyle =
    '#DAB7BE';

  ctx.font =
    '700 23px Arial';

  ctx.fillText(
    member.memberNumber
      ? (
          'NO. ANGGOTA · ' +
          member.memberNumber
        )
      : 'ANGGOTA JEMAAT',
    555,
    300
  );

  ctx.fillStyle =
    '#FFFFFF';

  ctx.font =
    '800 64px Arial';

  wrapCanvasTextV82(
    ctx,
    member.fullName,
    555,
    380,
    930,
    72,
    2
  );

  ctx.fillStyle =
    '#E9CDD2';

  ctx.font =
    '700 29px Arial';

  ctx.fillText(
    (
      member.familyName
        ? (
            'Keluarga ' +
            member.familyName
          )
        : 'Nama keluarga belum diisi'
    ) +
    (
      member.familyRole
        ? (
            ' · ' +
            member.familyRole
          )
        : ''
    ),
    555,
    535
  );

  const info = [
    [
      'TEMPAT / TANGGAL LAHIR',
      [
        member.birthPlace,
        member.birthDate
          ? dateLabel(
              member.birthDate
            )
          : ''
      ]
      .filter(Boolean)
      .join(', ') ||
      '—'
    ],
    [
      'NOMOR TELEPON',
      member.phone ||
      '—'
    ],
    [
      'ALAMAT',
      member.address ||
      '—'
    ],
    [
      'STATUS KEANGGOTAAN',
      member.status ||
      'Aktif'
    ]
  ];

  let y =
    620;

  info.forEach(
    (
      pair,
      index
    ) => {
      const x =
        index %
          2 ===
          0
          ? 555
          : 1030;

      if (
        index ===
        2
      ) {
        y =
          770;
      }

      const yy =
        index <
          2
          ? 620
          : 770;

      ctx.fillStyle =
        'rgba(255,255,255,.48)';

      ctx.font =
        '700 20px Arial';

      ctx.fillText(
        pair[0],
        x,
        yy
      );

      ctx.fillStyle =
        '#FFFFFF';

      ctx.font =
        '600 29px Arial';

      wrapCanvasTextV82(
        ctx,
        pair[1],
        x,
        yy +
        42,
        420,
        34,
        2
      );
    }
  );

  ctx.fillStyle =
    'rgba(255,255,255,.35)';

  ctx.font =
    '500 18px Arial';

  ctx.fillText(
    'Identitas administrasi internal jemaat · bukan dokumen identitas pemerintah',
    90,
    900
  );

  drawExportStampV82(
    ctx,
    data.exportStamp,
    canvas.width,
    canvas.height
  );
}


async function drawFamilyIdentityCanvasV82(
  data
) {
  const canvas =
    document.getElementById(
      'identityCanvasV82'
    );

  const cols =
    2;

  const rows =
    Math.ceil(
      data.members.length /
      cols
    );

  canvas.width =
    1600;

  canvas.height =
    Math.max(
      1100,
      410 +
      rows *
      320
    );

  const ctx =
    canvas.getContext(
      '2d'
    );

  const logo =
    await loadCanvasImageV82(
      data.logoDataUrl
    );

  const photos =
    await Promise.all(
      data.members.map(
        item =>
          loadCanvasImageV82(
            item.photoDataUrl
          )
      )
    );

  const gradient =
    ctx.createLinearGradient(
      0,
      0,
      1600,
      canvas.height
    );

  gradient.addColorStop(
    0,
    '#3D0710'
  );

  gradient.addColorStop(
    .4,
    '#650A15'
  );

  gradient.addColorStop(
    1,
    '#201719'
  );

  ctx.fillStyle =
    gradient;

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  drawIdentityLogoV82(
    ctx,
    logo,
    90,
    70,
    110
  );

  ctx.fillStyle =
    '#E6C9CE';

  ctx.font =
    '700 24px Arial';

  ctx.fillText(
    data.cardTitle,
    235,
    104
  );

  ctx.fillStyle =
    '#FFFFFF';

  ctx.font =
    '800 58px Arial';

  ctx.fillText(
    'Keluarga ' +
    data.familyName,
    235,
    168
  );

  ctx.fillStyle =
    'rgba(255,255,255,.55)';

  ctx.font =
    '500 24px Arial';

  ctx.fillText(
    data.church +
    ' · ' +
    data.members.length +
    ' anggota',
    235,
    212
  );

  data.members.forEach(
    (
      member,
      index
    ) => {
      const col =
        index %
        cols;

      const row =
        Math.floor(
          index /
          cols
        );

      const x =
        90 +
        col *
        735;

      const y =
        300 +
        row *
        320;

      const width =
        690;

      const height =
        275;

      ctx.fillStyle =
        'rgba(255,255,255,.095)';

      canvasRoundRectV82(
        ctx,
        x,
        y,
        width,
        height,
        34
      );

      ctx.fill();

      const photoX =
        x +
        25;

      const photoY =
        y +
        25;

      const photoW =
        170;

      const photoH =
        225;

      ctx.fillStyle =
        '#F0E4E6';

      canvasRoundRectV82(
        ctx,
        photoX,
        photoY,
        photoW,
        photoH,
        28
      );

      ctx.fill();

      if (
        photos[
          index
        ]
      ) {
        drawCoverImageV82(
          ctx,
          photos[
            index
          ],
          photoX,
          photoY,
          photoW,
          photoH,
          28
        );
      }
      else {
        ctx.fillStyle =
          '#650A15';

        ctx.font =
          '900 48px Arial';

        ctx.textAlign =
          'center';

        ctx.fillText(
          initials(
            member.fullName
          ),
          photoX +
          photoW /
          2,
          photoY +
          photoH /
          2 +
          15
        );

        ctx.textAlign =
          'left';
      }

      ctx.fillStyle =
        '#E5C6CC';

      ctx.font =
        '700 18px Arial';

      ctx.fillText(
        (
          member.familyRole ||
          'Anggota'
        )
        .toUpperCase(),
        x +
        225,
        y +
        62
      );

      ctx.fillStyle =
        '#FFFFFF';

      ctx.font =
        '800 31px Arial';

      wrapCanvasTextV82(
        ctx,
        member.fullName,
        x +
        225,
        y +
        110,
        425,
        36,
        2
      );

      ctx.fillStyle =
        'rgba(255,255,255,.54)';

      ctx.font =
        '500 18px Arial';

      const detail = [
        member.memberNumber
          ? (
              'No. ' +
              member.memberNumber
            )
          : '',
        [
          member.birthPlace,
          member.birthDate
            ? dateLabel(
                member.birthDate
              )
            : ''
        ]
        .filter(Boolean)
        .join(', '),
        member.phone ||
        ''
      ]
      .filter(Boolean);

      detail.forEach(
        (
          text,
          detailIndex
        ) => {
          ctx.fillText(
            text,
            x +
            225,
            y +
            185 +
            detailIndex *
            28
          );
        }
      );
    }
  );

  ctx.fillStyle =
    'rgba(255,255,255,.34)';

  ctx.font =
    '500 18px Arial';

  ctx.fillText(
    'Kartu keluarga administrasi internal jemaat · bukan Kartu Keluarga pemerintah',
    90,
    canvas.height -
    72
  );

  drawExportStampV82(
    ctx,
    data.exportStamp,
    canvas.width,
    canvas.height
  );
}


function downloadIdentityPngV82() {
  const identity =
    state.identityV82;

  if (!identity) {
    return;
  }

  const canvas =
    document.getElementById(
      'identityCanvasV82'
    );

  const data =
    identity.data;

  const fileName =
    identity.mode ===
      'member'
      ? (
          'Kartu_Jemaat_' +
          safeClientFileV82(
            data.member.fullName
          ) +
          '.png'
        )
      : (
          'Kartu_Keluarga_Jemaat_' +
          safeClientFileV82(
            data.familyName
          ) +
          '.png'
        );

  canvas.toBlob(
    blob => {
      if (!blob) {
        toast(
          'PNG gagal dibuat.'
        );

        return;
      }

      const url =
        URL.createObjectURL(
          blob
        );

      const link =
        document.createElement(
          'a'
        );

      link.href =
        url;

      link.download =
        fileName;

      document.body.appendChild(
        link
      );

      link.click();

      link.remove();

      setTimeout(
        () =>
          URL.revokeObjectURL(
            url
          ),
        1200
      );

      toast(
        'PNG berhasil dibuat.'
      );
    },
    'image/png',
    1
  );
}


function safeClientFileV82(
  text
) {
  return String(
    text ||
    'data'
  )
  .normalize(
    'NFKD'
  )
  .replace(
    /[^\w\s-]/g,
    ''
  )
  .trim()
  .replace(
    /\s+/g,
    '_'
  )
  .slice(
    0,
    80
  );
}


function downloadIdentityPdfV82() {
  const identity =
    state.identityV82;

  if (!identity) {
    return;
  }

  showLoader();

  const runner =
    google.script.run
      .withSuccessHandler(
        result => {
          hideLoader();

          downloadBase64FileV8(
            result
          );

          toast(
            'PDF berhasil dibuat.'
          );
        }
      )
      .withFailureHandler(
        error => {
          hideLoader();

          notifyErrorV88(error);
        }
      );

  if (
    identity.mode ===
    'member'
  ) {
    runner.generateMemberIdentityPdfV82(
      identity.id
    );
  }
  else {
    runner.generateFamilyIdentityPdfV82(
      identity.familyName
    );
  }
}





/* =========================================================
   V8.4.0 — RESPONSIVE ISLAND SAFETY
========================================================= */

function normalizeDynamicIslandViewportV821() {
  const island =
    document.getElementById(
      'dynamicIsland'
    );

  if (!island) {
    return;
  }

  if (
    island.classList.contains(
      'open'
    )
  ) {
    const expand =
      island.querySelector(
        '.island-expand'
      );

    if (expand) {
      const viewport =
        window.visualViewport
          ? window.visualViewport.height
          : window.innerHeight;

      const compact =
        island.querySelector(
          '.island-compact'
        );

      const compactHeight =
        compact
          ? compact.getBoundingClientRect().height
          : 58;

      expand.style.maxHeight =
        Math.max(
          220,
          viewport -
          compactHeight -
          54
        ) +
        'px';
    }
  }
}


window.addEventListener(
  'resize',
  normalizeDynamicIslandViewportV821,
  {
    passive:
      true
  }
);


if (
  window.visualViewport
) {
  window.visualViewport.addEventListener(
    'resize',
    normalizeDynamicIslandViewportV821,
    {
      passive:
        true
    }
  );
}




document.addEventListener('DOMContentLoaded',()=>{if(!state.authV84.token)showAuthGateV84();});

/* =========================================================
   UTILS
========================================================= */

function money(
  value
) {
  return new Intl
    .NumberFormat(
      'id-ID',
      {
        style:
          'currency',

        currency:
          'IDR',

        maximumFractionDigits:
          0
      }
    )
    .format(
      Number(
        value ||
        0
      )
    );
}


function dateLabel(
  value
) {
  if (!value) {
    return '-';
  }

  const date =
    new Date(
      value +
      'T12:00:00'
    );

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return String(
      value
    );
  }

  return date
    .toLocaleDateString(
      'id-ID',
      {
        day:
          '2-digit',

        month:
          'long',

        year:
          'numeric'
      }
    );
}


function dateTimeLabel(
  value
) {
  if (!value) {
    return '-';
  }

  const date =
    new Date(
      value
    );

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return String(
      value
    );
  }

  return date
    .toLocaleString(
      'id-ID',
      {
        day:
          '2-digit',

        month:
          'short',

        year:
          'numeric',

        hour:
          '2-digit',

        minute:
          '2-digit'
      }
    );
}


function localIsoDate(
  date
) {
  const y =
    date.getFullYear();

  const m =
    String(
      date.getMonth() +
      1
    )
    .padStart(
      2,
      '0'
    );

  const d =
    String(
      date.getDate()
    )
    .padStart(
      2,
      '0'
    );

  return (
    y +
    '-' +
    m +
    '-' +
    d
  );
}


function initials(
  name
) {
  return String(
    name ||
    'Jemaat'
  )
  .trim()
  .split(/\s+/)
  .slice(
    0,
    2
  )
  .map(
    item =>
      item.charAt(
        0
      )
  )
  .join('')
  .toUpperCase();
}


function setText(
  id,
  value
) {
  const element =
    document.getElementById(
      id
    );

  if (element) {
    element.textContent =
      value;
  }
}


function esc(
  value
) {
  return String(
    value ??
    ''
  )
  .replaceAll(
    '&',
    '&amp;'
  )
  .replaceAll(
    '<',
    '&lt;'
  )
  .replaceAll(
    '>',
    '&gt;'
  )
  .replaceAll(
    '"',
    '&quot;'
  )
  .replaceAll(
    "'",
    '&#039;'
  );
}


function escJs(
  value
) {
  return String(
    value ??
    ''
  )
  .replaceAll(
    '\\',
    '\\\\'
  )
  .replaceAll(
    "'",
    "\\'"
  );
}


function capitalize(
  text
) {
  if (!text) {
    return '';
  }

  return (
    text.charAt(0)
      .toUpperCase() +
    text.slice(1)
  );
}


function statusClass(
  status
) {
  const text =
    String(
      status ||
      ''
    )
    .toLowerCase();

  if (
    [
      'disetujui',
      'selesai',
      'aktif',
      'diterima'
    ]
    .includes(
      text
    )
  ) {
    return 'approved';
  }

  if (
    [
      'rusak',
      'ditolak',
      'mendesak'
    ]
    .includes(
      text
    )
  ) {
    return 'danger';
  }

  return '';
}


function emptyState(
  text
) {
  const addMap = {
    rapat:
      'notulen',
    usulan:
      'usulan',
    keputusan:
      'keputusan',
    tindak_lanjut:
      'tindak_lanjut',
    program:
      'program',
    rapbj:
      'rapbj',
    keuangan:
      'keuangan',
    inventaris:
      'inventaris',
    pengurus:
      'pengurus',
    jemaat:
      'jemaat',
    dokumen:
      'dokumen'
  };

  const entity =
    addMap[
      state.page
    ];

  return `
    <div class="empty-state empty-state-v7">

      <div class="empty-symbol-v7">
        <i></i>
        <b></b>
      </div>

      <strong>
        ${esc(text)}
      </strong>

      ${
        entity
          ? `
            <button
              onclick="quickCreateV7('${entity}')">
              + Buat data pertama
            </button>
          `
          : ''
      }

    </div>
  `;
}


function normalizePhone(
  value
) {
  let phone =
    String(
      value ||
      ''
    )
    .replace(
      /[^\d+]/g,
      ''
    );

  if (
    phone.startsWith(
      '+'
    )
  ) {
    phone =
      phone.substring(
        1
      );
  }

  if (
    phone.startsWith(
      '0'
    )
  ) {
    phone =
      '62' +
      phone.substring(
        1
      );
  }

  return phone;
}


function errorMessage(error) {
  const message=String(error?.message || error || '');
  if(/AUTH_REQUIRED|AUTH_EXPIRED|session.*expired/i.test(message))return 'Sesi masuk sudah habis. Silakan masuk lagi.';
  if(/fetch|network|timeout|timed out|Failed to|HTTP 5|non-JSON|Proxy error/i.test(message))return 'Sambungan terputus. Periksa internet, lalu coba lagi.';
  if(/ReferenceError|TypeError|is not defined|Cannot read|Script function not found/i.test(message))return 'Bagian ini belum bisa dijalankan. Coba muat ulang atau hubungi pengelola aplikasi.';
  return message.replace(/^Exception:\s*/,'').replace(/Anda tidak memiliki izin/g,'Akun ini belum punya izin').replace(/terlebih dahulu/g,'dulu') || 'Ada masalah saat memproses data. Coba lagi.';
}

function fileToPayload(
  file
) {
  return new Promise(
    (
      resolve,
      reject
    ) => {
      const reader =
        new FileReader();

      reader.onload =
        () => {
          const value =
            String(
              reader.result ||
              ''
            );

          const comma =
            value.indexOf(
              ','
            );

          if (
            comma ===
            -1
          ) {
            reject(
              new Error(
                'File tidak dapat dibaca.'
              )
            );

            return;
          }

          resolve({
            name:
              file.name,

            mimeType:
              file.type,

            base64:
              value.substring(
                comma +
                1
              )
          });
        };

      reader.onerror =
        () => {
          reject(
            new Error(
              'Gagal membaca file.'
            )
          );
        };

      reader.readAsDataURL(
        file
      );
    }
  );
}


/* =========================================================
   TOAST / LOADER
========================================================= */

function toast(text, options={}) {
  const element=document.getElementById('toast');
  if(!element)return;
  clearTimeout(element._timer);
  const kind=options.kind || (/gagal|tidak (?:bisa|dapat|ditemukan)|belum (?:berhasil|tersimpan)|wajib|maksimal|harus|izin|ditolak|kesalahan/i.test(String(text))?'error':'success');
  element.dataset.kind=kind;
  element.setAttribute('role',kind==='error'?'alert':'status');
  element.replaceChildren();
  const message=document.createElement('span');message.textContent=text;element.appendChild(message);
  if(options.retry){const retry=document.createElement('button');retry.type='button';retry.textContent='Coba lagi';retry.onclick=()=>{element.classList.remove('show');options.retry();};element.appendChild(retry);}
  if(kind==='error'){const close=document.createElement('button');close.type='button';close.textContent='Tutup';close.onclick=()=>element.classList.remove('show');element.appendChild(close);}
  element.classList.add('show');
  if(kind!=='error')element._timer=setTimeout(()=>element.classList.remove('show'),4000);
}

function showLoader() {
  document
    .getElementById(
      'loader'
    )
    .classList.remove(
      'hide'
    );
}


function hideLoader() {
  setTimeout(
    () => {
      document
        .getElementById(
          'loader'
        )
        .classList.add(
          'hide'
        );
    },
    250
  );
}


function showFatal(
  message
) {
  clearTimeout(
    state.timeout
  );

  document
    .getElementById(
      'loader'
    )
    .classList.add(
      'hide'
    );

  setText(
    'fatalMessage',
    message
  );

  document
    .getElementById(
      'fatalError'
    )
    .classList.add(
      'show'
    );
}


function cycleLoadingText() {
  const texts = [
    'Memuat data…',
    'Memuat data…',
    'Masih memuat data…',
    'Tunggu sebentar…'
  ];

  let index = 0;

  setInterval(
    () => {
      index =
        (
          index +
          1
        ) %
        texts.length;

      setText(
        'loadingText',
        texts[
          index
        ]
      );
    },
    1250
  );
}

