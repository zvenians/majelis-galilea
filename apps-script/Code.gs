/* MAJELIS GALILEA BACKEND V6.0.0 — SINGLE FILE */

const GOOGLE_CLIENT_ID = "152249823054-gtalq11ff14re7cpnas3dktaf7u4t432.apps.googleusercontent.com";
const SUPERADMIN_EMAIL = "simatupangkevin9@gmail.com";

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
      'CREATED_AT','UPDATED_AT','LAST_LOGIN','LEVEL','PASSWORD_HASH','AUTH_PROVIDER','GOOGLE_EMAIL'
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
      fixAksesRoleV85: fixAksesRoleV85,
      migrateAuthV85: migrateAuthV85,
      loginMajelisV84: loginMajelisV84,
      loginGoogleV85: loginGoogleV85,
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
function loginGoogleV85(idToken) {
  if (!idToken) throw new Error('Token tidak valid.');
  try {
    const res = UrlFetchApp.fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + idToken);
    const data = JSON.parse(res.getContentText());
    if (data.aud !== GOOGLE_CLIENT_ID) throw new Error('Unrecognized client.');
    if (data.email !== SUPERADMIN_EMAIL) throw new Error('Email tidak diizinkan. Hanya ' + SUPERADMIN_EMAIL + ' yang diizinkan sebagai SUPERADMIN.');
    if (data.email_verified !== 'true' && data.email_verified !== true) throw new Error('Email belum diverifikasi oleh Google.');
    
    const token = (Utilities.getUuid() + Utilities.getUuid()).replace(/-/g, '');
    const user = {
      id: 'SA-01',
      username: 'superadmin',
      name: data.name || 'Superadmin',
      role: 'SUPERADMIN',
      ROLE: 'SUPERADMIN',
      AUTH_PROVIDER: 'GOOGLE',
      GOOGLE_EMAIL: data.email,
      permissions: rolePermissionMatrixV84_()['SUPERADMIN']
    };
    
    authCacheV84_().put(authKeyV84_(token), JSON.stringify(user), 21600);
    return { success: true, token: token, user: user };
  } catch (e) {
    throw new Error('Google Login gagal: ' + e.message);
  }
}
function loginMajelisV84(username,pin){
  username=String(username||'').trim().toLowerCase();
  const u=readSheet_(APP.SHEETS.ACCESS).find(x=>String(x.USERNAME||'').trim().toLowerCase()===username&&String(x.STATUS||'Aktif')==='Aktif');
  const hashed = hashPinV84_(username,pin);
  if(!u || (u.PASSWORD_HASH !== hashed && u.PIN_HASH !== hashed)) throw new Error('Username atau Password tidak valid.');
  if(u.ROLE === 'SUPERADMIN') throw new Error('SUPERADMIN harus menggunakan Google Login.');
  const token=(Utilities.getUuid()+Utilities.getUuid()).replace(/-/g,''),safe=safeRoleUserV84_(u);
  authCacheV84_().put(authKeyV84_(token),JSON.stringify(safe),21600);
  return {success:true,token,user:safe};
}
function getAuthContextV84(token){
  const raw=token&&authCacheV84_().get(authKeyV84_(token));
  if(!raw)return {authenticated:false};
  const user = JSON.parse(raw);
  if (user && user.ROLE) {
    const matrix = rolePermissionMatrixV84_();
    if (matrix[user.ROLE]) {
       user.permissions = matrix[user.ROLE];
    }
  }
  authCacheV84_().put(authKeyV84_(token), JSON.stringify(user), 21600);
  return {authenticated:true,user:user};
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

  const doc = DocumentApp.create(config.title);
  if (config.landscape) {
    doc.getBody().setPageHeight(595.276).setPageWidth(842.52);
  }

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

    let finalFileName = config.fileName.replace(/\s+/g, '-');
    if (!finalFileName.startsWith('Majelis-Galilea')) {
      finalFileName = 'Majelis-Galilea_' + finalFileName;
    }
    config.fileName = finalFileName;

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
          finalFileName
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

      landscape: true,
      fileName: 'Laporan_Keuangan_' + year + '.pdf',

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

      landscape: true,
      fileName: 'RAPBJ_' + year + '.pdf',

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

      landscape: true,
      fileName: 'Laporan_Inventaris.pdf',

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

      landscape: true,
      fileName: 'Daftar_Pengurus_Majelis.pdf',

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

      landscape: true,
      fileName: 'Daftar_Anggota_Jemaat.pdf',

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

      landscape: true,
      fileName: 'Rekap_Kehadiran_' + year + '.pdf',

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


const GALILEA_LOGO_BASE64_ = "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";

function getGalileaLogoBlob_() {
  return Utilities.newBlob(Utilities.base64Decode(GALILEA_LOGO_BASE64_), 'image/png', 'logo.png');
}

function buildPdfHeaderV9_(doc, title, kicker, isLetter = false) {
  const body = doc.getBody();
  body.setMarginTop(36).setMarginBottom(36).setMarginLeft(36).setMarginRight(36);

  const header = doc.addHeader();
  const headerTable = header.appendTable([['', '']]);
  headerTable.setBorderWidth(0);
  
  const logoCell = headerTable.getRow(0).getCell(0);
  const textCell = headerTable.getRow(0).getCell(1);
  
  logoCell.setWidth(50).setPaddingTop(0).setPaddingBottom(0).setPaddingLeft(0).setPaddingRight(0);
  const logoImg = logoCell.appendImage(getGalileaLogoBlob_());
  logoImg.setWidth(45).setHeight(45);
  
  textCell.setVerticalAlignment(DocumentApp.VerticalAlignment.CENTER)
          .setPaddingTop(0).setPaddingBottom(0).setPaddingLeft(10).setPaddingRight(0);
  
  if (isLetter) {
    const p1 = textCell.appendParagraph("GEREJA MASEHI ADVENT HARI KETUJUH");
    p1.setFontFamily('Helvetica').setFontSize(14).setBold(true).setForegroundColor('#000000').setSpacingAfter(0).setSpacingBefore(0);
    const p2 = textCell.appendParagraph("JEMAAT GALILEA BALIKPAPAN");
    p2.setFontFamily('Helvetica').setFontSize(12).setBold(true).setForegroundColor('#333333').setSpacingAfter(0).setSpacingBefore(0);
    const address = getSettingSafe_('CHURCH_ADDRESS') || 'Jl. Letjen Suprapto, Balikpapan';
    const p3 = textCell.appendParagraph(address);
    p3.setFontFamily('Helvetica').setFontSize(9).setBold(false).setForegroundColor('#666666').setSpacingAfter(0).setSpacingBefore(0);
  } else {
    const p1 = textCell.appendParagraph("MAJELIS GALILEA");
    p1.setFontFamily('Helvetica').setFontSize(14).setBold(true).setForegroundColor('#000000').setSpacingAfter(0).setSpacingBefore(0);
    const p2 = textCell.appendParagraph("GMAHK Jemaat Galilea Balikpapan");
    p2.setFontFamily('Helvetica').setFontSize(10).setBold(false).setForegroundColor('#555555').setSpacingAfter(0).setSpacingBefore(0);
  }
  
  header.appendHorizontalRule().setForegroundColor('#CCCCCC');
  
  if (kicker && !isLetter) {
    const kPara = body.appendParagraph(kicker.toUpperCase());
    kPara.setFontFamily('Helvetica').setFontSize(14).setBold(true).setAlignment(DocumentApp.HorizontalAlignment.CENTER)
         .setSpacingBefore(10).setSpacingAfter(0);
    if (title && title !== kicker) {
      const tPara = body.appendParagraph(title);
      tPara.setFontFamily('Helvetica').setFontSize(10).setBold(false).setAlignment(DocumentApp.HorizontalAlignment.CENTER)
           .setSpacingBefore(0).setSpacingAfter(15);
    }
  }
}

function buildPdfFooterV9_(doc) {
  const footer = doc.addFooter();
  footer.appendHorizontalRule().setForegroundColor('#EEEEEE');
  const footerTable = footer.appendTable([['', '']]);
  footerTable.setBorderWidth(0);
  const leftCell = footerTable.getRow(0).getCell(0);
  const rightCell = footerTable.getRow(0).getCell(1);
  
  leftCell.setPaddingTop(5).setPaddingBottom(0).setPaddingLeft(0).setPaddingRight(0);
  rightCell.setPaddingTop(5).setPaddingBottom(0).setPaddingLeft(0).setPaddingRight(0);
  
  const leftPara = leftCell.appendParagraph("Majelis Galilea - GMAHK Jemaat Galilea Balikpapan");
  leftPara.setFontFamily('Helvetica').setFontSize(8).setForegroundColor('#888888').setAlignment(DocumentApp.HorizontalAlignment.LEFT).setSpacingBefore(0).setSpacingAfter(0);
  
  const dateStr = Utilities.formatDate(new Date(), APP.TZ, 'dd MMM yyyy HH:mm');
  const rightPara = rightCell.appendParagraph("Dicetak: " + dateStr);
  rightPara.setFontFamily('Helvetica').setFontSize(8).setForegroundColor('#888888').setAlignment(DocumentApp.HorizontalAlignment.RIGHT).setSpacingBefore(0).setSpacingAfter(0);
}

function buildPdfIdentity_(doc, title, kicker) {
  buildPdfHeaderV9_(doc, title, kicker, false);
  buildPdfFooterV9_(doc);
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
        'Departemen',
        'Status',
        'Keterangan'
      ]
    ];

    detail.KEHADIRAN
      .forEach(item => {
        rows.push([
          item.NAMA ||
          '-',
          item.DEPARTEMEN ||
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


function infoTable_(body, pairs) {
  const table = body.appendTable(pairs.map(pair => [String(pair[0]), String(pair[1])]));
  table.setBorderWidth(0);

  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      const cell = row.getCell(c);
      styleCell_(cell, '#FFFFFF', 3);
      
      let val = cell.getText().trim();
      if (c === 1 && (val === 'undefined' || val === 'null' || val === '')) {
        cell.setText('Belum diisi');
      }
      
      const t = cell.editAsText();
      t.setFontFamily('Helvetica').setFontSize(9)
       .setBold(c === 0)
       .setForegroundColor(c === 0 ? '#555555' : '#111111');
    }
  }
  return table;
}

function metricTable_(body, headers, values) {
  const table = body.appendTable([headers, values]);
  table.setBorderColor('#DDDDDD').setBorderWidth(0.5);

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < headers.length; c++) {
      const cell = table.getRow(r).getCell(c);
      const isHeader = r === 0;
      styleCell_(cell, isHeader ? '#EBF0F5' : '#FFFFFF', 6);
      
      let val = cell.getText().trim();
      if (!isHeader && (val === 'undefined' || val === 'null' || val === '')) {
        cell.setText('-');
      }
      
      const t = cell.editAsText();
      t.setFontFamily('Helvetica').setFontSize(isHeader ? 8 : 10)
       .setBold(true)
       .setForegroundColor(isHeader ? '#666666' : '#222222')
       .setAlignment(DocumentApp.HorizontalAlignment.CENTER);
    }
  }
  return table;
}

function dataTable_(body, rows) {
  if (rows.length <= 1) {
    emptyPdf_(body, 'Belum ada data.');
    return null;
  }
  const table = body.appendTable(rows);
  table.setBorderColor('#CCCCCC').setBorderWidth(0.5);

  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      const cell = row.getCell(c);
      const isHeader = r === 0;

      styleCell_(cell, isHeader ? '#315D88' : (r % 2 === 0 ? '#F9F9F9' : '#FFFFFF'), 6);
      
      let val = cell.getText().trim();
      if (val === 'undefined' || val === 'null' || val === '') {
        if (!isHeader) cell.setText('Belum diisi');
      }

      const t = cell.editAsText();
      t.setFontFamily('Helvetica').setFontSize(isHeader ? 9 : 8)
       .setBold(isHeader)
       .setForegroundColor(isHeader ? '#FFFFFF' : '#333333');
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
                officer.DEPARTEMEN,
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

  const doc = DocumentApp.create(title);
  doc.getBody().setPageHeight(595.276).setPageWidth(842.52);

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

    const fileName = 'Majelis-Galilea_Laporan-Keuangan_' + financeMonthLabelV8_(month) + '-' + year + '.pdf';

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
  return getGalileaLogoBlob_();
}

function buildLetterheadV81_(doc) {
  buildPdfHeaderV9_(doc, null, null, true);
  buildPdfFooterV9_(doc);
  const body = doc.getBody();
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

function migrateAuthV85() {
  const sh = getSheet_(APP.SHEETS.ACCESS);
  if (!sh) return { success: false, message: 'Sheet not found' };
  const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  const req = ['PASSWORD_HASH', 'AUTH_PROVIDER', 'GOOGLE_EMAIL'];
  let added = false;
  req.forEach(h => {
    if (!headers.includes(h)) {
      sh.getRange(1, headers.length + 1).setValue(h);
      headers.push(h);
      added = true;
    }
  });
  
  if (added && sh.getLastRow() > 1) {
    const data = sh.getRange(2, 1, sh.getLastRow() - 1, headers.length).getValues();
    const pinIdx = headers.indexOf('PIN_HASH');
    const passIdx = headers.indexOf('PASSWORD_HASH');
    const authIdx = headers.indexOf('AUTH_PROVIDER');
    
    if (pinIdx !== -1 && passIdx !== -1) {
      data.forEach(row => {
        if (!row[passIdx] && row[pinIdx]) {
          row[passIdx] = row[pinIdx];
        }
        if (!row[authIdx]) {
          row[authIdx] = 'LOCAL';
        }
      });
      sh.getRange(2, 1, data.length, headers.length).setValues(data);
    }
  }
  return { success: true, message: 'Migration V8.5 Auth complete.' };
}

function fixAksesRoleV85() {
  const sh = getSheet_(APP.SHEETS.ACCESS);
  if (!sh) return { success: false, message: 'Sheet not found' };
  
  // 1. Ensure all schema headers exist
  setupDatabase();
  
  // 2. Populate missing LEVEL, AUTH_PROVIDER, etc for existing rows
  const headers = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  if (sh.getLastRow() > 1) {
    const data = sh.getRange(2, 1, sh.getLastRow() - 1, headers.length).getValues();
    const roleIdx = headers.indexOf('ROLE');
    const levelIdx = headers.indexOf('LEVEL');
    const passIdx = headers.indexOf('PASSWORD_HASH');
    const pinIdx = headers.indexOf('PIN_HASH');
    const authIdx = headers.indexOf('AUTH_PROVIDER');
    const matrix = rolePermissionMatrixV84_();
    
    let changed = false;
    data.forEach(row => {
      // populate LEVEL
      if (levelIdx !== -1 && !row[levelIdx]) {
        const role = row[roleIdx];
        if (matrix[role] && matrix[role].level !== undefined) {
          row[levelIdx] = matrix[role].level;
          changed = true;
        }
      }
      // copy PIN_HASH to PASSWORD_HASH
      if (passIdx !== -1 && pinIdx !== -1 && !row[passIdx] && row[pinIdx]) {
        row[passIdx] = row[pinIdx];
        changed = true;
      }
      // set AUTH_PROVIDER
      if (authIdx !== -1 && !row[authIdx]) {
        row[authIdx] = 'LOCAL';
        changed = true;
      }
    });
    
    if (changed) {
      sh.getRange(2, 1, data.length, headers.length).setValues(data);
    }
  }
  return { success: true, message: 'AKSES_ROLE fixed successfully.' };
}
