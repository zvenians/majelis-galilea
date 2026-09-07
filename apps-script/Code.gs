/* MAJELIS GALILEA BACKEND V6.0.0 — SINGLE FILE */

const APP = {
  NAME: 'MAJELIS GALILEA',
  TZ: 'Asia/Makassar',
  VERSION: '8.4.0',

  SOURCES: [
    'Kas Jemaat',
    'Sumbangan',
    'Uang Pembangunan'
  ],

  SHEETS: {
    NOTULEN: 'NOTULEN',
    AGENDA: 'AGENDA',
    KEHADIRAN: 'KEHADIRAN',
    USULAN: 'USULAN_AGENDA',
    KEPUTUSAN: 'KEPUTUSAN',
    TINDAK_LANJUT: 'TINDAK_LANJUT',
    KEUANGAN: 'KEUANGAN',
    FINANCE_PERIODS: 'KEUANGAN_PERIODE',
    FINANCE_RECON: 'KEUANGAN_REKONSILIASI',
    FINANCE_AUDIT: 'KEUANGAN_AUDIT',
    RAPBJ: 'RAPBJ',
    PROGRAM: 'PROGRAM_KERJA',
    DEPARTEMEN: 'DEPARTEMEN',
    INVENTARIS: 'INVENTARIS',
    PENGURUS: 'PENGURUS',
    JEMAAT: 'ANGGOTA_JEMAAT',
    DOKUMEN: 'DOKUMEN',
    SURAT: 'SURAT_KELUAR',
    ACCESS: 'AKSES_ROLE',
    ATTACHMENTS: 'ATTACHMENTS',
    DRAFTS: 'DRAFTS',
    SETTING: 'SETTING',
    LOG: 'LOG'
  },

  SCHEMA: {
    NOTULEN: [
      'ID_NOTULEN',
      'TAHUN',
      'TANGGAL',
      'JUDUL',
      'JENIS_RAPAT',
      'WAKTU_MULAI',
      'WAKTU_SELESAI',
      'TEMPAT',
      'PIMPINAN_RAPAT',
      'NOTULIS',
      'STATUS',
      'APPROVAL_NOTE',
      'APPROVED_BY',
      'APPROVED_AT',
      'LOCKED',
      'CATATAN',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    AGENDA: [
      'ID_AGENDA',
      'ID_NOTULEN',
      'NO_URUT',
      'AGENDA',
      'PEMBAHASAN',
      'KEPUTUSAN',
      'PIC',
      'DEPARTEMEN',
      'DEADLINE',
      'ANGGARAN',
      'SUMBER_DANA',
      'STATUS',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    KEHADIRAN: [
      'ID_KEHADIRAN',
      'ID_NOTULEN',
      'ID_PENGURUS',
      'NAMA',
      'JABATAN',
      'STATUS_KEHADIRAN',
      'KETERANGAN',
      'UPDATED_AT'
    ],

    USULAN_AGENDA: [
      'ID_USULAN',
      'TAHUN',
      'TANGGAL_USUL',
      'PENGUSUL',
      'DEPARTEMEN',
      'JUDUL_USULAN',
      'LATAR_BELAKANG',
      'ESTIMASI_ANGGARAN',
      'SUMBER_DANA',
      'STATUS',
      'ID_NOTULEN',
      'ID_AGENDA',
      'CATATAN',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    KEPUTUSAN: [
      'ID_KEPUTUSAN',
      'TAHUN',
      'ID_NOTULEN',
      'ID_AGENDA',
      'NO_KEPUTUSAN',
      'KEPUTUSAN',
      'PIC',
      'DEPARTEMEN',
      'TARGET_SELESAI',
      'PRIORITAS',
      'STATUS',
      'ANGGARAN',
      'SUMBER_DANA',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    TINDAK_LANJUT: [
      'ID_TINDAK_LANJUT',
      'TAHUN',
      'ID_KEPUTUSAN',
      'ID_NOTULEN',
      'PIC',
      'DEPARTEMEN',
      'URAIAN',
      'TARGET_SELESAI',
      'STATUS',
      'PROGRESS',
      'CATATAN',
      'UPDATED_AT',
      'UPDATED_BY'
    ],

    KEUANGAN: [
      'ID_TRANSAKSI',
      'NO_TRANSAKSI',
      'TAHUN',
      'TANGGAL',
      'JENIS',
      'SUMBER_DANA',
      'DEPARTEMEN',
      'KATEGORI',
      'DESKRIPSI',
      'ID_NOTULEN',
      'ID_AGENDA',
      'ID_RAPBJ',
      'NOMINAL',
      'CATATAN',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    KEUANGAN_PERIODE: [
      'ID_PERIODE',
      'TAHUN',
      'BULAN',
      'STATUS',
      'CATATAN_BENDAHARA',
      'VERIFIED_BY',
      'VERIFIED_AT',
      'FINALIZED_BY',
      'FINALIZED_AT',
      'IS_CLOSED',
      'CLOSED_BY',
      'CLOSED_AT',
      'REOPEN_NOTE',
      'UPDATED_AT'
    ],

    KEUANGAN_REKONSILIASI: [
      'ID_REKON',
      'TAHUN',
      'BULAN',
      'SUMBER_DANA',
      'SALDO_SISTEM',
      'SALDO_AKTUAL',
      'SELISIH',
      'CATATAN',
      'STATUS',
      'UPDATED_BY',
      'UPDATED_AT'
    ],

    KEUANGAN_AUDIT: [
      'TIMESTAMP',
      'USER',
      'ID_TRANSAKSI',
      'NO_TRANSAKSI',
      'ACTION',
      'CHANGES_JSON',
      'SNAPSHOT_JSON'
    ],

    RAPBJ: [
      'ID_RAPBJ',
      'TAHUN',
      'DEPARTEMEN',
      'PROGRAM_ATAU_POS',
      'KATEGORI',
      'SUMBER_DANA',
      'ANGGARAN',
      'CATATAN',
      'STATUS',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    PROGRAM_KERJA: [
      'ID_PROGRAM',
      'TAHUN',
      'DEPARTEMEN',
      'NAMA_PROGRAM',
      'DESKRIPSI',
      'PIC',
      'TANGGAL_MULAI',
      'TANGGAL_SELESAI',
      'ID_RAPBJ',
      'ANGGARAN',
      'SUMBER_DANA',
      'REALISASI',
      'STATUS',
      'CATATAN',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    DEPARTEMEN: [
      'ID_DEPARTEMEN',
      'NAMA_DEPARTEMEN',
      'KETUA',
      'STATUS',
      'URUTAN',
      'UPDATED_AT'
    ],

    INVENTARIS: [
      'ID_INVENTARIS',
      'NAMA_BARANG',
      'KATEGORI',
      'JUMLAH',
      'KONDISI',
      'LOKASI',
      'TANGGAL_PEROLEHAN',
      'NILAI',
      'STATUS',
      'CATATAN',
      'UPDATED_AT'
    ],

    PENGURUS: [
      'ID_PENGURUS',
      'NAMA',
      'JABATAN',
      'DEPARTEMEN',
      'NO_WHATSAPP',
      'EMAIL',
      'FOTO_URL',
      'FOTO_FILE_ID',
      'STATUS',
      'URUTAN',
      'UPDATED_AT'
    ],

    ANGGOTA_JEMAAT: [
      'ID_ANGGOTA',
      'NOMOR_ANGGOTA',
      'NAMA',
      'NAMA_KELUARGA',
      'POSISI_KELUARGA',
      'KELUARGA',
      'TEMPAT_LAHIR',
      'TANGGAL_LAHIR',
      'TANGGAL_BAPTIS',
      'TANGGAL_BERGABUNG',
      'NO_TELEPON',
      'NO_WHATSAPP',
      'EMAIL',
      'ALAMAT',
      'FOTO_URL',
      'FOTO_FILE_ID',
      'STATUS',
      'CATATAN',
      'UPDATED_AT'
    ],

    DOKUMEN: [
      'ID_DOKUMEN',
      'TAHUN',
      'TANGGAL',
      'KATEGORI',
      'JUDUL',
      'NOMOR_DOKUMEN',
      'DESKRIPSI',
      'FILE_NAME',
      'FILE_URL',
      'FILE_ID',
      'STATUS',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    SURAT_KELUAR: [
      'ID_SURAT',
      'TAHUN',
      'TANGGAL_SURAT',
      'KATEGORI',
      'KODE_KATEGORI',
      'NOMOR_SURAT',
      'LAMPIRAN',
      'TUJUAN_NAMA',
      'TUJUAN_JABATAN',
      'TUJUAN_INSTANSI',
      'TUJUAN_ALAMAT',
      'PERIHAL',
      'SUBJEK_NAMA',
      'SUBJEK_IDENTITAS',
      'KEPERLUAN',
      'TEMPAT_KEGIATAN',
      'TANGGAL_MULAI',
      'TANGGAL_SELESAI',
      'ISI_SURAT',
      'SIGNER_1_NAME',
      'SIGNER_1_ROLE',
      'SIGNER_1_FILE_ID',
      'SIGNER_2_NAME',
      'SIGNER_2_ROLE',
      'SIGNER_2_FILE_ID',
      'SIGNER_3_NAME',
      'SIGNER_3_ROLE',
      'SIGNER_3_FILE_ID',
      'PDF_FILE_ID',
      'PDF_URL',
      'STATUS',
      'CREATED_AT',
      'UPDATED_AT'
    ],

    AKSES_ROLE: [
      'ID_USER','USERNAME','NAMA','ROLE','PIN_HASH','STATUS',
      'CREATED_AT','UPDATED_AT','LAST_LOGIN','LEVEL'
    ],

    ATTACHMENTS: [
      'ID_ATTACHMENT',
      'ENTITY_TYPE',
      'ENTITY_ID',
      'JUDUL',
      'FILE_NAME',
      'FILE_URL',
      'FILE_ID',
      'MIME_TYPE',
      'CREATED_AT'
    ],

    DRAFTS: [
      'ID_DRAFT',
      'ENTITY',
      'REFERENCE_ID',
      'TAHUN',
      'TITLE',
      'PAYLOAD_JSON',
      'UPDATED_AT',
      'UPDATED_BY'
    ],

    SETTING: [
      'KEY',
      'VALUE'
    ],

    LOG: [
      'TIMESTAMP',
      'USER',
      'ACTION',
      'ENTITY',
      'REFERENCE_ID',
      'DESCRIPTION'
    ]
  },

  ENTITY: {
    notulen: {
      sheet: 'NOTULEN',
      id: 'ID_NOTULEN',
      prefix: 'NTL'
    },
    agenda: {
      sheet: 'AGENDA',
      id: 'ID_AGENDA',
      prefix: 'AGD'
    },
    kehadiran: {
      sheet: 'KEHADIRAN',
      id: 'ID_KEHADIRAN',
      prefix: 'HDR'
    },
    usulan: {
      sheet: 'USULAN_AGENDA',
      id: 'ID_USULAN',
      prefix: 'USL'
    },
    keputusan: {
      sheet: 'KEPUTUSAN',
      id: 'ID_KEPUTUSAN',
      prefix: 'KPT'
    },
    tindak_lanjut: {
      sheet: 'TINDAK_LANJUT',
      id: 'ID_TINDAK_LANJUT',
      prefix: 'TL'
    },
    keuangan: {
      sheet: 'KEUANGAN',
      id: 'ID_TRANSAKSI',
      prefix: 'TRX'
    },
    rapbj: {
      sheet: 'RAPBJ',
      id: 'ID_RAPBJ',
      prefix: 'RAP'
    },
    program: {
      sheet: 'PROGRAM_KERJA',
      id: 'ID_PROGRAM',
      prefix: 'PRG'
    },
    departemen: {
      sheet: 'DEPARTEMEN',
      id: 'ID_DEPARTEMEN',
      prefix: 'DPT'
    },
    inventaris: {
      sheet: 'INVENTARIS',
      id: 'ID_INVENTARIS',
      prefix: 'INV'
    },
    pengurus: {
      sheet: 'PENGURUS',
      id: 'ID_PENGURUS',
      prefix: 'PGR'
    },
    jemaat: {
      sheet: 'ANGGOTA_JEMAAT',
      id: 'ID_ANGGOTA',
      prefix: 'JMT'
    },
    dokumen: {
      sheet: 'DOKUMEN',
      id: 'ID_DOKUMEN',
      prefix: 'DOC'
    }
  }
};


function doGet(e) {
  e=e||{parameter:{}};
  const p=e.parameter||{};
  if(p.api==='viewer'){
    const data=getPublicViewerDataV84({year:p.year});
    const cb=String(p.callback||'').replace(/[^A-Za-z0-9_.$]/g,'');
    if(cb){
      return ContentService.createTextOutput(cb+'('+JSON.stringify(data)+');')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return renderMainAppV84_();
}


/**
 * doPost() — HTTP POST handler for Vercel API proxy.
 * Receives JSON with { action: 'functionName', args: [...] }
 * and dispatches to the corresponding Apps Script function.
 */
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const action = String(body.action || '');
    const args = body.args || [];

    if (!action) {
      return jsonResponse_({ __error__: 'Missing action parameter' });
    }

    // Whitelist of callable functions from Vercel proxy
    const ALLOWED = {
      // Auth
      loginMajelisV84: loginMajelisV84,
      logoutMajelisV84: logoutMajelisV84,
      getAuthContextV84: getAuthContextV84,
      // Access management
      listAccessUsersV84: listAccessUsersV84,
      saveAccessUserV84: saveAccessUserV84,
      deleteAccessUserV84: deleteAccessUserV84,
      // Data
      getBackendStatus: getBackendStatus,
      getSecureAppDataV84: getSecureAppDataV84,
      getPublicViewerDataV84: getPublicViewerDataV84,
      getAppData: getAppData,
      getNotulenDetail: getNotulenDetail,
      getAuditLog: getAuditLog,
      getCrudContractV83: getCrudContractV83,
      // CRUD
      saveEntity: saveEntity,
      // Special features
      reviewNotulen: typeof reviewNotulen !== 'undefined' ? reviewNotulen : null,
      initializeAttendance: typeof initializeAttendance !== 'undefined' ? initializeAttendance : null,
      approveAgendaProposal: typeof approveAgendaProposal !== 'undefined' ? approveAgendaProposal : null,
      // Finance
      setFinanceReportStatusV8: typeof setFinanceReportStatusV8 !== 'undefined' ? setFinanceReportStatusV8 : null,
      closeFinancePeriodV8: typeof closeFinancePeriodV8 !== 'undefined' ? closeFinancePeriodV8 : null,
      reopenFinancePeriodV8: typeof reopenFinancePeriodV8 !== 'undefined' ? reopenFinancePeriodV8 : null,
      saveFinanceReconciliationV8: typeof saveFinanceReconciliationV8 !== 'undefined' ? saveFinanceReconciliationV8 : null,
      setFinanceMinistryTargetsV702: typeof setFinanceMinistryTargetsV702 !== 'undefined' ? setFinanceMinistryTargetsV702 : null,
      getFinanceCommandCenterV8: typeof getFinanceCommandCenterV8 !== 'undefined' ? getFinanceCommandCenterV8 : null,
      generateFinanceMonthlyPdfV8: typeof generateFinanceMonthlyPdfV8 !== 'undefined' ? generateFinanceMonthlyPdfV8 : null,
      getFundLedgerV8: typeof getFundLedgerV8 !== 'undefined' ? getFundLedgerV8 : null,
      getFinanceReconciliationsV8: typeof getFinanceReconciliationsV8 !== 'undefined' ? getFinanceReconciliationsV8 : null,
      getFinancePeriodV8: typeof getFinancePeriodV8 !== 'undefined' ? getFinancePeriodV8 : null,
      getFinanceTransactionHistoryV8: typeof getFinanceTransactionHistoryV8 !== 'undefined' ? getFinanceTransactionHistoryV8 : null,
      // Secretary
      generateSecretaryLetterV81: typeof generateSecretaryLetterV81 !== 'undefined' ? generateSecretaryLetterV81 : null,
      deleteSecretaryLetterV81: typeof deleteSecretaryLetterV81 !== 'undefined' ? deleteSecretaryLetterV81 : null,
      getSecretaryLetterBootstrapV81: typeof getSecretaryLetterBootstrapV81 !== 'undefined' ? getSecretaryLetterBootstrapV81 : null,
      getNextLetterNumberV81: typeof getNextLetterNumberV81 !== 'undefined' ? getNextLetterNumberV81 : null,
      getSecretaryLetterTemplateV81: typeof getSecretaryLetterTemplateV81 !== 'undefined' ? getSecretaryLetterTemplateV81 : null,
      getBirthdayCenterV81: typeof getBirthdayCenterV81 !== 'undefined' ? getBirthdayCenterV81 : null,
      // Membership
      getMembershipFamiliesV82: typeof getMembershipFamiliesV82 !== 'undefined' ? getMembershipFamiliesV82 : null,
      getMemberIdentityDataV82: typeof getMemberIdentityDataV82 !== 'undefined' ? getMemberIdentityDataV82 : null,
      getFamilyIdentityDataV82: typeof getFamilyIdentityDataV82 !== 'undefined' ? getFamilyIdentityDataV82 : null,
      // Archive
      createAnnualArchive: typeof createAnnualArchive !== 'undefined' ? createAnnualArchive : null,
      // Settings
      uploadBrandLogo: typeof uploadBrandLogo !== 'undefined' ? uploadBrandLogo : null,
      saveSettingsCenterV8: typeof saveSettingsCenterV8 !== 'undefined' ? saveSettingsCenterV8 : null,
      // Attachments
      uploadAttachment: typeof uploadAttachment !== 'undefined' ? uploadAttachment : null,
      deleteAttachment: typeof deleteAttachment !== 'undefined' ? deleteAttachment : null,
      // PDF
      generatePdfReport: typeof generatePdfReport !== 'undefined' ? generatePdfReport : null,
      // V7 features
      globalSearchV7: typeof globalSearchV7 !== 'undefined' ? globalSearchV7 : null,
      getRelationshipGraphV7: typeof getRelationshipGraphV7 !== 'undefined' ? getRelationshipGraphV7 : null,
      saveDraftV7: typeof saveDraftV7 !== 'undefined' ? saveDraftV7 : null,
      getDraftV7: typeof getDraftV7 !== 'undefined' ? getDraftV7 : null,
      deleteDraftV7: typeof deleteDraftV7 !== 'undefined' ? deleteDraftV7 : null,
      getSmartCarryForwardV7: typeof getSmartCarryForwardV7 !== 'undefined' ? getSmartCarryForwardV7 : null,
      applyCarryForwardV7: typeof applyCarryForwardV7 !== 'undefined' ? applyCarryForwardV7 : null,
      getDashboardIntelligenceV7: typeof getDashboardIntelligenceV7 !== 'undefined' ? getDashboardIntelligenceV7 : null,
      getMeetingModeDataV7: typeof getMeetingModeDataV7 !== 'undefined' ? getMeetingModeDataV7 : null,
      getSystemHealthV7: typeof getSystemHealthV7 !== 'undefined' ? getSystemHealthV7 : null,
      // Missing Functions fixed from audit
      deleteEntity: typeof deleteEntity !== 'undefined' ? deleteEntity : null,
      downloadSecretaryLetterV81: typeof downloadSecretaryLetterV81 !== 'undefined' ? downloadSecretaryLetterV81 : null,
      generateFamilyIdentityPdfV82: typeof generateFamilyIdentityPdfV82 !== 'undefined' ? generateFamilyIdentityPdfV82 : null,
      generateMemberIdentityPdfV82: typeof generateMemberIdentityPdfV82 !== 'undefined' ? generateMemberIdentityPdfV82 : null,
      getCongregationViewerDataV8: typeof getCongregationViewerDataV8 !== 'undefined' ? getCongregationViewerDataV8 : null,
      getFilePreviewInfoV7: typeof getFilePreviewInfoV7 !== 'undefined' ? getFilePreviewInfoV7 : null,
      getFinanceRevisionDataV702: typeof getFinanceRevisionDataV702 !== 'undefined' ? getFinanceRevisionDataV702 : null,
      getNotificationCenterV8: typeof getNotificationCenterV8 !== 'undefined' ? getNotificationCenterV8 : null,
      getSettingsCenterV8: typeof getSettingsCenterV8 !== 'undefined' ? getSettingsCenterV8 : null,
      runCrudAlignmentSelfTestV83: typeof runCrudAlignmentSelfTestV83 !== 'undefined' ? runCrudAlignmentSelfTestV83 : null
    };

    if (!ALLOWED.hasOwnProperty(action) || !ALLOWED[action]) {
      return jsonResponse_({ __error__: 'Unknown or disabled action: ' + action });
    }

    const fn = ALLOWED[action];
    const result = fn.apply(null, args);
    return jsonResponse_({ result: result });

  } catch (error) {
    return jsonResponse_({ __error__: error.message || String(error) });
  }
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}


function renderMainAppV84_() {
  try {
    const template =
      HtmlService
        .createTemplateFromFile(
          'index'
        );

    template.logoUrl =
      getSettingSafe_(
        'LOGO_URL'
      );

    return template
      .evaluate()
      .setTitle(
        APP.NAME
      )
      .addMetaTag(
        'viewport',
        'width=device-width, initial-scale=1, maximum-scale=1'
      )
      .setXFrameOptionsMode(
        HtmlService
          .XFrameOptionsMode
          .ALLOWALL
      );
  }

  catch (error) {
    return HtmlService
      .createHtmlOutput(
        '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<style>body{font-family:Arial,sans-serif;background:#4b0710;color:#fff;display:grid;place-items:center;min-height:100vh;margin:0}main{max-width:560px;padding:32px}h1{margin:0 0 10px;font-size:34px}p{line-height:1.7;color:#eadadd}code{background:#fff;color:#4b0710;padding:4px 7px;border-radius:6px}</style></head><body><main>' +
        '<h1>MAJELIS GALILEA</h1>' +
        '<p>Backend <b>V' + APP.VERSION + '</b> aktif.</p>' +
        '<p>Frontend belum dipasang atau file <code>index.html</code> belum tersedia.</p>' +
        '</main></body></html>'
      )
      .setTitle(
        APP.NAME +
        ' Backend'
      );
  }
}


function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(
      filename
    )
    .getContent();
}


/**
 * Endpoint boot dengan nama unik agar tidak tertabrak
 * function lama jika project pernah memakai versi sebelumnya.
 */

/* ===== SETUP ===== */
function setupDatabase() {
  validateAppConfig_();

  /*
   * V6.0.1 — migration repair:
   * memperbaiki header duplikat peninggalan versi lama
   * sebelum setup validation / format dijalankan.
   */
  const schemaRepair =
    repairDuplicateHeadersV601_();

  const ss =
    SpreadsheetApp
      .getActiveSpreadsheet();

  if (!ss) {
    throw new Error(
      'Spreadsheet aktif tidak ditemukan. Buka Apps Script dari Spreadsheet melalui Extensions > Apps Script.'
    );
  }

  ss.setSpreadsheetTimeZone(
    APP.TZ
  );

  Object
    .keys(
      APP.SCHEMA
    )
    .forEach(sheetName => {
      ensureSheet_(
        sheetName,
        APP.SCHEMA[
          sheetName
        ]
      );
    });

  setupSettings_();
  setupValidations_();
  setupFormats_();
  seedDepartments_();
  backfillFinanceTransactionNumbersV8_();
  migrateMemberSchemaV82_();
  setupRoleAccessV84_();

  SpreadsheetApp.flush();

  return {
    success: true,
    version:
      APP.VERSION,
    schemaRepair:
      schemaRepair,
    message:
      'MAJELIS GALILEA Backend V' +
      APP.VERSION +
      ' siap digunakan.'
  };
}


function ensureSheet_(
  name,
  requiredHeaders
) {
  const ss =
    SpreadsheetApp
      .getActiveSpreadsheet();

  let sheet =
    ss.getSheetByName(
      name
    );

  if (!sheet) {
    sheet =
      ss.insertSheet(
        name
      );
  }

  let currentHeaders =
    [];

  if (
    sheet.getLastColumn() > 0 &&
    sheet.getMaxRows() > 0
  ) {
    currentHeaders =
      sheet
        .getRange(
          1,
          1,
          1,
          sheet.getLastColumn()
        )
        .getDisplayValues()[0]
        .map(String);
  }

  const emptyHeader =
    !currentHeaders.length ||
    currentHeaders.every(
      value =>
        !String(value)
          .trim()
    );

  if (emptyHeader) {
    sheet
      .getRange(
        1,
        1,
        1,
        requiredHeaders.length
      )
      .setValues([
        requiredHeaders
      ]);

    currentHeaders =
      [...requiredHeaders];
  }

  else {
    requiredHeaders
      .forEach(header => {
        if (
          !currentHeaders
            .includes(header)
        ) {
          const nextColumn =
            sheet.getLastColumn() +
            1;

          sheet
            .getRange(
              1,
              nextColumn
            )
            .setValue(
              header
            );

          currentHeaders
            .push(header);
        }
      });
  }

  sheet.setFrozenRows(1);

  sheet
    .getRange(
      1,
      1,
      1,
      sheet.getLastColumn()
    )
    .setBackground(
      '#650A15'
    )
    .setFontColor(
      '#FFFFFF'
    )
    .setFontWeight(
      'bold'
    )
    .setVerticalAlignment(
      'middle'
    )
    .setHorizontalAlignment(
      'center'
    );

  sheet.setRowHeight(
    1,
    42
  );

  return sheet;
}


function setupSettings_() {
  const defaults = {
    APP_NAME:
      APP.NAME,

    CHURCH_NAME:
      'GMAHK Jemaat Galilea Balikpapan',

    TIMEZONE:
      APP.TZ,

    VERSION:
      APP.VERSION,

    LOGO_URL:
      '',

    LOGO_FILE_ID:
      '',

    QUORUM_PERCENT:
      '50',

    ARCHIVE_FOLDER_NAME:
      'MAJELIS GALILEA - ARSIP',

    MEDIA_FOLDER_NAME:
      'MAJELIS GALILEA - MEDIA',

    DOCUMENT_FOLDER_NAME:
      'MAJELIS GALILEA - DOKUMEN',

    AUTO_DOC_NUMBER:
      'true',

    DOC_PREFIX_SK:
      'MG/SK',

    DOC_PREFIX_SM:
      'MG/SM',

    DOC_PREFIX_SKEL:
      'MG/SKEL',

    DOC_PREFIX_PROP:
      'MG/PROP',

    DOC_PREFIX_LAP:
      'MG/LAP',

    DOC_PREFIX_FORM:
      'MG/FORM',

    DOC_PREFIX_DOC:
      'MG/DOC',

    BACKUP_WARNING_DAYS:
      '45',

    TARGET_PERPULUHAN_BULANAN:
      '0',

    TARGET_PERSEMBAHAN_TERPADU_BULANAN:
      '0',

    FINANCE_REPORT_PREFIX:
      'MG/LK',

    FINANCE_TREASURER_NAME:
      '',

    FINANCE_CHAIR_NAME:
      '',

    VIEWER_SHOW_FINANCE:
      'true',

    VIEWER_SHOW_MINISTRY_PROGRESS:
      'true',

    VIEWER_SHOW_PROGRAMS:
      'true',

    VIEWER_SHOW_APPROVED_MEETINGS:
      'true',

    LETTER_DENOMINATION_NAME:
      'Gereja Masehi Advent Hari Ketujuh di Indonesia',

    LETTER_CHURCH_NAME:
      'GMAHK Galilea',

    LETTER_CITY:
      'Balikpapan',

    LETTER_ADDRESS:
      'Balikpapan, Kalimantan Timur',

    LETTER_CONTACT:
      '',

    LETTER_EMAIL:
      '',

    LETTER_OFFICIAL_LOGO_URL:
      'https://www.adventist.design/wp-content/uploads/2017/04/adventist_logo.png',

    LETTER_NUMBER_ORG:
      'GMAHK-GLA',

    LETTER_FOLDER_NAME:
      'MAJELIS GALILEA - SURAT KELUAR',

    LETTER_SIGNATURE_FOLDER_NAME:
      'MAJELIS GALILEA - TANDA TANGAN',

    LETTER_FOOTER_TEXT:
      'Sekretariat Jemaat - GMAHK Galilea Balikpapan',

    EXPORT_STAMP_TEXT:
      'diunduh dari website Majelis Galilea',

    MEMBER_CARD_TITLE:
      'KARTU IDENTITAS JEMAAT',

    FAMILY_CARD_TITLE:
      'KARTU KELUARGA JEMAAT'
  };

  Object.keys(
    defaults
  ).forEach(key => {
    if (
      getSettingSafe_(
        key
      ) === ''
    ) {
      setSetting_(
        key,
        defaults[key]
      );
    }
  });
}


function setupValidations_() {
  validation_(
    APP.SHEETS.NOTULEN,
    'STATUS',
    [
      'Draft',
      'Menunggu Persetujuan',
      'Disetujui',
      'Perlu Revisi'
    ]
  );

  validation_(
    APP.SHEETS.AGENDA,
    'SUMBER_DANA',
    APP.SOURCES
  );

  validation_(
    APP.SHEETS.AGENDA,
    'STATUS',
    [
      'Belum Dimulai',
      'Proses',
      'Selesai',
      'Ditunda'
    ]
  );

  validation_(
    APP.SHEETS.KEHADIRAN,
    'STATUS_KEHADIRAN',
    [
      'Hadir',
      'Izin',
      'Sakit',
      'Tidak Hadir'
    ]
  );

  validation_(
    APP.SHEETS.USULAN,
    'SUMBER_DANA',
    APP.SOURCES
  );

  validation_(
    APP.SHEETS.USULAN,
    'STATUS',
    [
      'Diajukan',
      'Diterima',
      'Ditolak',
      'Ditunda'
    ]
  );

  validation_(
    APP.SHEETS.KEPUTUSAN,
    'PRIORITAS',
    [
      'Rendah',
      'Normal',
      'Tinggi',
      'Mendesak'
    ]
  );

  validation_(
    APP.SHEETS.KEPUTUSAN,
    'STATUS',
    [
      'Aktif',
      'Proses',
      'Selesai',
      'Dibatalkan'
    ]
  );

  validation_(
    APP.SHEETS.KEPUTUSAN,
    'SUMBER_DANA',
    APP.SOURCES
  );

  validation_(
    APP.SHEETS.TINDAK_LANJUT,
    'STATUS',
    [
      'Belum Dimulai',
      'Proses',
      'Selesai',
      'Ditunda'
    ]
  );

  validation_(
    APP.SHEETS.KEUANGAN,
    'JENIS',
    [
      'Pemasukan',
      'Pengeluaran'
    ]
  );

  validation_(
    APP.SHEETS.KEUANGAN,
    'SUMBER_DANA',
    APP.SOURCES
  );

  validation_(
    APP.SHEETS.FINANCE_PERIODS,
    'STATUS',
    [
      'Draft',
      'Diverifikasi',
      'Final'
    ]
  );

  validation_(
    APP.SHEETS.FINANCE_RECON,
    'STATUS',
    [
      'Sesuai',
      'Selisih'
    ]
  );

  validation_(
    APP.SHEETS.RAPBJ,
    'SUMBER_DANA',
    APP.SOURCES
  );

  validation_(
    APP.SHEETS.RAPBJ,
    'STATUS',
    [
      'Draft',
      'Disetujui',
      'Direvisi'
    ]
  );

  validation_(
    APP.SHEETS.PROGRAM,
    'SUMBER_DANA',
    APP.SOURCES
  );

  validation_(
    APP.SHEETS.PROGRAM,
    'STATUS',
    [
      'Rencana',
      'Proses',
      'Selesai',
      'Ditunda',
      'Dibatalkan'
    ]
  );

  validation_(
    APP.SHEETS.DEPARTEMEN,
    'STATUS',
    [
      'Aktif',
      'Tidak Aktif'
    ]
  );

  validation_(
    APP.SHEETS.INVENTARIS,
    'KONDISI',
    [
      'Baik',
      'Perlu Perbaikan',
      'Rusak'
    ]
  );

  validation_(
    APP.SHEETS.INVENTARIS,
    'STATUS',
    [
      'Aktif',
      'Tidak Aktif'
    ]
  );

  validation_(
    APP.SHEETS.PENGURUS,
    'STATUS',
    [
      'Aktif',
      'Tidak Aktif'
    ]
  );

  validation_(
    APP.SHEETS.JEMAAT,
    'POSISI_KELUARGA',
    [
      'Ayah',
      'Ibu',
      'Anak'
    ]
  );

  validation_(APP.SHEETS.ACCESS,'ROLE',['SUPERADMIN','ADMIN','KETUA_JEMAAT','PENDETA','SEKRETARIS','KEUANGAN','PENGURUS','MAJELIS','VIEWER']);
  validation_(APP.SHEETS.ACCESS,'STATUS',['Aktif','Nonaktif']);

  validation_(
    APP.SHEETS.JEMAAT,
    'STATUS',
    [
      'Aktif',
      'Pindah',
      'Meninggal',
      'Tidak Aktif'
    ]
  );

  validation_(
    APP.SHEETS.DOKUMEN,
    'KATEGORI',
    [
      'Surat Keputusan',
      'Surat Masuk',
      'Surat Keluar',
      'Proposal',
      'Laporan',
      'Formulir',
      'Dokumen Lain'
    ]
  );

  validation_(
    APP.SHEETS.DOKUMEN,
    'STATUS',
    [
      'Aktif',
      'Arsip'
    ]
  );
}


function validation_(
  sheetName,
  headerName,
  values
) {
  const sheet =
    getSheet_(
      sheetName
    );

  const column =
    getHeaderColumn_(
      sheet,
      headerName
    );

  if (!column) {
    return;
  }

  const rule =
    SpreadsheetApp
      .newDataValidation()
      .requireValueInList(
        values,
        true
      )
      .setAllowInvalid(
        false
      )
      .build();

  sheet
    .getRange(
      2,
      column,
      Math.max(
        sheet.getMaxRows() -
        1,
        1
      ),
      1
    )
    .setDataValidation(
      rule
    );
}


function setupFormats_() {
  [
    [
      APP.SHEETS.AGENDA,
      'ANGGARAN'
    ],
    [
      APP.SHEETS.USULAN,
      'ESTIMASI_ANGGARAN'
    ],
    [
      APP.SHEETS.KEPUTUSAN,
      'ANGGARAN'
    ],
    [
      APP.SHEETS.KEUANGAN,
      'NOMINAL'
    ],
    [
      APP.SHEETS.FINANCE_RECON,
      'SALDO_SISTEM'
    ],
    [
      APP.SHEETS.FINANCE_RECON,
      'SALDO_AKTUAL'
    ],
    [
      APP.SHEETS.FINANCE_RECON,
      'SELISIH'
    ],
    [
      APP.SHEETS.RAPBJ,
      'ANGGARAN'
    ],
    [
      APP.SHEETS.PROGRAM,
      'ANGGARAN'
    ],
    [
      APP.SHEETS.PROGRAM,
      'REALISASI'
    ],
    [
      APP.SHEETS.INVENTARIS,
      'NILAI'
    ]
  ].forEach(item => {
    formatColumn_(
      item[0],
      item[1],
      '"Rp"#,##0'
    );
  });

  [
    [
      APP.SHEETS.NOTULEN,
      'TANGGAL'
    ],
    [
      APP.SHEETS.USULAN,
      'TANGGAL_USUL'
    ],
    [
      APP.SHEETS.AGENDA,
      'DEADLINE'
    ],
    [
      APP.SHEETS.KEPUTUSAN,
      'TARGET_SELESAI'
    ],
    [
      APP.SHEETS.TINDAK_LANJUT,
      'TARGET_SELESAI'
    ],
    [
      APP.SHEETS.KEUANGAN,
      'TANGGAL'
    ],
    [
      APP.SHEETS.PROGRAM,
      'TANGGAL_MULAI'
    ],
    [
      APP.SHEETS.PROGRAM,
      'TANGGAL_SELESAI'
    ],
    [
      APP.SHEETS.INVENTARIS,
      'TANGGAL_PEROLEHAN'
    ],
    [
      APP.SHEETS.JEMAAT,
      'TANGGAL_LAHIR'
    ],
    [
      APP.SHEETS.JEMAAT,
      'TANGGAL_BAPTIS'
    ],
    [
      APP.SHEETS.JEMAAT,
      'TANGGAL_BERGABUNG'
    ],
    [
      APP.SHEETS.DOKUMEN,
      'TANGGAL'
    ]
  ].forEach(item => {
    formatColumn_(
      item[0],
      item[1],
      'dd mmmm yyyy'
    );
  });
}


function formatColumn_(
  sheetName,
  header,
  format
) {
  const sheet =
    getSheet_(
      sheetName
    );

  const column =
    getHeaderColumn_(
      sheet,
      header
    );

  if (!column) {
    return;
  }

  sheet
    .getRange(
      2,
      column,
      Math.max(
        sheet.getMaxRows() -
        1,
        1
      ),
      1
    )
    .setNumberFormat(
      format
    );
}


function seedDepartments_() {
  const sheet =
    getSheet_(
      APP.SHEETS.DEPARTEMEN
    );

  if (
    sheet.getLastRow() >=
    2
  ) {
    return;
  }

  const defaults = [
    'Ketua Jemaat',
    'Sekretariat',
    'Bendahara',
    'Rumah Tangga',
    'Pemuda',
    'Pathfinder',
    'Anak-anak',
    'BWA',
    'Komunikasi',
    'Pelayanan Perorangan'
  ];

  defaults.forEach(
    (name, index) => {
      sheet.appendRow([
        generateId_(
          'DPT'
        ),
        name,
        '',
        'Aktif',
        index + 1,
        new Date()
      ]);
    }
  );
}



function migrateMemberSchemaV82_() {
  const sheet =
    getSheet_(
      APP.SHEETS.JEMAAT
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return {
      updated:
        0
    };
  }

  const headers =
    getHeaders_(
      sheet
    );

  const indexOf =
    name =>
      headers.indexOf(
        name
      );

  const familyIndex =
    indexOf(
      'NAMA_KELUARGA'
    );

  const legacyFamilyIndex =
    indexOf(
      'KELUARGA'
    );

  const phoneIndex =
    indexOf(
      'NO_TELEPON'
    );

  const whatsappIndex =
    indexOf(
      'NO_WHATSAPP'
    );

  if (
    familyIndex <
      0 ||
    legacyFamilyIndex <
      0 ||
    phoneIndex <
      0
  ) {
    return {
      updated:
        0
    };
  }

  const range =
    sheet.getRange(
      2,
      1,
      sheet.getLastRow() -
      1,
      headers.length
    );

  const values =
    range.getValues();

  let updated =
    0;

  values.forEach(
    row => {
      let changed =
        false;

      const legacy =
        String(
          row[
            legacyFamilyIndex
          ] ||
          ''
        )
        .replace(
          /^keluarga\s+/i,
          ''
        )
        .trim();

      const family =
        String(
          row[
            familyIndex
          ] ||
          ''
        )
        .trim();

      if (
        !family &&
        legacy
      ) {
        row[
          familyIndex
        ] =
          legacy;

        changed =
          true;
      }

      if (
        !String(
          row[
            legacyFamilyIndex
          ] ||
          ''
        )
        .trim() &&
        String(
          row[
            familyIndex
          ] ||
          ''
        )
        .trim()
      ) {
        row[
          legacyFamilyIndex
        ] =
          String(
            row[
              familyIndex
            ]
          )
          .trim();

        changed =
          true;
      }

      if (
        !String(
          row[
            phoneIndex
          ] ||
          ''
        )
        .trim() &&
        whatsappIndex >=
          0 &&
        String(
          row[
            whatsappIndex
          ] ||
          ''
        )
        .trim()
      ) {
        row[
          phoneIndex
        ] =
          String(
            row[
              whatsappIndex
            ]
          )
          .trim();

        changed =
          true;
      }

      if (
        changed
      ) {
        updated++;
      }
    }
  );

  if (
    updated
  ) {
    range.setValues(
      values
    );
  }

  return {
    updated
  };
}


function validateAppConfig_() {
  if (
    typeof APP ===
    'undefined' ||
    !APP ||
    !APP.SHEETS ||
    !APP.SCHEMA
  ) {
    throw new Error(
      'Code.gs tidak sesuai dengan MAJELIS GALILEA Backend V6.'
    );
  }

  const requiredSheetKeys = [
    'NOTULEN',
    'AGENDA',
    'KEHADIRAN',
    'USULAN',
    'KEPUTUSAN',
    'TINDAK_LANJUT',
    'KEUANGAN',
    'FINANCE_PERIODS',
    'FINANCE_RECON',
    'FINANCE_AUDIT',
    'RAPBJ',
    'PROGRAM',
    'DEPARTEMEN',
    'INVENTARIS',
    'PENGURUS',
    'JEMAAT',
    'DOKUMEN',
    'SURAT',
    'ACCESS',
    'ATTACHMENTS',
    'DRAFTS',
    'SETTING',
    'LOG'
  ];

  const missing =
    requiredSheetKeys.filter(
      key =>
        !APP.SHEETS[key]
    );

  if (missing.length) {
    throw new Error(
      'Code.gs tidak lengkap. Konfigurasi V8 yang hilang: ' +
      missing.join(', ') +
      '. Ganti seluruh isi Code.gs dengan Backend V8.3.0 terbaru.'
    );
  }

  validateEntityMappingsV602_();

  return true;
}


/* ===== DATA SERVICE ===== */
function getAppData(filters) {
  filters =
    filters || {};

  const currentYear =
    Number(
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        'yyyy'
      )
    );

  const year =
    Number(
      filters.year ||
      currentYear
    );

  const data = {};

  Object.keys(
    APP.SHEETS
  ).forEach(key => {
    const sheetName =
      APP.SHEETS[key];

    if (
      [
        APP.SHEETS.SETTING,
        APP.SHEETS.LOG,
        APP.SHEETS.DRAFTS,
        APP.SHEETS.FINANCE_PERIODS,
        APP.SHEETS.FINANCE_RECON,
        APP.SHEETS.FINANCE_AUDIT,
        APP.SHEETS.ACCESS
      ].includes(
        sheetName
      )
    ) {
      return;
    }

    data[key] =
      readSheet_(
        sheetName
      );
  });

  const notulen =
    byYear_(
      data.NOTULEN,
      year
    )
    .sort(
      sortDateDesc_
    );

  const notulenIds =
    new Set(
      notulen.map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  const agenda =
    data.AGENDA
      .filter(
        item =>
          notulenIds.has(
            String(
              item.ID_NOTULEN
            )
          )
      )
      .sort(
        (a, b) =>
          Number(
            a.NO_URUT || 0
          ) -
          Number(
            b.NO_URUT || 0
          )
      );

  const kehadiran =
    data.KEHADIRAN
      .filter(
        item =>
          notulenIds.has(
            String(
              item.ID_NOTULEN
            )
          )
      );

  const usulan =
    byYear_(
      data.USULAN,
      year
    )
    .sort(
      sortDateDescBy_(
        'TANGGAL_USUL'
      )
    );

  const keputusan =
    byYear_(
      data.KEPUTUSAN,
      year
    )
    .sort(
      sortDateDescBy_(
        'TARGET_SELESAI'
      )
    );

  const tindakLanjut =
    byYear_(
      data.TINDAK_LANJUT,
      year
    )
    .sort(
      sortDateAscBy_(
        'TARGET_SELESAI'
      )
    );

  const keuangan =
    byYear_(
      data.KEUANGAN,
      year
    )
    .sort(
      sortDateDesc_
    );

  const rapbj =
    byYear_(
      data.RAPBJ,
      year
    );

  const programs =
    byYear_(
      data.PROGRAM,
      year
    )
    .sort(
      sortDateAscBy_(
        'TANGGAL_MULAI'
      )
    );

  const documents =
    byYear_(
      data.DOKUMEN,
      year
    )
    .sort(
      sortDateDesc_
    );

  const letters =
    byYear_(
      data.SURAT,
      year
    )
    .sort(
      sortDateDescBy_(
        'TANGGAL_SURAT'
      )
    );

  const attachments =
    data.ATTACHMENTS;

  const pengurus =
    data.PENGURUS
      .sort(
        (a, b) =>
          Number(
            a.URUTAN ||
            9999
          ) -
          Number(
            b.URUTAN ||
            9999
          )
      );

  const familyRoleOrder = {
    Ayah:
      1,
    Ibu:
      2,
    Anak:
      3
  };

  const jemaat =
    data.JEMAAT
      .sort(
        (
          a,
          b
        ) => {
          const familyCompare =
            String(
              a.NAMA_KELUARGA ||
              a.KELUARGA ||
              ''
            )
            .localeCompare(
              String(
                b.NAMA_KELUARGA ||
                b.KELUARGA ||
                ''
              ),
              'id'
            );

          if (
            familyCompare
          ) {
            return familyCompare;
          }

          const roleCompare =
            Number(
              familyRoleOrder[
                a.POSISI_KELUARGA
              ] ||
              99
            ) -
            Number(
              familyRoleOrder[
                b.POSISI_KELUARGA
              ] ||
              99
            );

          if (
            roleCompare
          ) {
            return roleCompare;
          }

          return String(
            a.NAMA ||
            ''
          )
          .localeCompare(
            String(
              b.NAMA ||
              ''
            ),
            'id'
          );
        }
      );

  const departemen =
    data.DEPARTEMEN
      .sort(
        (a, b) =>
          Number(
            a.URUTAN ||
            9999
          ) -
          Number(
            b.URUTAN ||
            9999
          )
      );

  const inventory =
    data.INVENTARIS;

  const summary =
    buildSummary_({
      year,
      notulen,
      agenda,
      kehadiran,
      usulan,
      keputusan,
      tindakLanjut,
      keuangan,
      allFinance:
        data.KEUANGAN,
      rapbj,
      programs,
      inventory,
      pengurus,
      jemaat
    });

  return {
    app: {
      name:
        APP.NAME,

      church:
        getSettingSafe_(
          'CHURCH_NAME'
        ) ||
        'GMAHK Jemaat Galilea Balikpapan',

      logoUrl:
        getSettingSafe_(
          'LOGO_URL'
        ),

      version:
        APP.VERSION
    },

    year,

    years:
      getYearOptions_(
        data
      ),

    sources:
      [...APP.SOURCES],

    notulen,
    agenda,
    kehadiran,
    usulan,
    keputusan,

    tindakLanjut,

    keuangan,
    rapbj,
    programs,
    departemen,

    inventaris:
      inventory,

    pengurus,
    jemaat,
    documents,
    letters,
    attachments,

    summary,

    calendar:
      buildCalendarEvents_({
        notulen,
        programs,
        tindakLanjut,
        agenda
      }),

    generatedAt:
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        'dd/MM/yyyy HH:mm:ss'
      )
  };
}


function buildSummary_(
  payload
) {
  const {
    year,
    notulen,
    agenda,
    kehadiran,
    usulan,
    keputusan,
    tindakLanjut,
    keuangan,
    allFinance,
    rapbj,
    programs,
    inventory,
    pengurus,
    jemaat
  } = payload;

  const today =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy-MM-dd'
    );

  const funds = {};

  APP.SOURCES
    .forEach(source => {
      funds[source] = {
        income: 0,
        expense: 0,
        balance: 0,
        budget: 0
      };
    });

  allFinance
    .forEach(item => {
      const source =
        String(
          item.SUMBER_DANA ||
          ''
        );

      if (!funds[source]) {
        return;
      }

      const itemYear =
        Number(
          item.TAHUN ||
          0
        );

      const nominal =
        Number(
          item.NOMINAL ||
          0
        );

      if (
        itemYear <=
        year
      ) {
        if (
          item.JENIS ===
          'Pemasukan'
        ) {
          funds[source]
            .balance +=
            nominal;
        }

        if (
          item.JENIS ===
          'Pengeluaran'
        ) {
          funds[source]
            .balance -=
            nominal;
        }
      }

      if (
        itemYear ===
        year
      ) {
        if (
          item.JENIS ===
          'Pemasukan'
        ) {
          funds[source]
            .income +=
            nominal;
        }

        if (
          item.JENIS ===
          'Pengeluaran'
        ) {
          funds[source]
            .expense +=
            nominal;
        }
      }
    });

  agenda
    .forEach(item => {
      const source =
        String(
          item.SUMBER_DANA ||
          ''
        );

      if (funds[source]) {
        funds[source]
          .budget +=
          Number(
            item.ANGGARAN ||
            0
          );
      }
    });

  const rapbjPlan =
    rapbj.reduce(
      (sum, item) =>
        sum +
        Number(
          item.ANGGARAN ||
          0
        ),
      0
    );

  const rapbjRealized =
    keuangan
      .filter(
        item =>
          item.JENIS ===
          'Pengeluaran' &&
          item.ID_RAPBJ
      )
      .reduce(
        (sum, item) =>
          sum +
          Number(
            item.NOMINAL ||
            0
          ),
        0
      );

  const overdue =
    tindakLanjut
      .filter(item => {
        return (
          item.TARGET_SELESAI &&
          item.TARGET_SELESAI <
            today &&
          item.STATUS !==
            'Selesai'
        );
      });

  const pendingApproval =
    notulen
      .filter(
        item =>
          item.STATUS ===
          'Menunggu Persetujuan'
      );

  const inventoryIssue =
    inventory
      .filter(
        item =>
          [
            'Perlu Perbaikan',
            'Rusak'
          ]
          .includes(
            item.KONDISI
          )
      );

  const overBudget =
    rapbj
      .filter(item => {
        const realized =
          keuangan
            .filter(
              trx =>
                String(
                  trx.ID_RAPBJ
                ) ===
                String(
                  item.ID_RAPBJ
                ) &&
                trx.JENIS ===
                'Pengeluaran'
            )
            .reduce(
              (sum, trx) =>
                sum +
                Number(
                  trx.NOMINAL ||
                  0
                ),
              0
            );

        return (
          Number(
            item.ANGGARAN ||
            0
          ) > 0 &&
          realized >
          Number(
            item.ANGGARAN ||
            0
          )
        );
      });

  const nextMeeting =
    notulen
      .filter(
        item =>
          item.TANGGAL &&
          item.TANGGAL >=
            today
      )
      .sort(
        sortDateAsc_
      )[0] ||
    null;

  const attendanceStats =
    buildAttendanceStats_(
      notulen,
      kehadiran,
      pengurus
    );

  const attention = [];

  if (
    pendingApproval.length
  ) {
    attention.push({
      type:
        'approval',

      severity:
        'warning',

      count:
        pendingApproval.length,

      text:
        pendingApproval.length +
        ' notulen menunggu persetujuan.'
    });
  }

  if (
    overdue.length
  ) {
    attention.push({
      type:
        'overdue',

      severity:
        'danger',

      count:
        overdue.length,

      text:
        overdue.length +
        ' tindak lanjut melewati deadline.'
    });
  }

  if (
    overBudget.length
  ) {
    attention.push({
      type:
        'budget',

      severity:
        'danger',

      count:
        overBudget.length,

      text:
        overBudget.length +
        ' pos RAPBJ melebihi anggaran.'
    });
  }

  if (
    inventoryIssue.length
  ) {
    attention.push({
      type:
        'inventory',

      severity:
        'warning',

      count:
        inventoryIssue.length,

      text:
        inventoryIssue.length +
        ' inventaris perlu perhatian.'
    });
  }

  if (
    usulan.filter(
      item =>
        item.STATUS ===
        'Diajukan'
    ).length
  ) {
    const count =
      usulan.filter(
        item =>
          item.STATUS ===
          'Diajukan'
      ).length;

    attention.push({
      type:
        'proposal',

      severity:
        'info',

      count,

      text:
        count +
        ' usulan agenda belum diproses.'
    });
  }

  return {
    totalNotulen:
      notulen.length,

    totalAgenda:
      agenda.length,

    totalDecisions:
      keputusan.length,

    activeDecisions:
      keputusan.filter(
        item =>
          item.STATUS !==
          'Selesai' &&
          item.STATUS !==
          'Dibatalkan'
      ).length,

    overdueTasks:
      overdue.length,

    pendingApproval:
      pendingApproval.length,

    totalBudget:
      agenda.reduce(
        (sum, item) =>
          sum +
          Number(
            item.ANGGARAN ||
            0
          ),
        0
      ),

    totalInventory:
      inventory.reduce(
        (sum, item) =>
          sum +
          Number(
            item.JUMLAH ||
            0
          ),
        0
      ),

    inventoryIssue:
      inventoryIssue.length,

    totalPengurus:
      pengurus.filter(
        item =>
          String(
            item.STATUS ||
            'Aktif'
          ) ===
          'Aktif'
      ).length,

    totalJemaat:
      jemaat.filter(
        item =>
          String(
            item.STATUS ||
            'Aktif'
          ) ===
          'Aktif'
      ).length,

    totalPrograms:
      programs.length,

    totalIncome:
      Object.values(
        funds
      )
      .reduce(
        (sum, item) =>
          sum +
          item.income,
        0
      ),

    totalExpense:
      Object.values(
        funds
      )
      .reduce(
        (sum, item) =>
          sum +
          item.expense,
        0
      ),

    totalBalance:
      Object.values(
        funds
      )
      .reduce(
        (sum, item) =>
          sum +
          item.balance,
        0
      ),

    funds,

    rapbjPlan,
    rapbjRealized,

    rapbjRemaining:
      rapbjPlan -
      rapbjRealized,

    attendance:
      attendanceStats,

    nextMeeting,

    attention
  };
}


function buildAttendanceStats_(
  notulen,
  attendance,
  pengurus
) {
  const activeOfficers =
    pengurus.filter(
      item =>
        String(
          item.STATUS ||
          'Aktif'
        ) ===
        'Aktif'
    );

  const quorumPercent =
    Number(
      getSettingSafe_(
        'QUORUM_PERCENT'
      ) ||
      50
    );

  let meetingCount = 0;
  let attendanceTotal = 0;

  const meetings =
    notulen.map(
      meeting => {
        const rows =
          attendance.filter(
            item =>
              String(
                item.ID_NOTULEN
              ) ===
              String(
                meeting.ID_NOTULEN
              )
          );

        const present =
          rows.filter(
            item =>
              item.STATUS_KEHADIRAN ===
              'Hadir'
          ).length;

        const base =
          Math.max(
            activeOfficers.length,
            rows.length,
            1
          );

        const percent =
          Math.round(
            (
              present /
              base
            ) *
            100
          );

        if (
          rows.length
        ) {
          meetingCount++;
          attendanceTotal +=
            percent;
        }

        return {
          id:
            meeting.ID_NOTULEN,

          title:
            meeting.JUDUL,

          date:
            meeting.TANGGAL,

          present,
          total:
            base,

          percent,

          quorum:
            percent >=
            quorumPercent
        };
      }
    );

  return {
    average:
      meetingCount
        ? Math.round(
            attendanceTotal /
            meetingCount
          )
        : 0,

    quorumPercent,
    meetings
  };
}


function buildCalendarEvents_(
  payload
) {
  const events = [];

  payload.notulen
    .forEach(item => {
      if (
        item.TANGGAL
      ) {
        events.push({
          id:
            'meeting-' +
            item.ID_NOTULEN,

          date:
            item.TANGGAL,

          type:
            'meeting',

          title:
            item.JUDUL,

          meta:
            item.JENIS_RAPAT ||
            'Rapat Majelis'
        });
      }
    });

  payload.programs
    .forEach(item => {
      if (
        item.TANGGAL_MULAI
      ) {
        events.push({
          id:
            'program-' +
            item.ID_PROGRAM,

          date:
            item.TANGGAL_MULAI,

          type:
            'program',

          title:
            item.NAMA_PROGRAM,

          meta:
            item.DEPARTEMEN ||
            'Program Kerja'
        });
      }
    });

  payload.tindakLanjut
    .forEach(item => {
      if (
        item.TARGET_SELESAI &&
        item.STATUS !==
          'Selesai'
      ) {
        events.push({
          id:
            'task-' +
            item.ID_TINDAK_LANJUT,

          date:
            item.TARGET_SELESAI,

          type:
            'deadline',

          title:
            item.URAIAN,

          meta:
            item.PIC ||
            'Tindak Lanjut'
        });
      }
    });

  payload.agenda
    .forEach(item => {
      if (
        item.DEADLINE &&
        item.STATUS !==
          'Selesai'
      ) {
        events.push({
          id:
            'agenda-' +
            item.ID_AGENDA,

          date:
            item.DEADLINE,

          type:
            'agenda',

          title:
            item.AGENDA,

          meta:
            item.PIC ||
            'Agenda'
        });
      }
    });

  return events.sort(
    (a, b) =>
      String(a.date)
        .localeCompare(
          String(b.date)
        )
  );
}


/* =========================================================
   ENTITY SHEET RESOLVER V6.0.2
========================================================= */

function resolveEntitySheetNameV602_(
  config
) {
  if (
    !config ||
    !config.sheet
  ) {
    throw new Error(
      'Konfigurasi entity tidak memiliki property sheet.'
    );
  }

  const raw =
    String(
      config.sheet
    ).trim();

  if (!raw) {
    throw new Error(
      'Konfigurasi nama sheet entity kosong.'
    );
  }

  /*
   * config.sheet berupa key APP.SHEETS.
   */
  if (
    APP.SHEETS[
      raw
    ]
  ) {
    return APP.SHEETS[
      raw
    ];
  }

  /*
   * config.sheet sudah berupa nama sheet sebenarnya.
   */
  if (
    Object.values(
      APP.SHEETS
    )
    .includes(
      raw
    )
  ) {
    return raw;
  }

  throw new Error(
    'Mapping entity sheet tidak valid: "' +
    raw +
    '".'
  );
}


function validateEntityMappingsV602_() {
  const issues = [];

  Object.keys(
    APP.ENTITY
  )
  .forEach(
    entity => {
      try {
        const config =
          APP.ENTITY[
            entity
          ];

        const sheetName =
          resolveEntitySheetNameV602_(
            config
          );

        if (
          !APP.SCHEMA[
            sheetName
          ]
        ) {
          issues.push(
            entity +
            ': schema "' +
            sheetName +
            '" tidak ditemukan.'
          );

          return;
        }

        if (
          !APP.SCHEMA[
            sheetName
          ]
          .includes(
            config.id
          )
        ) {
          issues.push(
            entity +
            ': ID "' +
            config.id +
            '" tidak ada pada schema ' +
            sheetName +
            '.'
          );
        }
      }

      catch (error) {
        issues.push(
          entity +
          ': ' +
          (
            error &&
            error.message
              ? error.message
              : String(error)
          )
        );
      }
    }
  );

  if (
    issues.length
  ) {
    throw new Error(
      'Entity mapping bermasalah: ' +
      issues.join(' | ')
    );
  }

  return true;
}


/* =========================================================
   GENERIC CRUD
========================================================= */

function saveEntityCore_(
  entity,
  payload
) {
  payload =
    payload ||
    {};

  const config =
    APP.ENTITY[
      entity
    ];

  if (!config) {
    throw new Error(
      'Jenis data tidak dikenali.'
    );
  }

  const sheet =
    getSheet_(
      resolveEntitySheetNameV602_(
        config
      )
    );

  const headers =
    getHeaders_(
      sheet
    );

  let id =
    String(
      payload[
        config.id
      ] ||
      ''
    ).trim();

  let rowNumber =
    id
      ? findRowById_(
          sheet,
          config.id,
          id
        )
      : 0;

  if (
    entity ===
    'notulen' &&
    rowNumber
  ) {
    const current =
      rowToObject_(
        sheet,
        rowNumber
      );

    if (
      String(
        current.LOCKED
      ).toLowerCase() ===
      'true' &&
      !payload._ALLOW_LOCKED_EDIT
    ) {
      throw new Error(
        'Notulen sudah disetujui dan dikunci. Buka kunci terlebih dahulu sebelum mengedit.'
      );
    }
  }

  const existingObject =
    rowNumber
      ? rowToObject_(
          sheet,
          rowNumber
        )
      : null;

  if (
    entity ===
    'keuangan'
  ) {
    if (
      existingObject &&
      !String(
        payload.NO_TRANSAKSI ||
        ''
      ).trim()
    ) {
      payload.NO_TRANSAKSI =
        existingObject.NO_TRANSAKSI ||
        '';
    }

    const oldDate =
      existingObject
        ? existingObject.TANGGAL
        : '';

    const newDate =
      payload.TANGGAL ||
      oldDate;

    if (
      !payload._ALLOW_CLOSED_EDIT
    ) {
      if (
        oldDate
      ) {
        assertFinancePeriodWritableV8_(
          oldDate
        );
      }

      if (
        newDate &&
        String(
          newDate
        ) !==
        String(
          oldDate
        )
      ) {
        assertFinancePeriodWritableV8_(
          newDate
        );
      }
    }
  }

  const now =
    new Date();

  if (!id) {
    id =
      generateId_(
        config.prefix
      );

    payload[
      config.id
    ] =
      id;
  }

  validateEntity_(
    entity,
    payload
  );

  processEntityPayload_(
    entity,
    payload,
    id
  );

  if (
    headers.includes(
      'UPDATED_AT'
    )
  ) {
    payload.UPDATED_AT =
      now;
  }

  if (
    headers.includes(
      'CREATED_AT'
    ) &&
    !rowNumber
  ) {
    payload.CREATED_AT =
      now;
  }

  const oldValues =
    rowNumber
      ? sheet
          .getRange(
            rowNumber,
            1,
            1,
            headers.length
          )
          .getValues()[0]
      : [];

  const newValues =
    headers.map(
      (
        header,
        index
      ) => {
        /*
         * CREATED_AT tidak boleh berubah saat edit,
         * meskipun object lama dikirim kembali dari frontend.
         */
        if (
          rowNumber &&
          header ===
          'CREATED_AT'
        ) {
          return oldValues[
            index
          ];
        }

        if (
          payload[header] !==
          undefined
        ) {
          return normalizeWrite_(
            header,
            payload[
              header
            ]
          );
        }

        return rowNumber
          ? oldValues[
              index
            ]
          : '';
      }
    );

  if (rowNumber) {
    sheet
      .getRange(
        rowNumber,
        1,
        1,
        newValues.length
      )
      .setValues([
        newValues
      ]);
  }

  else {
    sheet.appendRow(
      newValues
    );
  }

  if (
    entity ===
    'agenda'
  ) {
    syncDecisionFromAgenda_(
      id
    );
  }

  if (
    entity ===
    'keputusan'
  ) {
    syncFollowUpFromDecision_(
      id
    );
  }

  if (
    entity ===
    'keuangan'
  ) {
    const savedObject = {};

    headers.forEach(
      (
        header,
        index
      ) => {
        savedObject[
          header
        ] =
          newValues[
            index
          ];
      }
    );

    recordFinanceTransactionAuditV8_(
      id,
      rowNumber
        ? 'UPDATE'
        : 'CREATE',
      existingObject,
      savedObject
    );
  }

  audit_(
    rowNumber
      ? 'UPDATE'
      : 'CREATE',
    entity,
    id,
    rowNumber
      ? 'Memperbarui data.'
      : 'Membuat data baru.'
  );

  return {
    success:
      true,

    id
  };
}


function saveEntity(entity,payload,token){
  assertEntityPermissionV84_(token,entity,'write');
  return saveEntityInternal_(entity,payload);
}

function saveEntityInternal_(
  entity,
  payload
) {
  return withDocumentLock_(
    () =>
      saveEntityCore_(
        entity,
        payload
      )
  );
}


function processEntityPayload_(
  entity,
  payload,
  id
) {
  if (
    payload.FOTO_DATA &&
    payload.FOTO_DATA.base64
  ) {
    const oldId =
      payload.FOTO_FILE_ID ||
      '';

    const photo =
      saveDriveFile_(
        payload.FOTO_DATA,
        getSettingSafe_(
          'MEDIA_FOLDER_NAME'
        ) ||
        'MAJELIS GALILEA - MEDIA',
        entity +
        '-' +
        id
      );

    payload.FOTO_URL =
      photo.url;

    payload.FOTO_FILE_ID =
      photo.fileId;

    delete payload.FOTO_DATA;

    trashFileSafe_(
      oldId
    );
  }

  if (
    payload.FILE_DATA &&
    payload.FILE_DATA.base64
  ) {
    const oldId =
      payload.FILE_ID ||
      '';

    const uploaded =
      saveDriveFile_(
        payload.FILE_DATA,
        getSettingSafe_(
          'DOCUMENT_FOLDER_NAME'
        ) ||
        'MAJELIS GALILEA - DOKUMEN',
        entity +
        '-' +
        id
      );

    payload.FILE_NAME =
      uploaded.name;

    payload.FILE_URL =
      uploaded.url;

    payload.FILE_ID =
      uploaded.fileId;

    delete payload.FILE_DATA;

    trashFileSafe_(
      oldId
    );
  }

  if (
    entity ===
    'notulen'
  ) {
    payload.TAHUN =
      yearFromDate_(
        payload.TANGGAL
      );

    if (
      payload.LOCKED ===
      undefined
    ) {
      payload.LOCKED =
        false;
    }
  }

  if (
    entity ===
    'usulan'
  ) {
    payload.TAHUN =
      payload.TAHUN ||
      yearFromDate_(
        payload.TANGGAL_USUL
      );
  }

  if (
    entity ===
    'keuangan'
  ) {
    payload.TAHUN =
      yearFromDate_(
        payload.TANGGAL
      );

    payload.NOMINAL =
      Number(
        payload.NOMINAL ||
        0
      );

    if (
      !String(
        payload.NO_TRANSAKSI ||
        ''
      ).trim()
    ) {
      payload.NO_TRANSAKSI =
        generateTransactionNumberV8_(
          payload.TANGGAL
        );
    }

    if (
      !payload.DEPARTEMEN &&
      payload.ID_RAPBJ
    ) {
      const budget =
        findObjectById_(
          APP.SHEETS.RAPBJ,
          'ID_RAPBJ',
          payload.ID_RAPBJ
        );

      if (
        budget
      ) {
        payload.DEPARTEMEN =
          budget.DEPARTEMEN ||
          '';
      }
    }
  }

  if (
    entity ===
    'agenda'
  ) {
    payload.ANGGARAN =
      Number(
        payload.ANGGARAN ||
        0
      );

    payload.NO_URUT =
      Number(
        payload.NO_URUT ||
        0
      );
  }

  if (
    entity ===
    'keputusan'
  ) {
    payload.ANGGARAN =
      Number(
        payload.ANGGARAN ||
        0
      );

    if (
      !payload.TAHUN
    ) {
      const parent =
        findObjectById_(
          APP.SHEETS.NOTULEN,
          'ID_NOTULEN',
          payload.ID_NOTULEN
        );

      payload.TAHUN =
        parent
          ? Number(
              parent.TAHUN ||
              yearFromDate_(
                parent.TANGGAL
              )
            )
          : currentYear_();
    }

    if (
      !String(
        payload.NO_KEPUTUSAN ||
        ''
      ).trim()
    ) {
      payload.NO_KEPUTUSAN =
        buildDecisionNumber_(
          payload.TAHUN
        );
    }
  }

  if (
    entity ===
    'tindak_lanjut'
  ) {
    payload.PROGRESS =
      Math.min(
        100,
        Math.max(
          0,
          Number(
            payload.PROGRESS ||
            0
          )
        )
      );

    if (
      !payload.TAHUN &&
      payload.ID_KEPUTUSAN
    ) {
      const decision =
        findObjectById_(
          APP.SHEETS.KEPUTUSAN,
          'ID_KEPUTUSAN',
          payload.ID_KEPUTUSAN
        );

      if (decision) {
        payload.TAHUN =
          decision.TAHUN;

        if (
          !payload.ID_NOTULEN
        ) {
          payload.ID_NOTULEN =
            decision.ID_NOTULEN;
        }
      }
    }

    payload.TAHUN =
      Number(
        payload.TAHUN ||
        currentYear_()
      );

    payload.UPDATED_BY =
      userLabel_();
  }

  if (
    entity ===
    'rapbj'
  ) {
    payload.TAHUN =
      Number(
        payload.TAHUN ||
        currentYear_()
      );

    payload.ANGGARAN =
      Number(
        payload.ANGGARAN ||
        0
      );
  }

  if (
    entity ===
    'program'
  ) {
    payload.TAHUN =
      Number(
        payload.TAHUN ||
        yearFromDate_(
          payload.TANGGAL_MULAI
        ) ||
        currentYear_()
      );

    payload.ANGGARAN =
      Number(
        payload.ANGGARAN ||
        0
      );

    payload.REALISASI =
      Number(
        payload.REALISASI ||
        0
      );
  }

  if (
    entity ===
    'inventaris'
  ) {
    payload.JUMLAH =
      Number(
        payload.JUMLAH ||
        0
      );

    payload.NILAI =
      Number(
        payload.NILAI ||
        0
      );
  }

  if (
    entity ===
    'pengurus'
  ) {
    payload.URUTAN =
      Number(
        payload.URUTAN ||
        999
      );
  }

  if (
    entity ===
    'departemen'
  ) {
    payload.URUTAN =
      Number(
        payload.URUTAN ||
        999
      );
  }

  if (
    entity ===
    'jemaat'
  ) {
    payload.NAMA =
      String(
        payload.NAMA ||
        ''
      )
      .trim();

    payload.NAMA_KELUARGA =
      String(
        payload.NAMA_KELUARGA ||
        payload.KELUARGA ||
        ''
      )
      .replace(
        /^keluarga\s+/i,
        ''
      )
      .trim();

    payload.KELUARGA =
      payload.NAMA_KELUARGA;

    payload.POSISI_KELUARGA =
      String(
        payload.POSISI_KELUARGA ||
        ''
      )
      .trim();

    payload.TEMPAT_LAHIR =
      String(
        payload.TEMPAT_LAHIR ||
        ''
      )
      .trim();

    payload.NO_TELEPON =
      String(
        payload.NO_TELEPON ||
        payload.NO_WHATSAPP ||
        ''
      )
      .trim();

    if (
      !String(
        payload.NO_WHATSAPP ||
        ''
      )
      .trim() &&
      payload.NO_TELEPON
    ) {
      payload.NO_WHATSAPP =
        payload.NO_TELEPON;
    }
  }

  if (
    entity ===
    'dokumen'
  ) {
    payload.TAHUN =
      Number(
        payload.TAHUN ||
        yearFromDate_(
          payload.TANGGAL
        ) ||
        currentYear_()
      );

    if (
      String(
        getSettingSafe_(
          'AUTO_DOC_NUMBER'
        ) ||
        'true'
      ).toLowerCase() ===
        'true' &&
      !String(
        payload.NOMOR_DOKUMEN ||
        ''
      ).trim()
    ) {
      payload.NOMOR_DOKUMEN =
        generateDocumentNumberV7_(
          payload.KATEGORI ||
          'Dokumen Lain',
          payload.TAHUN
        );
    }
  }
}



/* =========================================================
   MAJELIS GALILEA V8.3 — CRUD CONTRACT & ALIGNMENT
========================================================= */


/* ===== V8.4 ROLE ACCESS ===== */
function rolePermissionMatrixV84_(){
  return {
    SUPERADMIN:{level:0, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','rapbj','keuangan','inventaris','pengurus','jemaat','dokumen','surat','kalender','arsip','aktivitas','akses'],write:['*'],remove:['*'],finance:true,secretary:true,meeting:true,archive:true,settings:true,access:true},
    ADMIN:{level:0, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','rapbj','keuangan','inventaris','pengurus','jemaat','dokumen','surat','kalender','arsip','aktivitas','akses'],write:['*'],remove:['*'],finance:true,secretary:true,meeting:true,archive:true,settings:true,access:true},
    KETUA_JEMAAT:{level:1, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','rapbj','keuangan','inventaris','pengurus','jemaat','dokumen','surat','kalender','arsip','aktivitas'],write:['notulen','agenda','kehadiran','usulan','keputusan','tindak_lanjut','program','inventaris','pengurus','jemaat','dokumen','departemen'],remove:['usulan','tindak_lanjut'],finance:false,secretary:true,meeting:true,archive:true,settings:false,access:false},
    PENDETA:{level:1, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','rapbj','keuangan','inventaris','pengurus','jemaat','dokumen','surat','kalender','arsip','aktivitas'],write:['usulan','tindak_lanjut'],remove:[],finance:false,secretary:false,meeting:false,archive:false,settings:false,access:false},
    SEKRETARIS:{level:2, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','inventaris','pengurus','jemaat','dokumen','surat','kalender','arsip'],write:['notulen','agenda','kehadiran','usulan','keputusan','tindak_lanjut','program','inventaris','pengurus','jemaat','dokumen','departemen','surat'],remove:['notulen','agenda','kehadiran','usulan','keputusan','tindak_lanjut','program','inventaris','pengurus','jemaat','dokumen','surat'],finance:false,secretary:true,meeting:true,archive:true,settings:false,access:false},
    KEUANGAN:{level:2, pages:['dashboard','rapat','keputusan','program','rapbj','keuangan','dokumen','kalender'],write:['keuangan','rapbj'],remove:['keuangan','rapbj'],finance:true,secretary:false,meeting:false,archive:false,settings:false,access:false},
    PENGURUS:{level:3, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','inventaris','pengurus','jemaat','dokumen','kalender','arsip'],write:['usulan','keputusan','tindak_lanjut','program','inventaris','pengurus','jemaat','dokumen'],remove:['usulan','tindak_lanjut','program','inventaris','dokumen'],finance:false,secretary:false,meeting:true,archive:true,settings:false,access:false},
    MAJELIS:{level:4, pages:['dashboard','rapat','usulan','keputusan','tindak_lanjut','program','dokumen','kalender'],write:['usulan','tindak_lanjut'],remove:[],finance:false,secretary:false,meeting:false,archive:false,settings:false,access:false},
    VIEWER:{level:4, pages:['dashboard','rapat','keputusan','program','dokumen','kalender'],write:[],remove:[],finance:false,secretary:false,meeting:false,archive:false,settings:false,access:false}
  };
}
function authSaltV84_(){
  const p=PropertiesService.getScriptProperties();
  let s=p.getProperty('AUTH_SALT_V84');
  if(!s){s=Utilities.getUuid()+Utilities.getUuid();p.setProperty('AUTH_SALT_V84',s);}
  return s;
}
function hashPinV84_(u,pin){
  const b=Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,String(u||'').trim().toLowerCase()+'|'+String(pin||'')+'|'+authSaltV84_(),Utilities.Charset.UTF_8);
  return b.map(v=>(v<0?v+256:v).toString(16).padStart(2,'0')).join('');
}
function setupRoleAccessV84_(){
  const sh=getSheet_(APP.SHEETS.ACCESS);
  if(sh.getLastRow()>1)return {created:false};
  // Generate random 8-char alphanumeric password
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  let pin = '';
  for(let i=0; i<8; i++) pin += chars.charAt(Math.floor(Math.random() * chars.length));
  const now=new Date();
  sh.appendRow([generateId_('USR'),'admin','Administrator','SUPERADMIN',hashPinV84_('admin',pin),'Aktif',now,now,'',0]);
  console.log('===== INITIAL MAJELIS ADMIN =====');
  console.log('Username: admin');
  console.log('Password: '+pin);
  console.log('=================================');
  return {created:true,pin};
}
function setupRoleAccessV84(){setupDatabase();return {success:true};}
function authCacheV84_(){return CacheService.getScriptCache();}
function authKeyV84_(t){return 'MG-AUTH-V84-'+String(t||'');}
function safeRoleUserV84_(r){
  const role=String(r.ROLE||'');
  return {id:r.ID_USER,username:r.USERNAME,name:r.NAMA||r.USERNAME,role,permissions:rolePermissionMatrixV84_()[role]||{pages:[],write:[],remove:[]}};
}
function loginMajelisV84(username,pin){
  username=String(username||'').trim().toLowerCase();
  const u=readSheet_(APP.SHEETS.ACCESS).find(x=>String(x.USERNAME||'').trim().toLowerCase()===username&&String(x.STATUS||'Aktif')==='Aktif');
  if(!u||u.PIN_HASH!==hashPinV84_(username,pin))throw new Error('Username atau Password tidak valid.');
  const token=(Utilities.getUuid()+Utilities.getUuid()).replace(/-/g,''),safe=safeRoleUserV84_(u);
  authCacheV84_().put(authKeyV84_(token),JSON.stringify(safe),21600);
  return {success:true,token,user:safe};
}
function getAuthContextV84(token){
  const raw=token&&authCacheV84_().get(authKeyV84_(token));
  if(!raw)return {authenticated:false};
  authCacheV84_().put(authKeyV84_(token),raw,21600);
  return {authenticated:true,user:JSON.parse(raw)};
}
function logoutMajelisV84(token){if(token)authCacheV84_().remove(authKeyV84_(token));return {success:true};}
function requireAuthV84_(token){const c=getAuthContextV84(token);if(!c.authenticated)throw new Error('AUTH_REQUIRED');return c.user;}
function hasPermV84_(a,v){return Array.isArray(a)&&(a.includes('*')||a.includes(v));}
function assertEntityPermissionV84_(token,entity,action){
  const u=requireAuthV84_(token),l=u.permissions[action==='remove'?'remove':'write'];
  if(!hasPermV84_(l,entity))throw new Error('Akses ditolak untuk '+entity+'.');
  return u;
}
function assertFeatureV84_(token,feature){
  const u=requireAuthV84_(token);
  if(!u.permissions[feature])throw new Error('Akses ditolak.');
  return u;
}
function getSecureAppDataV84(token,filters){
  const u=requireAuthV84_(token),d=getAppData(filters||{}),pages=new Set(u.permissions.pages||[]);
  const map={notulen:'rapat',agenda:'rapat',kehadiran:'rapat',usulan:'usulan',keputusan:'keputusan',tindakLanjut:'tindak_lanjut',program:'program',rapbj:'rapbj',keuangan:'keuangan',inventaris:'inventaris',pengurus:'pengurus',jemaat:'jemaat',documents:'dokumen',letters:'surat'};
  Object.keys(map).forEach(k=>{if(!pages.has(map[k]))d[k]=[];});
  d.authV84=u;return d;
}
function getPublicViewerDataV84(filters){
  const year=Number((filters&&filters.year)||currentYear_()),d=getAppData({year});
  const meetings=(d.notulen||[]).filter(x=>['Disetujui','Final'].includes(String(x.STATUS||''))).map(x=>({id:x.ID_NOTULEN,date:x.TANGGAL,title:x.JUDUL,type:x.JENIS_RAPAT,place:x.TEMPAT}));
  const ids=new Set(meetings.map(x=>String(x.id)));
  const decisions=(d.keputusan||[]).filter(x=>ids.has(String(x.ID_NOTULEN))).map(x=>({number:x.NO_KEPUTUSAN,decision:x.KEPUTUSAN,department:x.DEPARTEMEN,target:x.TARGET_SELESAI,status:x.STATUS}));
  const programs=(d.program||[]).map(x=>({name:x.NAMA_PROGRAM,department:x.DEPARTEMEN,start:x.TANGGAL_MULAI,end:x.TANGGAL_SELESAI,status:x.STATUS}));
  const documents=(d.documents||[]).filter(x=>String(x.STATUS||'Aktif')==='Aktif').map(x=>({date:x.TANGGAL,category:x.KATEGORI,title:x.JUDUL,number:x.NOMOR_DOKUMEN,url:x.FILE_URL}));
  return {success:true,version:APP.VERSION,year,church:{name:getSettingSafe_('CHURCH_NAME')||'GMAHK Galilea Balikpapan',logo:getSettingSafe_('LOGO_URL')||''},summary:{meetings:meetings.length,decisions:decisions.length,programs:programs.length,documents:documents.length},meetings,decisions,programs,documents};
}
function listAccessUsersV84(token){
  const u=requireAuthV84_(token);if(!u.permissions.access)throw new Error('Akses ditolak.');
  return readSheet_(APP.SHEETS.ACCESS).map(x=>({id:x.ID_USER,username:x.USERNAME,name:x.NAMA,role:x.ROLE,status:x.STATUS,lastLogin:x.LAST_LOGIN}));
}
function saveAccessUserV84(token,p){
  const u=requireAuthV84_(token);if(!u.permissions.access)throw new Error('Akses ditolak.');
  p=p||{};const sh=getSheet_(APP.SHEETS.ACCESS),username=String(p.username||'').trim().toLowerCase(),role=String(p.role||'');
  const matrix=rolePermissionMatrixV84_();
  if(!username||!Object.keys(matrix).includes(role))throw new Error('Username/role tidak valid.');
  const rows=readSheet_(APP.SHEETS.ACCESS),dup=rows.find(x=>String(x.USERNAME||'').toLowerCase()===username&&String(x.ID_USER||'')!==String(p.id||''));
  if(dup)throw new Error('Username sudah digunakan.');
  const now=new Date(),level=matrix[role].level;
  if(p.id){
    const row=findRowById_(sh,'ID_USER',p.id),cur=rowToObject_(sh,row),next={...cur,USERNAME:username,NAMA:String(p.name||username),ROLE:role,STATUS:String(p.status||'Aktif'),UPDATED_AT:now,LEVEL:level};
    if(p.pin) {
        if(String(p.pin||'').length<6)throw new Error('Password minimal 6 karakter.');
        next.PIN_HASH=hashPinV84_(username,p.pin);
    }
    const h=getHeaders_(sh);sh.getRange(row,1,1,h.length).setValues([h.map(k=>next[k]!==undefined?next[k]:'')]);return {success:true,id:p.id};
  }
  if(String(p.pin||'').length<6)throw new Error('Password minimal 6 karakter.');
  const id=generateId_('USR');
  const h=getHeaders_(sh);
  const next={ID_USER:id,USERNAME:username,NAMA:String(p.name||username),ROLE:role,PIN_HASH:hashPinV84_(username,p.pin),STATUS:String(p.status||'Aktif'),CREATED_AT:now,UPDATED_AT:now,LEVEL:level};
  sh.appendRow(h.map(k=>next[k]!==undefined?next[k]:''));
  return {success:true,id};
}
function deleteAccessUserV84(token,id){
  const u=requireAuthV84_(token);if(!u.permissions.access)throw new Error('Akses ditolak.');
  const x=findObjectById_(APP.SHEETS.ACCESS,'ID_USER',id);if(!x)throw new Error('User tidak ditemukan.');
  if(String(x.USERNAME)===String(u.username))throw new Error('Akun aktif tidak dapat dihapus.');
  const sh=getSheet_(APP.SHEETS.ACCESS);sh.deleteRow(findRowById_(sh,'ID_USER',id));return {success:true};
}

function crudRequiredFieldsV83_() {
  return {
    notulen: ['TANGGAL', 'JUDUL'],
    agenda: ['ID_NOTULEN', 'AGENDA'],
    kehadiran: ['ID_NOTULEN', 'NAMA'],
    usulan: ['JUDUL_USULAN'],
    keputusan: ['KEPUTUSAN'],
    tindak_lanjut: ['URAIAN'],
    keuangan: ['TANGGAL', 'JENIS', 'SUMBER_DANA'],
    rapbj: ['TAHUN', 'PROGRAM_ATAU_POS'],
    program: ['TAHUN', 'NAMA_PROGRAM'],
    departemen: ['NAMA_DEPARTEMEN'],
    inventaris: ['NAMA_BARANG'],
    pengurus: ['NAMA'],
    jemaat: ['NAMA', 'NAMA_KELUARGA', 'POSISI_KELUARGA'],
    dokumen: ['JUDUL']
  };
}


function getCrudContractV83() {
  const required =
    crudRequiredFieldsV83_();

  const pseudoFields = {
    pengurus: ['FOTO_FILE', 'FOTO_DATA'],
    jemaat: ['FOTO_FILE', 'FOTO_DATA'],
    dokumen: ['FILE_DATA']
  };

  const entities = {};

  Object.keys(
    APP.ENTITY
  )
  .forEach(
    entity => {
      const config =
        APP.ENTITY[
          entity
        ];

      const sheetName =
        resolveEntitySheetNameV602_(
          config
        );

      entities[
        entity
      ] = {
        sheet:
          sheetName,
        idField:
          config.id,
        prefix:
          config.prefix,
        headers:
          APP.SCHEMA[
            sheetName
          ] ||
          [],
        required:
          required[
            entity
          ] ||
          [],
        pseudoFields:
          pseudoFields[
            entity
          ] ||
          []
      };
    }
  );

  return {
    version:
      APP.VERSION,
    entities
  };
}


function runCrudAlignmentSelfTestV83() {
  validateAppConfig_();

  const ss =
    SpreadsheetApp
      .getActiveSpreadsheet();

  if (!ss) {
    throw new Error(
      'Spreadsheet aktif tidak ditemukan.'
    );
  }

  const contract =
    getCrudContractV83();

  const issues = [];

  Object.keys(
    contract.entities
  )
  .forEach(
    entity => {
      const config =
        contract.entities[
          entity
        ];

      const sheet =
        ss.getSheetByName(
          config.sheet
        );

      if (!sheet) {
        issues.push(
          entity +
          ': sheet ' +
          config.sheet +
          ' belum ada'
        );

        return;
      }

      const headers =
        getHeaders_(
          sheet
        );

      if (
        !headers.includes(
          config.idField
        )
      ) {
        issues.push(
          entity +
          ': ID field ' +
          config.idField +
          ' tidak ada'
        );
      }

      config.required
        .forEach(
          field => {
            if (
              !headers.includes(
                field
              )
            ) {
              issues.push(
                entity +
                ': required field ' +
                field +
                ' tidak ada di sheet'
              );
            }
          }
        );

      config.headers
        .forEach(
          field => {
            if (
              !headers.includes(
                field
              )
            ) {
              issues.push(
                entity +
                ': header ' +
                field +
                ' belum dimigrasikan'
              );
            }
          }
        );
    }
  );

  const result = {
    version:
      APP.VERSION,
    entityCount:
      Object.keys(
        contract.entities
      ).length,
    issues,
    success:
      issues.length ===
      0
  };

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (!result.success) {
    throw new Error(
      'CRUD Alignment V8.3 menemukan masalah: ' +
      issues.join(
        ' | '
      )
    );
  }

  return result;
}


function validateEntityUniquenessV83_(
  entity,
  payload
) {
  if (
    entity ===
      'jemaat' &&
    String(
      payload.NOMOR_ANGGOTA ||
      ''
    )
    .trim()
  ) {
    const number =
      String(
        payload.NOMOR_ANGGOTA
      )
      .trim()
      .toLowerCase();

    const currentId =
      String(
        payload.ID_ANGGOTA ||
        ''
      );

    const duplicate =
      readSheet_(
        APP.SHEETS.JEMAAT
      )
      .find(
        item =>
          String(
            item.NOMOR_ANGGOTA ||
            ''
          )
          .trim()
          .toLowerCase() ===
            number &&
          String(
            item.ID_ANGGOTA ||
            ''
          ) !==
            currentId
      );

    if (duplicate) {
      throw new Error(
        'Nomor anggota "' +
        payload.NOMOR_ANGGOTA +
        '" sudah digunakan oleh ' +
        memberFullNameV82_(
          duplicate
        ) +
        '.'
      );
    }
  }

  if (
    entity ===
      'departemen' &&
    String(
      payload.NAMA_DEPARTEMEN ||
      ''
    )
    .trim()
  ) {
    const name =
      String(
        payload.NAMA_DEPARTEMEN
      )
      .trim()
      .toLowerCase();

    const currentId =
      String(
        payload.ID_DEPARTEMEN ||
        ''
      );

    const duplicate =
      readSheet_(
        APP.SHEETS.DEPARTEMEN
      )
      .find(
        item =>
          String(
            item.NAMA_DEPARTEMEN ||
            ''
          )
          .trim()
          .toLowerCase() ===
            name &&
          String(
            item.ID_DEPARTEMEN ||
            ''
          ) !==
            currentId
      );

    if (duplicate) {
      throw new Error(
        'Departemen "' +
        payload.NAMA_DEPARTEMEN +
        '" sudah tersedia.'
      );
    }
  }
}


function validateEntity_(
  entity,
  payload
) {
  const required =
    crudRequiredFieldsV83_();

  (
    required[
      entity
    ] ||
    []
  )
  .forEach(
    field => {
      if (
        !String(
          payload[
            field
          ] ||
          ''
        ).trim()
      ) {
        throw new Error(
          field.replaceAll(
            '_',
            ' '
          ) +
          ' wajib diisi.'
        );
      }
    }
  );

  if (
    entity ===
    'keuangan' &&
    Number(
      payload.NOMINAL ||
      0
    ) <=
    0
  ) {
    throw new Error(
      'Nominal harus lebih dari 0.'
    );
  }

  validateEntityUniquenessV83_(
    entity,
    payload
  );

}


/* V6 removed legacy deleteEntity */



/* =========================================================
   WORKFLOW
========================================================= */

/* V6 removed legacy reviewNotulen */



/* V6 removed legacy approveAgendaProposal */



/* V6 removed legacy rejectAgendaProposal */



/* V6 removed legacy initializeAttendance */



/* V6 removed legacy syncDecisionFromAgenda_ */



/* V6 removed legacy syncFollowUpFromDecision_ */



/* =========================================================
   DETAIL
========================================================= */

function getNotulenDetail(
  id
) {
  const notulen =
    findObjectById_(
      APP.SHEETS.NOTULEN,
      'ID_NOTULEN',
      id
    );

  if (!notulen) {
    throw new Error(
      'Notulen tidak ditemukan.'
    );
  }

  const agenda =
    readSheet_(
      APP.SHEETS.AGENDA
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(id)
    )
    .sort(
      (a, b) =>
        Number(
          a.NO_URUT ||
          0
        ) -
        Number(
          b.NO_URUT ||
          0
        )
    );

  const attendance =
    readSheet_(
      APP.SHEETS.KEHADIRAN
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(id)
    );

  const decisions =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(id)
    );

  const finance =
    readSheet_(
      APP.SHEETS.KEUANGAN
    );

  agenda
    .forEach(item => {
      item.REALISASI =
        finance
          .filter(
            trx =>
              String(
                trx.ID_AGENDA
              ) ===
              String(
                item.ID_AGENDA
              ) &&
              trx.JENIS ===
              'Pengeluaran'
          )
          .reduce(
            (sum, trx) =>
              sum +
              Number(
                trx.NOMINAL ||
                0
              ),
            0
          );
    });

  const attachments =
    getAttachments_(
      'notulen',
      id
    );

  const activeOfficers =
    readSheet_(
      APP.SHEETS.PENGURUS
    )
    .filter(
      item =>
        String(
          item.STATUS ||
          'Aktif'
        ) ===
        'Aktif'
    );

  const present =
    attendance.filter(
      item =>
        item.STATUS_KEHADIRAN ===
        'Hadir'
    ).length;

  const base =
    Math.max(
      activeOfficers.length,
      attendance.length,
      1
    );

  const percent =
    Math.round(
      (
        present /
        base
      ) *
      100
    );

  const quorumLimit =
    Number(
      getSettingSafe_(
        'QUORUM_PERCENT'
      ) ||
      50
    );

  notulen.AGENDA =
    agenda;

  notulen.KEHADIRAN =
    attendance;

  notulen.KEPUTUSAN_LIST =
    decisions;

  notulen.ATTACHMENTS =
    attachments;

  notulen.TOTAL_ANGGARAN =
    agenda.reduce(
      (sum, item) =>
        sum +
        Number(
          item.ANGGARAN ||
          0
        ),
      0
    );

  notulen.TOTAL_REALISASI =
    agenda.reduce(
      (sum, item) =>
        sum +
        Number(
          item.REALISASI ||
          0
        ),
      0
    );

  notulen.QUORUM = {
    present,
    total:
      base,
    percent,
    required:
      quorumLimit,
    met:
      percent >=
      quorumLimit
  };

  return notulen;
}


/* =========================================================
   AUDIT
========================================================= */

function getAuditLog(
  limit
) {
  const sheet =
    getSheet_(
      APP.SHEETS.LOG
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return [];
  }

  const rows =
    readSheet_(
      APP.SHEETS.LOG
    );

  return rows
    .reverse()
    .slice(
      0,
      Number(
        limit ||
        100
      )
    );
}


/* =========================================================
   INTERNAL HELPERS
========================================================= */

function byYear_(
  rows,
  year
) {
  return rows.filter(
    item =>
      Number(
        item.TAHUN ||
        0
      ) ===
      Number(year)
  );
}


function buildDecisionNumber_(
  year
) {
  const rows =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    )
    .filter(
      item =>
        Number(
          item.TAHUN
        ) ===
        Number(year)
    );

  const maxNumber =
    rows.reduce(
      (max, item) => {
        const match =
          String(
            item.NO_KEPUTUSAN ||
            ''
          )
          .match(
            /-(\d+)$/
          );

        const number =
          match
            ? Number(
                match[1]
              )
            : 0;

        return Math.max(
          max,
          number
        );
      },
      0
    );

  return (
    String(year) +
    '-' +
    String(
      maxNumber +
      1
    )
    .padStart(
      3,
      '0'
    )
  );
}


function nextAgendaNumber_(
  notulenId
) {
  const agendas =
    readSheet_(
      APP.SHEETS.AGENDA
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          notulenId
        )
    );

  return (
    agendas.reduce(
      (max, item) =>
        Math.max(
          max,
          Number(
            item.NO_URUT ||
            0
          )
        ),
      0
    ) +
    1
  );
}


function cascadeDeleteMeeting_(
  notulenId
) {
  const decisions =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          notulenId
        )
    );

  decisions.forEach(
    decision => {
      deleteRowsByValue_(
        APP.SHEETS.TINDAK_LANJUT,
        'ID_KEPUTUSAN',
        decision.ID_KEPUTUSAN
      );
    }
  );

  [
    [
      APP.SHEETS.AGENDA,
      'ID_NOTULEN'
    ],
    [
      APP.SHEETS.KEHADIRAN,
      'ID_NOTULEN'
    ],
    [
      APP.SHEETS.KEPUTUSAN,
      'ID_NOTULEN'
    ]
  ].forEach(
    pair => {
      deleteRowsByValue_(
        pair[0],
        pair[1],
        notulenId
      );
    }
  );

  const attachmentSheet =
    getSheet_(
      APP.SHEETS.ATTACHMENTS
    );

  if (
    attachmentSheet.getLastRow() >=
    2
  ) {
    const rows =
      readSheet_(
        APP.SHEETS.ATTACHMENTS
      )
      .filter(
        item =>
          item.ENTITY_TYPE ===
            'notulen' &&
          String(
            item.ENTITY_ID
          ) ===
          String(
            notulenId
          )
      );

    rows.forEach(
      item => {
        trashFileSafe_(
          item.FILE_ID
        );

        const row =
          findRowById_(
            attachmentSheet,
            'ID_ATTACHMENT',
            item.ID_ATTACHMENT
          );

        if (row) {
          attachmentSheet
            .deleteRow(
              row
            );
        }
      }
    );
  }
}


function deleteRowsByValue_(
  sheetName,
  header,
  value
) {
  const sheet =
    getSheet_(
      sheetName
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return;
  }

  const column =
    getHeaderColumn_(
      sheet,
      header
    );

  if (!column) {
    return;
  }

  for (
    let row =
      sheet.getLastRow();
    row >= 2;
    row--
  ) {
    const current =
      sheet
        .getRange(
          row,
          column
        )
        .getDisplayValue();

    if (
      String(
        current
      ) ===
      String(
        value
      )
    ) {
      sheet.deleteRow(
        row
      );
    }
  }
}


/* ===== DRIVE / HELPERS ===== */
/* =========================================================
   DRIVE / ATTACHMENTS / DOCUMENTS
========================================================= */

function uploadBrandLogo(
  data,
  token) {
  assertFeatureV84_(token,'settings');

  if (
    !data ||
    !data.base64
  ) {
    throw new Error(
      'File logo tidak ditemukan.'
    );
  }

  const oldId =
    getSettingSafe_(
      'LOGO_FILE_ID'
    );

  const file =
    saveDriveFile_(
      data,
      getSettingSafe_(
        'MEDIA_FOLDER_NAME'
      ) ||
      'MAJELIS GALILEA - MEDIA',
      'logo-advent'
    );

  setSetting_(
    'LOGO_URL',
    file.url
  );

  setSetting_(
    'LOGO_FILE_ID',
    file.fileId
  );

  trashFileSafe_(
    oldId
  );

  audit_(
    'UPDATE_LOGO',
    'setting',
    'LOGO_URL',
    'Mengganti logo utama.'
  );

  return {
    success:
      true,

    url:
      file.url
  };
}


function uploadAttachment(
  payload
) {
  if (
    !payload ||
    !payload.ENTITY_TYPE ||
    !payload.ENTITY_ID ||
    !payload.FILE_DATA
  ) {
    throw new Error(
      'Data lampiran tidak lengkap.'
    );
  }

  const uploaded =
    saveDriveFile_(
      payload.FILE_DATA,
      getSettingSafe_(
        'DOCUMENT_FOLDER_NAME'
      ) ||
      'MAJELIS GALILEA - DOKUMEN',
      payload.ENTITY_TYPE +
      '-' +
      payload.ENTITY_ID
    );

  const sheet =
    getSheet_(
      APP.SHEETS.ATTACHMENTS
    );

  const id =
    generateId_(
      'ATT'
    );

  sheet.appendRow([
    id,
    payload.ENTITY_TYPE,
    payload.ENTITY_ID,
    payload.JUDUL ||
      uploaded.name,
    uploaded.name,
    uploaded.url,
    uploaded.fileId,
    uploaded.mimeType,
    new Date()
  ]);

  audit_(
    'UPLOAD_ATTACHMENT',
    payload.ENTITY_TYPE,
    payload.ENTITY_ID,
    uploaded.name
  );

  return {
    success:
      true,

    id,

    url:
      uploaded.url,

    name:
      uploaded.name
  };
}


function deleteAttachment(
  id
) {
  const sheet =
    getSheet_(
      APP.SHEETS.ATTACHMENTS
    );

  const row =
    findRowById_(
      sheet,
      'ID_ATTACHMENT',
      id
    );

  if (!row) {
    throw new Error(
      'Lampiran tidak ditemukan.'
    );
  }

  const current =
    rowToObject_(
      sheet,
      row
    );

  trashFileSafe_(
    current.FILE_ID
  );

  sheet.deleteRow(
    row
  );

  audit_(
    'DELETE_ATTACHMENT',
    current.ENTITY_TYPE,
    current.ENTITY_ID,
    current.FILE_NAME
  );

  return {
    success:
      true
  };
}


function getAttachments_(
  entityType,
  entityId
) {
  return readSheet_(
    APP.SHEETS.ATTACHMENTS
  )
  .filter(
    item =>
      String(
        item.ENTITY_TYPE
      ) ===
      String(
        entityType
      ) &&
      String(
        item.ENTITY_ID
      ) ===
      String(
        entityId
      )
  );
}


function saveDriveFile_(
  data,
  folderName,
  prefix
) {
  const bytes =
    Utilities.base64Decode(
      String(
        data.base64
      )
    );

  const safeOriginal =
    sanitizeFileName_(
      data.name ||
      'file'
    );

  const finalName =
    sanitizeFileName_(
      prefix +
      '-' +
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        'yyyyMMdd-HHmmss'
      ) +
      '-' +
      safeOriginal
    );

  const blob =
    Utilities.newBlob(
      bytes,
      data.mimeType ||
      'application/octet-stream',
      finalName
    );

  const folder =
    getOrCreateFolder_(
      folderName
    );

  const file =
    folder.createFile(
      blob
    );

  /*
   * Public link membantu foto tampil di Web App.
   * Jika Workspace memblokirnya, file tetap tersimpan.
   */
  try {
    file.setSharing(
      DriveApp.Access
        .ANYONE_WITH_LINK,
      DriveApp.Permission
        .VIEW
    );
  }

  catch (error) {
    console.log(
      'Sharing dibatasi:',
      error
    );
  }

  return {
    fileId:
      file.getId(),

    name:
      file.getName(),

    mimeType:
      file.getMimeType(),

    url:
      file.getMimeType()
        .startsWith(
          'image/'
        )
        ? (
            'https://drive.google.com/thumbnail?id=' +
            file.getId() +
            '&sz=w1600'
          )
        : file.getUrl()
  };
}


function trashFileSafe_(
  fileId
) {
  if (!fileId) {
    return;
  }

  try {
    DriveApp
      .getFileById(
        fileId
      )
      .setTrashed(
        true
      );
  }

  catch (error) {
    console.log(
      'File tidak dapat dipindahkan ke Trash:',
      error
    );
  }
}


/* =========================================================
   ANNUAL ARCHIVE / BACKUP
========================================================= */

function createAnnualArchive(
  year,
  token) {
  assertFeatureV84_(token,'archive');

  year =
    Number(year);

  if (!year) {
    throw new Error(
      'Tahun arsip tidak valid.'
    );
  }

  const parent =
    getOrCreateFolder_(
      getSettingSafe_(
        'ARCHIVE_FOLDER_NAME'
      ) ||
      'MAJELIS GALILEA - ARSIP'
    );

  const yearFolder =
    getOrCreateSubFolder_(
      parent,
      String(year)
    );

  const timestamp =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyyMMdd-HHmmss'
    );

  const csvBlobs = [];

  const yearSheets = [
    APP.SHEETS.NOTULEN,
    APP.SHEETS.USULAN,
    APP.SHEETS.KEPUTUSAN,
    APP.SHEETS.TINDAK_LANJUT,
    APP.SHEETS.KEUANGAN,
    APP.SHEETS.RAPBJ,
    APP.SHEETS.PROGRAM,
    APP.SHEETS.DOKUMEN,
    APP.SHEETS.SURAT
  ];

  yearSheets.forEach(
    sheetName => {
      const rows =
        readSheet_(
          sheetName
        )
        .filter(
          item =>
            Number(
              item.TAHUN ||
              0
            ) ===
            year
        );

      csvBlobs.push(
        makeCsvBlob_(
          sheetName,
          rows
        )
      );
    }
  );

  /*
   * Snapshot data yang tidak memiliki TAHUN.
   */
  [
    APP.SHEETS.INVENTARIS,
    APP.SHEETS.PENGURUS,
    APP.SHEETS.JEMAAT,
    APP.SHEETS.DEPARTEMEN
  ].forEach(
    sheetName => {
      csvBlobs.push(
        makeCsvBlob_(
          sheetName,
          readSheet_(
            sheetName
          )
        )
      );
    }
  );

  const notulenIds =
    new Set(
      readSheet_(
        APP.SHEETS.NOTULEN
      )
      .filter(
        item =>
          Number(
            item.TAHUN
          ) ===
          year
      )
      .map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  csvBlobs.push(
    makeCsvBlob_(
      APP.SHEETS.AGENDA,
      readSheet_(
        APP.SHEETS.AGENDA
      )
      .filter(
        item =>
          notulenIds.has(
            String(
              item.ID_NOTULEN
            )
          )
      )
    )
  );

  csvBlobs.push(
    makeCsvBlob_(
      APP.SHEETS.KEHADIRAN,
      readSheet_(
        APP.SHEETS.KEHADIRAN
      )
      .filter(
        item =>
          notulenIds.has(
            String(
              item.ID_NOTULEN
            )
          )
      )
    )
  );

  const summaryText =
    buildArchiveSummaryText_(
      year
    );

  csvBlobs.push(
    Utilities.newBlob(
      summaryText,
      'text/plain',
      'RINGKASAN_' +
      year +
      '.txt'
    )
  );

  const zipBlob =
    Utilities.zip(
      csvBlobs,
      'MAJELIS_GALILEA_' +
      year +
      '_' +
      timestamp +
      '.zip'
    );

  const zipFile =
    yearFolder.createFile(
      zipBlob
    );

  const pdf =
    generatePdfReport(
      'tahunan',
      '',
      year
    );

  const pdfBlob =
    Utilities.newBlob(
      Utilities.base64Decode(
        pdf.base64
      ),
      'application/pdf',
      pdf.fileName
    );

  const pdfFile =
    yearFolder.createFile(
      pdfBlob
    );

  audit_(
    'ARCHIVE_YEAR',
    'arsip',
    String(year),
    zipFile.getName()
  );

  return {
    success:
      true,

    folderUrl:
      yearFolder.getUrl(),

    zipUrl:
      zipFile.getUrl(),

    zipName:
      zipFile.getName(),

    pdfUrl:
      pdfFile.getUrl(),

    pdfName:
      pdfFile.getName()
  };
}


function makeCsvBlob_(
  sheetName,
  rows
) {
  const headers =
    APP.SCHEMA[
      sheetName
    ] ||
    (
      rows[0]
        ? Object.keys(
            rows[0]
          )
        : []
    );

  const lines = [];

  lines.push(
    headers
      .map(
        csvEscape_
      )
      .join(',')
  );

  rows.forEach(
    row => {
      lines.push(
        headers
          .map(
            header =>
              csvEscape_(
                row[
                  header
                ]
              )
          )
          .join(',')
      );
    }
  );

  return Utilities.newBlob(
    '\uFEFF' +
    lines.join(
      '\n'
    ),
    'text/csv',
    sheetName +
    '.csv'
  );
}


function csvEscape_(
  value
) {
  const string =
    String(
      value ??
      ''
    );

  return (
    '"' +
    string.replaceAll(
      '"',
      '""'
    ) +
    '"'
  );
}


function buildArchiveSummaryText_(
  year
) {
  const data =
    getAppData({
      year
    });

  const s =
    data.summary;

  return [
    APP.NAME,
    data.app.church,
    'ARSIP TAHUN ' +
      year,
    '',
    'Notulen: ' +
      s.totalNotulen,
    'Keputusan: ' +
      s.totalDecisions,
    'Tindak lanjut terlambat: ' +
      s.overdueTasks,
    'Program kerja: ' +
      s.totalPrograms,
    'RAPBJ: ' +
      formatRupiah_(
        s.rapbjPlan
      ),
    'Realisasi RAPBJ: ' +
      formatRupiah_(
        s.rapbjRealized
      ),
    'Pemasukan: ' +
      formatRupiah_(
        s.totalIncome
      ),
    'Pengeluaran: ' +
      formatRupiah_(
        s.totalExpense
      ),
    'Saldo berjalan: ' +
      formatRupiah_(
        s.totalBalance
      ),
    '',
    'Dibuat: ' +
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        'dd MMMM yyyy HH:mm:ss'
      ) +
      ' WITA'
  ].join(
    '\n'
  );
}


/* =========================================================
   BASE HELPERS
========================================================= */

function readSheet_(
  sheetName
) {
  const sheet =
    getSheet_(
      sheetName
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return [];
  }

  const values =
    sheet
      .getDataRange()
      .getValues();

  const headers =
    values
      .shift()
      .map(String);

  return values
    .filter(
      row =>
        row.some(
          value =>
            value !== '' &&
            value !== null
        )
    )
    .map(
      row => {
        const object = {};

        headers
          .forEach(
            (
              header,
              index
            ) => {
              object[
                header
              ] =
                serialize_(
                  row[
                    index
                  ],
                  header
                );
            }
          );

        return object;
      }
    );
}


function rowToObject_(
  sheet,
  row
) {
  const headers =
    getHeaders_(
      sheet
    );

  const values =
    sheet
      .getRange(
        row,
        1,
        1,
        headers.length
      )
      .getValues()[0];

  const result = {};

  headers.forEach(
    (
      header,
      index
    ) => {
      result[
        header
      ] =
        serialize_(
          values[
            index
          ],
          header
        );
    }
  );

  return result;
}


function getSheet_(
  name
) {
  if (!name) {
    throw new Error('Nama sheet kosong / undefined. Jalankan setupDatabase() dan pastikan Code.gs V6 terpasang lengkap.');
  }

  const sheet =
    SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(
        name
      );

  if (!sheet) {
    throw new Error(
      'Sheet "' +
      name +
      '" belum tersedia. Jalankan setupDatabase() terlebih dahulu.'
    );
  }

  return sheet;
}


function getHeaders_(
  sheet
) {
  return sheet
    .getRange(
      1,
      1,
      1,
      sheet.getLastColumn()
    )
    .getDisplayValues()[0]
    .map(String);
}


function getHeaderColumn_(
  sheet,
  headerName
) {
  const headers =
    getHeaders_(
      sheet
    );

  const index =
    headers.indexOf(
      headerName
    );

  return index ===
    -1
    ? 0
    : index +
      1;
}


function findRowById_(
  sheet,
  idHeader,
  id
) {
  if (
    sheet.getLastRow() <
    2
  ) {
    return 0;
  }

  const column =
    getHeaderColumn_(
      sheet,
      idHeader
    );

  if (!column) {
    return 0;
  }

  const values =
    sheet
      .getRange(
        2,
        column,
        sheet.getLastRow() -
        1,
        1
      )
      .getDisplayValues();

  for (
    let index = 0;
    index < values.length;
    index++
  ) {
    if (
      String(
        values[
          index
        ][0]
      ) ===
      String(id)
    ) {
      return index +
        2;
    }
  }

  return 0;
}


function findObjectById_(
  sheetName,
  idHeader,
  id
) {
  if (!id) {
    return null;
  }

  return (
    readSheet_(
      sheetName
    )
    .find(
      item =>
        String(
          item[
            idHeader
          ]
        ) ===
        String(id)
    ) ||
    null
  );
}


function serialize_(
  value,
  header
) {
  if (
    value instanceof
    Date
  ) {
    if (
      [
        'TANGGAL',
        'TANGGAL_USUL',
        'DEADLINE',
        'TARGET_SELESAI',
        'TANGGAL_MULAI',
        'TANGGAL_SELESAI',
        'TANGGAL_PEROLEHAN',
        'TANGGAL_LAHIR',
        'TANGGAL_BAPTIS',
        'TANGGAL_BERGABUNG'
      ].includes(
        header
      )
    ) {
      return Utilities.formatDate(
        value,
        APP.TZ,
        'yyyy-MM-dd'
      );
    }

    return Utilities.formatDate(
      value,
      APP.TZ,
      "yyyy-MM-dd'T'HH:mm:ss"
    );
  }

  return (
    value ===
      null ||
    value ===
      undefined
  )
    ? ''
    : value;
}


function normalizeWrite_(
  header,
  value
) {
  if (
    [
      'TANGGAL',
      'TANGGAL_USUL',
      'DEADLINE',
      'TARGET_SELESAI',
      'TANGGAL_MULAI',
      'TANGGAL_SELESAI',
      'TANGGAL_PEROLEHAN',
      'TANGGAL_LAHIR',
      'TANGGAL_BAPTIS',
      'TANGGAL_BERGABUNG'
    ].includes(
      header
    ) &&
    value
  ) {
    const parts =
      String(value)
        .split('-');

    if (
      parts.length ===
      3
    ) {
      return new Date(
        Number(
          parts[0]
        ),
        Number(
          parts[1]
        ) -
        1,
        Number(
          parts[2]
        ),
        12,
        0,
        0
      );
    }
  }

  return value;
}


function currentYear_() {
  return Number(
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy'
    )
  );
}


function yearFromDate_(
  value
) {
  if (!value) {
    return 0;
  }

  const year =
    Number(
      String(value)
        .substring(
          0,
          4
        )
    );

  return Number.isFinite(
    year
  )
    ? year
    : 0;
}


function generateId_(
  prefix
) {
  return (
    prefix +
    '-' +
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy'
    ) +
    '-' +
    Utilities
      .getUuid()
      .split('-')[0]
      .toUpperCase()
  );
}


function getYearOptions_(
  data
) {
  const years =
    new Set([
      currentYear_()
    ]);

  [
    data.NOTULEN,
    data.USULAN,
    data.KEPUTUSAN,
    data.TINDAK_LANJUT,
    data.KEUANGAN,
    data.RAPBJ,
    data.PROGRAM,
    data.DOKUMEN,
    data.SURAT
  ].forEach(rows => {
    (
      rows ||
      []
    )
    .forEach(item => {
      const year =
        Number(
          item.TAHUN ||
          0
        );

      if (year) {
        years.add(
          year
        );
      }
    });
  });

  return Array
    .from(years)
    .sort(
      (a, b) =>
        b -
        a
    );
}


function sortDateDesc_(
  a,
  b
) {
  return String(
    b.TANGGAL ||
    ''
  )
  .localeCompare(
    String(
      a.TANGGAL ||
      ''
    )
  );
}


function sortDateAsc_(
  a,
  b
) {
  return String(
    a.TANGGAL ||
    ''
  )
  .localeCompare(
    String(
      b.TANGGAL ||
      ''
    )
  );
}


function sortDateDescBy_(
  field
) {
  return (
    a,
    b
  ) =>
    String(
      b[field] ||
      ''
    )
    .localeCompare(
      String(
        a[field] ||
        ''
      )
    );
}


function sortDateAscBy_(
  field
) {
  return (
    a,
    b
  ) =>
    String(
      a[field] ||
      ''
    )
    .localeCompare(
      String(
        b[field] ||
        ''
      )
    );
}


function getSettingSafe_(
  key
) {
  try {
    const sheet =
      SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName(
          APP.SHEETS.SETTING
        );

    if (
      !sheet ||
      sheet.getLastRow() <
      2
    ) {
      return '';
    }

    const values =
      sheet
        .getRange(
          2,
          1,
          sheet.getLastRow() -
          1,
          2
        )
        .getValues();

    const row =
      values.find(
        item =>
          String(
            item[0]
          ) ===
          String(key)
      );

    return row
      ? String(
          row[1] ||
          ''
        )
      : '';
  }

  catch (error) {
    return '';
  }
}


function setSetting_(
  key,
  value
) {
  const sheet =
    getSheet_(
      APP.SHEETS.SETTING
    );

  if (
    sheet.getLastRow() >=
    2
  ) {
    const values =
      sheet
        .getRange(
          2,
          1,
          sheet.getLastRow() -
          1,
          1
        )
        .getDisplayValues();

    for (
      let index = 0;
      index < values.length;
      index++
    ) {
      if (
        String(
          values[
            index
          ][0]
        ) ===
        String(key)
      ) {
        sheet
          .getRange(
            index +
            2,
            2
          )
          .setValue(
            value
          );

        return;
      }
    }
  }

  sheet.appendRow([
    key,
    value
  ]);
}


function getOrCreateFolder_(
  name
) {
  const folders =
    DriveApp
      .getFoldersByName(
        name
      );

  if (
    folders.hasNext()
  ) {
    return folders.next();
  }

  return DriveApp
    .createFolder(
      name
    );
}


function getOrCreateSubFolder_(
  parent,
  name
) {
  const folders =
    parent
      .getFoldersByName(
        name
      );

  if (
    folders.hasNext()
  ) {
    return folders.next();
  }

  return parent
    .createFolder(
      name
    );
}


function sanitizeFileName_(
  name
) {
  return String(
    name ||
    'file'
  )
  .replace(
    /[\\/:*?"<>|]+/g,
    '-'
  )
  .slice(
    0,
    150
  );
}


function formatRupiah_(
  value
) {
  return (
    'Rp' +
    Number(
      value ||
      0
    )
    .toFixed(0)
    .replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.'
    )
  );
}


function formatDatePdf_(
  value
) {
  if (!value) {
    return '-';
  }

  const parts =
    String(value)
      .split('-');

  if (
    parts.length !==
    3
  ) {
    return String(
      value
    );
  }

  return Utilities.formatDate(
    new Date(
      Number(
        parts[0]
      ),
      Number(
        parts[1]
      ) -
      1,
      Number(
        parts[2]
      ),
      12
    ),
    APP.TZ,
    'dd MMMM yyyy'
  );
}


function userLabel_() {
  return (
    Session
      .getActiveUser()
      .getEmail() ||
    'Web App'
  );
}


function audit_(
  action,
  entity,
  reference,
  description
) {
  try {
    getSheet_(
      APP.SHEETS.LOG
    )
    .appendRow([
      new Date(),
      userLabel_(),
      action,
      entity,
      reference,
      description
    ]);
  }

  catch (error) {
    console.log(
      'Audit error:',
      error
    );
  }
}


/* ===== PDF SERVICE ===== */
function generatePdfReport(
  reportType,
  referenceId,
  year
) {
  const selectedYear =
    Number(
      year ||
      currentYear_()
    );

  const config =
    buildReportConfig_(
      reportType,
      referenceId,
      selectedYear
    );

  const doc =
    DocumentApp.create(
      config.title
    );

  try {
    buildPdfIdentity_(
      doc,
      config.title,
      config.kicker
    );

    config.builder(
      doc
    );

    doc.saveAndClose();

    const pdfBlob =
      DriveApp
        .getFileById(
          doc.getId()
        )
        .getBlob()
        .getAs(
          MimeType.PDF
        )
        .setName(
          config.fileName
        );

    return {
      success:
        true,

      fileName:
        config.fileName,

      mimeType:
        'application/pdf',

      base64:
        Utilities.base64Encode(
          pdfBlob.getBytes()
        )
    };
  }

  finally {
    try {
      DriveApp
        .getFileById(
          doc.getId()
        )
        .setTrashed(
          true
        );
    }

    catch (error) {
      console.log(
        error
      );
    }
  }
}


function buildReportConfig_(
  reportType,
  referenceId,
  year
) {
  if (
    reportType ===
    'notulen'
  ) {
    const detail =
      getNotulenDetail(
        referenceId
      );

    return {
      title:
        detail.JUDUL,

      kicker:
        'NOTULEN MAJELIS',

      fileName:
        'Notulen_' +
        safeFilePart_(
          detail.JUDUL
        ) +
        '.pdf',

      builder:
        doc =>
          buildNotulenPdf_(
            doc,
            detail
          )
    };
  }

  const map = {
    keuangan: {
      title:
        'Laporan Keuangan ' +
        year,

      kicker:
        'KEUANGAN',

      fileName:
        'Laporan_Keuangan_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildFinancePdf_(
            doc,
            year
          )
    },

    rapbj: {
      title:
        'RAPBJ ' +
        year,

      kicker:
        'ANGGARAN TAHUNAN',

      fileName:
        'RAPBJ_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildRapbjPdf_(
            doc,
            year
          )
    },

    usulan: {
      title:
        'Usulan Agenda ' +
        year,

      kicker:
        'PERSIAPAN RAPAT',

      fileName:
        'Usulan_Agenda_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildProposalPdf_(
            doc,
            year
          )
    },

    keputusan: {
      title:
        'Bank Keputusan ' +
        year,

      kicker:
        'KEPUTUSAN MAJELIS',

      fileName:
        'Bank_Keputusan_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildDecisionPdf_(
            doc,
            year
          )
    },

    tindak_lanjut: {
      title:
        'Tindak Lanjut ' +
        year,

      kicker:
        'MONITORING',

      fileName:
        'Tindak_Lanjut_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildTaskPdf_(
            doc,
            year
          )
    },

    program: {
      title:
        'Program Kerja ' +
        year,

      kicker:
        'PROGRAM & DEPARTEMEN',

      fileName:
        'Program_Kerja_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildProgramPdf_(
            doc,
            year
          )
    },

    inventaris: {
      title:
        'Laporan Inventaris',

      kicker:
        'ASET & INVENTARIS',

      fileName:
        'Laporan_Inventaris.pdf',

      builder:
        doc =>
          buildInventoryPdf_(
            doc
          )
    },

    pengurus: {
      title:
        'Daftar Pengurus Majelis',

      kicker:
        'STRUKTUR MAJELIS',

      fileName:
        'Daftar_Pengurus_Majelis.pdf',

      builder:
        doc =>
          buildPeoplePdf_(
            doc,
            'pengurus'
          )
    },

    jemaat: {
      title:
        'Daftar Anggota Jemaat',

      kicker:
        'ADMINISTRASI JEMAAT',

      fileName:
        'Daftar_Anggota_Jemaat.pdf',

      builder:
        doc =>
          buildPeoplePdf_(
            doc,
            'jemaat'
          )
    },

    dokumen: {
      title:
        'Register Dokumen ' +
        year,

      kicker:
        'PUSAT DOKUMEN',

      fileName:
        'Register_Dokumen_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildDocumentRegisterPdf_(
            doc,
            year
          )
    },

    kehadiran: {
      title:
        'Rekap Kehadiran ' +
        year,

      kicker:
        'KEHADIRAN & KUORUM',

      fileName:
        'Rekap_Kehadiran_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildAttendancePdf_(
            doc,
            year
          )
    },

    tahunan: {
      title:
        'Laporan Tahunan ' +
        year,

      kicker:
        'ARSIP TAHUNAN',

      fileName:
        'Laporan_Tahunan_' +
        year +
        '.pdf',

      builder:
        doc =>
          buildAnnualPdf_(
            doc,
            year
          )
    }
  };

  if (
    !map[
      reportType
    ]
  ) {
    throw new Error(
      'Jenis laporan PDF tidak dikenali.'
    );
  }

  return map[
    reportType
  ];
}


/* =========================================================
   PDF IDENTITY
========================================================= */

function buildPdfIdentity_(
  doc,
  title,
  kicker
) {
  const body =
    doc.getBody();

  body
    .setMarginTop(
      58
    )
    .setMarginBottom(
      58
    )
    .setMarginLeft(
      48
    )
    .setMarginRight(
      48
    );

  const church =
    getSettingSafe_(
      'CHURCH_NAME'
    ) ||
    'GMAHK Jemaat Galilea Balikpapan';

  const generated =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'dd MMM yyyy · HH:mm'
    );

  const header =
    doc.addHeader();

  const identity =
    header.appendTable([
      [
        '',
        ''
      ]
    ]);

  identity
    .setBorderWidth(
      0
    );

  const logoCell =
    identity
      .getRow(0)
      .getCell(0);

  const textCell =
    identity
      .getRow(0)
      .getCell(1);

  styleCell_(
    logoCell,
    '#FFFFFF',
    4
  );

  styleCell_(
    textCell,
    '#FFFFFF',
    4
  );

  logoCell.clear();

  const logoFileId =
    getSettingSafe_(
      'LOGO_FILE_ID'
    );

  if (
    logoFileId
  ) {
    try {
      const image =
        logoCell
          .appendImage(
            DriveApp
              .getFileById(
                logoFileId
              )
              .getBlob()
          );

      image
        .setWidth(
          38
        )
        .setHeight(
          38
        );
    }

    catch (error) {
      appendPdfLogoFallback_(
        logoCell
      );
    }
  }

  else {
    appendPdfLogoFallback_(
      logoCell
    );
  }

  textCell.clear();

  const brand =
    textCell
      .appendParagraph(
        APP.NAME
      );

  styleParagraph_(
    brand,
    10,
    '#650A15',
    true
  );

  brand
    .setSpacingAfter(
      1
    );

  const churchP =
    textCell
      .appendParagraph(
        church
      );

  styleParagraph_(
    churchP,
    7.5,
    '#76686B',
    false
  );

  const headerLine =
    header.appendTable([
      ['']
    ]);

  headerLine
    .setBorderWidth(
      0
    );

  headerLine
    .getRow(0)
    .getCell(0)
    .setBackgroundColor(
      '#82101D'
    )
    .setPaddingTop(
      0
    )
    .setPaddingBottom(
      0
    )
    .setPaddingLeft(
      0
    )
    .setPaddingRight(
      0
    )
    .setText(
      ''
    );

  const footer =
    doc.addFooter();

  const footerLine =
    footer.appendTable([
      ['']
    ]);

  footerLine
    .setBorderWidth(
      0
    );

  footerLine
    .getRow(0)
    .getCell(0)
    .setBackgroundColor(
      '#D7B6BB'
    )
    .setPaddingTop(
      0
    )
    .setPaddingBottom(
      0
    )
    .setPaddingLeft(
      0
    )
    .setPaddingRight(
      0
    )
    .setText(
      ''
    );

  const footerTable =
    footer.appendTable([
      [
        'MAJELIS GALILEA · Dokumen Administrasi · ' +
        (
          getSettingSafe_(
            'EXPORT_STAMP_TEXT'
          ) ||
          'diunduh dari website Majelis Galilea'
        ),
        generated +
        ' WITA'
      ]
    ]);

  footerTable
    .setBorderWidth(
      0
    );

  for (
    let col = 0;
    col < 2;
    col++
  ) {
    const cell =
      footerTable
        .getRow(0)
        .getCell(col);

    styleCell_(
      cell,
      '#FFFFFF',
      4
    );

    cell
      .editAsText()
      .setFontFamily(
        'Arial'
      )
      .setFontSize(
        7
      )
      .setForegroundColor(
        '#8C7A7E'
      );
  }

  footerTable
    .getRow(0)
    .getCell(1)
    .getChild(0)
    .asParagraph()
    .setAlignment(
      DocumentApp
        .HorizontalAlignment
        .RIGHT
    );

  const cover =
    body.appendTable([
      ['']
    ]);

  cover
    .setBorderWidth(
      0
    );

  const coverCell =
    cover
      .getRow(0)
      .getCell(0);

  coverCell
    .setBackgroundColor(
      '#650A15'
    )
    .setPaddingTop(
      23
    )
    .setPaddingBottom(
      23
    )
    .setPaddingLeft(
      22
    )
    .setPaddingRight(
      22
    );

  coverCell.clear();

  const kickerP =
    coverCell
      .appendParagraph(
        kicker
      );

  styleParagraph_(
    kickerP,
    7,
    '#EACED2',
    true
  );

  kickerP
    .setSpacingAfter(
      7
    );

  const titleP =
    coverCell
      .appendParagraph(
        title
      );

  styleParagraph_(
    titleP,
    22,
    '#FFFFFF',
    true
  );

  titleP
    .setSpacingAfter(
      8
    );

  const meta =
    coverCell
      .appendParagraph(
        church +
        '  ·  ' +
        generated +
        ' WITA'
      );

  styleParagraph_(
    meta,
    7.5,
    '#EACED2',
    false
  );

  body
    .appendParagraph('')
    .setSpacingAfter(
      2
    );
}


function appendPdfLogoFallback_(
  cell
) {
  cell
    .setBackgroundColor(
      '#82101D'
    );

  const p =
    cell.appendParagraph(
      'MG'
    );

  p.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    p,
    12,
    '#FFFFFF',
    true
  );
}


/* =========================================================
   NOTULEN
========================================================= */

function buildNotulenPdf_(
  doc,
  detail
) {
  const body =
    doc.getBody();

  sectionTitle_(
    body,
    'Informasi Rapat'
  );

  infoTable_(
    body,
    [
      [
        'Tanggal',
        formatDatePdf_(
          detail.TANGGAL
        )
      ],
      [
        'Jenis Rapat',
        detail.JENIS_RAPAT ||
        '-'
      ],
      [
        'Tempat',
        detail.TEMPAT ||
        '-'
      ],
      [
        'Waktu',
        (
          detail.WAKTU_MULAI ||
          '-'
        ) +
        ' – ' +
        (
          detail.WAKTU_SELESAI ||
          '-'
        )
      ],
      [
        'Pimpinan',
        detail.PIMPINAN_RAPAT ||
        '-'
      ],
      [
        'Notulis',
        detail.NOTULIS ||
        '-'
      ],
      [
        'Status',
        detail.STATUS ||
        '-'
      ],
      [
        'Kuorum',
        detail.QUORUM.percent +
        '% · ' +
        (
          detail.QUORUM.met
            ? 'Terpenuhi'
            : 'Belum Terpenuhi'
        )
      ]
    ]
  );

  sectionTitle_(
    body,
    'Anggaran'
  );

  metricTable_(
    body,
    [
      'TOTAL ANGGARAN',
      'REALISASI',
      'SELISIH'
    ],
    [
      formatRupiah_(
        detail.TOTAL_ANGGARAN
      ),
      formatRupiah_(
        detail.TOTAL_REALISASI
      ),
      formatRupiah_(
        Number(
          detail.TOTAL_ANGGARAN ||
          0
        ) -
        Number(
          detail.TOTAL_REALISASI ||
          0
        )
      )
    ]
  );

  sectionTitle_(
    body,
    'Agenda & Keputusan'
  );

  if (
    !detail.AGENDA.length
  ) {
    emptyPdf_(
      body,
      'Belum ada agenda.'
    );
  }

  detail.AGENDA
    .forEach(item => {
      agendaBlock_(
        body,
        item
      );
    });

  sectionTitle_(
    body,
    'Kehadiran'
  );

  if (
    !detail.KEHADIRAN.length
  ) {
    emptyPdf_(
      body,
      'Belum ada daftar hadir.'
    );
  }

  else {
    const rows = [
      [
        'Nama',
        'Jabatan',
        'Status',
        'Keterangan'
      ]
    ];

    detail.KEHADIRAN
      .forEach(item => {
        rows.push([
          item.NAMA ||
          '-',
          item.JABATAN ||
          '-',
          item.STATUS_KEHADIRAN ||
          '-',
          item.KETERANGAN ||
          '-'
        ]);
      });

    dataTable_(
      body,
      rows
    );
  }

  if (
    detail.CATATAN
  ) {
    sectionTitle_(
      body,
      'Catatan'
    );

    const p =
      body.appendParagraph(
        detail.CATATAN
      );

    styleParagraph_(
      p,
      8.5,
      '#514548',
      false
    );

    p
      .setLineSpacing(
        1.2
      );
  }

  signatureBlock_(
    body,
    detail.PIMPINAN_RAPAT,
    detail.NOTULIS
  );
}


function agendaBlock_(
  body,
  item
) {
  const table =
    body.appendTable([
      ['']
    ]);

  table
    .setBorderColor(
      '#E3CED2'
    )
    .setBorderWidth(
      .6
    );

  const cell =
    table
      .getRow(0)
      .getCell(0);

  styleCell_(
    cell,
    '#FBF5F6',
    13
  );

  cell.clear();

  const eyebrow =
    cell.appendParagraph(
      'AGENDA ' +
      String(
        item.NO_URUT ||
        '-'
      )
    );

  styleParagraph_(
    eyebrow,
    7,
    '#A31524',
    true
  );

  const title =
    cell.appendParagraph(
      item.AGENDA ||
      '-'
    );

  styleParagraph_(
    title,
    11,
    '#241C1E',
    true
  );

  title
    .setSpacingAfter(
      7
    );

  if (
    item.PEMBAHASAN
  ) {
    const p =
      cell.appendParagraph(
        'Pembahasan\n' +
        item.PEMBAHASAN
      );

    styleParagraph_(
      p,
      8,
      '#65585B',
      false
    );

    p
      .setSpacingAfter(
        6
      )
      .setLineSpacing(
        1.15
      );
  }

  if (
    item.KEPUTUSAN
  ) {
    const p =
      cell.appendParagraph(
        'Keputusan\n' +
        item.KEPUTUSAN
      );

    styleParagraph_(
      p,
      8,
      '#3A3032',
      true
    );

    p
      .setSpacingAfter(
        6
      )
      .setLineSpacing(
        1.15
      );
  }

  const meta =
    cell.appendParagraph(
      'PIC: ' +
      (
        item.PIC ||
        '-'
      ) +
      ' · ' +
      'Sumber: ' +
      (
        item.SUMBER_DANA ||
        '-'
      ) +
      ' · ' +
      'Anggaran: ' +
      formatRupiah_(
        item.ANGGARAN
      ) +
      ' · ' +
      'Realisasi: ' +
      formatRupiah_(
        item.REALISASI
      )
    );

  styleParagraph_(
    meta,
    7,
    '#89777B',
    false
  );

  body
    .appendParagraph('')
    .setSpacingAfter(
      1
    );
}


/* =========================================================
   OTHER REPORTS
========================================================= */

function buildFinancePdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  const s =
    data.summary;

  const ministry =
    getFinanceMinistryMetricsV702(
      year
    );

  sectionTitle_(
    body,
    'Ringkasan Keuangan'
  );

  metricTable_(
    body,
    [
      'PEMASUKAN',
      'PENGELUARAN',
      'SALDO BERJALAN'
    ],
    [
      formatRupiah_(
        s.totalIncome
      ),
      formatRupiah_(
        s.totalExpense
      ),
      formatRupiah_(
        s.totalBalance
      )
    ]
  );

  sectionTitle_(
    body,
    'Perpuluhan & Persembahan Terpadu'
  );

  const ministryRows = [
    [
      'Jenis',
      ministry.monthLabel,
      'Target Bulan',
      '% Bulan',
      'Akumulasi',
      'Target Akumulasi',
      '% Akumulasi'
    ],
    [
      'Perpuluhan',
      formatRupiah_(
        ministry.perpuluhan.month
      ),
      formatRupiah_(
        ministry.perpuluhan.targetMonth
      ),
      ministry.perpuluhan.targetMonth >
        0
          ? (
              ministry.perpuluhan.percentMonth +
              '%'
            )
          : '-',
      formatRupiah_(
        ministry.perpuluhan.cumulative
      ),
      formatRupiah_(
        ministry.perpuluhan.targetCumulative
      ),
      ministry.perpuluhan.targetCumulative >
        0
          ? (
              ministry.perpuluhan.percentCumulative +
              '%'
            )
          : '-'
    ],
    [
      'Persembahan Terpadu',
      formatRupiah_(
        ministry.persembahanTerpadu.month
      ),
      formatRupiah_(
        ministry.persembahanTerpadu.targetMonth
      ),
      ministry.persembahanTerpadu.targetMonth >
        0
          ? (
              ministry.persembahanTerpadu.percentMonth +
              '%'
            )
          : '-',
      formatRupiah_(
        ministry.persembahanTerpadu.cumulative
      ),
      formatRupiah_(
        ministry.persembahanTerpadu.targetCumulative
      ),
      ministry.persembahanTerpadu.targetCumulative >
        0
          ? (
              ministry.persembahanTerpadu.percentCumulative +
              '%'
            )
          : '-'
    ]
  ];

  dataTable_(
    body,
    ministryRows
  );

  sectionTitle_(
    body,
    'Per Sumber Dana'
  );

  const fundRows = [
    [
      'Sumber',
      'Masuk',
      'Keluar',
      'Anggaran',
      'Saldo'
    ]
  ];

  APP.SOURCES
    .forEach(
      source => {
        const fund =
          s.funds[
            source
          ];

        fundRows.push([
          source,
          formatRupiah_(
            fund.income
          ),
          formatRupiah_(
            fund.expense
          ),
          formatRupiah_(
            fund.budget
          ),
          formatRupiah_(
            fund.balance
          )
        ]);
      }
    );

  dataTable_(
    body,
    fundRows
  );

  const appendTransactionSection =
    (
      title,
      items
    ) => {
      sectionTitle_(
        body,
        title
      );

      if (
        !items.length
      ) {
        emptyPdf_(
          body,
          'Belum ada data.'
        );

        return;
      }

      const rows = [
        [
          'Tanggal',
          'Deskripsi',
          'Kategori',
          'Sumber',
          'Nominal'
        ]
      ];

      items.forEach(
        item => {
          rows.push([
            formatDatePdf_(
              item.TANGGAL
            ),
            item.DESKRIPSI ||
            '-',
            item.KATEGORI ||
            '-',
            item.SUMBER_DANA ||
            '-',
            formatRupiah_(
              item.NOMINAL
            )
          ]);
        }
      );

      dataTable_(
        body,
        rows
      );
    };

  appendTransactionSection(
    'Rincian Pemasukan',
    data.keuangan.filter(
      item =>
        item.JENIS ===
        'Pemasukan'
    )
  );

  appendTransactionSection(
    'Rincian Pengeluaran',
    data.keuangan.filter(
      item =>
        item.JENIS ===
        'Pengeluaran'
    )
  );
}

function buildRapbjPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  const s =
    data.summary;

  sectionTitle_(
    body,
    'Ringkasan RAPBJ'
  );

  metricTable_(
    body,
    [
      'ANGGARAN',
      'REALISASI',
      'SISA'
    ],
    [
      formatRupiah_(
        s.rapbjPlan
      ),
      formatRupiah_(
        s.rapbjRealized
      ),
      formatRupiah_(
        s.rapbjRemaining
      )
    ]
  );

  sectionTitle_(
    body,
    'Daftar Pos'
  );

  const rows = [
    [
      'Departemen',
      'Program / Pos',
      'Sumber',
      'Anggaran',
      'Realisasi'
    ]
  ];

  data.rapbj
    .forEach(item => {
      const realized =
        data.keuangan
          .filter(
            trx =>
              String(
                trx.ID_RAPBJ
              ) ===
              String(
                item.ID_RAPBJ
              ) &&
              trx.JENIS ===
              'Pengeluaran'
          )
          .reduce(
            (sum, trx) =>
              sum +
              Number(
                trx.NOMINAL ||
                0
              ),
            0
          );

      rows.push([
        item.DEPARTEMEN ||
        '-',
        item.PROGRAM_ATAU_POS ||
        '-',
        item.SUMBER_DANA ||
        '-',
        formatRupiah_(
          item.ANGGARAN
        ),
        formatRupiah_(
          realized
        )
      ]);
    });

  dataTable_(
    body,
    rows
  );
}


function buildProposalPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  sectionTitle_(
    body,
    'Usulan Agenda'
  );

  const rows = [
    [
      'Tanggal',
      'Pengusul',
      'Departemen',
      'Usulan',
      'Anggaran',
      'Status'
    ]
  ];

  data.usulan
    .forEach(item => {
      rows.push([
        formatDatePdf_(
          item.TANGGAL_USUL
        ),
        item.PENGUSUL ||
        '-',
        item.DEPARTEMEN ||
        '-',
        item.JUDUL_USULAN ||
        '-',
        formatRupiah_(
          item.ESTIMASI_ANGGARAN
        ),
        item.STATUS ||
        '-'
      ]);
    });

  dataTable_(
    body,
    rows
  );
}


function buildDecisionPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  sectionTitle_(
    body,
    'Keputusan Majelis'
  );

  if (
    !data.keputusan.length
  ) {
    emptyPdf_(
      body,
      'Belum ada keputusan.'
    );

    return;
  }

  data.keputusan
    .forEach(item => {
      const table =
        body.appendTable([
          ['']
        ]);

      const cell =
        table
          .getRow(0)
          .getCell(0);

      styleCell_(
        cell,
        '#FBF5F6',
        12
      );

      cell.clear();

      const no =
        cell.appendParagraph(
          'KEPUTUSAN ' +
          (
            item.NO_KEPUTUSAN ||
            '-'
          )
        );

      styleParagraph_(
        no,
        7,
        '#A31524',
        true
      );

      const p =
        cell.appendParagraph(
          item.KEPUTUSAN ||
          '-'
        );

      styleParagraph_(
        p,
        9,
        '#2F2527',
        true
      );

      const meta =
        cell.appendParagraph(
          'PIC: ' +
          (
            item.PIC ||
            '-'
          ) +
          ' · ' +
          'Departemen: ' +
          (
            item.DEPARTEMEN ||
            '-'
          ) +
          ' · ' +
          'Target: ' +
          formatDatePdf_(
            item.TARGET_SELESAI
          ) +
          ' · ' +
          'Status: ' +
          (
            item.STATUS ||
            '-'
          )
        );

      styleParagraph_(
        meta,
        7,
        '#826F73',
        false
      );

      body
        .appendParagraph('')
        .setSpacingAfter(
          1
        );
    });
}


function buildTaskPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  const rows = [
    [
      'Tindak Lanjut',
      'PIC',
      'Departemen',
      'Deadline',
      'Progress',
      'Status'
    ]
  ];

  data.tindakLanjut
    .forEach(item => {
      rows.push([
        item.URAIAN ||
        '-',
        item.PIC ||
        '-',
        item.DEPARTEMEN ||
        '-',
        formatDatePdf_(
          item.TARGET_SELESAI
        ),
        String(
          item.PROGRESS ||
          0
        ) +
        '%',
        item.STATUS ||
        '-'
      ]);
    });

  sectionTitle_(
    body,
    'Monitoring Tindak Lanjut'
  );

  dataTable_(
    body,
    rows
  );
}


function buildProgramPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  sectionTitle_(
    body,
    'Program Kerja'
  );

  const rows = [
    [
      'Program',
      'Departemen',
      'PIC',
      'Tanggal',
      'Anggaran',
      'Realisasi',
      'Status'
    ]
  ];

  data.programs
    .forEach(item => {
      const realized =
        item.ID_RAPBJ
          ? data.keuangan
              .filter(
                trx =>
                  String(
                    trx.ID_RAPBJ
                  ) ===
                  String(
                    item.ID_RAPBJ
                  ) &&
                  trx.JENIS ===
                  'Pengeluaran'
              )
              .reduce(
                (sum, trx) =>
                  sum +
                  Number(
                    trx.NOMINAL ||
                    0
                  ),
                0
              )
          : Number(
              item.REALISASI ||
              0
            );

      rows.push([
        item.NAMA_PROGRAM ||
        '-',
        item.DEPARTEMEN ||
        '-',
        item.PIC ||
        '-',
        formatDatePdf_(
          item.TANGGAL_MULAI
        ),
        formatRupiah_(
          item.ANGGARAN
        ),
        formatRupiah_(
          realized
        ),
        item.STATUS ||
        '-'
      ]);
    });

  dataTable_(
    body,
    rows
  );
}


function buildInventoryPdf_(
  doc
) {
  const body =
    doc.getBody();

  const data =
    readSheet_(
      APP.SHEETS.INVENTARIS
    );

  const units =
    data.reduce(
      (sum, item) =>
        sum +
        Number(
          item.JUMLAH ||
          0
        ),
      0
    );

  const value =
    data.reduce(
      (sum, item) =>
        sum +
        (
          Number(
            item.JUMLAH ||
            0
          ) *
          Number(
            item.NILAI ||
            0
          )
        ),
      0
    );

  sectionTitle_(
    body,
    'Ringkasan'
  );

  metricTable_(
    body,
    [
      'JENIS ITEM',
      'TOTAL UNIT',
      'ESTIMASI NILAI'
    ],
    [
      String(
        data.length
      ),
      String(
        units
      ),
      formatRupiah_(
        value
      )
    ]
  );

  sectionTitle_(
    body,
    'Daftar Inventaris'
  );

  const rows = [
    [
      'Barang',
      'Kategori',
      'Jumlah',
      'Kondisi',
      'Lokasi',
      'Nilai / Unit'
    ]
  ];

  data.forEach(
    item => {
      rows.push([
        item.NAMA_BARANG ||
        '-',
        item.KATEGORI ||
        '-',
        String(
          item.JUMLAH ||
          0
        ),
        item.KONDISI ||
        '-',
        item.LOKASI ||
        '-',
        formatRupiah_(
          item.NILAI
        )
      ]);
    }
  );

  dataTable_(
    body,
    rows
  );
}


function buildPeoplePdf_(
  doc,
  type
) {
  const body =
    doc.getBody();

  const isOfficer =
    type ===
    'pengurus';

  const rowsData =
    readSheet_(
      isOfficer
        ? APP.SHEETS.PENGURUS
        : APP.SHEETS.JEMAAT
    );

  const active =
    rowsData.filter(
      item =>
        String(
          item.STATUS ||
          'Aktif'
        ) ===
        'Aktif'
    ).length;

  sectionTitle_(
    body,
    'Ringkasan'
  );

  metricTable_(
    body,
    [
      'TOTAL DATA',
      'AKTIF',
      'LAINNYA'
    ],
    [
      String(
        rowsData.length
      ),
      String(
        active
      ),
      String(
        rowsData.length -
        active
      )
    ]
  );

  sectionTitle_(
    body,
    isOfficer
      ? 'Pengurus Majelis'
      : 'Anggota Jemaat'
  );

  const rows =
    isOfficer
      ? [[
          'Nama',
          'Jabatan',
          'Departemen',
          'WhatsApp',
          'Status'
        ]]
      : [[
          'No.',
          'Nama',
          'Nama Keluarga',
          'Posisi',
          'TTL',
          'Telepon',
          'Status'
        ]];

  rowsData.forEach(
    item => {
      if (
        isOfficer
      ) {
        rows.push([
          item.NAMA ||
          '-',
          item.JABATAN ||
          '-',
          item.DEPARTEMEN ||
          '-',
          item.NO_WHATSAPP ||
          '-',
          item.STATUS ||
          '-'
        ]);
      }

      else {
        rows.push([
          item.NOMOR_ANGGOTA ||
          '-',
          memberFullNameV82_(
            item
          ) ||
          '-',
          item.NAMA_KELUARGA ||
          item.KELUARGA ||
          '-',
          item.POSISI_KELUARGA ||
          '-',
          [
            item.TEMPAT_LAHIR,
            item.TANGGAL_LAHIR
              ? formatDatePdf_(
                  item.TANGGAL_LAHIR
                )
              : ''
          ]
          .filter(Boolean)
          .join(', ') ||
          '-',
          item.NO_TELEPON ||
          item.NO_WHATSAPP ||
          '-',
          item.STATUS ||
          '-'
        ]);
      }
    }
  );

  dataTable_(
    body,
    rows
  );
}


function buildDocumentRegisterPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  sectionTitle_(
    body,
    'Register Dokumen'
  );

  const rows = [
    [
      'Tanggal',
      'Kategori',
      'Nomor',
      'Judul',
      'Status'
    ]
  ];

  data.documents
    .forEach(item => {
      rows.push([
        formatDatePdf_(
          item.TANGGAL
        ),
        item.KATEGORI ||
        '-',
        item.NOMOR_DOKUMEN ||
        '-',
        item.JUDUL ||
        '-',
        item.STATUS ||
        '-'
      ]);
    });

  dataTable_(
    body,
    rows
  );
}


function buildAttendancePdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  sectionTitle_(
    body,
    'Ringkasan Kehadiran'
  );

  metricTable_(
    body,
    [
      'RATA-RATA',
      'BATAS KUORUM',
      'JUMLAH RAPAT'
    ],
    [
      data.summary
        .attendance
        .average +
        '%',
      data.summary
        .attendance
        .quorumPercent +
        '%',
      String(
        data.summary
          .attendance
          .meetings
          .length
      )
    ]
  );

  const rows = [
    [
      'Tanggal',
      'Rapat',
      'Hadir',
      'Total',
      'Persentase',
      'Kuorum'
    ]
  ];

  data.summary
    .attendance
    .meetings
    .forEach(item => {
      rows.push([
        formatDatePdf_(
          item.date
        ),
        item.title ||
        '-',
        String(
          item.present
        ),
        String(
          item.total
        ),
        item.percent +
        '%',
        item.quorum
          ? 'Terpenuhi'
          : 'Belum'
      ]);
    });

  sectionTitle_(
    body,
    'Rekap Rapat'
  );

  dataTable_(
    body,
    rows
  );
}


function buildAnnualPdf_(
  doc,
  year
) {
  const body =
    doc.getBody();

  const data =
    getAppData({
      year
    });

  const s =
    data.summary;

  sectionTitle_(
    body,
    'Ringkasan Tahun'
  );

  metricTable_(
    body,
    [
      'NOTULEN',
      'KEPUTUSAN',
      'PROGRAM'
    ],
    [
      String(
        s.totalNotulen
      ),
      String(
        s.totalDecisions
      ),
      String(
        s.totalPrograms
      )
    ]
  );

  sectionTitle_(
    body,
    'Keuangan'
  );

  metricTable_(
    body,
    [
      'PEMASUKAN',
      'PENGELUARAN',
      'SALDO'
    ],
    [
      formatRupiah_(
        s.totalIncome
      ),
      formatRupiah_(
        s.totalExpense
      ),
      formatRupiah_(
        s.totalBalance
      )
    ]
  );

  sectionTitle_(
    body,
    'RAPBJ'
  );

  metricTable_(
    body,
    [
      'ANGGARAN',
      'REALISASI',
      'SISA'
    ],
    [
      formatRupiah_(
        s.rapbjPlan
      ),
      formatRupiah_(
        s.rapbjRealized
      ),
      formatRupiah_(
        s.rapbjRemaining
      )
    ]
  );

  sectionTitle_(
    body,
    'Status Administrasi'
  );

  infoTable_(
    body,
    [
      [
        'Notulen menunggu persetujuan',
        String(
          s.pendingApproval
        )
      ],
      [
        'Tindak lanjut terlambat',
        String(
          s.overdueTasks
        )
      ],
      [
        'Inventaris perlu perhatian',
        String(
          s.inventoryIssue
        )
      ],
      [
        'Rata-rata kehadiran',
        s.attendance.average +
        '%'
      ],
      [
        'Anggota aktif',
        String(
          s.totalJemaat
        )
      ],
      [
        'Pengurus aktif',
        String(
          s.totalPengurus
        )
      ]
    ]
  );
}


/* =========================================================
   PDF STYLING HELPERS
========================================================= */

function sectionTitle_(
  body,
  title
) {
  const p =
    body.appendParagraph(
      title
    );

  styleParagraph_(
    p,
    11.5,
    '#650A15',
    true
  );

  p
    .setSpacingBefore(
      11
    )
    .setSpacingAfter(
      7
    );

  return p;
}


function infoTable_(
  body,
  pairs
) {
  const table =
    body.appendTable(
      pairs.map(
        pair => [
          String(
            pair[0]
          ),
          String(
            pair[1]
          )
        ]
      )
    );

  table
    .setBorderColor(
      '#E7D8DB'
    )
    .setBorderWidth(
      .6
    );

  for (
    let r = 0;
    r < table.getNumRows();
    r++
  ) {
    for (
      let c = 0;
      c < 2;
      c++
    ) {
      const cell =
        table
          .getRow(r)
          .getCell(c);

      styleCell_(
        cell,
        c === 0
          ? '#F5E9EB'
          : '#FFFFFF',
        8
      );

      cell
        .editAsText()
        .setFontFamily(
          'Arial'
        )
        .setFontSize(
          8
        )
        .setBold(
          c === 0
        )
        .setForegroundColor(
          c === 0
            ? '#650A15'
            : '#4B4043'
        );
    }
  }

  return table;
}


function metricTable_(
  body,
  headers,
  values
) {
  const table =
    body.appendTable([
      headers,
      values
    ]);

  table
    .setBorderColor(
      '#E3D1D4'
    )
    .setBorderWidth(
      .6
    );

  for (
    let r = 0;
    r < 2;
    r++
  ) {
    for (
      let c = 0;
      c < headers.length;
      c++
    ) {
      const cell =
        table
          .getRow(r)
          .getCell(c);

      styleCell_(
        cell,
        r === 0
          ? '#650A15'
          : '#FBF5F6',
        r === 0
          ? 8
          : 12
      );

      cell
        .getChild(0)
        .asParagraph()
        .setAlignment(
          DocumentApp
            .HorizontalAlignment
            .CENTER
        );

      cell
        .editAsText()
        .setFontFamily(
          'Arial'
        )
        .setFontSize(
          r === 0
            ? 7
            : 9.5
        )
        .setBold(
          true
        )
        .setForegroundColor(
          r === 0
            ? '#FFFFFF'
            : '#650A15'
        );
    }
  }

  return table;
}


function dataTable_(
  body,
  rows
) {
  if (
    rows.length <=
    1
  ) {
    emptyPdf_(
      body,
      'Belum ada data.'
    );

    return null;
  }

  const table =
    body.appendTable(
      rows
    );

  table
    .setBorderColor(
      '#E7DADC'
    )
    .setBorderWidth(
      .5
    );

  for (
    let r = 0;
    r < table.getNumRows();
    r++
  ) {
    const row =
      table.getRow(r);

    for (
      let c = 0;
      c < row.getNumCells();
      c++
    ) {
      const cell =
        row.getCell(c);

      const header =
        r === 0;

      styleCell_(
        cell,
        header
          ? '#82101D'
          : (
              r % 2 ===
              0
                ? '#FBF7F7'
                : '#FFFFFF'
            ),
        6
      );

      cell
        .editAsText()
        .setFontFamily(
          'Arial'
        )
        .setFontSize(
          header
            ? 6.8
            : 7.2
        )
        .setBold(
          header
        )
        .setForegroundColor(
          header
            ? '#FFFFFF'
            : '#4C4144'
        );
    }
  }

  return table;
}


function signatureBlock_(
  body,
  leader,
  secretary
) {
  sectionTitle_(
    body,
    'Pengesahan'
  );

  const table =
    body.appendTable([
      [
        'Pimpinan Rapat',
        'Notulis'
      ],
      [
        '\n\n\n' +
        (
          leader ||
          '____________________'
        ),
        '\n\n\n' +
        (
          secretary ||
          '____________________'
        )
      ]
    ]);

  table
    .setBorderColor(
      '#E7DADC'
    )
    .setBorderWidth(
      .5
    );

  for (
    let r = 0;
    r < 2;
    r++
  ) {
    for (
      let c = 0;
      c < 2;
      c++
    ) {
      const cell =
        table
          .getRow(r)
          .getCell(c);

      styleCell_(
        cell,
        r === 0
          ? '#F4E6E8'
          : '#FFFFFF',
        9
      );

      cell
        .getChild(0)
        .asParagraph()
        .setAlignment(
          DocumentApp
            .HorizontalAlignment
            .CENTER
        );

      cell
        .editAsText()
        .setFontFamily(
          'Arial'
        )
        .setFontSize(
          r === 0
            ? 7.5
            : 8.5
        )
        .setBold(
          r === 0
        )
        .setForegroundColor(
          r === 0
            ? '#650A15'
            : '#44383B'
        );
    }
  }

  return table;
}


function styleCell_(
  cell,
  background,
  padding
) {
  cell
    .setBackgroundColor(
      background
    )
    .setPaddingTop(
      padding
    )
    .setPaddingBottom(
      padding
    )
    .setPaddingLeft(
      padding
    )
    .setPaddingRight(
      padding
    )
    .setVerticalAlignment(
      DocumentApp
        .VerticalAlignment
        .CENTER
    );

  return cell;
}


function styleParagraph_(
  paragraph,
  size,
  color,
  bold
) {
  paragraph
    .editAsText()
    .setFontFamily(
      'Arial'
    )
    .setFontSize(
      size
    )
    .setForegroundColor(
      color
    )
    .setBold(
      Boolean(
        bold
      )
    );

  return paragraph;
}


function emptyPdf_(
  body,
  text
) {
  const table =
    body.appendTable([
      [text]
    ]);

  const cell =
    table
      .getRow(0)
      .getCell(0);

  styleCell_(
    cell,
    '#FBF5F6',
    14
  );

  cell
    .editAsText()
    .setFontFamily(
      'Arial'
    )
    .setFontSize(
      8
    )
    .setForegroundColor(
      '#89777B'
    );

  return table;
}


function safeFilePart_(
  value
) {
  return sanitizeFileName_(
    value
  )
  .replace(
    /\s+/g,
    '_'
  );
}




/* =========================================================
   BACKEND V6 HARDENING
========================================================= */

function withDocumentLock_(callback) {
  const lock =
    LockService
      .getDocumentLock();

  if (!lock) {
    return callback();
  }

  lock.waitLock(
    30000
  );

  try {
    return callback();
  }

  finally {
    lock.releaseLock();
  }
}



/* =========================================================
   SCHEMA REPAIR V6.0.1
========================================================= */

/**
 * Jalankan fungsi ini bila project berasal dari V4/V5 dan
 * diagnostic menemukan header duplikat.
 *
 * Fungsi:
 * 1. mendeteksi duplicate header,
 * 2. membuat backup Spreadsheet jika ada duplicate,
 * 3. menggabungkan nilai ke kolom pertama,
 * 4. menghapus kolom duplicate dari kanan ke kiri,
 * 5. menjalankan setupDatabase(),
 * 6. memvalidasi ulang schema.
 */
function repairDatabaseSchemaV601() {
  validateAppConfig_();

  const duplicateRepair =
    repairDuplicateHeadersV601_();

  const setup =
    setupDatabase();

  const status =
    getBackendStatus();

  const report = {
    success:
      Boolean(
        status &&
        status.ok
      ),
    version:
      APP.VERSION,
    duplicateRepair:
      duplicateRepair,
    setup:
      setup,
    status:
      status
  };

  console.log(
    JSON.stringify(
      report,
      null,
      2
    )
  );

  if (!report.success) {
    throw new Error(
      'Schema repair belum bersih. Lihat Execution log.'
    );
  }

  return report;
}


function repairDuplicateHeadersV601_() {
  const ss =
    SpreadsheetApp
      .getActiveSpreadsheet();

  if (!ss) {
    throw new Error(
      'Spreadsheet aktif tidak ditemukan.'
    );
  }

  const scans = [];

  Object.keys(
    APP.SCHEMA
  ).forEach(
    sheetName => {
      const sheet =
        ss.getSheetByName(
          sheetName
        );

      if (
        !sheet ||
        sheet.getLastColumn() <
        1
      ) {
        return;
      }

      const headers =
        sheet
          .getRange(
            1,
            1,
            1,
            sheet.getLastColumn()
          )
          .getDisplayValues()[0]
          .map(
            value =>
              String(
                value ||
                ''
              ).trim()
          );

      const positions = {};

      headers.forEach(
        (
          header,
          index
        ) => {
          if (!header) {
            return;
          }

          if (
            !positions[
              header
            ]
          ) {
            positions[
              header
            ] = [];
          }

          positions[
            header
          ].push(
            index +
            1
          );
        }
      );

      const duplicates =
        Object.keys(
          positions
        )
        .filter(
          header =>
            positions[
              header
            ].length >
            1
        );

      if (
        duplicates.length
      ) {
        scans.push({
          sheet:
            sheet,
          sheetName:
            sheetName,
          positions:
            positions,
          duplicates:
            duplicates
        });
      }
    }
  );

  const report = {
    found:
      scans.length >
      0,
    backupFileId:
      '',
    backupUrl:
      '',
    repairedSheets: [],
    removedColumns:
      0,
    mergedCells:
      0,
    conflictsKeptPrimary:
      0
  };

  if (
    !scans.length
  ) {
    return report;
  }

  /*
   * Backup otomatis sebelum ada kolom yang dihapus.
   */
  try {
    const backup =
      DriveApp
        .getFileById(
          ss.getId()
        )
        .makeCopy(
          ss.getName() +
          ' - BACKUP SCHEMA ' +
          Utilities.formatDate(
            new Date(),
            APP.TZ,
            'yyyyMMdd-HHmmss'
          )
        );

    report.backupFileId =
      backup.getId();

    report.backupUrl =
      backup.getUrl();
  }

  catch (error) {
    throw new Error(
      'Gagal membuat backup sebelum schema repair: ' +
      (
        error &&
        error.message
          ? error.message
          : String(error)
      )
    );
  }

  scans.forEach(
    scan => {
      const sheet =
        scan.sheet;

      const sheetResult = {
        sheet:
          scan.sheetName,
        headers: [],
        removedColumns:
          0,
        mergedCells:
          0,
        conflictsKeptPrimary:
          0
      };

      const columnsToDelete = [];

      scan.duplicates.forEach(
        header => {
          const columns =
            scan.positions[
              header
            ];

          const keeper =
            columns[0];

          const duplicates =
            columns.slice(
              1
            );

          const merge =
            mergeDuplicateHeaderColumnsV601_(
              sheet,
              header,
              keeper,
              duplicates
            );

          sheetResult
            .headers
            .push({
              header:
                header,
              keeperColumn:
                keeper,
              duplicateColumns:
                duplicates,
              mergedCells:
                merge.mergedCells,
              conflictsKeptPrimary:
                merge.conflictsKeptPrimary
            });

          sheetResult.mergedCells +=
            merge.mergedCells;

          sheetResult.conflictsKeptPrimary +=
            merge.conflictsKeptPrimary;

          duplicates.forEach(
            column => {
              columnsToDelete.push(
                column
              );
            }
          );
        }
      );

      /*
       * Hapus dari kanan ke kiri supaya index kolom aman.
       */
      Array.from(
        new Set(
          columnsToDelete
        )
      )
      .sort(
        (
          a,
          b
        ) =>
          b -
          a
      )
      .forEach(
        column => {
          sheet.deleteColumn(
            column
          );

          sheetResult.removedColumns++;
        }
      );

      report
        .repairedSheets
        .push(
          sheetResult
        );

      report.removedColumns +=
        sheetResult.removedColumns;

      report.mergedCells +=
        sheetResult.mergedCells;

      report.conflictsKeptPrimary +=
        sheetResult.conflictsKeptPrimary;
    }
  );

  SpreadsheetApp.flush();

  audit_(
    'SCHEMA_REPAIR',
    'system',
    APP.VERSION,
    'Memperbaiki duplicate header. Backup: ' +
    report.backupUrl
  );

  return report;
}


function mergeDuplicateHeaderColumnsV601_(
  sheet,
  header,
  keeperColumn,
  duplicateColumns
) {
  const result = {
    mergedCells:
      0,
    conflictsKeptPrimary:
      0
  };

  const lastRow =
    sheet.getLastRow();

  if (
    lastRow <
    2
  ) {
    return result;
  }

  const rowCount =
    lastRow -
    1;

  const keeperRange =
    sheet.getRange(
      2,
      keeperColumn,
      rowCount,
      1
    );

  const keeperValues =
    keeperRange.getValues();

  duplicateColumns.forEach(
    duplicateColumn => {
      const duplicateValues =
        sheet
          .getRange(
            2,
            duplicateColumn,
            rowCount,
            1
          )
          .getValues();

      for (
        let row = 0;
        row <
        rowCount;
        row++
      ) {
        const merge =
          chooseDuplicateValueV601_(
            header,
            keeperValues[
              row
            ][0],
            duplicateValues[
              row
            ][0]
          );

        if (
          merge.changed
        ) {
          keeperValues[
            row
          ][0] =
            merge.value;

          result.mergedCells++;
        }

        if (
          merge.conflict
        ) {
          result.conflictsKeptPrimary++;
        }
      }
    }
  );

  keeperRange.setValues(
    keeperValues
  );

  return result;
}


function chooseDuplicateValueV601_(
  header,
  primary,
  secondary
) {
  const primaryBlank =
    isBlankValueV601_(
      primary
    );

  const secondaryBlank =
    isBlankValueV601_(
      secondary
    );

  if (
    primaryBlank &&
    secondaryBlank
  ) {
    return {
      value:
        primary,
      changed:
        false,
      conflict:
        false
    };
  }

  if (
    primaryBlank &&
    !secondaryBlank
  ) {
    return {
      value:
        secondary,
      changed:
        true,
      conflict:
        false
    };
  }

  if (
    !primaryBlank &&
    secondaryBlank
  ) {
    return {
      value:
        primary,
      changed:
        false,
      conflict:
        false
    };
  }

  /*
   * Khusus timestamp:
   * CREATED_AT mempertahankan waktu paling awal.
   * UPDATED_AT / APPROVED_AT mempertahankan waktu paling baru.
   */
  if (
    header ===
    'CREATED_AT'
  ) {
    const value =
      chooseTimestampV601_(
        primary,
        secondary,
        'earliest'
      );

    return {
      value:
        value,
      changed:
        !sameSheetValueV601_(
          value,
          primary
        ),
      conflict:
        false
    };
  }

  if (
    header ===
    'UPDATED_AT' ||
    header ===
    'APPROVED_AT'
  ) {
    const value =
      chooseTimestampV601_(
        primary,
        secondary,
        'latest'
      );

    return {
      value:
        value,
      changed:
        !sameSheetValueV601_(
          value,
          primary
        ),
      conflict:
        false
    };
  }

  if (
    sameSheetValueV601_(
      primary,
      secondary
    )
  ) {
    return {
      value:
        primary,
      changed:
        false,
      conflict:
        false
    };
  }

  /*
   * Jika dua kolom non-timestamp sama-sama berisi nilai
   * berbeda, kolom pertama dipertahankan. Conflict dicatat
   * pada report sehingga tidak ada overwrite diam-diam.
   */
  return {
    value:
      primary,
    changed:
      false,
    conflict:
      true
  };
}


function chooseTimestampV601_(
  first,
  second,
  mode
) {
  const firstDate =
    asDateV601_(
      first
    );

  const secondDate =
    asDateV601_(
      second
    );

  if (
    firstDate &&
    secondDate
  ) {
    if (
      mode ===
      'earliest'
    ) {
      return firstDate.getTime() <=
        secondDate.getTime()
          ? first
          : second;
    }

    return firstDate.getTime() >=
      secondDate.getTime()
        ? first
        : second;
  }

  if (
    firstDate &&
    !secondDate
  ) {
    return first;
  }

  if (
    !firstDate &&
    secondDate
  ) {
    return second;
  }

  return first;
}


function asDateV601_(
  value
) {
  if (
    value instanceof
    Date &&
    !isNaN(
      value.getTime()
    )
  ) {
    return value;
  }

  if (
    typeof value ===
    'string' &&
    value.trim()
  ) {
    const date =
      new Date(
        value
      );

    if (
      !isNaN(
        date.getTime()
      )
    ) {
      return date;
    }
  }

  return null;
}


function isBlankValueV601_(
  value
) {
  return (
    value ===
    '' ||
    value ===
    null ||
    value ===
    undefined
  );
}


function sameSheetValueV601_(
  first,
  second
) {
  if (
    first instanceof
    Date &&
    second instanceof
    Date
  ) {
    return first.getTime() ===
      second.getTime();
  }

  return String(
    first
  ) ===
  String(
    second
  );
}


function getBackendStatus() {
  const started =
    Date.now();

  const ss =
    SpreadsheetApp
      .getActiveSpreadsheet();

  const result = {
    ok: true,
    app: APP.NAME,
    version: APP.VERSION,
    timezone: APP.TZ,
    spreadsheet: ss ? ss.getName() : '',
    spreadsheetId: ss ? ss.getId() : '',
    databaseReady: false,
    missingSheets: [],
    schemaIssues: [],
    durationMs: 0
  };

  if (!ss) {
    result.ok = false;
    result.schemaIssues.push(
      'Spreadsheet aktif tidak ditemukan.'
    );
    result.durationMs =
      Date.now() - started;
    return result;
  }

  Object.keys(
    APP.SCHEMA
  ).forEach(
    sheetName => {
      const sheet =
        ss.getSheetByName(
          sheetName
        );

      if (!sheet) {
        result.missingSheets.push(
          sheetName
        );
        return;
      }

      const headers =
        getHeaders_(
          sheet
        )
        .filter(Boolean);

      const duplicates =
        findDuplicatesV6_(
          headers
        );

      if (duplicates.length) {
        result.schemaIssues.push(
          sheetName +
          ': header duplikat ' +
          duplicates.join(', ')
        );
      }

      const missing =
        APP.SCHEMA[
          sheetName
        ]
        .filter(
          header =>
            !headers.includes(
              header
            )
        );

      if (missing.length) {
        result.schemaIssues.push(
          sheetName +
          ': header hilang ' +
          missing.join(', ')
        );
      }
    }
  );

  if (
    result.missingSheets.length ||
    result.schemaIssues.length
  ) {
    result.ok = false;
  }

  result.databaseReady =
    result.ok;

  result.durationMs =
    Date.now() - started;

  return result;
}


function runBackendDiagnostics() {
  const report = {
    version: APP.VERSION,
    success: true,
    checks: [],
    integrity: []
  };

  const add =
    (name, ok, detail) => {
      report.checks.push({
        name,
        ok: Boolean(ok),
        detail: detail || ''
      });

      if (!ok) {
        report.success = false;
      }
    };

  try {
    validateAppConfig_();
    add(
      'Config',
      true,
      'APP config valid.'
    );
  }

  catch (error) {
    add(
      'Config',
      false,
      error.message || String(error)
    );
  }

  const status =
    getBackendStatus();

  add(
    'Database schema',
    status.ok,
    status.ok
      ? 'Semua sheet/header tersedia.'
      : JSON.stringify(status)
  );

  if (status.ok) {
    const integrity =
      validateDataIntegrityV6_();

    report.integrity =
      integrity.issues;

    add(
      'Data integrity',
      integrity.ok,
      integrity.ok
        ? 'Tidak ada relasi orphan.'
        : integrity.issues.join(' | ')
    );

    try {
      const data =
        getAppData({
          year:
            currentYear_()
        });

      add(
        'getAppData',
        Boolean(
          data &&
          data.summary &&
          data.calendar
        ),
        'Summary + calendar berhasil dibentuk.'
      );
    }

    catch (error) {
      add(
        'getAppData',
        false,
        error.message || String(error)
      );
    }

    try {
      const pdf =
        generatePdfReport(
          'tahunan',
          '',
          currentYear_()
        );

      add(
        'PDF engine',
        Boolean(
          pdf &&
          pdf.base64 &&
          pdf.fileName
        ),
        pdf ? pdf.fileName : ''
      );
    }

    catch (error) {
      add(
        'PDF engine',
        false,
        error.message || String(error)
      );
    }
  }

  console.log(
    JSON.stringify(
      report,
      null,
      2
    )
  );

  if (!report.success) {
    throw new Error(
      'Backend diagnostics menemukan masalah. Lihat Execution log.'
    );
  }

  return report;
}


function validateDataIntegrityV6_() {
  const issues = [];

  const notulen =
    readSheet_(
      APP.SHEETS.NOTULEN
    );

  const agenda =
    readSheet_(
      APP.SHEETS.AGENDA
    );

  const attendance =
    readSheet_(
      APP.SHEETS.KEHADIRAN
    );

  const decisions =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    );

  const tasks =
    readSheet_(
      APP.SHEETS.TINDAK_LANJUT
    );

  const finance =
    readSheet_(
      APP.SHEETS.KEUANGAN
    );

  const rapbj =
    readSheet_(
      APP.SHEETS.RAPBJ
    );

  const meetingIds =
    new Set(
      notulen.map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  const agendaIds =
    new Set(
      agenda.map(
        item =>
          String(
            item.ID_AGENDA
          )
      )
    );

  const decisionIds =
    new Set(
      decisions.map(
        item =>
          String(
            item.ID_KEPUTUSAN
          )
      )
    );

  const rapbjIds =
    new Set(
      rapbj.map(
        item =>
          String(
            item.ID_RAPBJ
          )
      )
    );

  agenda.forEach(
    item => {
      if (
        !meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
      ) {
        issues.push(
          'Agenda orphan: ' +
          item.ID_AGENDA
        );
      }
    }
  );

  attendance.forEach(
    item => {
      if (
        !meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
      ) {
        issues.push(
          'Kehadiran orphan: ' +
          item.ID_KEHADIRAN
        );
      }
    }
  );

  decisions.forEach(
    item => {
      if (
        item.ID_NOTULEN &&
        !meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
      ) {
        issues.push(
          'Keputusan orphan notulen: ' +
          item.ID_KEPUTUSAN
        );
      }

      if (
        item.ID_AGENDA &&
        !agendaIds.has(
          String(
            item.ID_AGENDA
          )
        )
      ) {
        issues.push(
          'Keputusan orphan agenda: ' +
          item.ID_KEPUTUSAN
        );
      }
    }
  );

  tasks.forEach(
    item => {
      if (
        item.ID_KEPUTUSAN &&
        !decisionIds.has(
          String(
            item.ID_KEPUTUSAN
          )
        )
      ) {
        issues.push(
          'Tindak lanjut orphan: ' +
          item.ID_TINDAK_LANJUT
        );
      }
    }
  );

  finance.forEach(
    item => {
      if (
        item.ID_NOTULEN &&
        !meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
      ) {
        issues.push(
          'Transaksi → notulen invalid: ' +
          item.ID_TRANSAKSI
        );
      }

      if (
        item.ID_AGENDA &&
        !agendaIds.has(
          String(
            item.ID_AGENDA
          )
        )
      ) {
        issues.push(
          'Transaksi → agenda invalid: ' +
          item.ID_TRANSAKSI
        );
      }

      if (
        item.ID_RAPBJ &&
        !rapbjIds.has(
          String(
            item.ID_RAPBJ
          )
        )
      ) {
        issues.push(
          'Transaksi → RAPBJ invalid: ' +
          item.ID_TRANSAKSI
        );
      }
    }
  );

  return {
    ok: issues.length === 0,
    issues
  };
}


function testEntityMappingsV602() {
  validateAppConfig_();

  const result = {};

  Object.keys(
    APP.ENTITY
  )
  .forEach(
    entity => {
      const config =
        APP.ENTITY[
          entity
        ];

      const sheetName =
        resolveEntitySheetNameV602_(
          config
        );

      const sheet =
        getSheet_(
          sheetName
        );

      result[
        entity
      ] = {
        configured:
          config.sheet,
        resolved:
          sheetName,
        exists:
          Boolean(
            sheet
          ),
        idField:
          config.id
      };
    }
  );

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  return {
    success:
      true,
    version:
      APP.VERSION,
    entities:
      result
  };
}


function repairDatabaseSchemaV602() {
  return repairDatabaseSchemaV601();
}


function runBackendSelfTest() {
  const tag =
    'SELFTEST-' +
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyyMMddHHmmss'
    );

  const year =
    currentYear_();

  const ids = {
    officer: '',
    meeting: '',
    proposal: '',
    agenda: '',
    rapbj: '',
    finance: ''
  };

  const report = {
    version: APP.VERSION,
    tag,
    success: false,
    steps: []
  };

  const pass =
    (name, detail) => {
      report.steps.push({
        name,
        ok: true,
        detail: detail || ''
      });
    };

  try {
    setupDatabase();
    pass(
      'setupDatabase',
      'OK'
    );

    const officer =
      saveEntityInternal_(
        'pengurus',
        {
          NAMA:
            tag +
            ' Officer',
          JABATAN:
            'Tester',
          DEPARTEMEN:
            'Sekretariat',
          STATUS:
            'Aktif',
          URUTAN:
            9999
        }
      );

    ids.officer =
      officer.id;

    pass(
      'CRUD Pengurus',
      officer.id
    );

    const meeting =
      saveEntityInternal_(
        'notulen',
        {
          TANGGAL:
            Utilities.formatDate(
              new Date(),
              APP.TZ,
              'yyyy-MM-dd'
            ),
          JUDUL:
            tag +
            ' Rapat',
          JENIS_RAPAT:
            'Rapat Evaluasi',
          TEMPAT:
            'Self Test',
          PIMPINAN_RAPAT:
            tag +
            ' Officer',
          NOTULIS:
            tag +
            ' Officer',
          STATUS:
            'Draft'
        }
      );

    ids.meeting =
      meeting.id;

    pass(
      'CRUD Notulen',
      meeting.id
    );

    const attendance =
      initializeAttendance(
        meeting.id
      );

    pass(
      'Kehadiran',
      'created=' +
      attendance.created
    );

    const proposal =
      saveEntityInternal_(
        'usulan',
        {
          TAHUN:
            year,
          TANGGAL_USUL:
            Utilities.formatDate(
              new Date(),
              APP.TZ,
              'yyyy-MM-dd'
            ),
          PENGUSUL:
            tag +
            ' Officer',
          DEPARTEMEN:
            'Sekretariat',
          JUDUL_USULAN:
            tag +
            ' Usulan',
          LATAR_BELAKANG:
            'Self test',
          ESTIMASI_ANGGARAN:
            150000,
          SUMBER_DANA:
            'Kas Jemaat',
          STATUS:
            'Diajukan'
        }
      );

    ids.proposal =
      proposal.id;

    pass(
      'CRUD Usulan',
      proposal.id
    );

    const moved =
      approveAgendaProposal(
        proposal.id,
        meeting.id
      );

    ids.agenda =
      moved.agendaId;

    pass(
      'Usulan → Agenda',
      moved.agendaId
    );

    const agendaObj =
      findObjectById_(
        APP.SHEETS.AGENDA,
        'ID_AGENDA',
        moved.agendaId
      );

    saveEntityInternal_(
      'agenda',
      {
        ...agendaObj,
        KEPUTUSAN:
          tag +
          ' keputusan otomatis',
        PIC:
          tag +
          ' Officer',
        DEADLINE:
          Utilities.formatDate(
            new Date(
              Date.now() +
              3 *
              86400000
            ),
            APP.TZ,
            'yyyy-MM-dd'
          ),
        ANGGARAN:
          150000,
        SUMBER_DANA:
          'Kas Jemaat'
      }
    );

    const decision =
      readSheet_(
        APP.SHEETS.KEPUTUSAN
      )
      .find(
        item =>
          String(
            item.ID_AGENDA
          ) ===
          String(
            moved.agendaId
          )
      );

    if (!decision) {
      throw new Error(
        'Agenda → keputusan gagal.'
      );
    }

    pass(
      'Agenda → Keputusan',
      decision.ID_KEPUTUSAN
    );

    const task =
      readSheet_(
        APP.SHEETS.TINDAK_LANJUT
      )
      .find(
        item =>
          String(
            item.ID_KEPUTUSAN
          ) ===
          String(
            decision.ID_KEPUTUSAN
          )
      );

    if (!task) {
      throw new Error(
        'Keputusan → tindak lanjut gagal.'
      );
    }

    pass(
      'Keputusan → Tindak Lanjut',
      task.ID_TINDAK_LANJUT
    );

    const rapbj =
      saveEntityInternal_(
        'rapbj',
        {
          TAHUN:
            year,
          DEPARTEMEN:
            'Sekretariat',
          PROGRAM_ATAU_POS:
            tag +
            ' RAPBJ',
          KATEGORI:
            'Self Test',
          SUMBER_DANA:
            'Kas Jemaat',
          ANGGARAN:
            200000,
          STATUS:
            'Draft'
        }
      );

    ids.rapbj =
      rapbj.id;

    pass(
      'CRUD RAPBJ',
      rapbj.id
    );

    const finance =
      saveEntityInternal_(
        'keuangan',
        {
          TANGGAL:
            Utilities.formatDate(
              new Date(),
              APP.TZ,
              'yyyy-MM-dd'
            ),
          JENIS:
            'Pengeluaran',
          SUMBER_DANA:
            'Kas Jemaat',
          KATEGORI:
            'Self Test',
          DESKRIPSI:
            tag +
            ' transaksi',
          ID_NOTULEN:
            meeting.id,
          ID_AGENDA:
            moved.agendaId,
          ID_RAPBJ:
            rapbj.id,
          NOMINAL:
            50000,
          _ALLOW_CLOSED_EDIT:
            true
        }
      );

    ids.finance =
      finance.id;

    pass(
      'CRUD Keuangan',
      finance.id
    );

    const detail =
      getNotulenDetail(
        meeting.id
      );

    if (
      Number(
        detail.TOTAL_REALISASI
      ) !==
      50000
    ) {
      throw new Error(
        'Realisasi agenda salah: ' +
        detail.TOTAL_REALISASI
      );
    }

    pass(
      'Realisasi Agenda',
      detail.TOTAL_REALISASI
    );

    reviewNotulen(
      meeting.id,
      'submit',
      ''
    );

    reviewNotulen(
      meeting.id,
      'approve',
      'Self test approval'
    );

    const approved =
      findObjectById_(
        APP.SHEETS.NOTULEN,
        'ID_NOTULEN',
        meeting.id
      );

    if (
      String(
        approved.LOCKED
      ).toLowerCase() !==
      'true'
    ) {
      throw new Error(
        'Approval tidak mengunci notulen.'
      );
    }

    pass(
      'Approval & Lock',
      approved.STATUS
    );

    const pdf =
      generatePdfReport(
        'notulen',
        meeting.id,
        year
      );

    if (
      !pdf ||
      !pdf.base64 ||
      !pdf.fileName
    ) {
      throw new Error(
        'PDF notulen gagal.'
      );
    }

    pass(
      'PDF Notulen',
      pdf.fileName
    );

    const appData =
      getAppData({
        year
      });

    if (
      !appData.summary ||
      !appData.calendar
    ) {
      throw new Error(
        'getAppData tidak lengkap.'
      );
    }

    pass(
      'getAppData',
      'summary + calendar OK'
    );

    report.success =
      true;

    return report;
  }

  catch (error) {
    report.error =
      error &&
      error.message
        ? error.message
        : String(error);

    throw error;
  }

  finally {
    cleanupBackendSelfTestV6_(
      tag,
      ids
    );

    console.log(
      JSON.stringify(
        report,
        null,
        2
      )
    );
  }
}


function cleanupBackendSelfTestV6_(
  tag,
  ids
) {
  try {
    if (ids.meeting) {
      const sheet =
        getSheet_(
          APP.SHEETS.NOTULEN
        );

      const row =
        findRowById_(
          sheet,
          'ID_NOTULEN',
          ids.meeting
        );

      if (row) {
        const current =
          rowToObject_(
            sheet,
            row
          );

        if (
          String(
            current.LOCKED
          ).toLowerCase() ===
          'true'
        ) {
          const headers =
            getHeaders_(
              sheet
            );

          const values =
            headers.map(
              header => {
                if (
                  header ===
                  'LOCKED'
                ) {
                  return false;
                }

                if (
                  header ===
                  'STATUS'
                ) {
                  return 'Perlu Revisi';
                }

                return normalizeWrite_(
                  header,
                  current[header]
                );
              }
            );

          sheet
            .getRange(
              row,
              1,
              1,
              values.length
            )
            .setValues([
              values
            ]);
        }
      }

      try {
        deleteEntity(
          'notulen',
          ids.meeting
        );
      }

      catch (error) {
        console.log(
          'Cleanup notulen: ' +
          error
        );
      }
    }

    [
      ['keuangan', ids.finance],
      ['rapbj', ids.rapbj],
      ['usulan', ids.proposal],
      ['pengurus', ids.officer]
    ].forEach(
      pair => {
        if (!pair[1]) {
          return;
        }

        const config =
          APP.ENTITY[
            pair[0]
          ];

        const sheet =
          getSheet_(
            resolveEntitySheetNameV602_(
              config
            )
          );

        const row =
          findRowById_(
            sheet,
            config.id,
            pair[1]
          );

        if (row) {
          sheet.deleteRow(
            row
          );
        }
      }
    );
  }

  catch (error) {
    console.log(
      'Cleanup self-test error: ' +
      error
    );
  }
}


function findDuplicatesV6_(values) {
  const seen =
    new Set();

  const duplicate =
    new Set();

  values.forEach(
    value => {
      if (seen.has(value)) {
        duplicate.add(value);
      }
      seen.add(value);
    }
  );

  return Array.from(
    duplicate
  );
}


/* =========================================================
   SYNC OVERRIDES V6
   Menghapus record turunan ketika keputusan/PIC dihapus.
========================================================= */

function syncDecisionFromAgenda_(
  agendaId
) {
  const agenda =
    findObjectById_(
      APP.SHEETS.AGENDA,
      'ID_AGENDA',
      agendaId
    );

  if (!agenda) {
    return;
  }

  const existing =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    )
    .find(
      item =>
        String(
          item.ID_AGENDA
        ) ===
        String(
          agendaId
        )
    );

  const text =
    String(
      agenda.KEPUTUSAN ||
      ''
    ).trim();

  if (!text) {
    if (existing) {
      deleteRowsByValue_(
        APP.SHEETS.TINDAK_LANJUT,
        'ID_KEPUTUSAN',
        existing.ID_KEPUTUSAN
      );

      const sheet =
        getSheet_(
          APP.SHEETS.KEPUTUSAN
        );

      const row =
        findRowById_(
          sheet,
          'ID_KEPUTUSAN',
          existing.ID_KEPUTUSAN
        );

      if (row) {
        sheet.deleteRow(row);
      }
    }

    return;
  }

  const meeting =
    findObjectById_(
      APP.SHEETS.NOTULEN,
      'ID_NOTULEN',
      agenda.ID_NOTULEN
    );

  const year =
    Number(
      meeting
        ? meeting.TAHUN
        : currentYear_()
    );

  saveEntityCore_(
    'keputusan',
    {
      ...(existing || {}),
      TAHUN:
        year,
      ID_NOTULEN:
        agenda.ID_NOTULEN,
      ID_AGENDA:
        agenda.ID_AGENDA,
      NO_KEPUTUSAN:
        existing
          ? existing.NO_KEPUTUSAN
          : buildDecisionNumber_(
              year
            ),
      KEPUTUSAN:
        text,
      PIC:
        agenda.PIC,
      DEPARTEMEN:
        agenda.DEPARTEMEN,
      TARGET_SELESAI:
        agenda.DEADLINE,
      PRIORITAS:
        existing
          ? existing.PRIORITAS
          : 'Normal',
      STATUS:
        existing
          ? existing.STATUS
          : 'Aktif',
      ANGGARAN:
        agenda.ANGGARAN,
      SUMBER_DANA:
        agenda.SUMBER_DANA
    }
  );
}


function syncFollowUpFromDecision_(
  decisionId
) {
  const decision =
    findObjectById_(
      APP.SHEETS.KEPUTUSAN,
      'ID_KEPUTUSAN',
      decisionId
    );

  if (!decision) {
    return;
  }

  const existing =
    readSheet_(
      APP.SHEETS.TINDAK_LANJUT
    )
    .find(
      item =>
        String(
          item.ID_KEPUTUSAN
        ) ===
        String(
          decisionId
        )
    );

  const needsTask =
    Boolean(
      String(
        decision.PIC ||
        ''
      ).trim() ||
      String(
        decision.TARGET_SELESAI ||
        ''
      ).trim()
    );

  if (!needsTask) {
    if (existing) {
      const sheet =
        getSheet_(
          APP.SHEETS.TINDAK_LANJUT
        );

      const row =
        findRowById_(
          sheet,
          'ID_TINDAK_LANJUT',
          existing.ID_TINDAK_LANJUT
        );

      if (row) {
        sheet.deleteRow(row);
      }
    }

    return;
  }

  saveEntityCore_(
    'tindak_lanjut',
    {
      ...(existing || {}),
      TAHUN:
        decision.TAHUN,
      ID_KEPUTUSAN:
        decision.ID_KEPUTUSAN,
      ID_NOTULEN:
        decision.ID_NOTULEN,
      PIC:
        decision.PIC,
      DEPARTEMEN:
        decision.DEPARTEMEN,
      URAIAN:
        decision.KEPUTUSAN,
      TARGET_SELESAI:
        decision.TARGET_SELESAI,
      STATUS:
        existing
          ? existing.STATUS
          : 'Belum Dimulai',
      PROGRESS:
        existing
          ? existing.PROGRESS
          : 0,
      CATATAN:
        existing
          ? existing.CATATAN
          : ''
    }
  );
}

/* =========================================================
   MODULAR READ API V6
   Dipakai frontend baru agar boot tidak membaca seluruh DB.
========================================================= */

function getBootstrapData(filters) {
  filters =
    filters ||
    {};

  const year =
    Number(
      filters.year ||
      currentYear_()
    );

  return {
    app: {
      name:
        APP.NAME,
      version:
        APP.VERSION,
      church:
        getSettingSafe_(
          'CHURCH_NAME'
        ) ||
        'GMAHK Jemaat Galilea Balikpapan',
      logoUrl:
        getSettingSafe_(
          'LOGO_URL'
        )
    },

    year,

    years:
      collectAvailableYearsV6_(),

    sources:
      [...APP.SOURCES],

    departments:
      readSheet_(
        APP.SHEETS.DEPARTEMEN
      )
      .filter(
        item =>
          String(
            item.STATUS ||
            'Aktif'
          ) ===
          'Aktif'
      )
      .sort(
        (
          a,
          b
        ) =>
          Number(
            a.URUTAN ||
            9999
          ) -
          Number(
            b.URUTAN ||
            9999
          )
      ),

    officers:
      readSheet_(
        APP.SHEETS.PENGURUS
      )
      .filter(
        item =>
          String(
            item.STATUS ||
            'Aktif'
          ) ===
          'Aktif'
      )
      .sort(
        (
          a,
          b
        ) =>
          Number(
            a.URUTAN ||
            9999
          ) -
          Number(
            b.URUTAN ||
            9999
          )
      )
      .map(
        item => ({
          id:
            item.ID_PENGURUS,
          name:
            item.NAMA,
          position:
            item.JABATAN,
          department:
            item.DEPARTEMEN,
          whatsapp:
            item.NO_WHATSAPP
        })
      )
  };
}


function getDashboardData(year) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const allNotulen =
    readSheet_(
      APP.SHEETS.NOTULEN
    );

  const notulen =
    byYear_(
      allNotulen,
      year
    )
    .sort(
      sortDateDesc_
    );

  const meetingIds =
    new Set(
      notulen.map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  const agenda =
    readSheet_(
      APP.SHEETS.AGENDA
    )
    .filter(
      item =>
        meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
    );

  const attendance =
    readSheet_(
      APP.SHEETS.KEHADIRAN
    )
    .filter(
      item =>
        meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
    );

  const proposals =
    byYear_(
      readSheet_(
        APP.SHEETS.USULAN
      ),
      year
    );

  const decisions =
    byYear_(
      readSheet_(
        APP.SHEETS.KEPUTUSAN
      ),
      year
    );

  const tasks =
    byYear_(
      readSheet_(
        APP.SHEETS.TINDAK_LANJUT
      ),
      year
    );

  const allFinance =
    readSheet_(
      APP.SHEETS.KEUANGAN
    );

  const finance =
    byYear_(
      allFinance,
      year
    );

  const rapbj =
    byYear_(
      readSheet_(
        APP.SHEETS.RAPBJ
      ),
      year
    );

  const programs =
    byYear_(
      readSheet_(
        APP.SHEETS.PROGRAM
      ),
      year
    );

  const inventory =
    readSheet_(
      APP.SHEETS.INVENTARIS
    );

  const officers =
    readSheet_(
      APP.SHEETS.PENGURUS
    );

  /*
   * Untuk dashboard, anggota hanya dibutuhkan untuk count.
   * Tetap dibaca server-side, tetapi tidak dikirim seluruh record.
   */
  const members =
    readSheet_(
      APP.SHEETS.JEMAAT
    );

  const summary =
    buildSummary_({
      year,
      notulen,
      agenda,
      kehadiran:
        attendance,
      usulan:
        proposals,
      keputusan:
        decisions,
      tindakLanjut:
        tasks,
      keuangan:
        finance,
      allFinance,
      rapbj,
      programs,
      inventory,
      pengurus:
        officers,
      jemaat:
        members
    });

  return {
    year,
    summary,
    recentNotulen:
      notulen.slice(
        0,
        6
      ),
    upcomingTasks:
      tasks
        .filter(
          item =>
            item.STATUS !==
            'Selesai'
        )
        .sort(
          sortDateAscBy_(
            'TARGET_SELESAI'
          )
        )
        .slice(
          0,
          8
        ),
    generatedAt:
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        "yyyy-MM-dd'T'HH:mm:ss"
      )
  };
}


function getPageData(
  page,
  year,
  options
) {
  page =
    String(
      page ||
      ''
    );

  year =
    Number(
      year ||
      currentYear_()
    );

  options =
    options ||
    {};

  const limit =
    Math.min(
      1000,
      Math.max(
        1,
        Number(
          options.limit ||
          300
        )
      )
    );

  let rows = [];

  switch (page) {
    case 'rapat':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.NOTULEN
          ),
          year
        )
        .sort(
          sortDateDesc_
        );
      break;

    case 'usulan':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.USULAN
          ),
          year
        )
        .sort(
          sortDateDescBy_(
            'TANGGAL_USUL'
          )
        );
      break;

    case 'keputusan':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.KEPUTUSAN
          ),
          year
        )
        .sort(
          sortDateDescBy_(
            'UPDATED_AT'
          )
        );
      break;

    case 'tindak_lanjut':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.TINDAK_LANJUT
          ),
          year
        )
        .sort(
          sortDateAscBy_(
            'TARGET_SELESAI'
          )
        );
      break;

    case 'program':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.PROGRAM
          ),
          year
        )
        .sort(
          sortDateAscBy_(
            'TANGGAL_MULAI'
          )
        );
      break;

    case 'rapbj': {
      const finance =
        byYear_(
          readSheet_(
            APP.SHEETS.KEUANGAN
          ),
          year
        );

      const realization = {};

      finance.forEach(
        trx => {
          if (
            trx.JENIS ===
            'Pengeluaran' &&
            trx.ID_RAPBJ
          ) {
            const id =
              String(
                trx.ID_RAPBJ
              );

            realization[id] =
              (
                realization[id] ||
                0
              ) +
              Number(
                trx.NOMINAL ||
                0
              );
          }
        }
      );

      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.RAPBJ
          ),
          year
        )
        .map(
          item => {
            const realized =
              Number(
                realization[
                  String(
                    item.ID_RAPBJ
                  )
                ] ||
                0
              );

            const planned =
              Number(
                item.ANGGARAN ||
                0
              );

            return {
              ...item,
              REALISASI:
                realized,
              SISA:
                planned -
                realized,
              OVER_BUDGET:
                planned >
                0 &&
                realized >
                planned
            };
          }
        );
      break;
    }

    case 'keuangan':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.KEUANGAN
          ),
          year
        )
        .sort(
          sortDateDesc_
        );
      break;

    case 'inventaris':
      rows =
        readSheet_(
          APP.SHEETS.INVENTARIS
        );
      break;

    case 'pengurus':
      rows =
        readSheet_(
          APP.SHEETS.PENGURUS
        )
        .sort(
          (
            a,
            b
          ) =>
            Number(
              a.URUTAN ||
              9999
            ) -
            Number(
              b.URUTAN ||
              9999
            )
        );
      break;

    case 'jemaat':
      rows =
        readSheet_(
          APP.SHEETS.JEMAAT
        )
        .sort(
          (
            a,
            b
          ) =>
            String(
              a.NAMA ||
              ''
            )
            .localeCompare(
              String(
                b.NAMA ||
                ''
              ),
              'id'
            )
        );
      break;

    case 'dokumen':
      rows =
        byYear_(
          readSheet_(
            APP.SHEETS.DOKUMEN
          ),
          year
        )
        .sort(
          sortDateDesc_
        );
      break;

    case 'departemen':
      rows =
        readSheet_(
          APP.SHEETS.DEPARTEMEN
        )
        .sort(
          (
            a,
            b
          ) =>
            Number(
              a.URUTAN ||
              9999
            ) -
            Number(
              b.URUTAN ||
              9999
            )
        );
      break;

    case 'kalender':
      return {
        page,
        year,
        rows:
          getCalendarDataV6_(
            year
          )
      };

    default:
      throw new Error(
        'Page data tidak dikenali: ' +
        page
      );
  }

  return {
    page,
    year,
    total:
      rows.length,
    rows:
      rows.slice(
        0,
        limit
      )
  };
}


function getFormOptions(year) {
  year =
    Number(
      year ||
      currentYear_()
    );

  return {
    sources:
      [...APP.SOURCES],

    officers:
      readSheet_(
        APP.SHEETS.PENGURUS
      )
      .filter(
        item =>
          String(
            item.STATUS ||
            'Aktif'
          ) ===
          'Aktif'
      )
      .map(
        item => ({
          id:
            item.ID_PENGURUS,
          label:
            item.NAMA,
          position:
            item.JABATAN,
          department:
            item.DEPARTEMEN,
          whatsapp:
            item.NO_WHATSAPP
        })
      ),

    departments:
      readSheet_(
        APP.SHEETS.DEPARTEMEN
      )
      .filter(
        item =>
          String(
            item.STATUS ||
            'Aktif'
          ) ===
          'Aktif'
      )
      .map(
        item => ({
          id:
            item.ID_DEPARTEMEN,
          label:
            item.NAMA_DEPARTEMEN
        })
      ),

    notulen:
      byYear_(
        readSheet_(
          APP.SHEETS.NOTULEN
        ),
        year
      )
      .map(
        item => ({
          id:
            item.ID_NOTULEN,
          label:
            item.JUDUL,
          date:
            item.TANGGAL
        })
      ),

    agenda:
      getAgendaOptionsV6_(
        year
      ),

    keputusan:
      byYear_(
        readSheet_(
          APP.SHEETS.KEPUTUSAN
        ),
        year
      )
      .map(
        item => ({
          id:
            item.ID_KEPUTUSAN,
          label:
            item.KEPUTUSAN,
          number:
            item.NO_KEPUTUSAN
        })
      ),

    rapbj:
      byYear_(
        readSheet_(
          APP.SHEETS.RAPBJ
        ),
        year
      )
      .map(
        item => ({
          id:
            item.ID_RAPBJ,
          label:
            item.PROGRAM_ATAU_POS,
          department:
            item.DEPARTEMEN,
          source:
            item.SUMBER_DANA,
          budget:
            Number(
              item.ANGGARAN ||
              0
            )
        })
      )
  };
}


function collectAvailableYearsV6_() {
  const years =
    new Set([
      currentYear_()
    ]);

  [
    APP.SHEETS.NOTULEN,
    APP.SHEETS.USULAN,
    APP.SHEETS.KEPUTUSAN,
    APP.SHEETS.TINDAK_LANJUT,
    APP.SHEETS.KEUANGAN,
    APP.SHEETS.RAPBJ,
    APP.SHEETS.PROGRAM,
    APP.SHEETS.DOKUMEN
  ].forEach(
    sheetName => {
      const sheet =
        getSheet_(
          sheetName
        );

      const column =
        getHeaderColumn_(
          sheet,
          'TAHUN'
        );

      if (
        !column ||
        sheet.getLastRow() <
        2
      ) {
        return;
      }

      sheet
        .getRange(
          2,
          column,
          sheet.getLastRow() -
          1,
          1
        )
        .getDisplayValues()
        .forEach(
          row => {
            const value =
              Number(
                row[0] ||
                0
              );

            if (value) {
              years.add(
                value
              );
            }
          }
        );
    }
  );

  return Array.from(
    years
  )
  .sort(
    (
      a,
      b
    ) =>
      b -
      a
  );
}


function getAgendaOptionsV6_(year) {
  const meetingIds =
    new Set(
      byYear_(
        readSheet_(
          APP.SHEETS.NOTULEN
        ),
        year
      )
      .map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  return readSheet_(
    APP.SHEETS.AGENDA
  )
  .filter(
    item =>
      meetingIds.has(
        String(
          item.ID_NOTULEN
        )
      )
  )
  .map(
    item => ({
      id:
        item.ID_AGENDA,
      meetingId:
        item.ID_NOTULEN,
      label:
        item.AGENDA
    })
  );
}


function getCalendarDataV6_(year) {
  const notulen =
    byYear_(
      readSheet_(
        APP.SHEETS.NOTULEN
      ),
      year
    );

  const meetingIds =
    new Set(
      notulen.map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  const agenda =
    readSheet_(
      APP.SHEETS.AGENDA
    )
    .filter(
      item =>
        meetingIds.has(
          String(
            item.ID_NOTULEN
          )
        )
    );

  const programs =
    byYear_(
      readSheet_(
        APP.SHEETS.PROGRAM
      ),
      year
    );

  const tasks =
    byYear_(
      readSheet_(
        APP.SHEETS.TINDAK_LANJUT
      ),
      year
    );

  return buildCalendarEvents_({
    notulen,
    agenda,
    programs,
    tindakLanjut:
      tasks
  });
}


/* =========================================================
   DELETE / RELATION POLICY V6
========================================================= */

function deleteEntity(entity,id,token){
  assertEntityPermissionV84_(token,entity,'remove');
  return deleteEntityInternal_(entity,id);
}

function deleteEntityInternal_(
  entity,
  id
) {
  return withDocumentLock_(
    () => {
      const config =
        APP.ENTITY[
          entity
        ];

      if (!config) {
        throw new Error(
          'Jenis data tidak dikenali.'
        );
      }

      const sheet =
        getSheet_(
          resolveEntitySheetNameV602_(
            config
          )
        );

      const row =
        findRowById_(
          sheet,
          config.id,
          id
        );

      if (!row) {
        throw new Error(
          'Data tidak ditemukan.'
        );
      }

      const current =
        rowToObject_(
          sheet,
          row
        );

      if (
        entity ===
        'keuangan'
      ) {
        assertFinancePeriodWritableV8_(
          current.TANGGAL
        );

        recordFinanceTransactionAuditV8_(
          id,
          'DELETE',
          current,
          null
        );

        deleteAttachmentsForEntityV6_(
          'keuangan',
          id
        );
      }

      if (
        entity ===
        'notulen' &&
        String(
          current.LOCKED
        ).toLowerCase() ===
        'true'
      ) {
        throw new Error(
          'Notulen yang sudah disetujui dan dikunci tidak dapat dihapus.'
        );
      }

      if (
        entity ===
        'notulen'
      ) {
        cascadeDeleteMeetingV6_(
          id
        );
      }

      if (
        entity ===
        'agenda'
      ) {
        cascadeDeleteAgendaV6_(
          id
        );
      }

      if (
        entity ===
        'keputusan'
      ) {
        deleteRowsByValue_(
          APP.SHEETS.TINDAK_LANJUT,
          'ID_KEPUTUSAN',
          id
        );
      }

      if (
        entity ===
        'rapbj'
      ) {
        clearReferenceV6_(
          APP.SHEETS.KEUANGAN,
          'ID_RAPBJ',
          id
        );

        clearReferenceV6_(
          APP.SHEETS.PROGRAM,
          'ID_RAPBJ',
          id
        );
      }

      if (
        current.FOTO_FILE_ID
      ) {
        trashFileSafe_(
          current.FOTO_FILE_ID
        );
      }

      if (
        current.FILE_ID
      ) {
        trashFileSafe_(
          current.FILE_ID
        );
      }

      deleteDraftV7(
        entity,
        id,
        currentYear_()
      );

      sheet.deleteRow(
        row
      );

      audit_(
        'DELETE',
        entity,
        id,
        'Menghapus data.'
      );

      return {
        success: true
      };
    }
  );
}


function cascadeDeleteMeetingV6_(
  notulenId
) {
  const agendaRows =
    readSheet_(
      APP.SHEETS.AGENDA
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          notulenId
        )
    );

  const agendaIds =
    agendaRows.map(
      item =>
        String(
          item.ID_AGENDA
        )
    );

  const decisions =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    )
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          notulenId
        )
    );

  decisions.forEach(
    item => {
      deleteRowsByValue_(
        APP.SHEETS.TINDAK_LANJUT,
        'ID_KEPUTUSAN',
        item.ID_KEPUTUSAN
      );
    }
  );

  deleteAttachmentsForEntityV6_(
    'notulen',
    notulenId
  );

  agendaIds.forEach(
    agendaId => {
      deleteAttachmentsForEntityV6_(
        'agenda',
        agendaId
      );

      clearReferenceV6_(
        APP.SHEETS.KEUANGAN,
        'ID_AGENDA',
        agendaId
      );
    }
  );

  clearReferenceV6_(
    APP.SHEETS.KEUANGAN,
    'ID_NOTULEN',
    notulenId
  );

  resetProposalReferencesForMeetingV6_(
    notulenId,
    agendaIds
  );

  deleteRowsByValue_(
    APP.SHEETS.AGENDA,
    'ID_NOTULEN',
    notulenId
  );

  deleteRowsByValue_(
    APP.SHEETS.KEHADIRAN,
    'ID_NOTULEN',
    notulenId
  );

  deleteRowsByValue_(
    APP.SHEETS.KEPUTUSAN,
    'ID_NOTULEN',
    notulenId
  );
}


function cascadeDeleteAgendaV6_(
  agendaId
) {
  const decisions =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    )
    .filter(
      item =>
        String(
          item.ID_AGENDA
        ) ===
        String(
          agendaId
        )
    );

  decisions.forEach(
    item => {
      deleteRowsByValue_(
        APP.SHEETS.TINDAK_LANJUT,
        'ID_KEPUTUSAN',
        item.ID_KEPUTUSAN
      );
    }
  );

  deleteRowsByValue_(
    APP.SHEETS.KEPUTUSAN,
    'ID_AGENDA',
    agendaId
  );

  clearReferenceV6_(
    APP.SHEETS.KEUANGAN,
    'ID_AGENDA',
    agendaId
  );

  deleteAttachmentsForEntityV6_(
    'agenda',
    agendaId
  );

  resetProposalReferencesForMeetingV6_(
    '',
    [
      String(
        agendaId
      )
    ]
  );
}


function clearReferenceV6_(
  sheetName,
  header,
  value
) {
  const sheet =
    getSheet_(
      sheetName
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return 0;
  }

  const column =
    getHeaderColumn_(
      sheet,
      header
    );

  if (!column) {
    return 0;
  }

  const range =
    sheet.getRange(
      2,
      column,
      sheet.getLastRow() -
      1,
      1
    );

  const values =
    range.getValues();

  let changed = 0;

  values.forEach(
    row => {
      if (
        String(
          row[0]
        ) ===
        String(
          value
        )
      ) {
        row[0] =
          '';
        changed++;
      }
    }
  );

  if (changed) {
    range.setValues(
      values
    );
  }

  return changed;
}


function resetProposalReferencesForMeetingV6_(
  notulenId,
  agendaIds
) {
  const sheet =
    getSheet_(
      APP.SHEETS.USULAN
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return 0;
  }

  const rows =
    readSheet_(
      APP.SHEETS.USULAN
    );

  const agendaSet =
    new Set(
      (
        agendaIds ||
        []
      )
      .map(String)
    );

  let changed = 0;

  rows.forEach(
    item => {
      const matchMeeting =
        Boolean(
          notulenId
        ) &&
        String(
          item.ID_NOTULEN
        ) ===
        String(
          notulenId
        );

      const matchAgenda =
        item.ID_AGENDA &&
        agendaSet.has(
          String(
            item.ID_AGENDA
          )
        );

      if (
        !matchMeeting &&
        !matchAgenda
      ) {
        return;
      }

      const row =
        findRowById_(
          sheet,
          'ID_USULAN',
          item.ID_USULAN
        );

      if (!row) {
        return;
      }

      const headers =
        getHeaders_(
          sheet
        );

      const values =
        sheet
          .getRange(
            row,
            1,
            1,
            headers.length
          )
          .getValues()[0];

      [
        'ID_NOTULEN',
        'ID_AGENDA'
      ].forEach(
        header => {
          const index =
            headers.indexOf(
              header
            );

          if (
            index !==
            -1
          ) {
            values[index] =
              '';
          }
        }
      );

      const statusIndex =
        headers.indexOf(
          'STATUS'
        );

      if (
        statusIndex !==
        -1 &&
        item.STATUS ===
        'Diterima'
      ) {
        values[
          statusIndex
        ] =
          'Diajukan';
      }

      sheet
        .getRange(
          row,
          1,
          1,
          headers.length
        )
        .setValues([
          values
        ]);

      changed++;
    }
  );

  return changed;
}


function deleteAttachmentsForEntityV6_(
  entityType,
  entityId
) {
  const sheet =
    getSheet_(
      APP.SHEETS.ATTACHMENTS
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return 0;
  }

  const rows =
    readSheet_(
      APP.SHEETS.ATTACHMENTS
    )
    .filter(
      item =>
        String(
          item.ENTITY_TYPE
        ) ===
        String(
          entityType
        ) &&
        String(
          item.ENTITY_ID
        ) ===
        String(
          entityId
        )
    );

  let removed = 0;

  rows.forEach(
    item => {
      trashFileSafe_(
        item.FILE_ID
      );

      const row =
        findRowById_(
          sheet,
          'ID_ATTACHMENT',
          item.ID_ATTACHMENT
        );

      if (row) {
        sheet.deleteRow(
          row
        );
        removed++;
      }
    }
  );

  return removed;
}


/* =========================================================
   ATOMIC WORKFLOW OVERRIDES V6
========================================================= */

function reviewNotulen(
  id,
  action,
  note,
  token) {
  assertFeatureV84_(token,'meeting');

  return withDocumentLock_(
    () => {
      const sheet =
        getSheet_(
          APP.SHEETS.NOTULEN
        );

      const row =
        findRowById_(
          sheet,
          'ID_NOTULEN',
          id
        );

      if (!row) {
        throw new Error(
          'Notulen tidak ditemukan.'
        );
      }

      const headers =
        getHeaders_(
          sheet
        );

      const payload =
        rowToObject_(
          sheet,
          row
        );

      const now =
        new Date();

      if (
        action ===
        'submit'
      ) {
        if (
          payload.STATUS ===
          'Disetujui'
        ) {
          throw new Error(
            'Notulen sudah disetujui.'
          );
        }

        payload.STATUS =
          'Menunggu Persetujuan';
        payload.LOCKED =
          false;
      }

      else if (
        action ===
        'approve'
      ) {
        payload.STATUS =
          'Disetujui';
        payload.APPROVAL_NOTE =
          note ||
          '';
        payload.APPROVED_BY =
          userLabel_();
        payload.APPROVED_AT =
          now;
        payload.LOCKED =
          true;
      }

      else if (
        action ===
        'revise'
      ) {
        payload.STATUS =
          'Perlu Revisi';
        payload.APPROVAL_NOTE =
          note ||
          '';
        payload.LOCKED =
          false;
      }

      else if (
        action ===
        'unlock'
      ) {
        payload.STATUS =
          'Perlu Revisi';
        payload.APPROVAL_NOTE =
          note ||
          'Dibuka kembali untuk revisi.';
        payload.LOCKED =
          false;
      }

      else {
        throw new Error(
          'Aksi approval tidak dikenali.'
        );
      }

      payload.UPDATED_AT =
        now;

      const values =
        headers.map(
          header =>
            normalizeWrite_(
              header,
              payload[header]
            )
        );

      sheet
        .getRange(
          row,
          1,
          1,
          values.length
        )
        .setValues([
          values
        ]);

      audit_(
        'APPROVAL_' +
        action.toUpperCase(),
        'notulen',
        id,
        note ||
        action
      );

      return {
        success: true,
        status:
          payload.STATUS,
        locked:
          payload.LOCKED
      };
    }
  );
}


function initializeAttendance(
  notulenId,
  token) {
  assertFeatureV84_(token,'meeting');

  return withDocumentLock_(
    () => {
      const meeting =
        findObjectById_(
          APP.SHEETS.NOTULEN,
          'ID_NOTULEN',
          notulenId
        );

      if (!meeting) {
        throw new Error(
          'Notulen tidak ditemukan.'
        );
      }

      const officers =
        readSheet_(
          APP.SHEETS.PENGURUS
        )
        .filter(
          item =>
            String(
              item.STATUS ||
              'Aktif'
            ) ===
            'Aktif'
        );

      const existing =
        readSheet_(
          APP.SHEETS.KEHADIRAN
        )
        .filter(
          item =>
            String(
              item.ID_NOTULEN
            ) ===
            String(
              notulenId
            )
        );

      const officerIds =
        new Set(
          existing
            .filter(
              item =>
                item.ID_PENGURUS
            )
            .map(
              item =>
                String(
                  item.ID_PENGURUS
                )
            )
        );

      const names =
        new Set(
          existing.map(
            item =>
              String(
                item.NAMA ||
                ''
              )
              .toLowerCase()
          )
        );

      let created = 0;

      officers.forEach(
        officer => {
          const duplicate =
            (
              officer.ID_PENGURUS &&
              officerIds.has(
                String(
                  officer.ID_PENGURUS
                )
              )
            ) ||
            names.has(
              String(
                officer.NAMA ||
                ''
              )
              .toLowerCase()
            );

          if (duplicate) {
            return;
          }

          saveEntityCore_(
            'kehadiran',
            {
              ID_NOTULEN:
                notulenId,
              ID_PENGURUS:
                officer.ID_PENGURUS,
              NAMA:
                officer.NAMA,
              JABATAN:
                officer.JABATAN,
              STATUS_KEHADIRAN:
                'Hadir',
              KETERANGAN:
                ''
            }
          );

          created++;
        }
      );

      return {
        success: true,
        created
      };
    }
  );
}


function approveAgendaProposal(
  proposalId,
  notulenId,
  token) {
  assertFeatureV84_(token,'meeting');

  return withDocumentLock_(
    () => {
      const proposal =
        findObjectById_(
          APP.SHEETS.USULAN,
          'ID_USULAN',
          proposalId
        );

      if (!proposal) {
        throw new Error(
          'Usulan tidak ditemukan.'
        );
      }

      const meeting =
        findObjectById_(
          APP.SHEETS.NOTULEN,
          'ID_NOTULEN',
          notulenId
        );

      if (!meeting) {
        throw new Error(
          'Notulen tujuan tidak ditemukan.'
        );
      }

      const agendaResult =
        saveEntityCore_(
          'agenda',
          {
            ID_NOTULEN:
              notulenId,
            NO_URUT:
              nextAgendaNumber_(
                notulenId
              ),
            AGENDA:
              proposal.JUDUL_USULAN,
            PEMBAHASAN:
              proposal.LATAR_BELAKANG ||
              '',
            ANGGARAN:
              proposal.ESTIMASI_ANGGARAN ||
              0,
            SUMBER_DANA:
              proposal.SUMBER_DANA ||
              'Kas Jemaat',
            DEPARTEMEN:
              proposal.DEPARTEMEN ||
              '',
            STATUS:
              'Belum Dimulai'
          }
        );

      saveEntityCore_(
        'usulan',
        {
          ...proposal,
          STATUS:
            'Diterima',
          ID_NOTULEN:
            notulenId,
          ID_AGENDA:
            agendaResult.id
        }
      );

      audit_(
        'APPROVE_PROPOSAL',
        'usulan',
        proposalId,
        'Usulan dipindahkan menjadi agenda.'
      );

      return {
        success: true,
        agendaId:
          agendaResult.id
      };
    }
  );
}


function rejectAgendaProposal(
  proposalId,
  note
) {
  return withDocumentLock_(
    () => {
      const proposal =
        findObjectById_(
          APP.SHEETS.USULAN,
          'ID_USULAN',
          proposalId
        );

      if (!proposal) {
        throw new Error(
          'Usulan tidak ditemukan.'
        );
      }

      return saveEntityCore_(
        'usulan',
        {
          ...proposal,
          STATUS:
            'Ditolak',
          CATATAN:
            note ||
            ''
        }
      );
    }
  );
}




/* =========================================================
   MAJELIS GALILEA V7 — FEATURE SUITE
========================================================= */

/* ---------- 1. GLOBAL SEARCH ---------- */

function globalSearchV7(
  query,
  year,
  limit
) {
  query =
    String(
      query ||
      ''
    )
    .trim()
    .toLowerCase();

  if (
    query.length <
    2
  ) {
    return [];
  }

  year =
    Number(
      year ||
      currentYear_()
    );

  limit =
    Math.min(
      60,
      Math.max(
        5,
        Number(
          limit ||
          30
        )
      )
    );

  const meetingIdsForYear =
    new Set(
      byYear_(
        readSheet_(
          APP.SHEETS.NOTULEN
        ),
        year
      )
      .map(
        item =>
          String(
            item.ID_NOTULEN
          )
      )
    );

  const configs = [
    {
      type:
        'notulen',
      page:
        'rapat',
      sheet:
        APP.SHEETS.NOTULEN,
      id:
        'ID_NOTULEN',
      title:
        item =>
          item.JUDUL,
      meta:
        item =>
          [
            item.TANGGAL,
            item.JENIS_RAPAT,
            item.TEMPAT
          ].filter(Boolean).join(' · '),
      fields: [
        'JUDUL',
        'JENIS_RAPAT',
        'TEMPAT',
        'PIMPINAN_RAPAT',
        'NOTULIS',
        'CATATAN'
      ],
      filterYear:
        true
    },
    {
      type:
        'agenda',
      page:
        'rapat',
      sheet:
        APP.SHEETS.AGENDA,
      id:
        'ID_AGENDA',
      title:
        item =>
          item.AGENDA,
      meta:
        item =>
          [
            item.DEPARTEMEN,
            item.PIC,
            item.STATUS
          ].filter(Boolean).join(' · '),
      fields: [
        'AGENDA',
        'PEMBAHASAN',
        'KEPUTUSAN',
        'PIC',
        'DEPARTEMEN'
      ]
    },
    {
      type:
        'keputusan',
      page:
        'keputusan',
      sheet:
        APP.SHEETS.KEPUTUSAN,
      id:
        'ID_KEPUTUSAN',
      title:
        item =>
          item.KEPUTUSAN,
      meta:
        item =>
          [
            item.NO_KEPUTUSAN,
            item.PIC,
            item.STATUS
          ].filter(Boolean).join(' · '),
      fields: [
        'NO_KEPUTUSAN',
        'KEPUTUSAN',
        'PIC',
        'DEPARTEMEN',
        'STATUS'
      ],
      filterYear:
        true
    },
    {
      type:
        'tindak_lanjut',
      page:
        'tindak_lanjut',
      sheet:
        APP.SHEETS.TINDAK_LANJUT,
      id:
        'ID_TINDAK_LANJUT',
      title:
        item =>
          item.URAIAN,
      meta:
        item =>
          [
            item.PIC,
            item.TARGET_SELESAI,
            item.STATUS
          ].filter(Boolean).join(' · '),
      fields: [
        'URAIAN',
        'PIC',
        'DEPARTEMEN',
        'STATUS',
        'CATATAN'
      ],
      filterYear:
        true
    },
    {
      type:
        'program',
      page:
        'program',
      sheet:
        APP.SHEETS.PROGRAM,
      id:
        'ID_PROGRAM',
      title:
        item =>
          item.NAMA_PROGRAM,
      meta:
        item =>
          [
            item.DEPARTEMEN,
            item.PIC,
            item.STATUS
          ].filter(Boolean).join(' · '),
      fields: [
        'NAMA_PROGRAM',
        'DESKRIPSI',
        'PIC',
        'DEPARTEMEN',
        'STATUS'
      ],
      filterYear:
        true
    },
    {
      type:
        'rapbj',
      page:
        'rapbj',
      sheet:
        APP.SHEETS.RAPBJ,
      id:
        'ID_RAPBJ',
      title:
        item =>
          item.PROGRAM_ATAU_POS,
      meta:
        item =>
          [
            item.DEPARTEMEN,
            item.SUMBER_DANA,
            formatRupiah_(
              item.ANGGARAN
            )
          ].filter(Boolean).join(' · '),
      fields: [
        'PROGRAM_ATAU_POS',
        'DEPARTEMEN',
        'KATEGORI',
        'SUMBER_DANA',
        'CATATAN'
      ],
      filterYear:
        true
    },
    {
      type:
        'keuangan',
      page:
        'keuangan',
      sheet:
        APP.SHEETS.KEUANGAN,
      id:
        'ID_TRANSAKSI',
      title:
        item =>
          item.DESKRIPSI ||
          item.KATEGORI ||
          'Transaksi',
      meta:
        item =>
          [
            item.TANGGAL,
            item.SUMBER_DANA,
            formatRupiah_(
              item.NOMINAL
            )
          ].filter(Boolean).join(' · '),
      fields: [
        'DESKRIPSI',
        'KATEGORI',
        'SUMBER_DANA',
        'CATATAN'
      ],
      filterYear:
        true
    },
    {
      type:
        'inventaris',
      page:
        'inventaris',
      sheet:
        APP.SHEETS.INVENTARIS,
      id:
        'ID_INVENTARIS',
      title:
        item =>
          item.NAMA_BARANG,
      meta:
        item =>
          [
            item.KATEGORI,
            item.LOKASI,
            item.KONDISI
          ].filter(Boolean).join(' · '),
      fields: [
        'NAMA_BARANG',
        'KATEGORI',
        'LOKASI',
        'KONDISI',
        'CATATAN'
      ]
    },
    {
      type:
        'pengurus',
      page:
        'pengurus',
      sheet:
        APP.SHEETS.PENGURUS,
      id:
        'ID_PENGURUS',
      title:
        item =>
          item.NAMA,
      meta:
        item =>
          [
            item.JABATAN,
            item.DEPARTEMEN
          ].filter(Boolean).join(' · '),
      fields: [
        'NAMA',
        'JABATAN',
        'DEPARTEMEN',
        'NO_WHATSAPP',
        'EMAIL'
      ]
    },
    {
      type:
        'jemaat',
      page:
        'jemaat',
      sheet:
        APP.SHEETS.JEMAAT,
      id:
        'ID_ANGGOTA',
      title:
        item =>
          memberFullNameV82_(
            item
          ),
      meta:
        item =>
          [
            item.NOMOR_ANGGOTA,
            item.NAMA_KELUARGA ||
            item.KELUARGA,
            item.POSISI_KELUARGA,
            item.STATUS
          ].filter(Boolean).join(' · '),
      fields: [
        'NOMOR_ANGGOTA',
        'NAMA',
        'NAMA_KELUARGA',
        'KELUARGA',
        'POSISI_KELUARGA',
        'TEMPAT_LAHIR',
        'TANGGAL_LAHIR',
        'NO_TELEPON',
        'NO_WHATSAPP',
        'EMAIL',
        'ALAMAT'
      ]
    },
    {
      type:
        'dokumen',
      page:
        'dokumen',
      sheet:
        APP.SHEETS.DOKUMEN,
      id:
        'ID_DOKUMEN',
      title:
        item =>
          item.JUDUL,
      meta:
        item =>
          [
            item.NOMOR_DOKUMEN,
            item.KATEGORI,
            item.TANGGAL
          ].filter(Boolean).join(' · '),
      fields: [
        'NOMOR_DOKUMEN',
        'JUDUL',
        'KATEGORI',
        'DESKRIPSI'
      ],
      filterYear:
        true
    },
    {
      type:
        'usulan',
      page:
        'usulan',
      sheet:
        APP.SHEETS.USULAN,
      id:
        'ID_USULAN',
      title:
        item =>
          item.JUDUL_USULAN,
      meta:
        item =>
          [
            item.PENGUSUL,
            item.DEPARTEMEN,
            item.STATUS
          ].filter(Boolean).join(' · '),
      fields: [
        'JUDUL_USULAN',
        'LATAR_BELAKANG',
        'PENGUSUL',
        'DEPARTEMEN',
        'CATATAN'
      ],
      filterYear:
        true
    }
  ];

  const results = [];

  configs.forEach(
    config => {
      let rows =
        readSheet_(
          config.sheet
        );

      if (
        config.type ===
        'agenda'
      ) {
        rows =
          rows.filter(
            item =>
              meetingIdsForYear.has(
                String(
                  item.ID_NOTULEN
                )
              )
          );
      }

      if (
        config.filterYear
      ) {
        rows =
          rows.filter(
            item =>
              Number(
                item.TAHUN ||
                0
              ) ===
              year
          );
      }

      rows.forEach(
        item => {
          const haystack =
            config.fields
              .map(
                field =>
                  String(
                    item[
                      field
                    ] ||
                    ''
                  )
              )
              .join(' ')
              .toLowerCase();

          if (
            !haystack.includes(
              query
            )
          ) {
            return;
          }

          results.push({
            type:
              config.type,
            page:
              config.page,
            id:
              item[
                config.id
              ],
            title:
              config.title(
                item
              ) ||
              '-',
            meta:
              config.meta(
                item
              ) ||
              '',
            score:
              globalSearchScoreV7_(
                query,
                haystack,
                String(
                  config.title(
                    item
                  ) ||
                  ''
                )
                .toLowerCase()
              )
          });
        }
      );
    }
  );

  return results
    .sort(
      (
        a,
        b
      ) =>
        b.score -
        a.score
    )
    .slice(
      0,
      limit
    );
}


function globalSearchScoreV7_(
  query,
  haystack,
  title
) {
  let score =
    1;

  if (
    title ===
    query
  ) {
    score +=
      100;
  }

  if (
    title.startsWith(
      query
    )
  ) {
    score +=
      40;
  }

  if (
    title.includes(
      query
    )
  ) {
    score +=
      20;
  }

  const first =
    haystack.indexOf(
      query
    );

  if (
    first >=
    0
  ) {
    score +=
      Math.max(
        0,
        10 -
        Math.floor(
          first /
          20
        )
      );
  }

  return score;
}


/* ---------- 4 + 5. RELATIONSHIP VIEW & TIMELINE ---------- */

function getRelationshipGraphV7(
  entity,
  id
) {
  entity =
    String(
      entity ||
      ''
    );

  id =
    String(
      id ||
      ''
    );

  const nodes = [];
  const edges = [];

  const addNode =
    (
      type,
      nodeId,
      title,
      meta,
      status
    ) => {
      if (
        !nodeId
      ) {
        return;
      }

      const key =
        type +
        ':' +
        nodeId;

      if (
        nodes.some(
          item =>
            item.key ===
            key
        )
      ) {
        return;
      }

      nodes.push({
        key,
        type,
        id:
          nodeId,
        title:
          title ||
          '-',
        meta:
          meta ||
          '',
        status:
          status ||
          ''
      });
    };

  const addEdge =
    (
      fromType,
      fromId,
      toType,
      toId,
      label
    ) => {
      if (
        !fromId ||
        !toId
      ) {
        return;
      }

      edges.push({
        from:
          fromType +
          ':' +
          fromId,
        to:
          toType +
          ':' +
          toId,
        label:
          label ||
          ''
      });
    };

  const notulen =
    readSheet_(
      APP.SHEETS.NOTULEN
    );

  const agenda =
    readSheet_(
      APP.SHEETS.AGENDA
    );

  const decisions =
    readSheet_(
      APP.SHEETS.KEPUTUSAN
    );

  const tasks =
    readSheet_(
      APP.SHEETS.TINDAK_LANJUT
    );

  const finance =
    readSheet_(
      APP.SHEETS.KEUANGAN
    );

  const rapbj =
    readSheet_(
      APP.SHEETS.RAPBJ
    );

  const programs =
    readSheet_(
      APP.SHEETS.PROGRAM
    );

  let meetingId = '';
  let agendaId = '';
  let decisionId = '';

  if (
    entity ===
    'notulen'
  ) {
    meetingId =
      id;
  }

  if (
    entity ===
    'agenda'
  ) {
    const row =
      agenda.find(
        item =>
          String(
            item.ID_AGENDA
          ) ===
          id
      );

    if (row) {
      agendaId =
        row.ID_AGENDA;
      meetingId =
        row.ID_NOTULEN;
    }
  }

  if (
    entity ===
    'keputusan'
  ) {
    const row =
      decisions.find(
        item =>
          String(
            item.ID_KEPUTUSAN
          ) ===
          id
      );

    if (row) {
      decisionId =
        row.ID_KEPUTUSAN;
      agendaId =
        row.ID_AGENDA;
      meetingId =
        row.ID_NOTULEN;
    }
  }

  if (
    entity ===
    'tindak_lanjut'
  ) {
    const task =
      tasks.find(
        item =>
          String(
            item.ID_TINDAK_LANJUT
          ) ===
          id
      );

    if (task) {
      decisionId =
        task.ID_KEPUTUSAN;
      meetingId =
        task.ID_NOTULEN;

      const decision =
        decisions.find(
          item =>
            String(
              item.ID_KEPUTUSAN
            ) ===
            String(
              decisionId
            )
        );

      if (decision) {
        agendaId =
          decision.ID_AGENDA;
      }
    }
  }

  if (
    entity ===
    'program'
  ) {
    const row =
      programs.find(
        item =>
          String(
            item.ID_PROGRAM
          ) ===
          id
      );

    if (row) {
      addNode(
        'program',
        row.ID_PROGRAM,
        row.NAMA_PROGRAM,
        row.DEPARTEMEN,
        row.STATUS
      );

      if (
        row.ID_RAPBJ
      ) {
        const budget =
          rapbj.find(
            item =>
              String(
                item.ID_RAPBJ
              ) ===
              String(
                row.ID_RAPBJ
              )
          );

        if (budget) {
          addNode(
            'rapbj',
            budget.ID_RAPBJ,
            budget.PROGRAM_ATAU_POS,
            formatRupiah_(
              budget.ANGGARAN
            ),
            budget.STATUS
          );

          addEdge(
            'rapbj',
            budget.ID_RAPBJ,
            'program',
            row.ID_PROGRAM,
            'mendanai'
          );
        }
      }
    }

    return {
      entity,
      id,
      nodes,
      edges,
      timeline:
        getEntityTimelineV7(
          entity,
          id,
          50
        )
    };
  }


  if (
    entity ===
    'keuangan'
  ) {
    const row =
      finance.find(
        item =>
          String(
            item.ID_TRANSAKSI
          ) ===
          id
      );

    if (row) {
      addNode(
        'keuangan',
        row.ID_TRANSAKSI,
        row.DESKRIPSI ||
        row.KATEGORI ||
        'Transaksi',
        [
          row.SUMBER_DANA,
          formatRupiah_(
            row.NOMINAL
          )
        ].filter(Boolean).join(' · '),
        row.JENIS
      );

      if (
        row.ID_RAPBJ
      ) {
        const budget =
          rapbj.find(
            item =>
              String(
                item.ID_RAPBJ
              ) ===
              String(
                row.ID_RAPBJ
              )
          );

        if (budget) {
          addNode(
            'rapbj',
            budget.ID_RAPBJ,
            budget.PROGRAM_ATAU_POS,
            budget.DEPARTEMEN,
            budget.STATUS
          );

          addEdge(
            'rapbj',
            budget.ID_RAPBJ,
            'keuangan',
            row.ID_TRANSAKSI,
            'realisasi'
          );
        }
      }

      if (
        row.ID_NOTULEN
      ) {
        const meeting =
          notulen.find(
            item =>
              String(
                item.ID_NOTULEN
              ) ===
              String(
                row.ID_NOTULEN
              )
          );

        if (meeting) {
          addNode(
            'notulen',
            meeting.ID_NOTULEN,
            meeting.JUDUL,
            meeting.TANGGAL,
            meeting.STATUS
          );

          addEdge(
            'notulen',
            meeting.ID_NOTULEN,
            'keuangan',
            row.ID_TRANSAKSI,
            'transaksi'
          );
        }
      }
    }

    return {
      entity,
      id,
      nodes,
      edges,
      timeline:
        getEntityTimelineV7(
          entity,
          id,
          50
        )
    };
  }


  if (
    entity ===
    'rapbj'
  ) {
    const row =
      rapbj.find(
        item =>
          String(
            item.ID_RAPBJ
          ) ===
          id
      );

    if (row) {
      addNode(
        'rapbj',
        row.ID_RAPBJ,
        row.PROGRAM_ATAU_POS,
        [
          row.DEPARTEMEN,
          formatRupiah_(
            row.ANGGARAN
          )
        ].filter(Boolean).join(' · '),
        row.STATUS
      );

      programs
        .filter(
          item =>
            String(
              item.ID_RAPBJ
            ) ===
            id
        )
        .forEach(
          item => {
            addNode(
              'program',
              item.ID_PROGRAM,
              item.NAMA_PROGRAM,
              item.DEPARTEMEN,
              item.STATUS
            );

            addEdge(
              'rapbj',
              id,
              'program',
              item.ID_PROGRAM,
              'mendanai'
            );
          }
        );

      finance
        .filter(
          item =>
            String(
              item.ID_RAPBJ
            ) ===
            id
        )
        .forEach(
          item => {
            addNode(
              'keuangan',
              item.ID_TRANSAKSI,
              item.DESKRIPSI ||
              item.KATEGORI ||
              'Transaksi',
              formatRupiah_(
                item.NOMINAL
              ),
              item.JENIS
            );

            addEdge(
              'rapbj',
              id,
              'keuangan',
              item.ID_TRANSAKSI,
              'realisasi'
            );
          }
        );
    }

    return {
      entity,
      id,
      nodes,
      edges,
      timeline:
        getEntityTimelineV7(
          entity,
          id,
          50
        )
    };
  }

  const meeting =
    notulen.find(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          meetingId
        )
    );

  if (
    meeting
  ) {
    addNode(
      'notulen',
      meeting.ID_NOTULEN,
      meeting.JUDUL,
      [
        meeting.TANGGAL,
        meeting.JENIS_RAPAT
      ].filter(Boolean).join(' · '),
      meeting.STATUS
    );
  }

  agenda
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          meetingId
        ) &&
        (
          !agendaId ||
          String(
            item.ID_AGENDA
          ) ===
          String(
            agendaId
          )
        )
    )
    .forEach(
      item => {
        addNode(
          'agenda',
          item.ID_AGENDA,
          item.AGENDA,
          item.DEPARTEMEN,
          item.STATUS
        );

        addEdge(
          'notulen',
          meetingId,
          'agenda',
          item.ID_AGENDA,
          'agenda'
        );

        if (
          Number(
            item.ANGGARAN ||
            0
          ) >
          0
        ) {
          const budgetId =
            'BUDGET-' +
            item.ID_AGENDA;

          addNode(
            'anggaran',
            budgetId,
            formatRupiah_(
              item.ANGGARAN
            ),
            item.SUMBER_DANA ||
            '',
            ''
          );

          addEdge(
            'agenda',
            item.ID_AGENDA,
            'anggaran',
            budgetId,
            'anggaran'
          );
        }
      }
    );

  decisions
    .filter(
      item =>
        String(
          item.ID_NOTULEN
        ) ===
        String(
          meetingId
        ) &&
        (
          !decisionId ||
          String(
            item.ID_KEPUTUSAN
          ) ===
          String(
            decisionId
          )
        ) &&
        (
          !agendaId ||
          !item.ID_AGENDA ||
          String(
            item.ID_AGENDA
          ) ===
          String(
            agendaId
          )
        )
    )
    .forEach(
      item => {
        addNode(
          'keputusan',
          item.ID_KEPUTUSAN,
          item.KEPUTUSAN,
          [
            item.NO_KEPUTUSAN,
            item.PIC
          ].filter(Boolean).join(' · '),
          item.STATUS
        );

        if (
          item.PIC
        ) {
          const picId =
            'PIC-' +
            item.ID_KEPUTUSAN;

          addNode(
            'pic',
            picId,
            item.PIC,
            item.DEPARTEMEN ||
            'PIC Keputusan',
            ''
          );

          addEdge(
            'keputusan',
            item.ID_KEPUTUSAN,
            'pic',
            picId,
            'PIC'
          );
        }

        if (
          item.ID_AGENDA
        ) {
          addEdge(
            'agenda',
            item.ID_AGENDA,
            'keputusan',
            item.ID_KEPUTUSAN,
            'menghasilkan'
          );
        }
        else {
          addEdge(
            'notulen',
            meetingId,
            'keputusan',
            item.ID_KEPUTUSAN,
            'menghasilkan'
          );
        }
      }
    );

  tasks
    .filter(
      item =>
        (
          decisionId &&
          String(
            item.ID_KEPUTUSAN
          ) ===
          String(
            decisionId
          )
        ) ||
        (
          !decisionId &&
          String(
            item.ID_NOTULEN
          ) ===
          String(
            meetingId
          )
        )
    )
    .forEach(
      item => {
        addNode(
          'tindak_lanjut',
          item.ID_TINDAK_LANJUT,
          item.URAIAN,
          [
            item.PIC,
            item.TARGET_SELESAI,
            String(
              item.PROGRESS ||
              0
            ) +
            '%'
          ].filter(Boolean).join(' · '),
          item.STATUS
        );

        addEdge(
          'keputusan',
          item.ID_KEPUTUSAN,
          'tindak_lanjut',
          item.ID_TINDAK_LANJUT,
          'ditindaklanjuti'
        );
      }
    );

  finance
    .filter(
      item =>
        (
          agendaId &&
          String(
            item.ID_AGENDA
          ) ===
          String(
            agendaId
          )
        ) ||
        (
          !agendaId &&
          meetingId &&
          String(
            item.ID_NOTULEN
          ) ===
          String(
            meetingId
          )
        )
    )
    .forEach(
      item => {
        addNode(
          'keuangan',
          item.ID_TRANSAKSI,
          item.DESKRIPSI ||
          item.KATEGORI ||
          'Transaksi',
          [
            item.SUMBER_DANA,
            formatRupiah_(
              item.NOMINAL
            )
          ].filter(Boolean).join(' · '),
          item.JENIS
        );

        const linkedAgenda =
          agendaId
            ? agenda.find(
                ag =>
                  String(
                    ag.ID_AGENDA
                  ) ===
                  String(
                    agendaId
                  )
              )
            : null;

        const fromBudget =
          linkedAgenda &&
          Number(
            linkedAgenda.ANGGARAN ||
            0
          ) >
          0;

        addEdge(
          fromBudget
            ? 'anggaran'
            : (
                agendaId
                  ? 'agenda'
                  : 'notulen'
              ),
          fromBudget
            ? (
                'BUDGET-' +
                agendaId
              )
            : (
                agendaId ||
                meetingId
              ),
          'keuangan',
          item.ID_TRANSAKSI,
          'realisasi'
        );
      }
    );

  return {
    entity,
    id,
    nodes,
    edges,
    timeline:
      getEntityTimelineV7(
        entity,
        id,
        50
      )
  };
}


function getEntityTimelineV7(
  entity,
  id,
  limit
) {
  entity =
    String(
      entity ||
      ''
    );

  id =
    String(
      id ||
      ''
    );

  limit =
    Math.min(
      100,
      Math.max(
        5,
        Number(
          limit ||
          40
        )
      )
    );

  const rows =
    readSheet_(
      APP.SHEETS.LOG
    )
    .filter(
      item =>
        String(
          item.ENTITY ||
          ''
        ) ===
        entity &&
        String(
          item.REFERENCE_ID ||
          ''
        ) ===
        id
    )
    .sort(
      (
        a,
        b
      ) =>
        String(
          b.TIMESTAMP ||
          ''
        )
        .localeCompare(
          String(
            a.TIMESTAMP ||
            ''
          )
        )
    )
    .slice(
      0,
      limit
    )
    .map(
      item => ({
        timestamp:
          item.TIMESTAMP,
        action:
          item.ACTION,
        user:
          item.USER,
        description:
          item.DESCRIPTION
      })
    );

  const config =
    APP.ENTITY[
      entity
    ];

  if (
    config
  ) {
    const current =
      findObjectById_(
        resolveEntitySheetNameV602_(
          config
        ),
        config.id,
        id
      );

    if (
      current &&
      current.CREATED_AT
    ) {
      rows.push({
        timestamp:
          current.CREATED_AT,
        action:
          'CREATED',
        user:
          '',
        description:
          'Data pertama kali dibuat.'
      });
    }

    if (
      current &&
      current.UPDATED_AT
    ) {
      rows.push({
        timestamp:
          current.UPDATED_AT,
        action:
          'UPDATED',
        user:
          '',
        description:
          'Pembaruan terakhir.'
      });
    }
  }

  return rows
    .sort(
      (
        a,
        b
      ) =>
        String(
          b.timestamp ||
          ''
        )
        .localeCompare(
          String(
            a.timestamp ||
            ''
          )
        )
    )
    .slice(
      0,
      limit
    );
}


/* ---------- 6. AUTOSAVE DRAFT ---------- */

function saveDraftV7(
  payload
) {
  payload =
    payload ||
    {};

  const entity =
    String(
      payload.entity ||
      ''
    );

  const referenceId =
    String(
      payload.referenceId ||
      (
        'NEW-' +
        entity +
        '-' +
        String(
          payload.year ||
          currentYear_()
        )
      )
    );

  if (
    !entity
  ) {
    throw new Error(
      'Entity draft wajib diisi.'
    );
  }

  const sheet =
    getSheet_(
      APP.SHEETS.DRAFTS
    );

  const rows =
    readSheet_(
      APP.SHEETS.DRAFTS
    );

  const existing =
    rows.find(
      item =>
        item.ENTITY ===
          entity &&
        String(
          item.REFERENCE_ID
        ) ===
        referenceId
    );

  const id =
    existing
      ? existing.ID_DRAFT
      : generateId_(
          'DRF'
        );

  const row =
    existing
      ? findRowById_(
          sheet,
          'ID_DRAFT',
          id
        )
      : 0;

  const values = [
    id,
    entity,
    referenceId,
    Number(
      payload.year ||
      currentYear_()
    ),
    String(
      payload.title ||
      ''
    ),
    JSON.stringify(
      payload.data ||
      {}
    ),
    new Date(),
    userLabel_()
  ];

  if (
    row
  ) {
    sheet
      .getRange(
        row,
        1,
        1,
        values.length
      )
      .setValues([
        values
      ]);
  }
  else {
    sheet.appendRow(
      values
    );
  }

  return {
    success:
      true,
    id,
    referenceId,
    updatedAt:
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        "yyyy-MM-dd'T'HH:mm:ss"
      )
  };
}


function getDraftV7(
  entity,
  referenceId,
  year
) {
  entity =
    String(
      entity ||
      ''
    );

  referenceId =
    String(
      referenceId ||
      (
        'NEW-' +
        entity +
        '-' +
        String(
          year ||
          currentYear_()
        )
      )
    );

  const row =
    readSheet_(
      APP.SHEETS.DRAFTS
    )
    .find(
      item =>
        item.ENTITY ===
          entity &&
        String(
          item.REFERENCE_ID
        ) ===
        referenceId
    );

  if (!row) {
    return null;
  }

  let data = {};

  try {
    data =
      JSON.parse(
        row.PAYLOAD_JSON ||
        '{}'
      );
  }
  catch (error) {
    data = {};
  }

  return {
    id:
      row.ID_DRAFT,
    entity:
      row.ENTITY,
    referenceId:
      row.REFERENCE_ID,
    title:
      row.TITLE,
    data,
    updatedAt:
      row.UPDATED_AT,
    updatedBy:
      row.UPDATED_BY
  };
}


function deleteDraftV7(
  entity,
  referenceId,
  year
) {
  entity =
    String(
      entity ||
      ''
    );

  referenceId =
    String(
      referenceId ||
      (
        'NEW-' +
        entity +
        '-' +
        String(
          year ||
          currentYear_()
        )
      )
    );

  const sheet =
    getSheet_(
      APP.SHEETS.DRAFTS
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return {
      success:
        true,
      removed:
        0
    };
  }

  const rows =
    readSheet_(
      APP.SHEETS.DRAFTS
    );

  let removed = 0;

  for (
    let index =
      rows.length -
      1;
    index >=
      0;
    index--
  ) {
    const item =
      rows[
        index
      ];

    if (
      item.ENTITY ===
        entity &&
      String(
        item.REFERENCE_ID
      ) ===
        referenceId
    ) {
      const row =
        findRowById_(
          sheet,
          'ID_DRAFT',
          item.ID_DRAFT
        );

      if (
        row
      ) {
        sheet.deleteRow(
          row
        );
        removed++;
      }
    }
  }

  return {
    success:
      true,
    removed
  };
}


/* ---------- 7. SMART FOLLOW-UP / CARRY FORWARD ---------- */

function getSmartCarryForwardV7(
  year,
  targetNotulenId
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  targetNotulenId =
    String(
      targetNotulenId ||
      ''
    );

  const target =
    targetNotulenId
      ? findObjectById_(
          APP.SHEETS.NOTULEN,
          'ID_NOTULEN',
          targetNotulenId
        )
      : null;

  const meetings =
    byYear_(
      readSheet_(
        APP.SHEETS.NOTULEN
      ),
      year
    )
    .filter(
      item =>
        !targetNotulenId ||
        String(
          item.ID_NOTULEN
        ) !==
        targetNotulenId
    )
    .sort(
      sortDateDesc_
    );

  const previousMeeting =
    meetings.find(
      item =>
        !target ||
        !target.TANGGAL ||
        String(
          item.TANGGAL ||
          ''
        ) <
        String(
          target.TANGGAL
        )
    ) ||
    meetings[0] ||
    null;

  const tasks =
    byYear_(
      readSheet_(
        APP.SHEETS.TINDAK_LANJUT
      ),
      year
    )
    .filter(
      item =>
        item.STATUS !==
        'Selesai'
    );

  const decisions =
    byYear_(
      readSheet_(
        APP.SHEETS.KEPUTUSAN
      ),
      year
    );

  const result =
    tasks
      .map(
        task => {
          const decision =
            decisions.find(
              item =>
                String(
                  item.ID_KEPUTUSAN
                ) ===
                String(
                  task.ID_KEPUTUSAN
                )
            );

          const fromPrevious =
            previousMeeting &&
            String(
              task.ID_NOTULEN
            ) ===
            String(
              previousMeeting
                .ID_NOTULEN
            );

          return {
            id:
              task.ID_TINDAK_LANJUT,
            title:
              task.URAIAN,
            pic:
              task.PIC,
            department:
              task.DEPARTEMEN,
            target:
              task.TARGET_SELESAI,
            progress:
              Number(
                task.PROGRESS ||
                0
              ),
            status:
              task.STATUS,
            decisionNumber:
              decision
                ? decision.NO_KEPUTUSAN
                : '',
            fromPreviousMeeting:
              Boolean(
                fromPrevious
              )
          };
        }
      )
      .sort(
        (
          a,
          b
        ) =>
          Number(
            b.fromPreviousMeeting
          ) -
            Number(
              a.fromPreviousMeeting
            ) ||
          String(
            a.target ||
            '9999-12-31'
          )
          .localeCompare(
            String(
              b.target ||
              '9999-12-31'
            )
          )
      );

  return {
    previousMeeting:
      previousMeeting
        ? {
            id:
              previousMeeting.ID_NOTULEN,
            title:
              previousMeeting.JUDUL,
            date:
              previousMeeting.TANGGAL
          }
        : null,
    items:
      result
  };
}


function applyCarryForwardV7(
  notulenId,
  taskIds
) {
  notulenId =
    String(
      notulenId ||
      ''
    );

  taskIds =
    Array.isArray(
      taskIds
    )
      ? taskIds
      : [];

  const meeting =
    findObjectById_(
      APP.SHEETS.NOTULEN,
      'ID_NOTULEN',
      notulenId
    );

  if (!meeting) {
    throw new Error(
      'Notulen tujuan tidak ditemukan.'
    );
  }

  const tasks =
    readSheet_(
      APP.SHEETS.TINDAK_LANJUT
    )
    .filter(
      item =>
        taskIds.includes(
          String(
            item.ID_TINDAK_LANJUT
          )
        )
    );

  let next =
    nextAgendaNumber_(
      notulenId
    );

  const created = [];

  tasks.forEach(
    task => {
      const result =
        saveEntityInternal_(
          'agenda',
          {
            ID_NOTULEN:
              notulenId,
            NO_URUT:
              next++,
            AGENDA:
              'Tindak lanjut: ' +
              task.URAIAN,
            PEMBAHASAN:
              'Dibawa dari keputusan/rapat sebelumnya untuk evaluasi kembali.',
            PIC:
              task.PIC,
            DEPARTEMEN:
              task.DEPARTEMEN,
            DEADLINE:
              task.TARGET_SELESAI,
            STATUS:
              'Belum Dimulai'
          }
        );

      created.push(
        result.id
      );
    }
  );

  audit_(
    'CARRY_FORWARD',
    'notulen',
    notulenId,
    String(
      created.length
    ) +
    ' tindak lanjut dimasukkan ke agenda rapat.'
  );

  return {
    success:
      true,
    created
  };
}


/* ---------- 3 + 8. DASHBOARD & FINANCIAL INTELLIGENCE ---------- */

function getDashboardIntelligenceV7(
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const today =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy-MM-dd'
    );

  const plus7 =
    Utilities.formatDate(
      new Date(
        Date.now() +
        7 *
        86400000
      ),
      APP.TZ,
      'yyyy-MM-dd'
    );

  const tasks =
    byYear_(
      readSheet_(
        APP.SHEETS.TINDAK_LANJUT
      ),
      year
    );

  const dueSoon =
    tasks
      .filter(
        item =>
          item.STATUS !==
            'Selesai' &&
          item.TARGET_SELESAI &&
          String(
            item.TARGET_SELESAI
          ) >=
            today &&
          String(
            item.TARGET_SELESAI
          ) <=
            plus7
      );

  const overdue =
    tasks
      .filter(
        item =>
          item.STATUS !==
            'Selesai' &&
          item.TARGET_SELESAI &&
          String(
            item.TARGET_SELESAI
          ) <
            today
      );

  const finance =
    getFinancialIntelligenceV7(
      year
    );

  const inventory =
    readSheet_(
      APP.SHEETS.INVENTARIS
    )
    .filter(
      item =>
        [
          'Perlu Perbaikan',
          'Rusak'
        ].includes(
          item.KONDISI
        )
    );

  const approvals =
    byYear_(
      readSheet_(
        APP.SHEETS.NOTULEN
      ),
      year
    )
    .filter(
      item =>
        item.STATUS ===
        'Menunggu Persetujuan'
    );

  const messages = [];

  if (
    dueSoon.length
  ) {
    messages.push({
      type:
        'dueSoon',
      severity:
        'info',
      count:
        dueSoon.length,
      title:
        dueSoon.length +
        ' keputusan perlu selesai minggu ini',
      page:
        'tindak_lanjut'
    });
  }

  if (
    overdue.length
  ) {
    messages.push({
      type:
        'overdue',
      severity:
        'danger',
      count:
        overdue.length,
      title:
        overdue.length +
        ' tindak lanjut melewati target',
      page:
        'tindak_lanjut'
    });
  }

  if (
    finance.nearBudget.length
  ) {
    messages.push({
      type:
        'nearBudget',
      severity:
        'warning',
      count:
        finance.nearBudget.length,
      title:
        finance.nearBudget.length +
        ' pos RAPBJ sudah ≥80%',
      page:
        'rapbj'
    });
  }

  if (
    finance.overBudget.length
  ) {
    messages.push({
      type:
        'overBudget',
      severity:
        'danger',
      count:
        finance.overBudget.length,
      title:
        finance.overBudget.length +
        ' pos RAPBJ melebihi anggaran',
      page:
        'rapbj'
    });
  }

  if (
    inventory.length
  ) {
    messages.push({
      type:
        'inventory',
      severity:
        'warning',
      count:
        inventory.length,
      title:
        inventory.length +
        ' inventaris perlu perhatian',
      page:
        'inventaris'
    });
  }

  if (
    approvals.length
  ) {
    messages.push({
      type:
        'approval',
      severity:
        'info',
      count:
        approvals.length,
      title:
        approvals.length +
        ' notulen menunggu persetujuan',
      page:
        'rapat'
    });
  }

  return {
    dueSoon,
    overdue,
    inventory,
    approvals,
    finance,
    messages
  };
}



function normalizeFinanceCategoryV702_(
  item
) {
  return (
    String(
      item.KATEGORI ||
      ''
    ) +
    ' ' +
    String(
      item.DESKRIPSI ||
      ''
    )
  )
  .toLowerCase()
  .replace(
    /\s+/g,
    ' '
  )
  .trim();
}


function isPerpuluhanV702_(
  item
) {
  const text =
    normalizeFinanceCategoryV702_(
      item
    );

  return (
    text.includes(
      'perpuluhan'
    ) ||
    text.includes(
      'persepuluhan'
    ) ||
    text.includes(
      'tithe'
    )
  );
}


function isPersembahanTerpaduV702_(
  item
) {
  const text =
    normalizeFinanceCategoryV702_(
      item
    );

  return (
    text.includes(
      'persembahan terpadu'
    ) ||
    text.includes(
      'persembahan terintegrasi'
    ) ||
    text.includes(
      'combined offering'
    )
  );
}


function financeMonthNumberV702_(
  year
) {
  const now =
    new Date();

  const currentYear =
    Number(
      Utilities.formatDate(
        now,
        APP.TZ,
        'yyyy'
      )
    );

  if (
    Number(
      year
    ) ===
    currentYear
  ) {
    return Number(
      Utilities.formatDate(
        now,
        APP.TZ,
        'M'
      )
    );
  }

  return 12;
}


function getFinanceMinistryMetricsV702(
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const month =
    financeMonthNumberV702_(
      year
    );

  const monthKey =
    String(
      year
    ) +
    '-' +
    String(
      month
    )
    .padStart(
      2,
      '0'
    );

  const finance =
    byYear_(
      readSheet_(
        APP.SHEETS.KEUANGAN
      ),
      year
    )
    .filter(
      item =>
        item.JENIS ===
        'Pemasukan'
    );

  const sum =
    rows =>
      rows.reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.NOMINAL ||
            0
          ),
        0
      );

  const perpuluhanAll =
    finance.filter(
      isPerpuluhanV702_
    );

  const terpaduAll =
    finance.filter(
      isPersembahanTerpaduV702_
    );

  const perpuluhanMonth =
    perpuluhanAll.filter(
      item =>
        String(
          item.TANGGAL ||
          ''
        )
        .startsWith(
          monthKey
        )
    );

  const terpaduMonth =
    terpaduAll.filter(
      item =>
        String(
          item.TANGGAL ||
          ''
        )
        .startsWith(
          monthKey
        )
    );

  const targetPerpuluhanMonthly =
    Number(
      getSettingSafe_(
        'TARGET_PERPULUHAN_BULANAN'
      ) ||
      0
    );

  const targetTerpaduMonthly =
    Number(
      getSettingSafe_(
        'TARGET_PERSEMBAHAN_TERPADU_BULANAN'
      ) ||
      0
    );

  const monthPercent =
    (
      actual,
      target
    ) =>
      target >
      0
        ? Math.round(
            actual /
            target *
            1000
          ) /
          10
        : 0;

  const cumulativeTargetPerpuluhan =
    targetPerpuluhanMonthly *
    month;

  const cumulativeTargetTerpadu =
    targetTerpaduMonthly *
    month;

  const perpuluhanMonthTotal =
    sum(
      perpuluhanMonth
    );

  const terpaduMonthTotal =
    sum(
      terpaduMonth
    );

  const perpuluhanCumulative =
    sum(
      perpuluhanAll
    );

  const terpaduCumulative =
    sum(
      terpaduAll
    );

  return {
    year:
      year,
    month:
      month,
    monthLabel:
      [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ][
        month -
        1
      ],

    perpuluhan: {
      month:
        perpuluhanMonthTotal,
      cumulative:
        perpuluhanCumulative,
      targetMonth:
        targetPerpuluhanMonthly,
      targetCumulative:
        cumulativeTargetPerpuluhan,
      percentMonth:
        monthPercent(
          perpuluhanMonthTotal,
          targetPerpuluhanMonthly
        ),
      percentCumulative:
        monthPercent(
          perpuluhanCumulative,
          cumulativeTargetPerpuluhan
        ),
      transactionsMonth:
        perpuluhanMonth.length,
      transactionsCumulative:
        perpuluhanAll.length
    },

    persembahanTerpadu: {
      month:
        terpaduMonthTotal,
      cumulative:
        terpaduCumulative,
      targetMonth:
        targetTerpaduMonthly,
      targetCumulative:
        cumulativeTargetTerpadu,
      percentMonth:
        monthPercent(
          terpaduMonthTotal,
          targetTerpaduMonthly
        ),
      percentCumulative:
        monthPercent(
          terpaduCumulative,
          cumulativeTargetTerpadu
        ),
      transactionsMonth:
        terpaduMonth.length,
      transactionsCumulative:
        terpaduAll.length
    },

    targetsConfigured:
      targetPerpuluhanMonthly >
        0 ||
      targetTerpaduMonthly >
        0
  };
}


function setFinanceMinistryTargetsV702(
  targets,
  token) {
  assertFeatureV84_(token,'finance');

  targets =
    targets ||
    {};

  const perpuluhan =
    Math.max(
      0,
      Number(
        targets.perpuluhan ||
        0
      )
    );

  const terpadu =
    Math.max(
      0,
      Number(
        targets.persembahanTerpadu ||
        0
      )
    );

  setSetting_(
    'TARGET_PERPULUHAN_BULANAN',
    String(
      perpuluhan
    )
  );

  setSetting_(
    'TARGET_PERSEMBAHAN_TERPADU_BULANAN',
    String(
      terpadu
    )
  );

  audit_(
    'UPDATE_FINANCE_TARGET',
    'setting',
    'TARGET_KEUANGAN',
    'Target bulanan Perpuluhan ' +
    formatRupiah_(
      perpuluhan
    ) +
    ' dan Persembahan Terpadu ' +
    formatRupiah_(
      terpadu
    )
  );

  return {
    success:
      true,
    perpuluhan:
      perpuluhan,
    persembahanTerpadu:
      terpadu
  };
}


function getFinanceRevisionDataV702(
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const rows =
    byYear_(
      readSheet_(
        APP.SHEETS.KEUANGAN
      ),
      year
    )
    .sort(
      sortDateDesc_
    );

  return {
    year:
      year,
    ministry:
      getFinanceMinistryMetricsV702(
        year
      ),
    income:
      rows.filter(
        item =>
          item.JENIS ===
          'Pemasukan'
      ),
    expense:
      rows.filter(
        item =>
          item.JENIS ===
          'Pengeluaran'
      )
  };
}


function getFinancialIntelligenceV7(
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const finance =
    byYear_(
      readSheet_(
        APP.SHEETS.KEUANGAN
      ),
      year
    );

  const rapbj =
    byYear_(
      readSheet_(
        APP.SHEETS.RAPBJ
      ),
      year
    );

  const realization = {};

  finance.forEach(
    item => {
      if (
        item.JENIS ===
          'Pengeluaran' &&
        item.ID_RAPBJ
      ) {
        const key =
          String(
            item.ID_RAPBJ
          );

        realization[
          key
        ] =
          (
            realization[
              key
            ] ||
            0
          ) +
          Number(
            item.NOMINAL ||
            0
          );
      }
    }
  );

  const positions =
    rapbj.map(
      item => {
        const budget =
          Number(
            item.ANGGARAN ||
            0
          );

        const realized =
          Number(
            realization[
              String(
                item.ID_RAPBJ
              )
            ] ||
            0
          );

        const percent =
          budget >
          0
            ? Math.round(
                (
                  realized /
                  budget
                ) *
                100
              )
            : 0;

        return {
          id:
            item.ID_RAPBJ,
          name:
            item.PROGRAM_ATAU_POS,
          department:
            item.DEPARTEMEN,
          source:
            item.SUMBER_DANA,
          budget,
          realized,
          remaining:
            budget -
            realized,
          percent
        };
      }
    );

  const months =
    Array.from(
      {
        length:
          12
      },
      (
        _,
        index
      ) => ({
        month:
          index +
          1,
        income:
          0,
        expense:
          0
      })
    );

  finance.forEach(
    item => {
      const match =
        String(
          item.TANGGAL ||
          ''
        )
        .match(
          /^\d{4}-(\d{2})/
        );

      if (!match) {
        return;
      }

      const index =
        Number(
          match[1]
        ) -
        1;

      if (
        index <
          0 ||
        index >
          11
      ) {
        return;
      }

      if (
        item.JENIS ===
        'Pemasukan'
      ) {
        months[
          index
        ].income +=
          Number(
            item.NOMINAL ||
            0
          );
      }
      else if (
        item.JENIS ===
        'Pengeluaran'
      ) {
        months[
          index
        ].expense +=
          Number(
            item.NOMINAL ||
            0
          );
      }
    }
  );

  return {
    positions,
    nearBudget:
      positions.filter(
        item =>
          item.percent >=
            80 &&
          item.percent <=
            100
      ),
    overBudget:
      positions.filter(
        item =>
          item.percent >
          100
      ),
    months
  };
}


/* ---------- 10. DOCUMENT PREVIEW ---------- */

function getFilePreviewInfoV7(
  fileId
) {
  fileId =
    String(
      fileId ||
      ''
    );

  if (!fileId) {
    throw new Error(
      'File ID kosong.'
    );
  }

  const file =
    DriveApp
      .getFileById(
        fileId
      );

  return {
    id:
      fileId,
    name:
      file.getName(),
    mimeType:
      file.getMimeType(),
    previewUrl:
      'https://drive.google.com/file/d/' +
      fileId +
      '/preview',
    openUrl:
      file.getUrl(),
    imageUrl:
      file
        .getMimeType()
        .startsWith(
          'image/'
        )
          ? (
              'https://drive.google.com/thumbnail?id=' +
              fileId +
              '&sz=w2000'
            )
          : ''
  };
}


/* ---------- 13. MEETING MODE ---------- */

function getMeetingModeDataV7(
  notulenId
) {
  const detail =
    getNotulenDetail(
      notulenId
    );

  return {
    detail,
    options:
      getFormOptions(
        Number(
          detail.TAHUN ||
          currentYear_()
        )
      ),
    carryForward:
      getSmartCarryForwardV7(
        Number(
          detail.TAHUN ||
          currentYear_()
        ),
        notulenId
      )
  };
}


/* ---------- 14. AUTOMATIC DOCUMENT NUMBER ---------- */

function generateDocumentNumberV7_(
  category,
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const codeMap = {
    'Surat Keputusan':
      [
        'SK',
        'DOC_PREFIX_SK'
      ],
    'Surat Masuk':
      [
        'SM',
        'DOC_PREFIX_SM'
      ],
    'Surat Keluar':
      [
        'SKEL',
        'DOC_PREFIX_SKEL'
      ],
    'Proposal':
      [
        'PROP',
        'DOC_PREFIX_PROP'
      ],
    'Laporan':
      [
        'LAP',
        'DOC_PREFIX_LAP'
      ],
    'Formulir':
      [
        'FORM',
        'DOC_PREFIX_FORM'
      ],
    'Dokumen Lain':
      [
        'DOC',
        'DOC_PREFIX_DOC'
      ]
  };

  const pair =
    codeMap[
      category
    ] ||
    codeMap[
      'Dokumen Lain'
    ];

  const prefix =
    getSettingSafe_(
      pair[1]
    ) ||
    (
      'MG/' +
      pair[0]
    );

  const rows =
    readSheet_(
      APP.SHEETS.DOKUMEN
    )
    .filter(
      item =>
        Number(
          item.TAHUN ||
          0
        ) ===
        year
    );

  let max =
    0;

  rows.forEach(
    item => {
      const number =
        String(
          item.NOMOR_DOKUMEN ||
          ''
        );

      if (
        !number.startsWith(
          prefix +
          '/' +
          year +
          '/'
        )
      ) {
        return;
      }

      const match =
        number.match(
          /\/(\d+)$/
        );

      if (
        match
      ) {
        max =
          Math.max(
            max,
            Number(
              match[1]
            )
          );
      }
    }
  );

  return (
    prefix +
    '/' +
    year +
    '/' +
    String(
      max +
      1
    )
    .padStart(
      3,
      '0'
    )
  );
}


function getNextDocumentNumberV7(
  category,
  year
) {
  return {
    number:
      generateDocumentNumberV7_(
        category,
        year
      )
  };
}


/* ---------- 15. SYSTEM STATUS / BACKUP HEALTH ---------- */

function getSystemHealthV7() {
  const started =
    Date.now();

  const status =
    getBackendStatus();

  let driveOk =
    false;

  let driveFolder =
    '';

  try {
    const folder =
      getOrCreateFolder_(
        getSettingSafe_(
          'DOCUMENT_FOLDER_NAME'
        ) ||
        'MAJELIS GALILEA - DOKUMEN'
      );

    driveOk =
      Boolean(
        folder
      );

    driveFolder =
      folder.getName();
  }
  catch (error) {
    driveOk =
      false;
  }

  const logs =
    readSheet_(
      APP.SHEETS.LOG
    );

  const backup =
    [...logs]
      .reverse()
      .find(
        item =>
          item.ACTION ===
          'ARCHIVE_YEAR'
      ) ||
    null;

  let backupAgeDays =
    null;

  if (
    backup &&
    backup.TIMESTAMP
  ) {
    const date =
      new Date(
        backup.TIMESTAMP
      );

    if (
      !isNaN(
        date.getTime()
      )
    ) {
      backupAgeDays =
        Math.floor(
          (
            Date.now() -
            date.getTime()
          ) /
          86400000
        );
    }
  }

  const warningDays =
    Number(
      getSettingSafe_(
        'BACKUP_WARNING_DAYS'
      ) ||
      45
    );

  return {
    ok:
      Boolean(
        status.ok &&
        driveOk
      ),
    version:
      APP.VERSION,
    spreadsheet: {
      ok:
        Boolean(
          status.ok
        ),
      name:
        status.spreadsheet ||
        '',
      missingSheets:
        status.missingSheets ||
        [],
      schemaIssues:
        status.schemaIssues ||
        []
    },
    drive: {
      ok:
        driveOk,
      folder:
        driveFolder
    },
    pdf: {
      ok:
        true,
      note:
        'PDF engine diuji penuh melalui runBackendDiagnostics().'
    },
    backup: {
      last:
        backup
          ? backup.TIMESTAMP
          : '',
      ageDays:
        backupAgeDays,
      warningDays,
      healthy:
        backupAgeDays !==
          null &&
        backupAgeDays <=
          warningDays
    },
    durationMs:
      Date.now() -
      started
  };
}


/* ---------- V7 FEATURE SELF TEST ---------- */

function testPayloadScopeV701() {
  const tests = [
    [
      'keuangan',
      {
        TANGGAL:
          '2026-08-27',
        NOMINAL:
          1000
      }
    ],
    [
      'rapbj',
      {
        TAHUN:
          2026,
        ANGGARAN:
          1000
      }
    ],
    [
      'program',
      {
        TAHUN:
          2026,
        ANGGARAN:
          1000,
        REALISASI:
          0
      }
    ],
    [
      'inventaris',
      {
        JUMLAH:
          1,
        NILAI:
          1000
      }
    ],
    [
      'pengurus',
      {
        URUTAN:
          1
      }
    ],
    [
      'departemen',
      {
        URUTAN:
          1
      }
    ]
  ];

  const results = [];

  tests.forEach(
    pair => {
      const entity =
        pair[0];

      const payload =
        JSON.parse(
          JSON.stringify(
            pair[1]
          )
        );

      processEntityPayload_(
        entity,
        payload,
        'SCOPE-TEST'
      );

      results.push({
        entity:
          entity,
        ok:
          true
      });
    }
  );

  console.log(
    JSON.stringify(
      {
        success:
          true,
        version:
          APP.VERSION,
        tests:
          results
      },
      null,
      2
    )
  );

  return {
    success:
      true,
    version:
      APP.VERSION,
    tests:
      results
  };
}


function runFeatureSelfTestV7() {
  setupDatabase();

  const year =
    currentYear_();

  const payloadScope =
    testPayloadScopeV701();

  const result = {
    version:
      APP.VERSION,

    payloadScope:
      Boolean(
        payloadScope &&
        payloadScope.success
      ),
    search:
      null,
    finance:
      null,
    health:
      null,
    draft:
      null,
    documentNumber:
      null,
    relationship:
      null,
    success:
      false
  };

  const search =
    globalSearchV7(
      'majelis',
      year,
      5
    );

  result.search =
    Array.isArray(
      search
    );

  const finance =
    getFinancialIntelligenceV7(
      year
    );

  result.finance =
    Boolean(
      finance &&
      Array.isArray(
        finance.positions
      ) &&
      Array.isArray(
        finance.months
      )
    );

  const health =
    getSystemHealthV7();

  result.health =
    Boolean(
      health &&
      health.spreadsheet &&
      health.drive
    );

  const draftRef =
    'SELFTEST-V7-' +
    Utilities.getUuid();

  saveDraftV7({
    entity:
      'notulen',
    referenceId:
      draftRef,
    year,
    title:
      'Self Test',
    data: {
      JUDUL:
        'Self Test Draft'
    }
  });

  const draft =
    getDraftV7(
      'notulen',
      draftRef,
      year
    );

  const removed =
    deleteDraftV7(
      'notulen',
      draftRef,
      year
    );

  result.draft =
    Boolean(
      draft &&
      draft.data &&
      draft.data.JUDUL ===
        'Self Test Draft' &&
      removed.removed ===
        1
    );

  const docNumber =
    generateDocumentNumberV7_(
      'Laporan',
      year
    );

  result.documentNumber =
    /^MG\/LAP\/\d{4}\/\d{3}$/
      .test(
        docNumber
      );

  const meeting =
    byYear_(
      readSheet_(
        APP.SHEETS.NOTULEN
      ),
      year
    )[0];

  if (
    meeting
  ) {
    const graph =
      getRelationshipGraphV7(
        'notulen',
        meeting.ID_NOTULEN
      );

    result.relationship =
      Boolean(
        graph &&
        Array.isArray(
          graph.nodes
        ) &&
        Array.isArray(
          graph.timeline
        )
      );
  }
  else {
    result.relationship =
      true;
  }

  result.success =
    Object.keys(
      result
    )
    .filter(
      key =>
        ![
          'version',
          'success'
        ].includes(
          key
        )
    )
    .every(
      key =>
        Boolean(
          result[
            key
          ]
        )
    );

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (
    !result.success
  ) {
    throw new Error(
      'Feature Self Test V7 gagal.'
    );
  }

  return result;
}




/* =========================================================
   MAJELIS GALILEA V8 — FINANCE & ADMINISTRATION SUITE
========================================================= */

function financePeriodKeyV8_(
  year,
  month
) {
  return (
    String(
      Number(
        year
      )
    ) +
    '-' +
    String(
      Number(
        month
      )
    )
    .padStart(
      2,
      '0'
    )
  );
}


function financeDatePartsV8_(
  dateValue
) {
  const text =
    String(
      dateValue ||
      ''
    )
    .slice(
      0,
      10
    );

  const match =
    text.match(
      /^(\d{4})-(\d{2})/
    );

  if (
    !match
  ) {
    throw new Error(
      'Tanggal transaksi tidak valid.'
    );
  }

  return {
    year:
      Number(
        match[1]
      ),
    month:
      Number(
        match[2]
      )
  };
}


function financeMonthLabelV8_(
  month
) {
  return [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ][
    Number(
      month
    ) -
    1
  ] ||
  '-';
}


/* ---------- 7. NOMOR TRANSAKSI OTOMATIS ---------- */

function generateTransactionNumberV8_(
  dateValue
) {
  const part =
    financeDatePartsV8_(
      dateValue
    );

  const prefix =
    'TRX/' +
    part.year +
    '/' +
    String(
      part.month
    )
    .padStart(
      2,
      '0'
    ) +
    '/';

  let max =
    0;

  readSheet_(
    APP.SHEETS.KEUANGAN
  )
  .forEach(
    item => {
      const number =
        String(
          item.NO_TRANSAKSI ||
          ''
        );

      if (
        !number.startsWith(
          prefix
        )
      ) {
        return;
      }

      const match =
        number.match(
          /\/(\d+)$/
        );

      if (
        match
      ) {
        max =
          Math.max(
            max,
            Number(
              match[1]
            )
          );
      }
    }
  );

  return (
    prefix +
    String(
      max +
      1
    )
    .padStart(
      3,
      '0'
    )
  );
}


function backfillFinanceTransactionNumbersV8_() {
  const sheet =
    getSheet_(
      APP.SHEETS.KEUANGAN
    );

  if (
    sheet.getLastRow() <
    2
  ) {
    return {
      filled:
        0
    };
  }

  const headers =
    getHeaders_(
      sheet
    );

  const idCol =
    headers.indexOf(
      'NO_TRANSAKSI'
    );

  const dateCol =
    headers.indexOf(
      'TANGGAL'
    );

  if (
    idCol <
      0 ||
    dateCol <
      0
  ) {
    return {
      filled:
        0
    };
  }

  const values =
    sheet
      .getRange(
        2,
        1,
        sheet.getLastRow() -
        1,
        headers.length
      )
      .getValues();

  let filled =
    0;

  values.forEach(
    (
      row,
      index
    ) => {
      if (
        row[
          idCol
        ]
      ) {
        return;
      }

      const rawDate =
        row[
          dateCol
        ];

      let dateValue =
        '';

      if (
        rawDate instanceof
        Date &&
        !isNaN(
          rawDate.getTime()
        )
      ) {
        dateValue =
          Utilities.formatDate(
            rawDate,
            APP.TZ,
            'yyyy-MM-dd'
          );
      }
      else if (
        rawDate
      ) {
        const text =
          String(
            rawDate
          )
          .trim();

        const iso =
          text.match(
            /^(\d{4})-(\d{2})-(\d{2})/
          );

        if (
          iso
        ) {
          dateValue =
            iso[1] +
            '-' +
            iso[2] +
            '-' +
            iso[3];
        }
        else {
          const parsed =
            new Date(
              text
            );

          if (
            !isNaN(
              parsed.getTime()
            )
          ) {
            dateValue =
              Utilities.formatDate(
                parsed,
                APP.TZ,
                'yyyy-MM-dd'
              );
          }
        }
      }

      if (
        !dateValue
      ) {
        return;
      }

      const number =
        generateTransactionNumberV8_(
          dateValue
        );

      sheet
        .getRange(
          index +
          2,
          idCol +
          1
        )
        .setValue(
          number
        );

      filled++;
    }
  );

  return {
    filled
  };
}


/* ---------- 6. RIWAYAT PERUBAHAN TRANSAKSI ---------- */

function financeComparableV8_(
  value
) {
  if (
    value instanceof
    Date
  ) {
    return Utilities.formatDate(
      value,
      APP.TZ,
      "yyyy-MM-dd'T'HH:mm:ss"
    );
  }

  if (
    value ===
      null ||
    value ===
      undefined
  ) {
    return '';
  }

  return String(
    value
  );
}


function recordFinanceTransactionAuditV8_(
  id,
  action,
  oldObject,
  newObject
) {
  const ignored =
    new Set([
      'CREATED_AT',
      'UPDATED_AT'
    ]);

  const fields =
    new Set([
      ...Object.keys(
        oldObject ||
        {}
      ),
      ...Object.keys(
        newObject ||
        {}
      )
    ]);

  const changes = [];

  fields.forEach(
    field => {
      if (
        ignored.has(
          field
        )
      ) {
        return;
      }

      const oldValue =
        financeComparableV8_(
          oldObject
            ? oldObject[
                field
              ]
            : ''
        );

      const newValue =
        financeComparableV8_(
          newObject
            ? newObject[
                field
              ]
            : ''
        );

      if (
        oldValue !==
        newValue
      ) {
        changes.push({
          field,
          oldValue,
          newValue
        });
      }
    }
  );

  const snapshot =
    newObject ||
    oldObject ||
    {};

  getSheet_(
    APP.SHEETS.FINANCE_AUDIT
  )
  .appendRow([
    new Date(),
    userLabel_(),
    id,
    snapshot.NO_TRANSAKSI ||
      (
        oldObject
          ? oldObject.NO_TRANSAKSI
          : ''
      ) ||
      '',
    action,
    JSON.stringify(
      changes
    ),
    JSON.stringify(
      snapshot
    )
  ]);
}


function getFinanceTransactionHistoryV8(
  id
) {
  return readSheet_(
    APP.SHEETS.FINANCE_AUDIT
  )
  .filter(
    item =>
      String(
        item.ID_TRANSAKSI
      ) ===
      String(
        id
      )
  )
  .sort(
    (
      a,
      b
    ) =>
      String(
        b.TIMESTAMP ||
        ''
      )
      .localeCompare(
        String(
          a.TIMESTAMP ||
          ''
        )
      )
  )
  .map(
    item => {
      let changes = [];

      try {
        changes =
          JSON.parse(
            item.CHANGES_JSON ||
            '[]'
          );
      }
      catch (error) {
        changes = [];
      }

      return {
        timestamp:
          item.TIMESTAMP,
        user:
          item.USER,
        action:
          item.ACTION,
        number:
          item.NO_TRANSAKSI,
        changes
      };
    }
  );
}


/* ---------- 10 + 12. CLOSING & VERIFICATION ---------- */

function getFinancePeriodV8(
  year,
  month
) {
  year =
    Number(
      year
    );

  month =
    Number(
      month
    );

  const current =
    readSheet_(
      APP.SHEETS.FINANCE_PERIODS
    )
    .find(
      item =>
        Number(
          item.TAHUN
        ) ===
          year &&
        Number(
          item.BULAN
        ) ===
          month
    );

  return current || {
    ID_PERIODE:
      'FP-' +
      financePeriodKeyV8_(
        year,
        month
      ),
    TAHUN:
      year,
    BULAN:
      month,
    STATUS:
      'Draft',
    CATATAN_BENDAHARA:
      '',
    VERIFIED_BY:
      '',
    VERIFIED_AT:
      '',
    FINALIZED_BY:
      '',
    FINALIZED_AT:
      '',
    IS_CLOSED:
      false,
    CLOSED_BY:
      '',
    CLOSED_AT:
      '',
    REOPEN_NOTE:
      ''
  };
}


function saveFinancePeriodRecordV8_(
  data
) {
  const sheet =
    getSheet_(
      APP.SHEETS.FINANCE_PERIODS
    );

  const headers =
    getHeaders_(
      sheet
    );

  const existing =
    readSheet_(
      APP.SHEETS.FINANCE_PERIODS
    )
    .find(
      item =>
        Number(
          item.TAHUN
        ) ===
          Number(
            data.TAHUN
          ) &&
        Number(
          item.BULAN
        ) ===
          Number(
            data.BULAN
          )
    );

  const id =
    existing
      ? existing.ID_PERIODE
      : (
          'FP-' +
          financePeriodKeyV8_(
            data.TAHUN,
            data.BULAN
          )
        );

  data.ID_PERIODE =
    id;

  data.UPDATED_AT =
    new Date();

  const values =
    headers.map(
      header =>
        data[
          header
        ] !==
          undefined
          ? data[
              header
            ]
          : (
              existing
                ? existing[
                    header
                  ]
                : ''
            )
    );

  if (
    existing
  ) {
    const row =
      findRowById_(
        sheet,
        'ID_PERIODE',
        id
      );

    sheet
      .getRange(
        row,
        1,
        1,
        values.length
      )
      .setValues([
        values
      ]);
  }
  else {
    sheet.appendRow(
      values
    );
  }

  return getFinancePeriodV8(
    data.TAHUN,
    data.BULAN
  );
}


function setFinanceReportStatusV8(
  year,
  month,
  status,
  note,
  token) {
  assertFeatureV84_(token,'finance');

  const allowed = [
    'Draft',
    'Diverifikasi',
    'Final'
  ];

  if (
    !allowed.includes(
      status
    )
  ) {
    throw new Error(
      'Status laporan tidak valid.'
    );
  }

  const current =
    getFinancePeriodV8(
      year,
      month
    );

  const next = {
    ...current,
    TAHUN:
      Number(
        year
      ),
    BULAN:
      Number(
        month
      ),
    STATUS:
      status,
    CATATAN_BENDAHARA:
      String(
        note ||
        current.CATATAN_BENDAHARA ||
        ''
      )
  };

  if (
    status ===
    'Diverifikasi'
  ) {
    next.VERIFIED_BY =
      userLabel_();

    next.VERIFIED_AT =
      new Date();
  }

  if (
    status ===
    'Final'
  ) {
    next.FINALIZED_BY =
      userLabel_();

    next.FINALIZED_AT =
      new Date();
  }

  const saved =
    saveFinancePeriodRecordV8_(
      next
    );

  audit_(
    'FINANCE_REPORT_STATUS',
    'keuangan_periode',
    saved.ID_PERIODE,
    'Status laporan ' +
    financeMonthLabelV8_(
      month
    ) +
    ' ' +
    year +
    ' → ' +
    status
  );

  return {
    success:
      true,
    period:
      saved
  };
}


function closeFinancePeriodV8(
  year,
  month,
  note,
  token) {
  assertFeatureV84_(token,'finance');

  const current =
    getFinancePeriodV8(
      year,
      month
    );

  if (
    current.STATUS !==
    'Final'
  ) {
    throw new Error(
      'Laporan harus berstatus Final sebelum bulan ditutup.'
    );
  }

  const saved =
    saveFinancePeriodRecordV8_({
      ...current,
      TAHUN:
        Number(
          year
        ),
      BULAN:
        Number(
          month
        ),
      IS_CLOSED:
        true,
      CLOSED_BY:
        userLabel_(),
      CLOSED_AT:
        new Date(),
      CATATAN_BENDAHARA:
        String(
          note ||
          current.CATATAN_BENDAHARA ||
          ''
        )
    });

  audit_(
    'CLOSE_FINANCE_PERIOD',
    'keuangan_periode',
    saved.ID_PERIODE,
    'Menutup periode ' +
    financeMonthLabelV8_(
      month
    ) +
    ' ' +
    year
  );

  return {
    success:
      true,
    period:
      saved
  };
}


function reopenFinancePeriodV8(
  year,
  month,
  note,
  token) {
  assertFeatureV84_(token,'finance');

  note =
    String(
      note ||
      ''
    )
    .trim();

  if (
    !note
  ) {
    throw new Error(
      'Alasan membuka kembali periode wajib diisi.'
    );
  }

  const current =
    getFinancePeriodV8(
      year,
      month
    );

  const saved =
    saveFinancePeriodRecordV8_({
      ...current,
      IS_CLOSED:
        false,
      STATUS:
        'Draft',
      REOPEN_NOTE:
        note
    });

  audit_(
    'REOPEN_FINANCE_PERIOD',
    'keuangan_periode',
    saved.ID_PERIODE,
    note
  );

  return {
    success:
      true,
    period:
      saved
  };
}


function assertFinancePeriodWritableV8_(
  dateValue
) {
  const part =
    financeDatePartsV8_(
      dateValue
    );

  const period =
    getFinancePeriodV8(
      part.year,
      part.month
    );

  if (
    String(
      period.IS_CLOSED
    ).toLowerCase() ===
    'true'
  ) {
    throw new Error(
      'Periode ' +
      financeMonthLabelV8_(
        part.month
      ) +
      ' ' +
      part.year +
      ' sudah ditutup. Buka kembali periode sebelum mengubah transaksi.'
    );
  }

  return true;
}


/* ---------- 9 + 11. FUND LEDGER & RECONCILIATION ---------- */

function getFundLedgerV8(
  source,
  year,
  month
) {
  source =
    String(
      source ||
      ''
    );

  year =
    Number(
      year
    );

  month =
    Number(
      month
    );

  const start =
    financePeriodKeyV8_(
      year,
      month
    ) +
    '-01';

  const nextDate =
    new Date(
      year,
      month,
      1
    );

  const next =
    Utilities.formatDate(
      nextDate,
      APP.TZ,
      'yyyy-MM-dd'
    );

  const rows =
    readSheet_(
      APP.SHEETS.KEUANGAN
    )
    .filter(
      item =>
        item.SUMBER_DANA ===
        source
    );

  const signed =
    item =>
      item.JENIS ===
        'Pengeluaran'
        ? -Number(
            item.NOMINAL ||
            0
          )
        : Number(
            item.NOMINAL ||
            0
          );

  const opening =
    rows
      .filter(
        item =>
          item.TANGGAL &&
          String(
            item.TANGGAL
          ) <
          start
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          signed(
            item
          ),
        0
      );

  const periodRows =
    rows
      .filter(
        item =>
          item.TANGGAL &&
          String(
            item.TANGGAL
          ) >=
            start &&
          String(
            item.TANGGAL
          ) <
            next
      )
      .sort(
        sortDateAscBy_(
          'TANGGAL'
        )
      );

  const income =
    periodRows
      .filter(
        item =>
          item.JENIS ===
          'Pemasukan'
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.NOMINAL ||
            0
          ),
        0
      );

  const expense =
    periodRows
      .filter(
        item =>
          item.JENIS ===
          'Pengeluaran'
      )
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(
            item.NOMINAL ||
            0
          ),
        0
      );

  return {
    source,
    year,
    month,
    opening,
    income,
    expense,
    closing:
      opening +
      income -
      expense,
    rows:
      periodRows
  };
}


function getFinanceReconciliationsV8(
  year,
  month
) {
  year =
    Number(
      year
    );

  month =
    Number(
      month
    );

  const stored =
    readSheet_(
      APP.SHEETS.FINANCE_RECON
    )
    .filter(
      item =>
        Number(
          item.TAHUN
        ) ===
          year &&
        Number(
          item.BULAN
        ) ===
          month
    );

  return APP.SOURCES.map(
    source => {
      const ledger =
        getFundLedgerV8(
          source,
          year,
          month
        );

      const current =
        stored.find(
          item =>
            item.SUMBER_DANA ===
            source
        );

      const actual =
        current
          ? Number(
              current.SALDO_AKTUAL ||
              0
            )
          : null;

      const difference =
        actual ===
          null
          ? null
          : (
              actual -
              ledger.closing
            );

      return {
        source,
        system:
          ledger.closing,
        actual,
        difference,
        status:
          difference ===
            null
            ? 'Belum Rekonsiliasi'
            : (
                Math.abs(
                  difference
                ) <
                0.5
                  ? 'Sesuai'
                  : 'Selisih'
              ),
        note:
          current
            ? current.CATATAN ||
              ''
            : ''
      };
    }
  );
}


function saveFinanceReconciliationV8(
  payload,
  token) {
  assertFeatureV84_(token,'finance');

  payload =
    payload ||
    {};

  const year =
    Number(
      payload.year
    );

  const month =
    Number(
      payload.month
    );

  const source =
    String(
      payload.source ||
      ''
    );

  if (
    !APP.SOURCES.includes(
      source
    )
  ) {
    throw new Error(
      'Sumber dana tidak valid.'
    );
  }

  const ledger =
    getFundLedgerV8(
      source,
      year,
      month
    );

  const actual =
    Number(
      payload.actual ||
      0
    );

  const difference =
    actual -
    ledger.closing;

  const sheet =
    getSheet_(
      APP.SHEETS.FINANCE_RECON
    );

  const existing =
    readSheet_(
      APP.SHEETS.FINANCE_RECON
    )
    .find(
      item =>
        Number(
          item.TAHUN
        ) ===
          year &&
        Number(
          item.BULAN
        ) ===
          month &&
        item.SUMBER_DANA ===
          source
    );

  const id =
    existing
      ? existing.ID_REKON
      : (
          'RKN-' +
          financePeriodKeyV8_(
            year,
            month
          ) +
          '-' +
          source
            .replace(
              /\s+/g,
              '-'
            )
            .toUpperCase()
        );

  const values = [
    id,
    year,
    month,
    source,
    ledger.closing,
    actual,
    difference,
    String(
      payload.note ||
      ''
    ),
    Math.abs(
      difference
    ) <
      0.5
      ? 'Sesuai'
      : 'Selisih',
    userLabel_(),
    new Date()
  ];

  if (
    existing
  ) {
    const row =
      findRowById_(
        sheet,
        'ID_REKON',
        id
      );

    sheet
      .getRange(
        row,
        1,
        1,
        values.length
      )
      .setValues([
        values
      ]);
  }
  else {
    sheet.appendRow(
      values
    );
  }

  audit_(
    'RECONCILE_FINANCE',
    'keuangan_rekonsiliasi',
    id,
    source +
    ' selisih ' +
    formatRupiah_(
      difference
    )
  );

  return {
    success:
      true,
    reconciliation:
      getFinanceReconciliationsV8(
        year,
        month
      )
  };
}


/* ---------- 1 + 2 + 4 + 5. COMMAND CENTER ---------- */

function targetAchievementStatusV8_(
  percent,
  target
) {
  if (
    Number(
      target ||
      0
    ) <=
    0
  ) {
    return {
      code:
        'unset',
      label:
        'Target belum diatur'
    };
  }

  if (
    percent <
    80
  ) {
    return {
      code:
        'low',
      label:
        'Belum tercapai'
    };
  }

  if (
    percent <
    100
  ) {
    return {
      code:
        'near',
      label:
        'Hampir tercapai'
    };
  }

  if (
    percent <=
    110
  ) {
    return {
      code:
        'met',
      label:
        'Tercapai'
    };
  }

  return {
    code:
      'over',
    label:
      'Melebihi target'
  };
}


function percentChangeV8_(
  current,
  previous
) {
  current =
    Number(
      current ||
      0
    );

  previous =
    Number(
      previous ||
      0
    );

  if (
    previous ===
    0
  ) {
    return current ===
      0
      ? 0
      : 100;
  }

  return Math.round(
    (
      (
        current -
        previous
      ) /
      Math.abs(
        previous
      )
    ) *
    1000
  ) /
  10;
}


function getFinanceCommandCenterV8(
  year,
  filters
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  filters =
    filters ||
    {};

  const month =
    Math.min(
      12,
      Math.max(
        1,
        Number(
          filters.month ||
          financeMonthNumberV702_(
            year
          )
        )
      )
    );

  const budgetsById = {};

  byYear_(
    readSheet_(
      APP.SHEETS.RAPBJ
    ),
    year
  )
  .forEach(
    item => {
      budgetsById[
        String(
          item.ID_RAPBJ
        )
      ] =
        item;
    }
  );

  const all =
    byYear_(
      readSheet_(
        APP.SHEETS.KEUANGAN
      ),
      year
    )
    .map(
      item => {
        const budget =
          item.ID_RAPBJ
            ? budgetsById[
                String(
                  item.ID_RAPBJ
                )
              ]
            : null;

        return {
          ...item,
          DEPARTEMEN:
            item.DEPARTEMEN ||
            (
              budget
                ? budget.DEPARTEMEN ||
                  ''
                : ''
            )
        };
      }
    )
    .sort(
      sortDateDesc_
    );

  const attachments =
    readSheet_(
      APP.SHEETS.ATTACHMENTS
    )
    .filter(
      item =>
        item.ENTITY_TYPE ===
        'keuangan'
    );

  const evidenceMap = {};

  attachments.forEach(
    item => {
      const key =
        String(
          item.ENTITY_ID
        );

      if (
        !evidenceMap[
          key
        ]
      ) {
        evidenceMap[
          key
        ] = [];
      }

      evidenceMap[
        key
      ].push(
        item
      );
    }
  );

  const monthly =
    Array.from(
      {
        length:
          12
      },
      (
        _,
        index
      ) => ({
        month:
          index +
          1,
        label:
          financeMonthLabelV8_(
            index +
            1
          ),
        income:
          0,
        expense:
          0,
        balance:
          0
      })
    );

  all.forEach(
    item => {
      const part =
        String(
          item.TANGGAL ||
          ''
        )
        .match(
          /^\d{4}-(\d{2})/
        );

      if (
        !part
      ) {
        return;
      }

      const idx =
        Number(
          part[1]
        ) -
        1;

      if (
        idx <
          0 ||
        idx >
          11
      ) {
        return;
      }

      if (
        item.JENIS ===
        'Pemasukan'
      ) {
        monthly[
          idx
        ].income +=
          Number(
            item.NOMINAL ||
            0
          );
      }
      else {
        monthly[
          idx
        ].expense +=
          Number(
            item.NOMINAL ||
            0
          );
      }

      monthly[
        idx
      ].balance =
        monthly[
          idx
        ].income -
        monthly[
          idx
        ].expense;
    }
  );

  const current =
    monthly[
      month -
      1
    ];

  const previous =
    month >
      1
      ? monthly[
          month -
          2
        ]
      : {
          income:
            0,
          expense:
            0,
          balance:
            0
        };

  const positiveIncome =
    monthly.filter(
      item =>
        item.income >
        0
    );

  const highestIncome =
    positiveIncome.length
      ? positiveIncome.reduce(
          (
            best,
            item
          ) =>
            item.income >
            best.income
              ? item
              : best
        )
      : null;

  const lowestIncome =
    positiveIncome.length
      ? positiveIncome.reduce(
          (
            best,
            item
          ) =>
            item.income <
            best.income
              ? item
              : best
        )
      : null;

  const highestExpense =
    monthly.reduce(
      (
        best,
        item
      ) =>
        item.expense >
        best.expense
          ? item
          : best,
      monthly[0]
    );

  let filtered =
    all.filter(
      item =>
        String(
          item.TANGGAL ||
          ''
        )
        .startsWith(
          year +
          '-' +
          String(
            month
          )
          .padStart(
            2,
            '0'
          )
        )
    );

  if (
    filters.type
  ) {
    filtered =
      filtered.filter(
        item =>
          item.JENIS ===
          filters.type
      );
  }

  if (
    filters.source
  ) {
    filtered =
      filtered.filter(
        item =>
          item.SUMBER_DANA ===
          filters.source
      );
  }

  if (
    filters.department
  ) {
    filtered =
      filtered.filter(
        item =>
          item.DEPARTEMEN ===
          filters.department
      );
  }

  if (
    filters.rapbj
  ) {
    filtered =
      filtered.filter(
        item =>
          String(
            item.ID_RAPBJ
          ) ===
          String(
            filters.rapbj
          )
      );
  }

  if (
    filters.category
  ) {
    const needle =
      String(
        filters.category
      )
      .toLowerCase();

    filtered =
      filtered.filter(
        item =>
          String(
            item.KATEGORI ||
            ''
          )
          .toLowerCase()
          .includes(
            needle
          )
      );
  }

  filtered =
    filtered.map(
      item => ({
        ...item,
        EVIDENCE:
          evidenceMap[
            String(
              item.ID_TRANSAKSI
            )
          ] ||
          []
      })
    );

  const ministry =
    getFinanceMinistryMetricsV702(
      year
    );

  const ministryMonthly =
    getMinistryMonthlyComparisonV8_(
      year
    );

  const monthPerpuluhan =
    ministryMonthly.perpuluhan[
      month -
      1
    ];

  const monthTerpadu =
    ministryMonthly.persembahanTerpadu[
      month -
      1
    ];

  monthPerpuluhan.status =
    targetAchievementStatusV8_(
      monthPerpuluhan.percent,
      monthPerpuluhan.target
    );

  monthTerpadu.status =
    targetAchievementStatusV8_(
      monthTerpadu.percent,
      monthTerpadu.target
    );

  const period =
    getFinancePeriodV8(
      year,
      month
    );

  const reconciliation =
    getFinanceReconciliationsV8(
      year,
      month
    );

  const fundLedgers =
    APP.SOURCES.map(
      source =>
        getFundLedgerV8(
          source,
          year,
          month
        )
    );

  return {
    year,
    month,
    monthLabel:
      financeMonthLabelV8_(
        month
      ),
    monthly,
    trend: {
      current,
      previous,
      incomeChange:
        percentChangeV8_(
          current.income,
          previous.income
        ),
      expenseChange:
        percentChangeV8_(
          current.expense,
          previous.expense
        ),
      highestIncome,
      lowestIncome,
      highestExpense
    },
    filters: {
      sources:
        [...APP.SOURCES],
      departments:
        Array.from(
          new Set(
            all
              .map(
                item =>
                  item.DEPARTEMEN
              )
              .filter(Boolean)
          )
        )
        .sort(),
      categories:
        Array.from(
          new Set(
            all
              .map(
                item =>
                  item.KATEGORI
              )
              .filter(Boolean)
          )
        )
        .sort(),
      rapbj:
        byYear_(
          readSheet_(
            APP.SHEETS.RAPBJ
          ),
          year
        )
        .map(
          item => ({
            id:
              item.ID_RAPBJ,
            label:
              item.PROGRAM_ATAU_POS
          })
        )
    },
    transactions:
      filtered,
    ministry,
    ministryMonthly,
    selectedMinistry: {
      perpuluhan:
        monthPerpuluhan,
      persembahanTerpadu:
        monthTerpadu
    },
    period,
    reconciliation,
    fundLedgers
  };
}


function getMinistryMonthlyComparisonV8_(
  year
) {
  year =
    Number(
      year
    );

  const finance =
    byYear_(
      readSheet_(
        APP.SHEETS.KEUANGAN
      ),
      year
    )
    .filter(
      item =>
        item.JENIS ===
        'Pemasukan'
    );

  const targetPerpuluhan =
    Number(
      getSettingSafe_(
        'TARGET_PERPULUHAN_BULANAN'
      ) ||
      0
    );

  const targetTerpadu =
    Number(
      getSettingSafe_(
        'TARGET_PERSEMBAHAN_TERPADU_BULANAN'
      ) ||
      0
    );

  const build =
    (
      predicate,
      target
    ) =>
      Array.from(
        {
          length:
            12
        },
        (
          _,
          index
        ) => {
          const month =
            index +
            1;

          const key =
            year +
            '-' +
            String(
              month
            )
            .padStart(
              2,
              '0'
            );

          const actual =
            finance
              .filter(
                item =>
                  predicate(
                    item
                  ) &&
                  String(
                    item.TANGGAL ||
                    ''
                  )
                  .startsWith(
                    key
                  )
              )
              .reduce(
                (
                  total,
                  item
                ) =>
                  total +
                  Number(
                    item.NOMINAL ||
                    0
                  ),
                0
              );

          const percent =
            target >
              0
              ? Math.round(
                  actual /
                  target *
                  1000
                ) /
                10
              : 0;

          return {
            month,
            label:
              financeMonthLabelV8_(
                month
              ),
            actual,
            target,
            percent,
            status:
              targetAchievementStatusV8_(
                percent,
                target
              )
          };
        }
      );

  return {
    perpuluhan:
      build(
        isPerpuluhanV702_,
        targetPerpuluhan
      ),
    persembahanTerpadu:
      build(
        isPersembahanTerpaduV702_,
        targetTerpadu
      )
  };
}


/* ---------- 3 + 13. LAPORAN BULANAN RESMI ---------- */

function financeReportNumberV8_(
  year,
  month
) {
  const prefix =
    getSettingSafe_(
      'FINANCE_REPORT_PREFIX'
    ) ||
    'MG/LK';

  return (
    prefix +
    '/' +
    year +
    '/' +
    String(
      month
    )
    .padStart(
      2,
      '0'
    )
  );
}


function financeOfficerNameV8_(
  settingKey,
  keyword
) {
  const setting =
    String(
      getSettingSafe_(
        settingKey
      ) ||
      ''
    )
    .trim();

  if (
    setting
  ) {
    return setting;
  }

  const officer =
    readSheet_(
      APP.SHEETS.PENGURUS
    )
    .find(
      item =>
        String(
          item.STATUS ||
          'Aktif'
        ) ===
          'Aktif' &&
        (
          String(
            item.JABATAN ||
            ''
          ) +
          ' ' +
          String(
            item.DEPARTEMEN ||
            ''
          )
        )
        .toLowerCase()
        .includes(
          keyword
        )
    );

  return officer
    ? officer.NAMA
    : '-';
}


function generateFinanceMonthlyPdfV8(
  year,
  month
) {
  year =
    Number(
      year
    );

  month =
    Number(
      month
    );

  const title =
    'Laporan Keuangan ' +
    financeMonthLabelV8_(
      month
    ) +
    ' ' +
    year;

  const doc =
    DocumentApp.create(
      title
    );

  try {
    buildPdfIdentity_(
      doc,
      title,
      'LAPORAN KEUANGAN BULANAN'
    );

    buildFinanceMonthlyPdfV8_(
      doc,
      year,
      month
    );

    doc.saveAndClose();

    const fileName =
      'Laporan_Keuangan_' +
      year +
      '_' +
      String(
        month
      )
      .padStart(
        2,
        '0'
      ) +
      '.pdf';

    const pdfBlob =
      DriveApp
        .getFileById(
          doc.getId()
        )
        .getBlob()
        .getAs(
          MimeType.PDF
        )
        .setName(
          fileName
        );

    return {
      success:
        true,
      fileName,
      mimeType:
        'application/pdf',
      base64:
        Utilities.base64Encode(
          pdfBlob.getBytes()
        )
    };
  }
  finally {
    try {
      DriveApp
        .getFileById(
          doc.getId()
        )
        .setTrashed(
          true
        );
    }
    catch (error) {
      console.log(
        error
      );
    }
  }
}


function buildFinanceMonthlyPdfV8_(
  doc,
  year,
  month
) {
  const body =
    doc.getBody();

  const command =
    getFinanceCommandCenterV8(
      year,
      {
        month
      }
    );

  const period =
    command.period;

  infoTable_(
    body,
    [
      [
        'Nomor Laporan',
        financeReportNumberV8_(
          year,
          month
        )
      ],
      [
        'Periode',
        financeMonthLabelV8_(
          month
        ) +
        ' ' +
        year
      ],
      [
        'Status',
        period.STATUS ||
        'Draft'
      ],
      [
        'Dicetak',
        Utilities.formatDate(
          new Date(),
          APP.TZ,
          'dd MMMM yyyy HH:mm'
        ) +
        ' WITA'
      ]
    ]
  );

  const current =
    command.trend.current;

  sectionTitle_(
    body,
    'Ringkasan Bulanan'
  );

  metricTable_(
    body,
    [
      'PEMASUKAN',
      'PENGELUARAN',
      'SELISIH'
    ],
    [
      formatRupiah_(
        current.income
      ),
      formatRupiah_(
        current.expense
      ),
      formatRupiah_(
        current.balance
      )
    ]
  );

  sectionTitle_(
    body,
    'Perpuluhan & Persembahan Terpadu'
  );

  dataTable_(
    body,
    [
      [
        'Jenis',
        'Terkumpul',
        'Target',
        'Ketercapaian',
        'Status'
      ],
      [
        'Perpuluhan',
        formatRupiah_(
          command.selectedMinistry
            .perpuluhan.actual
        ),
        formatRupiah_(
          command.selectedMinistry
            .perpuluhan.target
        ),
        command.selectedMinistry
          .perpuluhan.target >
          0
          ? (
              command.selectedMinistry
                .perpuluhan.percent +
              '%'
            )
          : '-',
        command.selectedMinistry
          .perpuluhan.status.label
      ],
      [
        'Persembahan Terpadu',
        formatRupiah_(
          command.selectedMinistry
            .persembahanTerpadu.actual
        ),
        formatRupiah_(
          command.selectedMinistry
            .persembahanTerpadu.target
        ),
        command.selectedMinistry
          .persembahanTerpadu.target >
          0
          ? (
              command.selectedMinistry
                .persembahanTerpadu.percent +
              '%'
            )
          : '-',
        command.selectedMinistry
          .persembahanTerpadu.status.label
      ]
    ]
  );

  sectionTitle_(
    body,
    'Saldo per Sumber Dana'
  );

  const fundRows = [
    [
      'Sumber Dana',
      'Saldo Awal',
      'Masuk',
      'Keluar',
      'Saldo Akhir'
    ]
  ];

  command.fundLedgers.forEach(
    item => {
      fundRows.push([
        item.source,
        formatRupiah_(
          item.opening
        ),
        formatRupiah_(
          item.income
        ),
        formatRupiah_(
          item.expense
        ),
        formatRupiah_(
          item.closing
        )
      ]);
    }
  );

  dataTable_(
    body,
    fundRows
  );

  sectionTitle_(
    body,
    'Rekonsiliasi'
  );

  const reconRows = [
    [
      'Sumber',
      'Saldo Sistem',
      'Saldo Aktual',
      'Selisih',
      'Status'
    ]
  ];

  command.reconciliation
    .forEach(
      item => {
        reconRows.push([
          item.source,
          formatRupiah_(
            item.system
          ),
          item.actual ===
            null
            ? '-'
            : formatRupiah_(
                item.actual
              ),
          item.difference ===
            null
            ? '-'
            : formatRupiah_(
                item.difference
              ),
          item.status
        ]);
      }
    );

  dataTable_(
    body,
    reconRows
  );

  const income =
    command.transactions.filter(
      item =>
        item.JENIS ===
        'Pemasukan'
    );

  const expense =
    command.transactions.filter(
      item =>
        item.JENIS ===
        'Pengeluaran'
    );

  const appendTransactions =
    (
      title,
      rows
    ) => {
      sectionTitle_(
        body,
        title
      );

      if (
        !rows.length
      ) {
        emptyPdf_(
          body,
          'Belum ada transaksi.'
        );
        return;
      }

      const table = [
        [
          'No.',
          'Tanggal',
          'Deskripsi',
          'Kategori',
          'Sumber',
          'Nominal'
        ]
      ];

      rows.forEach(
        item => {
          table.push([
            item.NO_TRANSAKSI ||
            '-',
            formatDatePdf_(
              item.TANGGAL
            ),
            item.DESKRIPSI ||
            '-',
            item.KATEGORI ||
            '-',
            item.SUMBER_DANA ||
            '-',
            formatRupiah_(
              item.NOMINAL
            )
          ]);
        }
      );

      dataTable_(
        body,
        table
      );
    };

  appendTransactions(
    'Rincian Pemasukan',
    income
  );

  appendTransactions(
    'Rincian Pengeluaran',
    expense
  );

  sectionTitle_(
    body,
    'Catatan Bendahara'
  );

  const note =
    body.appendParagraph(
      period.CATATAN_BENDAHARA ||
      'Tidak ada catatan.'
    );

  styleParagraph_(
    note,
    9,
    '#4C3C3F',
    false
  );

  body.appendPageBreak();

  sectionTitle_(
    body,
    'Pengesahan'
  );

  infoTable_(
    body,
    [
      [
        'Nomor Laporan',
        financeReportNumberV8_(
          year,
          month
        )
      ],
      [
        'Status',
        period.STATUS ||
        'Draft'
      ],
      [
        'Verifikasi',
        period.VERIFIED_BY ||
        '-'
      ],
      [
        'Finalisasi',
        period.FINALIZED_BY ||
        '-'
      ]
    ]
  );

  body
    .appendParagraph('')
    .setSpacingAfter(
      18
    );

  const sign =
    body.appendTable([
      [
        'Bendahara',
        'Ketua Jemaat'
      ],
      [
        '\n\n\n' +
        financeOfficerNameV8_(
          'FINANCE_TREASURER_NAME',
          'bendahara'
        ),
        '\n\n\n' +
        financeOfficerNameV8_(
          'FINANCE_CHAIR_NAME',
          'ketua'
        )
      ]
    ]);

  sign
    .setBorderWidth(
      0
    );

  for (
    let row = 0;
    row < 2;
    row++
  ) {
    for (
      let col = 0;
      col < 2;
      col++
    ) {
      const cell =
        sign
          .getRow(
            row
          )
          .getCell(
            col
          );

      styleCell_(
        cell,
        '#FFFFFF',
        6
      );

      cell
        .getChild(0)
        .asParagraph()
        .setAlignment(
          DocumentApp
            .HorizontalAlignment
            .CENTER
        );
    }
  }
}


/* ---------- 14. VIEWER JEMAAT ---------- */

function settingBoolV8_(
  key,
  fallback
) {
  const value =
    String(
      getSettingSafe_(
        key
      )
    )
    .toLowerCase();

  if (
    value ===
    ''
  ) {
    return Boolean(
      fallback
    );
  }

  return value ===
    'true';
}


function getCongregationViewerDataV8(
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const data =
    getAppData({
      year
    });

  const approvedMeetings =
    data.notulen
      .filter(
        item =>
          item.STATUS ===
          'Disetujui'
      )
      .slice(
        0,
        6
      )
      .map(
        item => ({
          title:
            item.JUDUL,
          date:
            item.TANGGAL,
          type:
            item.JENIS_RAPAT
        })
      );

  const programs =
    data.programs
      .filter(
        item =>
          ![
            'Dibatalkan'
          ].includes(
            item.STATUS
          )
      )
      .slice(
        0,
        8
      )
      .map(
        item => ({
          name:
            item.NAMA_PROGRAM,
          department:
            item.DEPARTEMEN,
          start:
            item.TANGGAL_MULAI,
          end:
            item.TANGGAL_SELESAI,
          status:
            item.STATUS
        })
      );

  const ministry =
    getFinanceMinistryMetricsV702(
      year
    );

  return {
    church:
      data.app.church,
    logoUrl:
      data.app.logoUrl,
    year,
    nextMeeting:
      data.summary.nextMeeting ||
      null,
    approvedMeetings:
      settingBoolV8_(
        'VIEWER_SHOW_APPROVED_MEETINGS',
        true
      )
        ? approvedMeetings
        : [],
    programs:
      settingBoolV8_(
        'VIEWER_SHOW_PROGRAMS',
        true
      )
        ? programs
        : [],
    finance:
      settingBoolV8_(
        'VIEWER_SHOW_FINANCE',
        true
      )
        ? {
            income:
              data.summary.totalIncome,
            expense:
              data.summary.totalExpense,
            balance:
              data.summary.totalBalance
          }
        : null,
    ministry:
      settingBoolV8_(
        'VIEWER_SHOW_MINISTRY_PROGRESS',
        true
      )
        ? ministry
        : null
  };
}


/* ---------- 15. NOTIFICATION CENTER ---------- */

function getNotificationCenterV8(
  year
) {
  year =
    Number(
      year ||
      currentYear_()
    );

  const intelligence =
    getDashboardIntelligenceV7(
      year
    );

  const health =
    getSystemHealthV7();

  const currentMonth =
    financeMonthNumberV702_(
      year
    );

  const previous =
    currentMonth >
      1
      ? {
          year,
          month:
            currentMonth -
            1
        }
      : {
          year:
            year -
            1,
          month:
            12
        };

  const previousPeriod =
    getFinancePeriodV8(
      previous.year,
      previous.month
    );

  const recon =
    getFinanceReconciliationsV8(
      year,
      currentMonth
    );

  const currentTransactions =
    getFinanceCommandCenterV8(
      year,
      {
        month:
          currentMonth
      }
    )
    .transactions;

  const missingEvidence =
    currentTransactions
      .filter(
        item =>
          item.JENIS ===
            'Pengeluaran' &&
          (
            !item.EVIDENCE ||
            !item.EVIDENCE.length
          )
      );

  const notifications = [];

  intelligence.messages
    .forEach(
      item => {
        notifications.push({
          id:
            'intel-' +
            item.type,
          level:
            item.severity ||
            'info',
          title:
            item.title,
          detail:
            '',
          page:
            item.page
        });
      }
    );

  if (
    String(
      previousPeriod.IS_CLOSED
    ).toLowerCase() !==
    'true'
  ) {
    notifications.push({
      id:
        'period-' +
        previous.year +
        '-' +
        previous.month,
      level:
        'warning',
      title:
        'Periode bulan sebelumnya belum ditutup',
      detail:
        financeMonthLabelV8_(
          previous.month
        ) +
        ' ' +
        previous.year,
      page:
        'keuangan'
    });
  }

  const reconIssues =
    recon.filter(
      item =>
        item.status ===
        'Selisih'
    );

  if (
    reconIssues.length
  ) {
    notifications.push({
      id:
        'recon',
      level:
        'danger',
      title:
        reconIssues.length +
        ' sumber dana memiliki selisih rekonsiliasi',
      detail:
        reconIssues
          .map(
            item =>
              item.source
          )
          .join(
            ', '
          ),
      page:
        'keuangan'
    });
  }

  if (
    missingEvidence.length
  ) {
    notifications.push({
      id:
        'evidence',
      level:
        'warning',
      title:
        missingEvidence.length +
        ' pengeluaran belum memiliki bukti transaksi',
      detail:
        financeMonthLabelV8_(
          currentMonth
        ),
      page:
        'keuangan'
    });
  }

  if (
    !health.backup.healthy
  ) {
    notifications.push({
      id:
        'backup',
      level:
        'warning',
      title:
        'Backup tahunan perlu diperiksa',
      detail:
        health.backup.last
          ? (
              health.backup.ageDays +
              ' hari sejak backup terakhir'
            )
          : 'Belum ada backup tercatat',
      page:
        'arsip'
    });
  }

  const birthday =
    getBirthdayCenterV81();

  if (
    birthday.today.length
  ) {
    notifications.unshift({
      id:
        'birthday-today',
      level:
        'info',
      title:
        'Ulang tahun hari ini: ' +
        birthday.today
          .map(
            item =>
              item.name
          )
          .join(', '),
      detail:
        birthday.today.length +
        ' anggota jemaat berulang tahun hari ini.',
      page:
        'jemaat'
    });
  }

  if (
    birthday.thisMonth.length
  ) {
    const names =
      birthday.thisMonth
        .slice(
          0,
          6
        )
        .map(
          item =>
            item.name +
            ' (' +
            item.day +
            ')'
        )
        .join(', ');

    notifications.push({
      id:
        'birthday-month',
      level:
        'info',
      title:
        birthday.thisMonth.length +
        ' ulang tahun di bulan ' +
        birthday.monthLabel,
      detail:
        names +
        (
          birthday.thisMonth.length >
            6
            ? (
                ' +' +
                (
                  birthday.thisMonth.length -
                  6
                ) +
                ' lainnya'
              )
            : ''
        ),
      page:
        'jemaat'
    });
  }

  return {
    count:
      notifications.length,
    notifications
  };
}


/* ---------- 16. SETTING CENTER ---------- */

function getSettingsCenterV8() {
  const keys = [
    'CHURCH_NAME',
    'QUORUM_PERCENT',
    'ARCHIVE_FOLDER_NAME',
    'MEDIA_FOLDER_NAME',
    'DOCUMENT_FOLDER_NAME',
    'AUTO_DOC_NUMBER',
    'TARGET_PERPULUHAN_BULANAN',
    'TARGET_PERSEMBAHAN_TERPADU_BULANAN',
    'FINANCE_REPORT_PREFIX',
    'FINANCE_TREASURER_NAME',
    'FINANCE_CHAIR_NAME',
    'DOC_PREFIX_SK',
    'DOC_PREFIX_SM',
    'DOC_PREFIX_SKEL',
    'DOC_PREFIX_PROP',
    'DOC_PREFIX_LAP',
    'DOC_PREFIX_FORM',
    'DOC_PREFIX_DOC',
    'BACKUP_WARNING_DAYS',
    'VIEWER_SHOW_FINANCE',
    'VIEWER_SHOW_MINISTRY_PROGRESS',
    'VIEWER_SHOW_PROGRAMS',
    'VIEWER_SHOW_APPROVED_MEETINGS',
    'LETTER_DENOMINATION_NAME',
    'LETTER_CHURCH_NAME',
    'LETTER_CITY',
    'LETTER_ADDRESS',
    'LETTER_CONTACT',
    'LETTER_EMAIL',
    'LETTER_OFFICIAL_LOGO_URL',
    'LETTER_NUMBER_ORG',
    'LETTER_FOLDER_NAME',
    'LETTER_SIGNATURE_FOLDER_NAME',
    'LETTER_FOOTER_TEXT'
  ];

  const settings = {};

  keys.forEach(
    key => {
      settings[
        key
      ] =
        getSettingSafe_(
          key
        );
    }
  );

  return {
    settings,
    sources:
      [...APP.SOURCES],
    logoUrl:
      getSettingSafe_(
        'LOGO_URL'
      )
  };
}


function saveSettingsCenterV8(
  payload,
  token) {
  assertFeatureV84_(token,'settings');

  payload =
    payload ||
    {};

  const allowed =
    new Set([
      'CHURCH_NAME',
      'QUORUM_PERCENT',
      'ARCHIVE_FOLDER_NAME',
      'MEDIA_FOLDER_NAME',
      'DOCUMENT_FOLDER_NAME',
      'AUTO_DOC_NUMBER',
      'TARGET_PERPULUHAN_BULANAN',
      'TARGET_PERSEMBAHAN_TERPADU_BULANAN',
      'FINANCE_REPORT_PREFIX',
      'FINANCE_TREASURER_NAME',
      'FINANCE_CHAIR_NAME',
      'DOC_PREFIX_SK',
      'DOC_PREFIX_SM',
      'DOC_PREFIX_SKEL',
      'DOC_PREFIX_PROP',
      'DOC_PREFIX_LAP',
      'DOC_PREFIX_FORM',
      'DOC_PREFIX_DOC',
      'BACKUP_WARNING_DAYS',
      'VIEWER_SHOW_FINANCE',
      'VIEWER_SHOW_MINISTRY_PROGRESS',
      'VIEWER_SHOW_PROGRAMS',
      'VIEWER_SHOW_APPROVED_MEETINGS',
      'LETTER_DENOMINATION_NAME',
      'LETTER_CHURCH_NAME',
      'LETTER_CITY',
      'LETTER_ADDRESS',
      'LETTER_CONTACT',
      'LETTER_EMAIL',
      'LETTER_OFFICIAL_LOGO_URL',
      'LETTER_NUMBER_ORG',
      'LETTER_FOLDER_NAME',
      'LETTER_SIGNATURE_FOLDER_NAME',
      'LETTER_FOOTER_TEXT'
    ]);

  Object.keys(
    payload
  )
  .forEach(
    key => {
      if (
        !allowed.has(
          key
        )
      ) {
        return;
      }

      let value =
        payload[
          key
        ];

      if (
        [
          'QUORUM_PERCENT',
          'TARGET_PERPULUHAN_BULANAN',
          'TARGET_PERSEMBAHAN_TERPADU_BULANAN',
          'BACKUP_WARNING_DAYS'
        ].includes(
          key
        )
      ) {
        value =
          String(
            Math.max(
              0,
              Number(
                value ||
                0
              )
            )
          );
      }

      if (
        key.startsWith(
          'VIEWER_SHOW_'
        ) ||
        key ===
          'AUTO_DOC_NUMBER'
      ) {
        value =
          String(
            value ===
              true ||
            String(
              value
            ).toLowerCase() ===
              'true'
          );
      }

      setSetting_(
        key,
        String(
          value ??
          ''
        )
      );
    }
  );

  audit_(
    'UPDATE_SETTINGS',
    'setting',
    'SETTING_CENTER',
    'Memperbarui Setting Center.'
  );

  return {
    success:
      true,
    data:
      getSettingsCenterV8()
  };
}


/* ---------- V8 SELF TEST ---------- */

function runFinanceSuiteSelfTestV8() {
  setupDatabase();

  const year =
    currentYear_();

  const month =
    financeMonthNumberV702_(
      year
    );

  const testYear =
    year +
    77;

  const testMonth =
    1;

  const testTransactionId =
    'V8-SELFTEST-' +
    Utilities.getUuid();

  const result = {
    version:
      APP.VERSION,
    transactionNumber:
      false,
    commandCenter:
      false,
    period:
      false,
    closingWorkflow:
      false,
    reconciliation:
      false,
    monthlyPdf:
      false,
    audit:
      false,
    viewer:
      false,
    notifications:
      false,
    settings:
      false,
    success:
      false
  };

  try {
    const number =
      generateTransactionNumberV8_(
        year +
        '-' +
        String(
          month
        )
        .padStart(
          2,
          '0'
        ) +
        '-01'
      );

    result.transactionNumber =
      /^TRX\/\d{4}\/\d{2}\/\d{3}$/
        .test(
          number
        );

    const command =
      getFinanceCommandCenterV8(
        year,
        {
          month
        }
      );

    result.commandCenter =
      Boolean(
        command &&
        Array.isArray(
          command.monthly
        ) &&
        Array.isArray(
          command.transactions
        ) &&
        Array.isArray(
          command.reconciliation
        )
      );

    const periodSaved =
      saveFinancePeriodRecordV8_({
        ID_PERIODE:
          'FP-' +
          financePeriodKeyV8_(
            testYear,
            testMonth
          ),
        TAHUN:
          testYear,
        BULAN:
          testMonth,
        STATUS:
          'Draft',
        CATATAN_BENDAHARA:
          'V8 Self Test',
        IS_CLOSED:
          false
      });

    result.period =
      Boolean(
        periodSaved &&
        Number(
          periodSaved.TAHUN
        ) ===
          testYear
      );

    setFinanceReportStatusV8(
      testYear,
      testMonth,
      'Final',
      'V8 Self Test'
    );

    const closedTest =
      closeFinancePeriodV8(
        testYear,
        testMonth,
        'V8 Self Test'
      );

    let lockWorked =
      false;

    try {
      assertFinancePeriodWritableV8_(
        testYear +
        '-01-15'
      );
    }
    catch (lockError) {
      lockWorked =
        true;
    }

    reopenFinancePeriodV8(
      testYear,
      testMonth,
      'V8 Self Test reopen'
    );

    result.closingWorkflow =
      Boolean(
        closedTest &&
        closedTest.success &&
        lockWorked
      );

    const recon =
      saveFinanceReconciliationV8({
        year:
          testYear,
        month:
          testMonth,
        source:
          APP.SOURCES[0],
        actual:
          0,
        note:
          'V8 Self Test'
      });

    result.reconciliation =
      Boolean(
        recon &&
        recon.success
      );

    recordFinanceTransactionAuditV8_(
      testTransactionId,
      'CREATE',
      null,
      {
        ID_TRANSAKSI:
          testTransactionId,
        NO_TRANSAKSI:
          'TRX/SELFTEST',
        DESKRIPSI:
          'V8 Self Test'
      }
    );

    result.audit =
      getFinanceTransactionHistoryV8(
        testTransactionId
      ).length >
      0;

    const monthlyPdf =
      generateFinanceMonthlyPdfV8(
        testYear,
        testMonth
      );

    result.monthlyPdf =
      Boolean(
        monthlyPdf &&
        monthlyPdf.success &&
        monthlyPdf.base64
      );

    const viewer =
      getCongregationViewerDataV8(
        year
      );

    result.viewer =
      Boolean(
        viewer &&
        viewer.church
      );

    const notifications =
      getNotificationCenterV8(
        year
      );

    result.notifications =
      Boolean(
        notifications &&
        Array.isArray(
          notifications.notifications
        )
      );

    const settings =
      getSettingsCenterV8();

    result.settings =
      Boolean(
        settings &&
        settings.settings
      );

    result.success =
      result.transactionNumber &&
      result.commandCenter &&
      result.period &&
      result.closingWorkflow &&
      result.reconciliation &&
      result.audit &&
      result.monthlyPdf &&
      result.viewer &&
      result.notifications &&
      result.settings;

    console.log(
      JSON.stringify(
        result,
        null,
        2
      )
    );

    if (
      !result.success
    ) {
      throw new Error(
        'Finance Suite Self Test V8 gagal.'
      );
    }

    return result;
  }

  finally {
    try {
      deleteRowsByValue_(
        APP.SHEETS.FINANCE_PERIODS,
        'TAHUN',
        testYear
      );

      deleteRowsByValue_(
        APP.SHEETS.FINANCE_RECON,
        'TAHUN',
        testYear
      );

      deleteRowsByValue_(
        APP.SHEETS.FINANCE_AUDIT,
        'ID_TRANSAKSI',
        testTransactionId
      );
    }
    catch (cleanupError) {
      console.log(
        'V8 self-test cleanup: ' +
        cleanupError
      );
    }
  }
}



/* =========================================================
   MAJELIS GALILEA V8.1 — SECRETARY LETTER + BIRTHDAY SUITE
========================================================= */

function secretaryLetterCategoriesV81_() {
  return {
    SEKOLAH: {
      code:
        'SKL',
      label:
        'Surat ke Sekolah',
      perihal:
        'Permohonan Izin Kegiatan Gereja',
      hint:
        'Untuk permohonan izin kepada sekolah agar siswa dapat mengikuti kegiatan gereja.'
    },

    PINDAH_ANGGOTA: {
      code:
        'PAJ',
      label:
        'Perpindahan Keanggotaan Jemaat',
      perihal:
        'Permohonan Perpindahan Keanggotaan Jemaat',
      hint:
        'Untuk administrasi perpindahan anggota ke jemaat tujuan.'
    },

    IZIN: {
      code:
        'IZN',
      label:
        'Surat Izin',
      perihal:
        'Permohonan Izin',
      hint:
        'Untuk RT, sekolah, perusahaan, instansi, atau pihak lain.'
    },

    PEMBERITAHUAN: {
      code:
        'PBT',
      label:
        'Surat Pemberitahuan',
      perihal:
        'Pemberitahuan',
      hint:
        'Untuk menyampaikan informasi resmi kegiatan atau administrasi jemaat.'
    },

    KETERANGAN: {
      code:
        'KET',
      label:
        'Surat Keterangan',
      perihal:
        'Surat Keterangan',
      hint:
        'Template umum untuk keterangan resmi dari jemaat.'
    }
  };
}


function romanMonthV81_(
  month
) {
  const romans = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII'
  ];

  return romans[
    Number(
      month
    ) -
    1
  ] ||
  '';
}


function secretaryDatePartsV81_(
  dateValue
) {
  const text =
    String(
      dateValue ||
      ''
    )
    .slice(
      0,
      10
    );

  const match =
    text.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

  if (
    !match
  ) {
    throw new Error(
      'Tanggal surat tidak valid.'
    );
  }

  return {
    year:
      Number(
        match[1]
      ),
    month:
      Number(
        match[2]
      ),
    day:
      Number(
        match[3]
      ),
    iso:
      text
  };
}


function getNextLetterNumberV81(
  category,
  dateValue
) {
  const categories =
    secretaryLetterCategoriesV81_();

  const config =
    categories[
      category
    ];

  if (
    !config
  ) {
    throw new Error(
      'Kategori surat tidak valid.'
    );
  }

  const date =
    secretaryDatePartsV81_(
      dateValue ||
      Utilities.formatDate(
        new Date(),
        APP.TZ,
        'yyyy-MM-dd'
      )
    );

  const org =
    String(
      getSettingSafe_(
        'LETTER_NUMBER_ORG'
      ) ||
      'GMAHK-GLA'
    )
    .trim();

  const rows =
    readSheet_(
      APP.SHEETS.SURAT
    )
    .filter(
      item =>
        Number(
          item.TAHUN ||
          0
        ) ===
          date.year &&
        String(
          item.KODE_KATEGORI ||
          ''
        ) ===
          config.code
    );

  const max =
    rows.reduce(
      (
        current,
        item
      ) => {
        const match =
          String(
            item.NOMOR_SURAT ||
            ''
          )
          .match(
            /^(\d{1,4})\//
          );

        return Math.max(
          current,
          match
            ? Number(
                match[1]
              )
            : 0
        );
      },
      0
    );

  const sequence =
    max +
    1;

  return {
    sequence,
    code:
      config.code,
    year:
      date.year,
    month:
      date.month,
    romanMonth:
      romanMonthV81_(
        date.month
      ),
    number:
      String(
        sequence
      )
      .padStart(
        3,
        '0'
      ) +
      '/' +
      config.code +
      '/' +
      org +
      '/' +
      romanMonthV81_(
        date.month
      ) +
      '/' +
      date.year
  };
}


function getSecretaryLetterBootstrapV81(
  year
) {
  const today =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy-MM-dd'
    );

  const categories =
    secretaryLetterCategoriesV81_();

  const categoryList =
    Object.keys(
      categories
    )
    .map(
      key => ({
        key,
        ...categories[
          key
        ]
      })
    );

  const officers =
    readSheet_(
      APP.SHEETS.PENGURUS
    )
    .filter(
      item =>
        String(
          item.STATUS ||
          'Aktif'
        ) ===
        'Aktif'
    )
    .map(
      item => ({
        name:
          item.NAMA,
        role:
          item.JABATAN ||
          item.DEPARTEMEN ||
          ''
      })
    );

  const secretary =
    officers.find(
      item =>
        (
          item.role ||
          ''
        )
        .toLowerCase()
        .includes(
          'sekretaris'
        )
    ) ||
    null;

  const chair =
    officers.find(
      item =>
        (
          item.role ||
          ''
        )
        .toLowerCase()
        .includes(
          'ketua'
        )
    ) ||
    null;

  const firstCategory =
    categoryList[0]
      ? categoryList[0].key
      : 'SEKOLAH';

  return {
    today,
    currentYear:
      Number(
        Utilities.formatDate(
          new Date(),
          APP.TZ,
          'yyyy'
        )
      ),
    categories:
      categoryList,
    officers,
    defaultSigners: [
      secretary,
      chair,
      null
    ],
    nextNumber:
      getNextLetterNumberV81(
        firstCategory,
        today
      ),
    settings: {
      denomination:
        getSettingSafe_(
          'LETTER_DENOMINATION_NAME'
        ) ||
        'Gereja Masehi Advent Hari Ketujuh',
      church:
        getSettingSafe_(
          'LETTER_CHURCH_NAME'
        ) ||
        'GMAHK Galilea Balikpapan',
      city:
        getSettingSafe_(
          'LETTER_CITY'
        ) ||
        'Balikpapan',
      address:
        getSettingSafe_(
          'LETTER_ADDRESS'
        ) ||
        'Balikpapan, Kalimantan Timur',
      contact:
        getSettingSafe_(
          'LETTER_CONTACT'
        ) ||
        '',
      email:
        getSettingSafe_(
          'LETTER_EMAIL'
        ) ||
        '',
      officialLogoUrl:
        getSettingSafe_(
          'LETTER_OFFICIAL_LOGO_URL'
        ) ||
        'https://www.adventist.design/wp-content/uploads/2017/04/adventist_logo.png'
    },
    letters:
      byYear_(
        readSheet_(
          APP.SHEETS.SURAT
        ),
        Number(
          year ||
          currentYear_()
        )
      )
      .sort(
        sortDateDescBy_(
          'TANGGAL_SURAT'
        )
      )
  };
}


function buildDefaultLetterBodyV81_(
  payload
) {
  payload =
    payload ||
    {};

  const church =
    getSettingSafe_(
      'LETTER_CHURCH_NAME'
    ) ||
    'GMAHK Galilea Balikpapan';

  const category =
    String(
      payload.KATEGORI ||
      'KETERANGAN'
    );

  const subject =
    String(
      payload.SUBJEK_NAMA ||
      ''
    )
    .trim();

  const identity =
    String(
      payload.SUBJEK_IDENTITAS ||
      ''
    )
    .trim();

  const need =
    String(
      payload.KEPERLUAN ||
      ''
    )
    .trim();

  const place =
    String(
      payload.TEMPAT_KEGIATAN ||
      ''
    )
    .trim();

  const start =
    payload.TANGGAL_MULAI
      ? formatDatePdf_(
          payload.TANGGAL_MULAI
        )
      : '';

  const end =
    payload.TANGGAL_SELESAI
      ? formatDatePdf_(
          payload.TANGGAL_SELESAI
        )
      : '';

  const range =
    start &&
    end &&
    start !==
      end
      ? (
          start +
          ' sampai ' +
          end
        )
      : (
          start ||
          end ||
          ''
        );

  if (
    category ===
    'SEKOLAH'
  ) {
    return (
      'Melalui surat ini, kami dari ' +
      church +
      ' memohon kiranya pihak sekolah dapat memberikan izin kepada ' +
      (
        subject ||
        '[Nama siswa]'
      ) +
      (
        identity
          ? (
              ' (' +
              identity +
              ')'
            )
          : ''
      ) +
      ' untuk mengikuti ' +
      (
        need ||
        '[kegiatan gereja]'
      ) +
      (
        range
          ? (
              ' pada ' +
              range
            )
          : ''
      ) +
      (
        place
          ? (
              ' di ' +
              place
            )
          : ''
      ) +
      '.\n\n' +
      'Kegiatan tersebut merupakan bagian dari pelayanan dan pembinaan rohani jemaat. Kami sangat menghargai dukungan serta kebijaksanaan pihak sekolah untuk memberikan izin kepada yang bersangkutan.\n\n' +
      'Demikian permohonan ini kami sampaikan. Atas perhatian, pengertian, dan kerja sama yang baik, kami mengucapkan terima kasih.'
    );
  }

  if (
    category ===
    'PINDAH_ANGGOTA'
  ) {
    return (
      'Dengan hormat, melalui surat ini ' +
      church +
      ' menerangkan bahwa ' +
      (
        subject ||
        '[Nama anggota jemaat]'
      ) +
      (
        identity
          ? (
              ' dengan identitas keanggotaan ' +
              identity
            )
          : ''
      ) +
      ' tercatat dalam administrasi keanggotaan jemaat kami.\n\n' +
      'Sehubungan dengan ' +
      (
        need ||
        'permohonan perpindahan keanggotaan'
      ) +
      ', kami memohon agar proses penerimaan dan perpindahan keanggotaan yang bersangkutan dapat diproses sesuai ketentuan administrasi gereja yang berlaku.\n\n' +
      'Demikian surat ini dibuat untuk dipergunakan sebagaimana mestinya. Atas perhatian dan kerja sama yang baik, kami mengucapkan terima kasih.'
    );
  }

  if (
    category ===
    'IZIN'
  ) {
    return (
      'Dengan hormat, bersama surat ini kami memohon izin bagi ' +
      (
        subject ||
        '[Nama]'
      ) +
      (
        identity
          ? (
              ' (' +
              identity +
              ')'
            )
          : ''
      ) +
      ' untuk ' +
      (
        need ||
        '[keperluan]'
      ) +
      (
        range
          ? (
              ' pada ' +
              range
            )
          : ''
      ) +
      (
        place
          ? (
              ' di ' +
              place
            )
          : ''
      ) +
      '.\n\n' +
      'Permohonan ini disampaikan sebagai bagian dari kegiatan dan pelayanan ' +
      church +
      '. Besar harapan kami agar izin dapat diberikan kepada yang bersangkutan.\n\n' +
      'Demikian surat permohonan izin ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami mengucapkan terima kasih.'
    );
  }

  if (
    category ===
    'PEMBERITAHUAN'
  ) {
    return (
      'Dengan hormat, melalui surat ini kami dari ' +
      church +
      ' menyampaikan pemberitahuan mengenai ' +
      (
        need ||
        '[isi pemberitahuan]'
      ) +
      (
        range
          ? (
              ' yang akan dilaksanakan pada ' +
              range
            )
          : ''
      ) +
      (
        place
          ? (
              ' bertempat di ' +
              place
            )
          : ''
      ) +
      '.\n\n' +
      'Kami berharap informasi ini dapat menjadi perhatian dan dapat ditindaklanjuti sebagaimana diperlukan.\n\n' +
      'Demikian pemberitahuan ini kami sampaikan. Atas perhatian dan kerja sama yang baik, kami mengucapkan terima kasih.'
    );
  }

  return (
    'Dengan hormat, ' +
    church +
    ' dengan ini menerangkan bahwa ' +
    (
      subject ||
      '[Nama]'
    ) +
    (
      identity
        ? (
            ' (' +
            identity +
            ')'
          )
        : ''
    ) +
    ' ' +
    (
      need ||
      '[keterangan / keperluan surat]'
    ) +
    '.\n\n' +
    'Surat keterangan ini dibuat berdasarkan data administrasi jemaat dan dapat dipergunakan sebagaimana mestinya.\n\n' +
    'Demikian surat ini dibuat dengan sebenarnya. Atas perhatian pihak yang berkepentingan, kami mengucapkan terima kasih.'
  );
}


function getSecretaryLetterTemplateV81(
  payload
) {
  payload =
    payload ||
    {};

  const categories =
    secretaryLetterCategoriesV81_();

  const config =
    categories[
      payload.KATEGORI
    ] ||
    categories.KETERANGAN;

  return {
    perihal:
      config.perihal,
    body:
      buildDefaultLetterBodyV81_(
        payload
      ),
    hint:
      config.hint,
    code:
      config.code
  };
}


function saveLetterSignatureV81_(
  data,
  letterId,
  slot
) {
  if (
    !data ||
    !data.base64
  ) {
    return '';
  }

  const uploaded =
    saveDriveFile_(
      data,
      getSettingSafe_(
        'LETTER_SIGNATURE_FOLDER_NAME'
      ) ||
      'MAJELIS GALILEA - TANDA TANGAN',
      'ttd-' +
      letterId +
      '-' +
      slot
    );

  return uploaded.fileId;
}



function getOfficialAdventistLogoBlobV822_() {
  const remoteUrl =
    getSettingSafe_(
      'LETTER_OFFICIAL_LOGO_URL'
    ) ||
    'https://www.adventist.design/wp-content/uploads/2017/04/adventist_logo.png';

  if (
    remoteUrl
  ) {
    try {
      const response =
        UrlFetchApp.fetch(
          remoteUrl,
          {
            muteHttpExceptions:
              true,
            followRedirects:
              true
          }
        );

      if (
        response.getResponseCode() >=
          200 &&
        response.getResponseCode() <
          300
      ) {
        return response
          .getBlob()
          .setName(
            'adventist-logo.png'
          );
      }
    }
    catch (error) {
      console.log(
        'Official Adventist logo fetch failed: ' +
        error
      );
    }
  }

  const localLogoId =
    getSettingSafe_(
      'LOGO_FILE_ID'
    );

  if (
    localLogoId
  ) {
    try {
      return DriveApp
        .getFileById(
          localLogoId
        )
        .getBlob();
    }
    catch (error) {
      console.log(
        'Local logo fallback failed: ' +
        error
      );
    }
  }

  return null;
}


function buildLetterheadV81_(
  doc
) {
  const denomination =
    getSettingSafe_(
      'LETTER_DENOMINATION_NAME'
    ) ||
    'Gereja Masehi Advent Hari Ketujuh di Indonesia';

  const church =
    getSettingSafe_(
      'LETTER_CHURCH_NAME'
    ) ||
    'GMAHK Galilea';

  const address =
    getSettingSafe_(
      'LETTER_ADDRESS'
    ) ||
    'Balikpapan, Kalimantan Timur';

  const contact =
    getSettingSafe_(
      'LETTER_CONTACT'
    ) ||
    '';

  const email =
    getSettingSafe_(
      'LETTER_EMAIL'
    ) ||
    '';

  const header =
    doc.addHeader();

  const table =
    header.appendTable([
      [
        '',
        '',
        '',
        ''
      ]
    ]);

  table.setBorderWidth(
    0
  );

  const logoCell =
    table
      .getRow(0)
      .getCell(0);

  const denominationCell =
    table
      .getRow(0)
      .getCell(1);

  const dividerCell =
    table
      .getRow(0)
      .getCell(2);

  const localCell =
    table
      .getRow(0)
      .getCell(3);

  try {
    logoCell.setWidth(
      58
    );

    denominationCell.setWidth(
      245
    );

    dividerCell.setWidth(
      4
    );

    localCell.setWidth(
      200
    );
  }
  catch (error) {
    console.log(
      error
    );
  }

  [
    logoCell,
    denominationCell,
    dividerCell,
    localCell
  ]
  .forEach(
    cell => {
      cell
        .setPaddingTop(
          2
        )
        .setPaddingBottom(
          2
        )
        .setPaddingLeft(
          2
        )
        .setPaddingRight(
          2
        );
    }
  );

  logoCell.clear();

  const logoBlob =
    getOfficialAdventistLogoBlobV822_();

  if (
    logoBlob
  ) {
    try {
      const image =
        logoCell.appendImage(
          logoBlob
        );

      image
        .setWidth(
          51
        )
        .setHeight(
          51
        );
    }
    catch (error) {
      const fallback =
        logoCell.appendParagraph(
          'ADVENTIST'
        );

      styleParagraph_(
        fallback,
        7,
        '#315D88',
        true
      );
    }
  }
  else {
    const fallback =
      logoCell.appendParagraph(
        'ADVENTIST'
      );

    styleParagraph_(
      fallback,
      7,
      '#315D88',
      true
    );
  }

  denominationCell.clear();

  const denominationP =
    denominationCell.appendParagraph(
      denomination
    );

  denominationP
    .setSpacingBefore(
      5
    )
    .setSpacingAfter(
      0
    );

  styleParagraph_(
    denominationP,
    11.5,
    '#315D88',
    true
  );

  const identitySub =
    denominationCell.appendParagraph(
      'SEVENTH-DAY ADVENTIST CHURCH'
    );

  identitySub
    .setSpacingBefore(
      1
    )
    .setSpacingAfter(
      0
    );

  styleParagraph_(
    identitySub,
    5.8,
    '#6F8393',
    false
  );

  dividerCell.clear();

  dividerCell
    .setBackgroundColor(
      '#315D88'
    )
    .setPaddingTop(
      1
    )
    .setPaddingBottom(
      1
    )
    .setPaddingLeft(
      0
    )
    .setPaddingRight(
      0
    );

  dividerCell.appendParagraph(
    ''
  );

  localCell.clear();

  const localName =
    localCell.appendParagraph(
      church
    );

  localName
    .setSpacingBefore(
      2
    )
    .setSpacingAfter(
      2
    );

  styleParagraph_(
    localName,
    9.5,
    '#315D88',
    true
  );

  const detailLines =
    [
      address,
      contact,
      email
    ]
    .filter(Boolean);

  detailLines.forEach(
    (
      text,
      index
    ) => {
      const detail =
        localCell.appendParagraph(
          text
        );

      detail
        .setSpacingBefore(
          0
        )
        .setSpacingAfter(
          index ===
            detailLines.length -
              1
              ? 0
              : 1
        );

      styleParagraph_(
        detail,
        6.3,
        '#5F6E78',
        false
      );
    }
  );

  const line =
    header.appendTable([
      ['']
    ]);

  line.setBorderWidth(
    0
  );

  line
    .getRow(0)
    .getCell(0)
    .setBackgroundColor(
      '#315D88'
    )
    .setPaddingTop(
      .75
    )
    .setPaddingBottom(
      .75
    )
    .setPaddingLeft(
      0
    )
    .setPaddingRight(
      0
    )
    .setText(
      ''
    );

  const footer =
    doc.addFooter();

  const footerLine =
    footer.appendTable([
      ['']
    ]);

  footerLine.setBorderWidth(
    0
  );

  footerLine
    .getRow(0)
    .getCell(0)
    .setBackgroundColor(
      '#315D88'
    )
    .setPaddingTop(
      .5
    )
    .setPaddingBottom(
      .5
    )
    .setText(
      ''
    );

  const footerText =
    getSettingSafe_(
      'LETTER_FOOTER_TEXT'
    ) ||
    'Sekretariat Jemaat - GMAHK Galilea';

  const footerP =
    footer.appendParagraph(
      footerText +
      (
        address
          ? (
              ' | ' +
              address
            )
          : ''
      ) +
      ' | ' +
      (
        getSettingSafe_(
          'EXPORT_STAMP_TEXT'
        ) ||
        'diunduh dari website Majelis Galilea'
      )
    );

  footerP.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    footerP,
    6.2,
    '#6C7880',
    false
  );
}



function appendLetterMetaTableV81_(
  body,
  record
) {
  const rows = [
    [
      'Nomor',
      ':',
      record.NOMOR_SURAT
    ],
    [
      'Lampiran',
      ':',
      record.LAMPIRAN ||
      '-'
    ],
    [
      'Perihal',
      ':',
      record.PERIHAL ||
      '-'
    ]
  ];

  const table =
    body.appendTable(
      rows
    );

  table.setBorderWidth(
    0
  );

  for (
    let row = 0;
    row < rows.length;
    row++
  ) {
    for (
      let col = 0;
      col < 3;
      col++
    ) {
      const cell =
        table
          .getRow(
            row
          )
          .getCell(
            col
          );

      styleCell_(
        cell,
        '#FFFFFF',
        1
      );

      cell
        .editAsText()
        .setFontFamily(
          'Arial'
        )
        .setFontSize(
          9
        )
        .setForegroundColor(
          '#1F1F1F'
        );

      if (
        col ===
        0
      ) {
        cell
          .editAsText()
          .setBold(
            true
          );
      }
    }
  }

  body
    .appendParagraph('')
    .setSpacingAfter(
      3
    );
}


function appendLetterSignersV81_(
  body,
  record
) {
  const signers = [
    {
      name:
        record.SIGNER_1_NAME,
      role:
        record.SIGNER_1_ROLE,
      fileId:
        record.SIGNER_1_FILE_ID
    },
    {
      name:
        record.SIGNER_2_NAME,
      role:
        record.SIGNER_2_ROLE,
      fileId:
        record.SIGNER_2_FILE_ID
    },
    {
      name:
        record.SIGNER_3_NAME,
      role:
        record.SIGNER_3_ROLE,
      fileId:
        record.SIGNER_3_FILE_ID
    }
  ]
  .filter(
    item =>
      String(
        item.name ||
        ''
      )
      .trim()
  );

  if (
    !signers.length
  ) {
    return;
  }

  const intro =
    body.appendParagraph(
      'Hormat kami,'
    );

  styleParagraph_(
    intro,
    9,
    '#202020',
    false
  );

  intro
    .setSpacingBefore(
      14
    )
    .setSpacingAfter(
      8
    );

  const table =
    body.appendTable([
      signers.map(
        () =>
          ''
      )
    ]);

  table.setBorderWidth(
    0
  );

  signers.forEach(
    (
      signer,
      index
    ) => {
      const cell =
        table
          .getRow(0)
          .getCell(
            index
          );

      styleCell_(
        cell,
        '#FFFFFF',
        4
      );

      cell.clear();

      const role =
        cell.appendParagraph(
          signer.role ||
          'Penandatangan'
        );

      role.setAlignment(
        DocumentApp
          .HorizontalAlignment
          .CENTER
      );

      styleParagraph_(
        role,
        8,
        '#333333',
        false
      );

      role.setSpacingAfter(
        3
      );

      if (
        signer.fileId
      ) {
        try {
          const image =
            cell.appendImage(
              DriveApp
                .getFileById(
                  signer.fileId
                )
                .getBlob()
            );

          image
            .setWidth(
              82
            )
            .setHeight(
              42
            );
        }
        catch (error) {
          cell.appendParagraph(
            '\n'
          );
        }
      }
      else {
        cell.appendParagraph(
          '\n\n'
        );
      }

      const name =
        cell.appendParagraph(
          signer.name
        );

      name.setAlignment(
        DocumentApp
          .HorizontalAlignment
          .CENTER
      );

      styleParagraph_(
        name,
        8.5,
        '#111111',
        true
      );
    }
  );
}


function buildSecretaryLetterDocV81_(
  doc,
  record
) {
  const body =
    doc.getBody();

  body
    .setMarginTop(
      64
    )
    .setMarginBottom(
      52
    )
    .setMarginLeft(
      58
    )
    .setMarginRight(
      58
    );

  buildLetterheadV81_(
    doc
  );

  const city =
    getSettingSafe_(
      'LETTER_CITY'
    ) ||
    'Balikpapan';

  const dateP =
    body.appendParagraph(
      city +
      ', ' +
      formatDatePdf_(
        record.TANGGAL_SURAT
      )
    );

  dateP.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .RIGHT
  );

  styleParagraph_(
    dateP,
    9,
    '#202020',
    false
  );

  dateP
    .setSpacingAfter(
      9
    );

  appendLetterMetaTableV81_(
    body,
    record
  );

  const recipientLines = [
    'Kepada Yth.',
    record.TUJUAN_JABATAN ||
      '',
    record.TUJUAN_NAMA ||
      '',
    record.TUJUAN_INSTANSI ||
      '',
    record.TUJUAN_ALAMAT ||
      '',
    'di Tempat'
  ]
  .filter(Boolean);

  const recipient =
    body.appendParagraph(
      recipientLines.join(
        '\n'
      )
    );

  styleParagraph_(
    recipient,
    9,
    '#202020',
    false
  );

  recipient
    .setSpacingAfter(
      12
    );

  const greeting =
    body.appendParagraph(
      'Dengan hormat,'
    );

  styleParagraph_(
    greeting,
    9,
    '#202020',
    false
  );

  greeting.setSpacingAfter(
    7
  );

  const bodyText =
    String(
      record.ISI_SURAT ||
      ''
    )
    .trim();

  const paragraphs =
    bodyText
      ? bodyText.split(
          /\n\s*\n/g
        )
      : [
          'Demikian surat ini kami sampaikan.'
        ];

  paragraphs.forEach(
    text => {
      const p =
        body.appendParagraph(
          String(
            text
          )
          .trim()
        );

      p.setAlignment(
        DocumentApp
          .HorizontalAlignment
          .JUSTIFY
      );

      p
        .setLineSpacing(
          1.15
        )
        .setSpacingAfter(
          8
        )
        .setIndentFirstLine(
          24
        );

      styleParagraph_(
        p,
        9,
        '#202020',
        false
      );
    }
  );

  appendLetterSignersV81_(
    body,
    record
  );
}


function generateSecretaryLetterV81(
  payload,
  token) {
  assertFeatureV84_(token,'secretary');

  return withDocumentLock_(
    () => {
      payload =
        payload ||
        {};

      const categories =
        secretaryLetterCategoriesV81_();

      const category =
        String(
          payload.KATEGORI ||
          ''
        );

      const config =
        categories[
          category
        ];

      if (
        !config
      ) {
        throw new Error(
          'Kategori surat wajib dipilih.'
        );
      }

      const date =
        secretaryDatePartsV81_(
          payload.TANGGAL_SURAT ||
          Utilities.formatDate(
            new Date(),
            APP.TZ,
            'yyyy-MM-dd'
          )
        );

      const next =
        getNextLetterNumberV81(
          category,
          date.iso
        );

      const id =
        generateId_(
          'SRT'
        );

      const signer1File =
        saveLetterSignatureV81_(
          payload.SIGNER_1_DATA,
          id,
          1
        );

      const signer2File =
        saveLetterSignatureV81_(
          payload.SIGNER_2_DATA,
          id,
          2
        );

      const signer3File =
        saveLetterSignatureV81_(
          payload.SIGNER_3_DATA,
          id,
          3
        );

      const record = {
        ID_SURAT:
          id,
        TAHUN:
          date.year,
        TANGGAL_SURAT:
          date.iso,
        KATEGORI:
          category,
        KODE_KATEGORI:
          config.code,
        NOMOR_SURAT:
          next.number,
        LAMPIRAN:
          String(
            payload.LAMPIRAN ||
            '-'
          ),
        TUJUAN_NAMA:
          String(
            payload.TUJUAN_NAMA ||
            ''
          ),
        TUJUAN_JABATAN:
          String(
            payload.TUJUAN_JABATAN ||
            ''
          ),
        TUJUAN_INSTANSI:
          String(
            payload.TUJUAN_INSTANSI ||
            ''
          ),
        TUJUAN_ALAMAT:
          String(
            payload.TUJUAN_ALAMAT ||
            ''
          ),
        PERIHAL:
          String(
            payload.PERIHAL ||
            config.perihal ||
            ''
          ),
        SUBJEK_NAMA:
          String(
            payload.SUBJEK_NAMA ||
            ''
          ),
        SUBJEK_IDENTITAS:
          String(
            payload.SUBJEK_IDENTITAS ||
            ''
          ),
        KEPERLUAN:
          String(
            payload.KEPERLUAN ||
            ''
          ),
        TEMPAT_KEGIATAN:
          String(
            payload.TEMPAT_KEGIATAN ||
            ''
          ),
        TANGGAL_MULAI:
          String(
            payload.TANGGAL_MULAI ||
            ''
          ),
        TANGGAL_SELESAI:
          String(
            payload.TANGGAL_SELESAI ||
            ''
          ),
        ISI_SURAT:
          String(
            payload.ISI_SURAT ||
            ''
          ).trim() ||
          buildDefaultLetterBodyV81_(
            payload
          ),
        SIGNER_1_NAME:
          String(
            payload.SIGNER_1_NAME ||
            ''
          ),
        SIGNER_1_ROLE:
          String(
            payload.SIGNER_1_ROLE ||
            ''
          ),
        SIGNER_1_FILE_ID:
          signer1File,
        SIGNER_2_NAME:
          String(
            payload.SIGNER_2_NAME ||
            ''
          ),
        SIGNER_2_ROLE:
          String(
            payload.SIGNER_2_ROLE ||
            ''
          ),
        SIGNER_2_FILE_ID:
          signer2File,
        SIGNER_3_NAME:
          String(
            payload.SIGNER_3_NAME ||
            ''
          ),
        SIGNER_3_ROLE:
          String(
            payload.SIGNER_3_ROLE ||
            ''
          ),
        SIGNER_3_FILE_ID:
          signer3File,
        STATUS:
          'Terbit',
        CREATED_AT:
          new Date(),
        UPDATED_AT:
          new Date()
      };

      if (
        !record.TUJUAN_NAMA &&
        !record.TUJUAN_JABATAN &&
        !record.TUJUAN_INSTANSI
      ) {
        throw new Error(
          'Tujuan surat wajib diisi.'
        );
      }

      if (
        !record.PERIHAL
      ) {
        throw new Error(
          'Perihal wajib diisi.'
        );
      }

      const doc =
        DocumentApp.create(
          record.NOMOR_SURAT +
          ' - ' +
          record.PERIHAL
        );

      let pdfFile =
        null;

      try {
        buildSecretaryLetterDocV81_(
          doc,
          record
        );

        doc.saveAndClose();

        const fileName =
          'Surat_' +
          safeFilePart_(
            record.KODE_KATEGORI
          ) +
          '_' +
          record.TAHUN +
          '_' +
          String(
            next.sequence
          )
          .padStart(
            3,
            '0'
          ) +
          '.pdf';

        const pdfBlob =
          DriveApp
            .getFileById(
              doc.getId()
            )
            .getBlob()
            .getAs(
              MimeType.PDF
            )
            .setName(
              fileName
            );

        const parent =
          getOrCreateFolder_(
            getSettingSafe_(
              'LETTER_FOLDER_NAME'
            ) ||
            'MAJELIS GALILEA - SURAT KELUAR'
          );

        const yearFolder =
          getOrCreateSubFolder_(
            parent,
            String(
              record.TAHUN
            )
          );

        pdfFile =
          yearFolder.createFile(
            pdfBlob
          );

        record.PDF_FILE_ID =
          pdfFile.getId();

        record.PDF_URL =
          pdfFile.getUrl();

        const sheet =
          getSheet_(
            APP.SHEETS.SURAT
          );

        const headers =
          getHeaders_(
            sheet
          );

        sheet.appendRow(
          headers.map(
            header =>
              record[
                header
              ] !==
                undefined
                ? record[
                    header
                  ]
                : ''
          )
        );

        saveEntityCore_(
          'dokumen',
          {
            TAHUN:
              record.TAHUN,
            TANGGAL:
              record.TANGGAL_SURAT,
            KATEGORI:
              'Surat Keluar',
            JUDUL:
              record.PERIHAL,
            NOMOR_DOKUMEN:
              record.NOMOR_SURAT,
            DESKRIPSI:
              categories[
                record.KATEGORI
              ].label +
              ' - ' +
              (
                record.TUJUAN_INSTANSI ||
                record.TUJUAN_NAMA ||
                record.TUJUAN_JABATAN
              ),
            FILE_NAME:
              pdfFile.getName(),
            FILE_URL:
              pdfFile.getUrl(),
            FILE_ID:
              pdfFile.getId(),
            STATUS:
              'Aktif'
          }
        );

        audit_(
          'GENERATE_LETTER',
          'surat',
          record.ID_SURAT,
          record.NOMOR_SURAT +
          ' - ' +
          record.PERIHAL
        );

        return {
          success:
            true,
          id:
            record.ID_SURAT,
          number:
            record.NOMOR_SURAT,
          fileName:
            pdfFile.getName(),
          mimeType:
            'application/pdf',
          base64:
            Utilities.base64Encode(
              pdfBlob.getBytes()
            ),
          archiveUrl:
            pdfFile.getUrl(),
          record
        };
      }
      finally {
        try {
          DriveApp
            .getFileById(
              doc.getId()
            )
            .setTrashed(
              true
            );
        }
        catch (error) {
          console.log(
            error
          );
        }
      }
    }
  );
}


function downloadSecretaryLetterV81(
  id
) {
  const row =
    findObjectById_(
      APP.SHEETS.SURAT,
      'ID_SURAT',
      id
    );

  if (
    !row ||
    !row.PDF_FILE_ID
  ) {
    throw new Error(
      'File surat tidak ditemukan.'
    );
  }

  const file =
    DriveApp.getFileById(
      row.PDF_FILE_ID
    );

  const blob =
    file.getBlob();

  return {
    success:
      true,
    number:
      row.NOMOR_SURAT,
    fileName:
      file.getName(),
    mimeType:
      'application/pdf',
    base64:
      Utilities.base64Encode(
        blob.getBytes()
      )
  };
}


function deleteSecretaryLetterV81(
  id,
  token) {
  assertFeatureV84_(token,'secretary');

  return withDocumentLock_(
    () => {
      const sheet =
        getSheet_(
          APP.SHEETS.SURAT
        );

      const rowObject =
        findObjectById_(
          APP.SHEETS.SURAT,
          'ID_SURAT',
          id
        );

      if (
        !rowObject
      ) {
        throw new Error(
          'Surat tidak ditemukan.'
        );
      }

      const documentSheet =
        getSheet_(
          APP.SHEETS.DOKUMEN
        );

      const linkedDocuments =
        readSheet_(
          APP.SHEETS.DOKUMEN
        )
        .filter(
          item =>
            String(
              item.NOMOR_DOKUMEN ||
              ''
            ) ===
              String(
                rowObject.NOMOR_SURAT ||
                ''
              ) ||
            (
              rowObject.PDF_FILE_ID &&
              String(
                item.FILE_ID ||
                ''
              ) ===
              String(
                rowObject.PDF_FILE_ID
              )
            )
        );

      linkedDocuments
        .forEach(
          item => {
            const documentRow =
              findRowById_(
                documentSheet,
                'ID_DOKUMEN',
                item.ID_DOKUMEN
              );

            if (
              documentRow
            ) {
              documentSheet.deleteRow(
                documentRow
              );
            }
          }
        );

      [
        rowObject.PDF_FILE_ID,
        rowObject.SIGNER_1_FILE_ID,
        rowObject.SIGNER_2_FILE_ID,
        rowObject.SIGNER_3_FILE_ID
      ]
      .filter(Boolean)
      .forEach(
        trashFileSafe_
      );

      const row =
        findRowById_(
          sheet,
          'ID_SURAT',
          id
        );

      if (
        row
      ) {
        sheet.deleteRow(
          row
        );
      }

      audit_(
        'DELETE_LETTER',
        'surat',
        id,
        rowObject.NOMOR_SURAT ||
        ''
      );

      return {
        success:
          true
      };
    }
  );
}


/* ---------- BIRTHDAY CENTER ---------- */

function birthdayPartsV81_(
  value
) {
  if (
    !value
  ) {
    return null;
  }

  const text =
    String(
      value
    )
    .slice(
      0,
      10
    );

  const match =
    text.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

  if (
    !match
  ) {
    return null;
  }

  return {
    year:
      Number(
        match[1]
      ),
    month:
      Number(
        match[2]
      ),
    day:
      Number(
        match[3]
      )
  };
}


function getBirthdayCenterV81() {
  const todayText =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy-MM-dd'
    );

  const today =
    secretaryDatePartsV81_(
      todayText
    );

  const members =
    readSheet_(
      APP.SHEETS.JEMAAT
    )
    .filter(
      item =>
        String(
          item.STATUS ||
          'Aktif'
        ) ===
          'Aktif' &&
        item.TANGGAL_LAHIR
    )
    .map(
      item => {
        const birth =
          birthdayPartsV81_(
            item.TANGGAL_LAHIR
          );

        if (
          !birth
        ) {
          return null;
        }

        const age =
          today.year -
          birth.year;

        let next =
          new Date(
            today.year,
            birth.month -
            1,
            birth.day,
            12
          );

        const todayDate =
          new Date(
            today.year,
            today.month -
            1,
            today.day,
            12
          );

        if (
          next <
          todayDate
        ) {
          next =
            new Date(
              today.year +
              1,
              birth.month -
              1,
              birth.day,
              12
            );
        }

        const daysUntil =
          Math.round(
            (
              next.getTime() -
              todayDate.getTime()
            ) /
            86400000
          );

        return {
          id:
            item.ID_ANGGOTA,
          name:
            memberFullNameV82_(
              item
            ),
          family:
            item.NAMA_KELUARGA ||
            item.KELUARGA ||
            '',
          birthDate:
            item.TANGGAL_LAHIR,
          month:
            birth.month,
          day:
            birth.day,
          turningAge:
            age,
          isToday:
            birth.month ===
              today.month &&
            birth.day ===
              today.day,
          daysUntil
        };
      }
    )
    .filter(Boolean);

  const todayBirthdays =
    members
      .filter(
        item =>
          item.isToday
      )
      .sort(
        (
          a,
          b
        ) =>
          a.name.localeCompare(
            b.name,
            'id'
          )
      );

  const thisMonth =
    members
      .filter(
        item =>
          item.month ===
          today.month
      )
      .sort(
        (
          a,
          b
        ) =>
          a.day -
            b.day ||
          a.name.localeCompare(
            b.name,
            'id'
          )
      );

  const upcoming =
    members
      .filter(
        item =>
          !item.isToday
      )
      .sort(
        (
          a,
          b
        ) =>
          a.daysUntil -
          b.daysUntil
      )
      .slice(
        0,
        8
      );

  return {
    date:
      todayText,
    year:
      today.year,
    month:
      today.month,
    monthLabel:
      financeMonthLabelV8_(
        today.month
      ),
    today:
      todayBirthdays,
    thisMonth,
    upcoming
  };
}


function testSecretaryLetterPdfV81_() {
  const doc =
    DocumentApp.create(
      'MG V8.1 Letter Self Test'
    );

  try {
    buildSecretaryLetterDocV81_(
      doc,
      {
        TANGGAL_SURAT:
          Utilities.formatDate(
            new Date(),
            APP.TZ,
            'yyyy-MM-dd'
          ),
        NOMOR_SURAT:
          '001/TST/GMAHK-GLA/VIII/' +
          currentYear_(),
        LAMPIRAN:
          '-',
        PERIHAL:
          'Self Test Generator Surat',
        TUJUAN_JABATAN:
          'Pimpinan',
        TUJUAN_NAMA:
          '',
        TUJUAN_INSTANSI:
          'Instansi Tujuan',
        TUJUAN_ALAMAT:
          'Balikpapan',
        ISI_SURAT:
          'Ini adalah pengujian otomatis generator surat MAJELIS GALILEA. Dokumen ini hanya digunakan untuk memastikan header, footer, isi surat, dan blok tanda tangan dapat dibuat oleh Google Docs.',
        SIGNER_1_NAME:
          'Sekretaris',
        SIGNER_1_ROLE:
          'Sekretaris Jemaat',
        SIGNER_1_FILE_ID:
          '',
        SIGNER_2_NAME:
          'Ketua',
        SIGNER_2_ROLE:
          'Ketua Jemaat',
        SIGNER_2_FILE_ID:
          '',
        SIGNER_3_NAME:
          '',
        SIGNER_3_ROLE:
          '',
        SIGNER_3_FILE_ID:
          ''
      }
    );

    doc.saveAndClose();

    const bytes =
      DriveApp
        .getFileById(
          doc.getId()
        )
        .getBlob()
        .getAs(
          MimeType.PDF
        )
        .getBytes();

    return bytes.length >
      500;
  }
  finally {
    try {
      DriveApp
        .getFileById(
          doc.getId()
        )
        .setTrashed(
          true
        );
    }
    catch (error) {
      console.log(
        error
      );
    }
  }
}


function runSecretaryBirthdaySelfTestV81() {
  setupDatabase();

  const today =
    Utilities.formatDate(
      new Date(),
      APP.TZ,
      'yyyy-MM-dd'
    );

  const categories =
    secretaryLetterCategoriesV81_();

  const next =
    getNextLetterNumberV81(
      'SEKOLAH',
      today
    );

  const template =
    getSecretaryLetterTemplateV81({
      KATEGORI:
        'SEKOLAH',
      SUBJEK_NAMA:
        'Nama Siswa',
      KEPERLUAN:
        'kegiatan gereja'
    });

  const birthdays =
    getBirthdayCenterV81();

  const pdfOk =
    testSecretaryLetterPdfV81_();

  const result = {
    version:
      APP.VERSION,
    categories:
      Object.keys(
        categories
      ).length >=
      5,
    number:
      /^\d{3}\/SKL\/.+\/[IVX]+\/\d{4}$/
        .test(
          next.number
        ),
    template:
      Boolean(
        template &&
        template.body &&
        template.perihal
      ),
    birthdays:
      Boolean(
        birthdays &&
        Array.isArray(
          birthdays.today
        ) &&
        Array.isArray(
          birthdays.thisMonth
        )
      ),
    pdf:
      pdfOk,
    success:
      false
  };

  result.success =
    result.categories &&
    result.number &&
    result.template &&
    result.birthdays &&
    result.pdf;

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (
    !result.success
  ) {
    throw new Error(
      'Secretary & Birthday Self Test V8.1 gagal.'
    );
  }

  return result;
}





/* =========================================================
   MAJELIS GALILEA V8.2 — MEMBERSHIP IDENTITY SUITE
========================================================= */

function exportStampV82_() {
  return (
    getSettingSafe_(
      'EXPORT_STAMP_TEXT'
    ) ||
    'diunduh dari website Majelis Galilea'
  );
}


function memberFamilyNameV82_(
  item
) {
  return String(
    item.NAMA_KELUARGA ||
    item.KELUARGA ||
    ''
  )
  .replace(
    /^keluarga\s+/i,
    ''
  )
  .trim();
}


function memberFullNameV82_(
  item
) {
  const name =
    String(
      item.NAMA ||
      ''
    )
    .trim();

  const family =
    memberFamilyNameV82_(
      item
    );

  if (
    !family
  ) {
    return name;
  }

  if (
    name
      .toLowerCase()
      .endsWith(
        family.toLowerCase()
      )
  ) {
    return name;
  }

  return (
    name +
    ' ' +
    family
  )
  .trim();
}


function memberRoleOrderV82_(
  role
) {
  return {
    Ayah:
      1,
    Ibu:
      2,
    Anak:
      3
  }[
    role
  ] ||
  99;
}


function fileDataUrlV82_(
  fileId
) {
  if (
    !fileId
  ) {
    return '';
  }

  try {
    const blob =
      DriveApp
        .getFileById(
          fileId
        )
        .getBlob();

    return (
      'data:' +
      (
        blob.getContentType() ||
        'image/png'
      ) +
      ';base64,' +
      Utilities.base64Encode(
        blob.getBytes()
      )
    );
  }
  catch (error) {
    console.log(
      error
    );

    return '';
  }
}


function memberIdentityObjectV82_(
  item,
  includePhoto
) {
  const family =
    memberFamilyNameV82_(
      item
    );

  return {
    id:
      item.ID_ANGGOTA,
    memberNumber:
      item.NOMOR_ANGGOTA ||
      '',
    name:
      item.NAMA ||
      '',
    familyName:
      family,
    fullName:
      memberFullNameV82_(
        item
      ),
    familyRole:
      item.POSISI_KELUARGA ||
      '',
    birthPlace:
      item.TEMPAT_LAHIR ||
      '',
    birthDate:
      item.TANGGAL_LAHIR ||
      '',
    baptismDate:
      item.TANGGAL_BAPTIS ||
      '',
    joinedDate:
      item.TANGGAL_BERGABUNG ||
      '',
    phone:
      item.NO_TELEPON ||
      item.NO_WHATSAPP ||
      '',
    whatsapp:
      item.NO_WHATSAPP ||
      '',
    email:
      item.EMAIL ||
      '',
    address:
      item.ALAMAT ||
      '',
    status:
      item.STATUS ||
      'Aktif',
    photoUrl:
      item.FOTO_URL ||
      '',
    photoDataUrl:
      includePhoto
        ? fileDataUrlV82_(
            item.FOTO_FILE_ID
          )
        : ''
  };
}


function getMembershipFamiliesV82() {
  const rows =
    readSheet_(
      APP.SHEETS.JEMAAT
    );

  const map = {};

  rows.forEach(
    item => {
      const family =
        memberFamilyNameV82_(
          item
        );

      if (
        !family
      ) {
        return;
      }

      if (
        !map[
          family
        ]
      ) {
        map[
          family
        ] = {
          familyName:
            family,
          total:
            0,
          active:
            0,
          father:
            '',
          mother:
            ''
        };
      }

      map[
        family
      ].total++;

      if (
        String(
          item.STATUS ||
          'Aktif'
        ) ===
        'Aktif'
      ) {
        map[
          family
        ].active++;
      }

      if (
        item.POSISI_KELUARGA ===
        'Ayah'
      ) {
        map[
          family
        ].father =
          memberFullNameV82_(
            item
          );
      }

      if (
        item.POSISI_KELUARGA ===
        'Ibu'
      ) {
        map[
          family
        ].mother =
          memberFullNameV82_(
            item
          );
      }
    }
  );

  return Object
    .values(
      map
    )
    .sort(
      (
        a,
        b
      ) =>
        a.familyName.localeCompare(
          b.familyName,
          'id'
        )
    );
}


function getMemberIdentityDataV82(
  id
) {
  const item =
    findObjectById_(
      APP.SHEETS.JEMAAT,
      'ID_ANGGOTA',
      id
    );

  if (
    !item
  ) {
    throw new Error(
      'Anggota jemaat tidak ditemukan.'
    );
  }

  return {
    type:
      'member',
    church:
      getSettingSafe_(
        'CHURCH_NAME'
      ) ||
      'GMAHK Galilea Balikpapan',
    cardTitle:
      getSettingSafe_(
        'MEMBER_CARD_TITLE'
      ) ||
      'KARTU IDENTITAS JEMAAT',
    exportStamp:
      exportStampV82_(),
    logoDataUrl:
      fileDataUrlV82_(
        getSettingSafe_(
          'LOGO_FILE_ID'
        )
      ),
    member:
      memberIdentityObjectV82_(
        item,
        true
      )
  };
}


function getFamilyIdentityDataV82(
  familyName
) {
  familyName =
    String(
      familyName ||
      ''
    )
    .trim();

  if (
    !familyName
  ) {
    throw new Error(
      'Nama keluarga belum dipilih.'
    );
  }

  const rows =
    readSheet_(
      APP.SHEETS.JEMAAT
    )
    .filter(
      item =>
        memberFamilyNameV82_(
          item
        )
        .toLowerCase() ===
        familyName.toLowerCase()
    )
    .sort(
      (
        a,
        b
      ) =>
        memberRoleOrderV82_(
          a.POSISI_KELUARGA
        ) -
          memberRoleOrderV82_(
            b.POSISI_KELUARGA
          ) ||
        memberFullNameV82_(
          a
        )
        .localeCompare(
          memberFullNameV82_(
            b
          ),
          'id'
        )
    );

  if (
    !rows.length
  ) {
    throw new Error(
      'Data keluarga tidak ditemukan.'
    );
  }

  return {
    type:
      'family',
    church:
      getSettingSafe_(
        'CHURCH_NAME'
      ) ||
      'GMAHK Galilea Balikpapan',
    cardTitle:
      getSettingSafe_(
        'FAMILY_CARD_TITLE'
      ) ||
      'KARTU KELUARGA JEMAAT',
    familyName:
      memberFamilyNameV82_(
        rows[0]
      ),
    exportStamp:
      exportStampV82_(),
    logoDataUrl:
      fileDataUrlV82_(
        getSettingSafe_(
          'LOGO_FILE_ID'
        )
      ),
    members:
      rows.map(
        item =>
          memberIdentityObjectV82_(
            item,
            true
          )
      )
  };
}


function addIdentityExportFooterV82_(
  doc
) {
  const footer =
    doc.addFooter();

  const line =
    footer.appendTable([
      ['']
    ]);

  line.setBorderWidth(
    0
  );

  line
    .getRow(0)
    .getCell(0)
    .setBackgroundColor(
      '#650A15'
    )
    .setPaddingTop(
      0
    )
    .setPaddingBottom(
      0
    )
    .setText(
      ''
    );

  const p =
    footer.appendParagraph(
      exportStampV82_()
    );

  p.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    p,
    6.5,
    '#7E7073',
    false
  );
}


function appendIdentityLogoV82_(
  cell
) {
  const logoId =
    getSettingSafe_(
      'LOGO_FILE_ID'
    );

  if (
    logoId
  ) {
    try {
      const image =
        cell.appendImage(
          DriveApp
            .getFileById(
              logoId
            )
            .getBlob()
        );

      image
        .setWidth(
          48
        )
        .setHeight(
          48
        );

      return;
    }
    catch (error) {
      console.log(
        error
      );
    }
  }

  const fallback =
    cell.appendParagraph(
      'MG'
    );

  fallback.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    fallback,
    12,
    '#FFFFFF',
    true
  );
}


function appendMemberPhotoPdfV82_(
  cell,
  item,
  width,
  height
) {
  if (
    item.FOTO_FILE_ID
  ) {
    try {
      const image =
        cell.appendImage(
          DriveApp
            .getFileById(
              item.FOTO_FILE_ID
            )
            .getBlob()
        );

      image
        .setWidth(
          width
        )
        .setHeight(
          height
        );

      return;
    }
    catch (error) {
      console.log(
        error
      );
    }
  }

  const p =
    cell.appendParagraph(
      memberFullNameV82_(
        item
      )
      .split(/\s+/)
      .slice(0,2)
      .map(
        word =>
          word.charAt(0)
      )
      .join('')
      .toUpperCase()
    );

  p.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    p,
    17,
    '#650A15',
    true
  );
}


function buildMemberIdentityPdfV82_(
  doc,
  item
) {
  const body =
    doc.getBody();

  body
    .setMarginTop(
      34
    )
    .setMarginBottom(
      45
    )
    .setMarginLeft(
      38
    )
    .setMarginRight(
      38
    );

  addIdentityExportFooterV82_(
    doc
  );

  const church =
    getSettingSafe_(
      'CHURCH_NAME'
    ) ||
    'GMAHK Galilea Balikpapan';

  const hero =
    body.appendTable([
      [
        '',
        ''
      ]
    ]);

  hero
    .setBorderWidth(
      0
    );

  const logo =
    hero
      .getRow(0)
      .getCell(0);

  const title =
    hero
      .getRow(0)
      .getCell(1);

  logo
    .setBackgroundColor(
      '#650A15'
    )
    .setPaddingTop(
      13
    )
    .setPaddingBottom(
      13
    )
    .setPaddingLeft(
      13
    )
    .setPaddingRight(
      13
    );

  logo.clear();

  appendIdentityLogoV82_(
    logo
  );

  title
    .setBackgroundColor(
      '#650A15'
    )
    .setPaddingTop(
      13
    )
    .setPaddingBottom(
      13
    )
    .setPaddingLeft(
      8
    )
    .setPaddingRight(
      13
    );

  title.clear();

  const kicker =
    title.appendParagraph(
      getSettingSafe_(
        'MEMBER_CARD_TITLE'
      ) ||
      'KARTU IDENTITAS JEMAAT'
    );

  styleParagraph_(
    kicker,
    7,
    '#E9C9CE',
    true
  );

  const churchP =
    title.appendParagraph(
      church
    );

  styleParagraph_(
    churchP,
    13,
    '#FFFFFF',
    true
  );

  churchP.setSpacingBefore(
    3
  );

  body
    .appendParagraph('')
    .setSpacingAfter(
      4
    );

  const card =
    body.appendTable([
      [
        '',
        ''
      ]
    ]);

  card
    .setBorderColor(
      '#E2D2D5'
    )
    .setBorderWidth(
      .8
    );

  const photoCell =
    card
      .getRow(0)
      .getCell(0);

  const infoCell =
    card
      .getRow(0)
      .getCell(1);

  photoCell
    .setBackgroundColor(
      '#F4EAEC'
    )
    .setPaddingTop(
      16
    )
    .setPaddingBottom(
      16
    )
    .setPaddingLeft(
      14
    )
    .setPaddingRight(
      14
    );

  photoCell.clear();

  appendMemberPhotoPdfV82_(
    photoCell,
    item,
    112,
    142
  );

  infoCell
    .setPaddingTop(
      14
    )
    .setPaddingBottom(
      14
    )
    .setPaddingLeft(
      15
    )
    .setPaddingRight(
      15
    );

  infoCell.clear();

  const name =
    infoCell.appendParagraph(
      memberFullNameV82_(
        item
      )
    );

  styleParagraph_(
    name,
    17,
    '#650A15',
    true
  );

  name.setSpacingAfter(
    3
  );

  const meta =
    infoCell.appendParagraph(
      [
        item.NOMOR_ANGGOTA
          ? (
              'No. Anggota ' +
              item.NOMOR_ANGGOTA
            )
          : '',
        memberFamilyNameV82_(
          item
        )
          ? (
              'Keluarga ' +
              memberFamilyNameV82_(
                item
              )
            )
          : '',
        item.POSISI_KELUARGA ||
        ''
      ]
      .filter(Boolean)
      .join(
        ' · '
      )
    );

  styleParagraph_(
    meta,
    8,
    '#776A6D',
    false
  );

  meta.setSpacingAfter(
    10
  );

  const pairs = [
    [
      'Tempat / Tanggal Lahir',
      [
        item.TEMPAT_LAHIR,
        item.TANGGAL_LAHIR
          ? formatDatePdf_(
              item.TANGGAL_LAHIR
            )
          : ''
      ]
      .filter(Boolean)
      .join(', ') ||
      '-'
    ],
    [
      'Nomor Telepon',
      item.NO_TELEPON ||
      item.NO_WHATSAPP ||
      '-'
    ],
    [
      'Alamat',
      item.ALAMAT ||
      '-'
    ],
    [
      'Tanggal Baptis',
      item.TANGGAL_BAPTIS
        ? formatDatePdf_(
            item.TANGGAL_BAPTIS
          )
        : '-'
    ],
    [
      'Tanggal Bergabung',
      item.TANGGAL_BERGABUNG
        ? formatDatePdf_(
            item.TANGGAL_BERGABUNG
          )
        : '-'
    ],
    [
      'Status',
      item.STATUS ||
      'Aktif'
    ]
  ];

  pairs.forEach(
    pair => {
      const label =
        infoCell.appendParagraph(
          pair[0]
        );

      styleParagraph_(
        label,
        6.5,
        '#9A888C',
        true
      );

      label.setSpacingBefore(
        4
      );

      const value =
        infoCell.appendParagraph(
          pair[1]
        );

      styleParagraph_(
        value,
        8.5,
        '#2A2325',
        false
      );
    }
  );

  const note =
    body.appendParagraph(
      'Kartu ini merupakan identitas administrasi internal jemaat dan bukan dokumen identitas pemerintah.'
    );

  note.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    note,
    6.5,
    '#8B7C7F',
    false
  );

  note.setSpacingBefore(
    10
  );
}


function generateMemberIdentityPdfV82(
  id
) {
  const item =
    findObjectById_(
      APP.SHEETS.JEMAAT,
      'ID_ANGGOTA',
      id
    );

  if (
    !item
  ) {
    throw new Error(
      'Anggota jemaat tidak ditemukan.'
    );
  }

  const fileName =
    'Kartu_Jemaat_' +
    safeFilePart_(
      memberFullNameV82_(
        item
      )
    ) +
    '.pdf';

  const doc =
    DocumentApp.create(
      fileName
        .replace(
          /\.pdf$/i,
          ''
        )
    );

  try {
    buildMemberIdentityPdfV82_(
      doc,
      item
    );

    doc.saveAndClose();

    const blob =
      DriveApp
        .getFileById(
          doc.getId()
        )
        .getBlob()
        .getAs(
          MimeType.PDF
        )
        .setName(
          fileName
        );

    return {
      success:
        true,
      fileName,
      mimeType:
        'application/pdf',
      base64:
        Utilities.base64Encode(
          blob.getBytes()
        )
    };
  }
  finally {
    try {
      DriveApp
        .getFileById(
          doc.getId()
        )
        .setTrashed(
          true
        );
    }
    catch (error) {
      console.log(
        error
      );
    }
  }
}


function buildFamilyIdentityPdfV82_(
  doc,
  familyName,
  members
) {
  const body =
    doc.getBody();

  body
    .setMarginTop(
      34
    )
    .setMarginBottom(
      45
    )
    .setMarginLeft(
      38
    )
    .setMarginRight(
      38
    );

  addIdentityExportFooterV82_(
    doc
  );

  const header =
    body.appendTable([
      [
        '',
        ''
      ]
    ]);

  header.setBorderWidth(
    0
  );

  const logo =
    header
      .getRow(0)
      .getCell(0);

  const heading =
    header
      .getRow(0)
      .getCell(1);

  logo
    .setBackgroundColor(
      '#650A15'
    )
    .setPaddingTop(
      12
    )
    .setPaddingBottom(
      12
    )
    .setPaddingLeft(
      12
    )
    .setPaddingRight(
      12
    );

  logo.clear();

  appendIdentityLogoV82_(
    logo
  );

  heading
    .setBackgroundColor(
      '#650A15'
    )
    .setPaddingTop(
      12
    )
    .setPaddingBottom(
      12
    )
    .setPaddingLeft(
      8
    )
    .setPaddingRight(
      12
    );

  heading.clear();

  const kicker =
    heading.appendParagraph(
      getSettingSafe_(
        'FAMILY_CARD_TITLE'
      ) ||
      'KARTU KELUARGA JEMAAT'
    );

  styleParagraph_(
    kicker,
    7,
    '#E9C9CE',
    true
  );

  const title =
    heading.appendParagraph(
      'Keluarga ' +
      familyName
    );

  styleParagraph_(
    title,
    16,
    '#FFFFFF',
    true
  );

  body
    .appendParagraph('')
    .setSpacingAfter(
      4
    );

  const summary =
    body.appendParagraph(
      String(
        members.length
      ) +
      ' anggota keluarga · ' +
      (
        getSettingSafe_(
          'CHURCH_NAME'
        ) ||
        'GMAHK Galilea Balikpapan'
      )
    );

  styleParagraph_(
    summary,
    8,
    '#75686B',
    false
  );

  summary.setSpacingAfter(
    9
  );

  members.forEach(
    (
      item,
      index
    ) => {
      const card =
        body.appendTable([
          [
            '',
            ''
          ]
        ]);

      card
        .setBorderColor(
          '#E4D7D9'
        )
        .setBorderWidth(
          .6
        );

      const photo =
        card
          .getRow(0)
          .getCell(0);

      const info =
        card
          .getRow(0)
          .getCell(1);

      photo
        .setBackgroundColor(
          index %
            2 ===
            0
            ? '#F5EBED'
            : '#F8F4F2'
        )
        .setPaddingTop(
          9
        )
        .setPaddingBottom(
          9
        )
        .setPaddingLeft(
          9
        )
        .setPaddingRight(
          9
        );

      photo.clear();

      appendMemberPhotoPdfV82_(
        photo,
        item,
        68,
        82
      );

      info
        .setPaddingTop(
          9
        )
        .setPaddingBottom(
          9
        )
        .setPaddingLeft(
          11
        )
        .setPaddingRight(
          11
        );

      info.clear();

      const name =
        info.appendParagraph(
          memberFullNameV82_(
            item
          )
        );

      styleParagraph_(
        name,
        11,
        '#650A15',
        true
      );

      const role =
        info.appendParagraph(
          [
            item.POSISI_KELUARGA ||
            '',
            item.NOMOR_ANGGOTA
              ? (
                  'No. ' +
                  item.NOMOR_ANGGOTA
                )
              : '',
            item.STATUS ||
            ''
          ]
          .filter(Boolean)
          .join(
            ' · '
          )
        );

      styleParagraph_(
        role,
        7,
        '#837477',
        false
      );

      role.setSpacingAfter(
        5
      );

      const detail =
        info.appendParagraph(
          [
            [
              item.TEMPAT_LAHIR,
              item.TANGGAL_LAHIR
                ? formatDatePdf_(
                    item.TANGGAL_LAHIR
                  )
                : ''
            ]
            .filter(Boolean)
            .join(', '),
            item.NO_TELEPON ||
            item.NO_WHATSAPP ||
            '',
            item.ALAMAT ||
            ''
          ]
          .filter(Boolean)
          .join(
            '  ·  '
          )
        );

      styleParagraph_(
        detail,
        7.5,
        '#353033',
        false
      );

      body
        .appendParagraph('')
        .setSpacingAfter(
          2
        );
    }
  );

  const note =
    body.appendParagraph(
      'Dokumen keluarga ini merupakan kartu administrasi internal GMAHK Galilea Balikpapan dan bukan Kartu Keluarga pemerintah.'
    );

  note.setAlignment(
    DocumentApp
      .HorizontalAlignment
      .CENTER
  );

  styleParagraph_(
    note,
    6.5,
    '#8B7C7F',
    false
  );
}


function generateFamilyIdentityPdfV82(
  familyName
) {
  familyName =
    String(
      familyName ||
      ''
    )
    .trim();

  const members =
    readSheet_(
      APP.SHEETS.JEMAAT
    )
    .filter(
      item =>
        memberFamilyNameV82_(
          item
        )
        .toLowerCase() ===
        familyName.toLowerCase()
    )
    .sort(
      (
        a,
        b
      ) =>
        memberRoleOrderV82_(
          a.POSISI_KELUARGA
        ) -
          memberRoleOrderV82_(
            b.POSISI_KELUARGA
          ) ||
        memberFullNameV82_(
          a
        )
        .localeCompare(
          memberFullNameV82_(
            b
          ),
          'id'
        )
    );

  if (
    !members.length
  ) {
    throw new Error(
      'Keluarga tidak ditemukan.'
    );
  }

  const fileName =
    'Kartu_Keluarga_Jemaat_' +
    safeFilePart_(
      familyName
    ) +
    '.pdf';

  const doc =
    DocumentApp.create(
      fileName
        .replace(
          /\.pdf$/i,
          ''
        )
    );

  try {
    buildFamilyIdentityPdfV82_(
      doc,
      familyName,
      members
    );

    doc.saveAndClose();

    const blob =
      DriveApp
        .getFileById(
          doc.getId()
        )
        .getBlob()
        .getAs(
          MimeType.PDF
        )
        .setName(
          fileName
        );

    return {
      success:
        true,
      fileName,
      mimeType:
        'application/pdf',
      base64:
        Utilities.base64Encode(
          blob.getBytes()
        )
    };
  }
  finally {
    try {
      DriveApp
        .getFileById(
          doc.getId()
        )
        .setTrashed(
          true
        );
    }
    catch (error) {
      console.log(
        error
      );
    }
  }
}


function testMembershipIdentityPdfV82_() {
  const doc =
    DocumentApp.create(
      'MG V8.2 Membership Identity Self Test'
    );

  const fake = {
    ID_ANGGOTA:
      'TEST',
    NOMOR_ANGGOTA:
      '0001',
    NAMA:
      'Nama',
    NAMA_KELUARGA:
      'Keluarga',
    KELUARGA:
      'Keluarga',
    POSISI_KELUARGA:
      'Ayah',
    TEMPAT_LAHIR:
      'Balikpapan',
    TANGGAL_LAHIR:
      '1990-01-01',
    TANGGAL_BAPTIS:
      '2010-01-01',
    TANGGAL_BERGABUNG:
      '2010-01-01',
    NO_TELEPON:
      '0800000000',
    ALAMAT:
      'Balikpapan',
    FOTO_FILE_ID:
      '',
    STATUS:
      'Aktif'
  };

  try {
    buildMemberIdentityPdfV82_(
      doc,
      fake
    );

    doc.saveAndClose();

    return DriveApp
      .getFileById(
        doc.getId()
      )
      .getBlob()
      .getAs(
        MimeType.PDF
      )
      .getBytes()
      .length >
      500;
  }
  finally {
    try {
      DriveApp
        .getFileById(
          doc.getId()
        )
        .setTrashed(
          true
        );
    }
    catch (error) {
      console.log(
        error
      );
    }
  }
}


function runMembershipIdentitySelfTestV82() {
  setupDatabase();

  const headers =
    getHeaders_(
      getSheet_(
        APP.SHEETS.JEMAAT
      )
    );

  const required = [
    'NAMA',
    'NAMA_KELUARGA',
    'POSISI_KELUARGA',
    'TEMPAT_LAHIR',
    'TANGGAL_LAHIR',
    'NO_TELEPON',
    'ALAMAT'
  ];

  const result = {
    version:
      APP.VERSION,
    schema:
      required.every(
        header =>
          headers.includes(
            header
          )
      ),
    families:
      Array.isArray(
        getMembershipFamiliesV82()
      ),
    name:
      memberFullNameV82_({
        NAMA:
          'Kevin Oloan',
        NAMA_KELUARGA:
          'Simatupang'
      }) ===
      'Kevin Oloan Simatupang',
    exportStamp:
      exportStampV82_() ===
      'diunduh dari website Majelis Galilea',
    pdf:
      testMembershipIdentityPdfV82_(),
    success:
      false
  };

  result.success =
    result.schema &&
    result.families &&
    result.name &&
    result.exportStamp &&
    result.pdf;

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (
    !result.success
  ) {
    throw new Error(
      'Membership Identity Self Test V8.2 gagal.'
    );
  }

  return result;
}




function runBackendFinalCheck() {
  const started =
    Date.now();

  validateAppConfig_();

  const crud =
    runCrudAlignmentSelfTestV83();

  const year =
    currentYear_();

  const data =
    getAppData({
      year
    });

  const result = {
    version:
      APP.VERSION,
    mode:
      'FAST',
    crud:
      crud.success,
    bootstrap:
      Boolean(
        data &&
        data.summary &&
        Array.isArray(
          data.notulen
        ) &&
        Array.isArray(
          data.jemaat
        ) &&
        Array.isArray(
          data.keuangan
        )
      ),
    year:
      year,
    durationMs:
      Date.now() -
      started,
    success:
      false
  };

  result.success =
    result.crud &&
    result.bootstrap;

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (!result.success) {
    throw new Error(
      'Backend Final Check V8.3 gagal.'
    );
  }

  return result;
}


function runFullSystemStressTestV83() {
  /*
   * Final check selalu memastikan schema lama sudah dimigrasikan.
   */
  setupDatabase();

  const result = {
    version:
      APP.VERSION,
    diagnostics:
      null,
    selfTest:
      null,
    modularApi:
      null,
    featureSuite:
      null,
    financeSuite:
      null,
    secretaryBirthdaySuite:
      null,
    membershipIdentitySuite:
      null,
    success:
      false
  };

  result.diagnostics =
    runBackendDiagnostics();

  result.selfTest =
    runBackendSelfTest();

  result.featureSuite =
    runFeatureSelfTestV7();

  result.financeSuite =
    runFinanceSuiteSelfTestV8();

  result.secretaryBirthdaySuite =
    runSecretaryBirthdaySelfTestV81();

  result.membershipIdentitySuite =
    runMembershipIdentitySelfTestV82();

  const year =
    currentYear_();

  const bootstrap =
    getBootstrapData({
      year
    });

  const dashboard =
    getDashboardData(
      year
    );

  const options =
    getFormOptions(
      year
    );

  const pages = [
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
    'dokumen',
    'departemen',
    'kalender'
  ];

  const pageResults = {};

  pages.forEach(
    page => {
      const response =
        getPageData(
          page,
          year,
          {
            limit: 5
          }
        );

      pageResults[page] =
        response &&
        Array.isArray(
          response.rows
        );
    }
  );

  result.modularApi = {
    bootstrap:
      Boolean(
        bootstrap &&
        bootstrap.app &&
        bootstrap.years
      ),
    dashboard:
      Boolean(
        dashboard &&
        dashboard.summary
      ),
    formOptions:
      Boolean(
        options &&
        options.sources &&
        options.notulen
      ),
    pages:
      pageResults
  };

  result.success =
    result.diagnostics.success &&
    result.selfTest.success &&
    result.featureSuite.success &&
    result.financeSuite.success &&
    result.secretaryBirthdaySuite.success &&
    result.membershipIdentitySuite.success &&
    result.modularApi.bootstrap &&
    result.modularApi.dashboard &&
    result.modularApi.formOptions &&
    Object.values(
      result.modularApi.pages
    )
    .every(Boolean);

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
  );

  if (!result.success) {
    throw new Error(
      'Full System Stress Test V8.3 gagal. Lihat Execution log.'
    );
  }

  return result;
}
