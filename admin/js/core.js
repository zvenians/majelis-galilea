window.__MG840_APP_SCRIPT_LOADED__ =
  true;

window.__MG_APP_VERSION__ =
  '8.4.0-vercel';

/* =========================================================
   GOOGLE.SCRIPT.RUN COMPATIBILITY SHIM
   Routes all google.script.run calls through /api/gas proxy.
   This allows the existing 60 google.script.run calls to
   work without any modification.

   Handles patterns like:
     google.script.run
       .withSuccessHandler(fn)
       .withFailureHandler(fn)
       .actualFunction(arg1, arg2)

   And direct calls like:
     google.script.run.logoutMajelisV84(token)
========================================================= */
window.google = window.google || {};
window.google.script = window.google.script || {};

(function() {
  function createRunner() {
    let _success = () => {};
    let _failure = (e) => console.error('GAS call failed:', e);

    const handler = {
      get(target, prop) {
        if (prop === 'withSuccessHandler') {
          return function(fn) { _success = fn; return new Proxy({}, handler); };
        }
        if (prop === 'withFailureHandler') {
          return function(fn) { _failure = fn; return new Proxy({}, handler); };
        }
        if (prop === 'then' || prop === 'catch' || prop === 'toJSON' ||
            typeof prop === 'symbol') {
          return undefined;
        }
        // Any other property access is the function name to call
        return function(...args) {
          const fnName = prop;
          fetch('/api/gas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: fnName, args, authToken: localStorage.getItem('mg_auth_token_v84') || '' }),
            signal: AbortSignal.timeout(45000)
          })
          .then(r => {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
          })
          .then(data => {
            if (data && data.__error__) {
              _failure({ message: data.__error__ });
            } else if (data && data.hasOwnProperty('result')) {
              _success(data.result);
            } else {
              _success(data);
            }
          })
          .catch(err => _failure(err));
        };
      }
    };

    return new Proxy({}, handler);
  }

  // google.script.run always creates a fresh runner chain
  Object.defineProperty(window.google.script, 'run', {
    get() { return createRunner(); },
    configurable: true
  });
})();


/* =========================================================
   STATE
========================================================= */

const state = {
  year:
    new Date()
      .getFullYear(),

  page:
    'dashboard',

  data:
    null,

  editing:
    null,

  detail:
    null,

  timeout:
    null,

  calendarDate:
    new Date(),

  croppedPhotoPayload:
    null,

  photoCrop:
    null,

  meetingMode:
    null,

  searchTimer:
    null,

  draftTimer:
    null,

  pendingDraftDataV7:
    null,

  financeV8:
    null,

  financeFiltersV8: {
    month:
      null,
    type:
      '',
    source:
      '',
    department:
      '',
    rapbj:
      '',
    category:
      ''
  },

  financeFilterTimerV8:
    null,

  secretaryV81:
    null,

  birthdayV81:
    null,

  memberFiltersV82: {
    search:
      '',
    family:
      '',
    role:
      ''
  },

  membershipFamiliesV82:
    [],

  identityV82:
    null,

  savingEntityV83:
    false,

  crudAlignmentCheckedV83:
    false,

  authV84: {
    token: localStorage.getItem('mg_auth_token_v84') || '',
    user: (function() {
      try {
        const cached = localStorage.getItem('mg_auth_user_v84');
        return cached ? JSON.parse(cached) : null;
      } catch (e) {
        return null;
      }
    })()
  },

  accessUsersV84: []
};


/* =========================================================
   FORM CONFIG
========================================================= */

const FORM = {

  notulen: {
    title:
      'Notulen / Rapat',

    fields: [
      {
        key: 'TANGGAL',
        label: 'Tanggal Rapat',
        type: 'date',
        required: true
      },

      {
        key: 'JENIS_RAPAT',
        label: 'Jenis Rapat',
        type: 'select',
        options: [
          'Rapat Majelis Bulanan',
          'Rapat Majelis Khusus',
          'Rapat Koordinasi',
          'Rapat Evaluasi'
        ]
      },

      {
        key: 'JUDUL',
        label: 'Judul',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'WAKTU_MULAI',
        label: 'Mulai',
        type: 'time'
      },

      {
        key: 'WAKTU_SELESAI',
        label: 'Selesai',
        type: 'time'
      },

      {
        key: 'TEMPAT',
        label: 'Tempat',
        type: 'text',
        full: true
      },

      {
        key: 'PIMPINAN_RAPAT',
        label: 'Pimpinan Rapat',
        type: 'pengurus'
      },

      {
        key: 'NOTULIS',
        label: 'Notulis',
        type: 'pengurus'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Draft',
          'Menunggu Persetujuan',
          'Disetujui',
          'Perlu Revisi'
        ]
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  agenda: {
    title:
      'Agenda',

    fields: [
      {
        key: 'ID_NOTULEN',
        label: 'Notulen',
        type: 'notulen',
        full: true,
        required: true
      },

      {
        key: 'NO_URUT',
        label: 'Nomor Agenda',
        type: 'number'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Belum Dimulai',
          'Proses',
          'Selesai',
          'Ditunda'
        ]
      },

      {
        key: 'AGENDA',
        label: 'Agenda',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'PEMBAHASAN',
        label: 'Pembahasan',
        type: 'textarea',
        full: true
      },

      {
        key: 'KEPUTUSAN',
        label: 'Keputusan',
        type: 'textarea',
        full: true
      },

      {
        key: 'PIC',
        label: 'Penanggung jawab',
        type: 'pengurus'
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'DEADLINE',
        label: 'Batas waktu',
        type: 'date'
      },

      {
        key: 'ANGGARAN',
        label: 'Anggaran',
        type: 'number'
      },

      {
        key: 'SUMBER_DANA',
        label: 'Sumber Dana',
        type: 'source'
      }
    ]
  },


  usulan: {
    title:
      'Usulan rapat',

    fields: [
      {
        key: 'TANGGAL_USUL',
        label: 'Tanggal Usul',
        type: 'date'
      },

      {
        key: 'PENGUSUL',
        label: 'Pengusul',
        type: 'pengurus'
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'JUDUL_USULAN',
        label: 'Judul Usulan',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'LATAR_BELAKANG',
        label: 'Alasan usulan',
        type: 'textarea',
        full: true
      },

      {
        key: 'ESTIMASI_ANGGARAN',
        label: 'Perkiraan biaya',
        type: 'number'
      },

      {
        key: 'SUMBER_DANA',
        label: 'Sumber Dana',
        type: 'source'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Diajukan',
          'Diterima',
          'Ditolak',
          'Ditunda'
        ]
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  keputusan: {
    title:
      'Keputusan Majelis',

    fields: [
      {
        key: 'ID_NOTULEN',
        label: 'Rapat asal',
        type: 'notulen'
      },

      {
        key: 'NO_KEPUTUSAN',
        label: 'Nomor Keputusan',
        type: 'text'
      },

      {
        key: 'KEPUTUSAN',
        label: 'Keputusan',
        type: 'textarea',
        full: true,
        required: true
      },

      {
        key: 'PIC',
        label: 'Penanggung jawab',
        type: 'pengurus'
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'TARGET_SELESAI',
        label: 'Target Selesai',
        type: 'date'
      },

      {
        key: 'PRIORITAS',
        label: 'Prioritas',
        type: 'select',
        options: [
          'Rendah',
          'Normal',
          'Tinggi',
          'Mendesak'
        ]
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Aktif',
          'Proses',
          'Selesai',
          'Dibatalkan'
        ]
      },

      {
        key: 'ANGGARAN',
        label: 'Anggaran',
        type: 'number'
      },

      {
        key: 'SUMBER_DANA',
        label: 'Sumber Dana',
        type: 'source'
      }
    ]
  },


  tindak_lanjut: {
    title:
      'Tugas',

    fields: [
      {
        key: 'ID_KEPUTUSAN',
        label: 'Keputusan',
        type: 'keputusan',
        full: true
      },

      {
        key: 'URAIAN',
        label: 'Uraian',
        type: 'textarea',
        full: true,
        required: true
      },

      {
        key: 'PIC',
        label: 'Penanggung jawab',
        type: 'pengurus'
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'TARGET_SELESAI',
        label: 'Batas waktu',
        type: 'date'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Belum Dimulai',
          'Proses',
          'Selesai',
          'Ditunda'
        ]
      },

      {
        key: 'PROGRESS',
        label: 'Kemajuan (%) — boleh dikosongkan',
        type: 'number'
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  program: {
    title:
      'Program Kerja',

    fields: [
      {
        key: 'TAHUN',
        label: 'Tahun',
        type: 'number',
        required: true
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'NAMA_PROGRAM',
        label: 'Nama Program',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'DESKRIPSI',
        label: 'Keterangan',
        type: 'textarea',
        full: true
      },

      {
        key: 'PIC',
        label: 'Penanggung jawab',
        type: 'pengurus'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Rencana',
          'Proses',
          'Selesai',
          'Ditunda',
          'Dibatalkan'
        ]
      },

      {
        key: 'TANGGAL_MULAI',
        label: 'Mulai',
        type: 'date'
      },

      {
        key: 'TANGGAL_SELESAI',
        label: 'Selesai',
        type: 'date'
      },

      {
        key: 'ID_RAPBJ',
        label: 'Anggaran yang dipakai',
        type: 'rapbj'
      },

      {
        key: 'SUMBER_DANA',
        label: 'Sumber Dana',
        type: 'source'
      },

      {
        key: 'ANGGARAN',
        label: 'Anggaran',
        type: 'number'
      },

      {
        key: 'REALISASI',
        label: 'Realisasi',
        type: 'number'
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  rapbj: {
    title:
      'Pos anggaran',

    fields: [
      {
        key: 'TAHUN',
        label: 'Tahun',
        type: 'number',
        required: true
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'PROGRAM_ATAU_POS',
        label: 'Program / Pos Anggaran',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'KATEGORI',
        label: 'Kategori',
        type: 'text'
      },

      {
        key: 'SUMBER_DANA',
        label: 'Sumber Dana',
        type: 'source'
      },

      {
        key: 'ANGGARAN',
        label: 'Anggaran',
        type: 'number'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Draft',
          'Disetujui',
          'Direvisi'
        ]
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  keuangan: {
    title:
      'Transaksi Keuangan',

    fields: [
      {
        key: 'TANGGAL',
        label: 'Tanggal',
        type: 'date',
        required: true
      },

      {
        key: 'JENIS',
        label: 'Jenis',
        type: 'select',
        required: true,
        options: [
          'Pemasukan',
          'Pengeluaran'
        ]
      },

      {
        key: 'SUMBER_DANA',
        label: 'Sumber Dana',
        type: 'source',
        required: true
      },

      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },

      {
        key: 'KATEGORI',
        label: 'Kategori (contoh: Perpuluhan / Persembahan Terpadu)',
        type: 'text'
      },

      {
        key: 'DESKRIPSI',
        label: 'Deskripsi Pemasukan / Pengeluaran',
        type: 'text',
        full: true
      },

      {
        key: 'NOMINAL',
        label: 'Nominal',
        type: 'number',
        required: true
      },

      {
        key: 'ID_RAPBJ',
        label: 'Anggaran yang dipakai',
        type: 'rapbj'
      },

      {
        key: 'ID_NOTULEN',
        label: 'Rapat asal',
        type: 'notulen'
      },

      {
        key: 'ID_AGENDA',
        label: 'Pembahasan terkait',
        type: 'agenda'
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  inventaris: {
    title:
      'Inventaris',

    fields: [
      {
        key: 'NAMA_BARANG',
        label: 'Nama Barang',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'KATEGORI',
        label: 'Kategori',
        type: 'text'
      },

      {
        key: 'JUMLAH',
        label: 'Jumlah',
        type: 'number'
      },

      {
        key: 'KONDISI',
        label: 'Kondisi',
        type: 'select',
        options: [
          'Baik',
          'Perlu Perbaikan',
          'Rusak'
        ]
      },

      {
        key: 'LOKASI',
        label: 'Lokasi',
        type: 'text'
      },

      {
        key: 'TANGGAL_PEROLEHAN',
        label: 'Tanggal dibeli / diterima',
        type: 'date'
      },

      {
        key: 'NILAI',
        label: 'Harga per barang',
        type: 'number'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Aktif',
          'Tidak Aktif'
        ]
      },

      {
        key: 'CATATAN',
        label: 'Catatan',
        type: 'textarea',
        full: true
      }
    ]
  },


  pengurus: { title: 'Pengurus',
    fields: [
      {
        key: 'FOTO_FILE',
        label: 'Foto',
        type: 'photo',
        full: true
      },
      {
        key: 'NAMA',
        label: 'Nama Lengkap',
        type: 'text',
        required: true
      },
      {
        key: 'DEPARTEMEN',
        label: 'Departemen',
        type: 'departemen'
      },
      {
        key: 'NO_WHATSAPP',
        label: 'WhatsApp',
        type: 'text'
      },
      {
        key: 'EMAIL',
        label: 'Email',
        type: 'email'
      },
      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Aktif',
          'Tidak Aktif'
        ]
      },
      {
        key: 'URUTAN',
        label: 'Urutan tampil',
        type: 'number'
      }
    ]
  },

  jemaat: {
    title:
      'Anggota Jemaat',

    fields: [
      {
        key: 'FOTO_FILE',
        label: 'Foto',
        type: 'photo',
        full: true
      },

      {
        key: 'NOMOR_ANGGOTA',
        label: 'Nomor Anggota',
        type: 'text'
      },

      {
        key: 'NAMA',
        label: 'Nama',
        type: 'text',
        required: true
      },

      {
        key: 'NAMA_KELUARGA',
        label: 'Nama Keluarga',
        type: 'text',
        required: true
      },

      {
        key: 'POSISI_KELUARGA',
        label: 'Hubungan dalam keluarga',
        type: 'select',
        required: true,
        options: [
          'Ayah',
          'Ibu',
          'Anak'
        ]
      },

      {
        key: 'STATUS',
        label: 'Status Keanggotaan',
        type: 'select',
        options: [
          'Aktif',
          'Pindah',
          'Meninggal',
          'Tidak Aktif'
        ]
      },

      {
        key: 'TEMPAT_LAHIR',
        label: 'Tempat Lahir',
        type: 'text'
      },

      {
        key: 'TANGGAL_LAHIR',
        label: 'Tanggal Lahir',
        type: 'date'
      },

      {
        key: 'NO_TELEPON',
        label: 'Nomor Telepon',
        type: 'text'
      },

      {
        key: 'NO_WHATSAPP',
        label: 'WhatsApp',
        type: 'text'
      },

      {
        key: 'ALAMAT',
        label: 'Alamat',
        type: 'textarea',
        full: true
      },

      {
        key: 'EMAIL',
        label: 'Email',
        type: 'email'
      },

      {
        key: 'TANGGAL_BAPTIS',
        label: 'Tanggal Baptis',
        type: 'date'
      },

      {
        key: 'TANGGAL_BERGABUNG',
        label: 'Tanggal Bergabung',
        type: 'date'
      },

      {
        key: 'CATATAN',
        label: 'Catatan tambahan',
        type: 'textarea',
        full: true
      }
    ]
  },


  dokumen: {
    title:
      'Dokumen',

    fields: [
      {
        key: 'FILE_DATA',
        label: 'File',
        type: 'file',
        full: true
      },

      {
        key: 'TANGGAL',
        label: 'Tanggal',
        type: 'date'
      },

      {
        key: 'KATEGORI',
        label: 'Kategori',
        type: 'select',
        options: [
          'Surat Keputusan',
          'Surat Masuk',
          'Surat Keluar',
          'Proposal',
          'Laporan',
          'Formulir',
          'Dokumen Lain'
        ]
      },

      {
        key: 'JUDUL',
        label: 'Judul Dokumen',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'NOMOR_DOKUMEN',
        label: 'Nomor Dokumen (otomatis jika kosong)',
        type: 'text'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Aktif',
          'Arsip'
        ]
      },

      {
        key: 'DESKRIPSI',
        label: 'Keterangan',
        type: 'textarea',
        full: true
      }
    ]
  },


  departemen: {
    title:
      'Departemen',

    fields: [
      {
        key: 'NAMA_DEPARTEMEN',
        label: 'Nama Departemen',
        type: 'text',
        full: true,
        required: true
      },

      {
        key: 'KETUA',
        label: 'Ketua / Koordinator',
        type: 'pengurus'
      },

      {
        key: 'STATUS',
        label: 'Status',
        type: 'select',
        options: [
          'Aktif',
          'Tidak Aktif'
        ]
      },

      {
        key: 'URUTAN',
        label: 'Urutan',
        type: 'number'
      }
    ]
  }

};


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  init
);


function init() {
  try {
    bindNavigation();
    bindYear();
    bindSearch();
    bindAdd();
    bindBrandLogoUpload();
    cycleLoadingText();
    initV7Features();

    openPage(
      'dashboard'
    );

    /*
     * Loader hanya intro visual.
     * Tidak lagi menunggu Spreadsheet/backend.
     */
    window.setTimeout(
      () => {
        hideLoader();
      },
      1100
    );

    window.__MG840_FULL_APP_READY__ =
      true;

    startBootV601();
  }

  catch (error) {
    console.error(
      error
    );

    hideLoader();

    setBootError(
      'Halaman belum bisa dibuka',
      error.message ||
      String(error)
    );
  }
}


/* =========================================================
   DATA LOAD
========================================================= */

function startBootV601(
  callback
) {
  if (!state.authV84.token) {
    hideLoader();
    showAuthGateV84();
    return;
  }

  setBootLoading(
    'Menyiapkan ruang kerja',
    'Mengambil data tahun ' + state.year + '.'
  );
  loadDataV601(callback);
}


function loadDataV601(
  callback
) {
  clearTimeout(
    state.timeout
  );

  state.timeout =
    setTimeout(
      () => {
        setBootError(
          'Koneksi membutuhkan waktu lebih lama',
          'Data belum selesai dimuat. Periksa koneksi lalu tekan Coba lagi.'
        );
      },
      30000
    );

  google.script.run

    .withSuccessHandler(
      data => {
        clearTimeout(
          state.timeout
        );

        try {
          if (
            !data
          ) {
            throw new Error(
              'Data aplikasi kosong.'
            );
          }

          state.data =
            data;

          if(data.authV84){
            state.authV84.user=data.authV84;
            localStorage.setItem('mg_auth_user_v84', JSON.stringify(data.authV84));
            hideAuthGateV84();
            applyRoleUiV84();
          } else {
            localStorage.removeItem('mg_auth_user_v84');
          }

          state.year =
            Number(
              data.year
            );

          if (
            state.calendarDate
              .getFullYear() !==
            state.year
          ) {
            state.calendarDate =
              new Date(
                state.year,
                0,
                1
              );
          }

          applyBrandLogo(
            data.app.logoUrl
          );

          renderAll();

          openPage(
            state.page,
            false
          );

          setBootReady(
            'Terhubung',
            'Data sudah siap.'
          );

          if (
            typeof callback ===
            'function'
          ) {
            callback();
          }
        }

        catch (error) {
          console.error(
            error
          );

          setBootError(
            'Data gagal dimuat',
            error.message ||
            String(error)
          );
        }
      }
    )

    .withFailureHandler(
      error => {
        clearTimeout(
          state.timeout
        );

        const message=errorMessage(error);
        if(message.includes('AUTH_REQUIRED')){
          hideLoader();
          showAuthGateV84('Silakan masuk untuk melanjutkan.');
          return;
        }
        setBootError('Koneksi data terputus', message || 'Coba lagi beberapa saat.');
      }
    )

    .getSecureAppDataV84(
      state.authV84.token,
      {
        year:
          state.year
      }
    );
}


function loadData(
  callback
) {
  /*
   * Dipertahankan sebagai alias karena beberapa action lama
   * memanggil loadData() setelah save/delete.
   */
  startBootV601(
    callback
  );
}


function retryBoot() {
  startBootV601();
}


function setBootLoading(
  title,
  text
) {
  const notice =
    document.getElementById(
      'bootNotice'
    );

  if (!notice) {
    return;
  }

  notice.classList.remove(
    'ready',
    'error'
  );

  setText(
    'bootNoticeTitle',
    title
  );

  setText(
    'bootNoticeText',
    text
  );

  const retry =
    document.getElementById(
      'bootRetry'
    );

  if (retry) {
    retry.style.display =
      'none';
  }
}


function setBootReady(
  title,
  text
) {
  const notice =
    document.getElementById(
      'bootNotice'
    );

  if (!notice) {
    return;
  }

  setText(
    'bootNoticeTitle',
    title
  );

  setText(
    'bootNoticeText',
    text
  );

  notice.classList.remove(
    'error'
  );

  window.setTimeout(
    () => {
      notice.classList.add(
        'ready'
      );
    },
    850
  );
}


function setBootError(
  title,
  text
) {
  hideLoader();

  const notice =
    document.getElementById(
      'bootNotice'
    );

  if (!notice) {
    /*
     * fallback terakhir bila DOM status tidak ada
     */
    showFatal(
      title +
      ': ' +
      text
    );

    return;
  }

  notice.classList.remove(
    'ready'
  );

  notice.classList.add(
    'error'
  );

  setText(
    'bootNoticeTitle',
    title
  );

  setText(
    'bootNoticeText',
    text
  );

  const retry =
    document.getElementById(
      'bootRetry'
    );

  if (retry) {
    retry.style.display =
      'inline-flex';
  }

  console.error(
    title,
    text
  );
}


/* =========================================================
   RENDER
========================================================= */


function validateCrudAlignmentV83() {
  if (
    state.crudAlignmentCheckedV83
  ) {
    return;
  }

  state.crudAlignmentCheckedV83 =
    true;

  google.script.run

    .withSuccessHandler(
      result => {
        if (
          result &&
          result.success
        ) {
          console.log(
            'CRUD Alignment V8.3 OK'
          );
        }
      }
    )

    .withFailureHandler(
      error => {
        console.error(
          'CRUD Alignment V8.3:',
          error
        );

        toast(
          'Ada bagian formulir yang perlu diperiksa. Hubungi pengelola aplikasi.'
        );
      }
    )

    .runCrudAlignmentSelfTestV83();
}


function renderAll() {
  validateCrudAlignmentV83();
  applyRoleUiV84();

  renderYears();
  renderDashboard();
  renderNotulen();
  renderProposals();
  renderDecisions();
  renderTasks();
  renderPrograms();
  renderRapbj();
  renderFinance();
  renderInventory();
  renderOfficers();
  hydrateMemberFamilyFiltersV82();
  renderMembers();
  renderBirthdayCenterV81();
  renderDocuments();
  renderSecretaryLettersV81();
  renderCalendar();

  setText(
    'archiveYear',
    state.year
  );

  refreshNotificationBadgeV8();
  renderSimpleDashboardV87();
  applyOfficerControlsV86();
}


function renderYears() {
  const select =
    document.getElementById(
      'yearSelect'
    );

  select.innerHTML =
    state.data.years
      .map(
        year => `
          <option
            value="${year}"
            ${
              Number(
                year
              ) ===
              Number(
                state.year
              )
                ? 'selected'
                : ''
            }>
            ${year}
          </option>
        `
      )
      .join('');
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {
  const s =
    state.data.summary;

  setText(
    'heroYear',
    state.year
  );

  setText(
    'heroNotulen',
    s.totalNotulen
  );

  setText(
    'heroDecisions',
    s.activeDecisions
  );

  setText(
    'statOverdue',
    s.overdueTasks
  );

  setText(
    'statAttendance',
    s.attendance.average +
    '%'
  );

  setText(
    'statPrograms',
    s.totalPrograms
  );

  setText(
    'statInventory',
    s.inventoryIssue
  );

  setText(
    'rapbjPlan',
    money(
      s.rapbjPlan
    )
  );

  setText(
    'rapbjRealized',
    money(
      s.rapbjRealized
    )
  );

  setText(
    'rapbjRemaining',
    money(
      s.rapbjRemaining
    )
  );

  const rapbjPercent =
    s.rapbjPlan > 0
      ? Math.min(
          100,
          Math.round(
            (
              s.rapbjRealized /
              s.rapbjPlan
            ) *
            100
          )
        )
      : 0;

  document
    .getElementById(
      'rapbjBar'
    )
    .style.width =
      rapbjPercent +
      '%';

  renderFund(
    'kas',
    s.funds[
      'Kas Jemaat'
    ]
  );

  renderFund(
    'sumbangan',
    s.funds[
      'Sumbangan'
    ]
  );

  renderFund(
    'pembangunan',
    s.funds[
      'Uang Pembangunan'
    ]
  );

  const attention =
    s.attention ||
    [];

  setText(
    'attentionCount',
    attention.length
  );

  document.getElementById(
    'attentionList'
  ).innerHTML =
    attention.length
      ? attention
          .map(
            item => `
              <button
                class="attention-row ${esc(item.severity || '')}"
                onclick="openAttention('${esc(item.type)}')"
                style="
                  width:100%;
                  border:0;
                  background:transparent;
                  text-align:left;
                ">

                <i class="attention-marker"></i>

                <span>
                  ${esc(item.text)}
                </span>

                <b>
                  ${Number(item.count || 0)}
                </b>

              </button>
            `
          )
          .join('')
      : `
          <div class="empty-state">
            Tidak ada hal mendesak saat ini.
          </div>
        `;

  document.getElementById(
    'nextMeeting'
  ).innerHTML =
    s.nextMeeting
      ? `
        <div class="next-meeting-card">

          <strong>
            ${esc(s.nextMeeting.JUDUL)}
          </strong>

          <span>
            ${dateLabel(s.nextMeeting.TANGGAL)}
            ·
            ${esc(s.nextMeeting.TEMPAT || 'Tempat belum diisi')}
          </span>

        </div>
      `
      : `
        <div class="next-meeting-card">

          <strong>
            Belum dijadwalkan.
          </strong>

          <span>
            Tambahkan draft rapat untuk menampilkan jadwal berikutnya.
          </span>

        </div>
      `;

  const latest =
    state.data.notulen
      .slice(
        0,
        5
      );

  document.getElementById(
    'latestNotulen'
  ).innerHTML =
    latest.length
      ? latest
          .map(
            meetingRow
          )
          .join('')
      : emptyState(
          'Belum ada notulen.'
        );

  renderSimpleDashboardV87();
}


function renderFund(
  prefix,
  fund
) {
  fund =
    fund || {
      income:
        0,

      expense:
        0,

      balance:
        0
    };

  setText(
    prefix +
    'Balance',
    money(
      fund.balance
    )
  );

  setText(
    prefix +
    'Flow',
    'Masuk ' +
    money(
      fund.income
    ) +
    ' · Keluar ' +
    money(
      fund.expense
    )
  );
}


function openAttention(
  type
) {
  const map = {
    approval:
      'rapat',

    overdue:
      'tindak_lanjut',

    budget:
      'rapbj',

    inventory:
      'inventaris',

    proposal:
      'usulan'
  };

  openPage(
    map[type] ||
    'dashboard'
  );
}


/* =========================================================
   MEETINGS
========================================================= */

function renderNotulen(
  search = ''
) {
  const keyword =
    String(search)
      .toLowerCase()
      .trim();

  const items =
    state.data.notulen
      .filter(
        item => {
          if (!keyword) {
            return true;
          }

          return [
            item.JUDUL,
            item.JENIS_RAPAT,
            item.TEMPAT,
            item.PIMPINAN_RAPAT,
            item.NOTULIS
          ]
          .join(' ')
          .toLowerCase()
          .includes(
            keyword
          );
        }
      );

  document.getElementById(
    'notulenList'
  ).innerHTML =
    items.length
      ? items
          .map(
            meetingRow
          )
          .join('')
      : emptyState(
          'Notulen tidak ditemukan.'
        );
}


function meetingRow(
  item
) {
  const agendaCount =
    state.data.agenda
      .filter(
        agenda =>
          String(
            agenda.ID_NOTULEN
          ) ===
          String(
            item.ID_NOTULEN
          )
      )
      .length;

  const locked =
    String(
      item.LOCKED
    ).toLowerCase() ===
    'true';

  return `
    <div class="record-row">

      <div class="record-main">

        <strong>
          ${esc(item.JUDUL)}
        </strong>

        <span>
          ${dateLabel(item.TANGGAL)}
          ·
          ${esc(item.JENIS_RAPAT || 'Rapat Majelis')}
          ·
          ${agendaCount} agenda
          ${
            locked
              ? ' · dikunci'
              : ''
          }
        </span>

      </div>


      <div class="record-actions">

        <span class="badge ${statusClass(item.STATUS)}">
          ${esc(simpleLabelV87(item.STATUS || 'Draft'))}
        </span>

        <button
          class="mini-button"
          onclick="detailNotulen('${item.ID_NOTULEN}')">

          Buka

        </button>

        <button
          class="mini-button"
          onclick="downloadPdf('notulen','${item.ID_NOTULEN}')">

          PDF

        </button>

        ${
          !locked
            ? `
              <button
                class="mini-button"
                onclick="editEntity('notulen','${item.ID_NOTULEN}')">

                Ubah

              </button>
            `
            : ''
        }

      </div>

    </div>
  `;
}


/* =========================================================
   PROPOSALS
========================================================= */

function renderProposals() {
  const items =
    state.data.usulan;

  document.getElementById(
    'proposalList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item => `
              <article class="proposal-card">

                <span class="badge ${statusClass(item.STATUS)}">
                  ${esc(item.STATUS || 'Diajukan')}
                </span>

                <h3>
                  ${esc(item.JUDUL_USULAN)}
                </h3>

                <p>
                  ${esc(item.LATAR_BELAKANG || 'Belum ada latar belakang.')}
                </p>

                <div class="proposal-meta">

                  <span>
                    ${esc(item.PENGUSUL || 'Pengusul belum diisi')}
                  </span>

                  <span>
                    ${esc(item.DEPARTEMEN || 'Tanpa departemen')}
                  </span>

                  <span>
                    ${money(item.ESTIMASI_ANGGARAN || 0)}
                    ·
                    ${esc(item.SUMBER_DANA || '-')}
                  </span>

                </div>

                <div class="proposal-actions">

                  ${
                    item.STATUS ===
                    'Diajukan'
                      ? `
                        <button
                          class="mini-button"
                          onclick="openProposalAccept('${item.ID_USULAN}')">

                          Jadikan Agenda

                        </button>
                      `
                      : ''
                  }

                  <button
                    class="mini-button"
                    onclick="editEntity('usulan','${item.ID_USULAN}')">

                    Ubah

                  </button>

                </div>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Belum ada usulan agenda.'
        );
}


/* =========================================================
   DECISIONS
========================================================= */

function renderDecisions() {
  const items =
    state.data.keputusan;

  document.getElementById(
    'decisionList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item => `
              <article class="decision-card">

                <h3>
                  ${esc(item.KEPUTUSAN)}
                </h3>

                <p>
                  ${esc(item.NO_KEPUTUSAN || 'Tanpa nomor')}
                  ·
                  ${esc(item.DEPARTEMEN || 'Tanpa departemen')}
                  ·
                  ${item.TARGET_SELESAI ? dateLabel(item.TARGET_SELESAI) : 'Tanpa batas waktu'}
                </p>

                <footer>

                  ${meetingOriginV87(item)}<div class="record-actions">${publicationControlV87('keputusan', item)}

                    <span class="badge ${statusClass(item.STATUS)}">
                      ${esc(item.STATUS || 'Aktif')}
                    </span>

                    <span class="badge">
                      ${esc(item.PRIORITAS || 'Normal')}
                    </span>

                  </div>

                  <div class="record-actions">



                    <button
                      class="mini-button"
                      onclick="editEntity('keputusan','${item.ID_KEPUTUSAN}')">

                      Ubah

                    </button>

                  </div>

                </footer>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Belum ada keputusan.'
        );
}


/* =========================================================
   TASKS
========================================================= */

function renderTasks() {
  const items=state.data.tindakLanjut || [], today=localIsoDate(new Date());
  document.getElementById('taskList').innerHTML=items.map(item=>{
    const status=item.STATUS || 'Belum Dimulai';
    const choices=['Belum Dimulai','Proses','Selesai'];
    if(!choices.includes(status))choices.push(status);
    return `<article class="task-card ${item.TARGET_SELESAI && item.TARGET_SELESAI<today && !['Selesai','Dibatalkan'].includes(status)?'overdue':''}"><div class="task-main"><strong>${esc(item.URAIAN)}</strong><span>${esc(item.PIC || 'Belum ada penanggung jawab')} · ${item.TARGET_SELESAI?dateLabel(item.TARGET_SELESAI):'Tanpa batas waktu'}</span>${meetingOriginV87(item)}</div>
    ${canWriteEntityV84('tindak_lanjut')?`<select class="task-status-v87" aria-label="Status tugas: ${esc(item.URAIAN)}" data-previous="${esc(status)}" onchange="changeTaskStatusV87('${escJs(item.ID_TINDAK_LANJUT)}',this)">${choices.map(value=>`<option value="${esc(value)}" ${value===status?'selected':''}>${simpleLabelV87(value)}</option>`).join('')}</select>`:`<span class="badge">${esc(simpleLabelV87(status))}</span>`}
    <div class="record-actions"><button class="mini-button" onclick="sendWhatsAppReminder('${escJs(item.ID_TINDAK_LANJUT)}')">Ingatkan lewat WhatsApp</button>${canWriteEntityV84('tindak_lanjut')?`<button class="mini-button" onclick="editEntity('tindak_lanjut','${escJs(item.ID_TINDAK_LANJUT)}')">Ubah rincian</button>`:''}</div></article>`;
  }).join('') || emptyState('Belum ada tugas. Tugas muncul dari hasil rapat yang memiliki penanggung jawab atau batas waktu.');
}

function renderPrograms() {
  const items =
    state.data.programs;

  document.getElementById(
    'programList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item => {
              const realized =
                item.ID_RAPBJ
                  ? rapbjRealization(
                      item.ID_RAPBJ
                    )
                  : Number(
                      item.REALISASI ||
                      0
                    );

              const percent =
                Number(
                  item.ANGGARAN ||
                  0
                ) > 0
                  ? Math.min(
                      100,
                      Math.round(
                        (
                          realized /
                          Number(
                            item.ANGGARAN ||
                            0
                          )
                        ) *
                        100
                      )
                    )
                  : 0;

              return `
                <article class="program-card">

                  <span class="eyebrow dark">
                    ${esc(item.DEPARTEMEN || 'PROGRAM')}
                  </span>

                  <h3>
                    ${esc(item.NAMA_PROGRAM)}
                  </h3>

                  <p>
                    ${esc(item.DESKRIPSI || 'Belum ada deskripsi program.')}
                  </p>

                  <div class="program-budget">

                    <div>
                      <small>Anggaran</small>
                      <strong>
                        ${money(item.ANGGARAN)}
                      </strong>
                    </div>

                    <div>
                      <small>Sudah dipakai</small>
                      <strong>
                        ${money(realized)}
                      </strong>
                    </div>

                  </div>

                  <div class="progress-bar" style="margin-top:12px">
                    <i style="width:${percent}%"></i>
                  </div>

                  <footer>${canWriteEntityV84('rapbj') ? `<button class="mini-button" onclick="openProgramBudgetV87('${escJs(item.ID_PROGRAM)}')">Atur anggaran</button>` : ''}${publicationControlV87('program', item)}

                    <span class="badge ${statusClass(item.STATUS)}">
                      ${esc(item.STATUS || 'Rencana')}
                    </span>

                    <button
                      class="mini-button"
                      onclick="editEntity('program','${item.ID_PROGRAM}')">

                      Ubah

                    </button>

                  </footer>

                </article>
              `;
            }
          )
          .join('')
      : emptyState(
          'Belum ada program kerja.'
        );
}


/* =========================================================
   RAPBJ
========================================================= */

function renderRapbj() {
  const s =
    state.data.summary;

  setText(
    'rapbjPagePlan',
    money(
      s.rapbjPlan
    )
  );

  setText(
    'rapbjPageRealized',
    money(
      s.rapbjRealized
    )
  );

  setText(
    'rapbjPageRemaining',
    money(
      s.rapbjRemaining
    )
  );

  const items =
    state.data.rapbj;

  document.getElementById(
    'rapbjList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item => {
              const realized =
                rapbjRealization(
                  item.ID_RAPBJ
                );

              const budget =
                Number(
                  item.ANGGARAN ||
                  0
                );

              const percent =
                budget > 0
                  ? Math.round(
                      (
                        realized /
                        budget
                      ) *
                      100
                    )
                  : 0;

              const over =
                budget >
                0 &&
                realized >
                budget;

              const near =
                percent >=
                  80 &&
                percent <=
                  100;

              return `
                <div class="record-row">

                  <div class="record-main">

                    <strong>
                      ${esc(item.PROGRAM_ATAU_POS)}
                    </strong>

                    <span>
                      ${esc(item.DEPARTEMEN || 'Tanpa departemen')}
                      ·
                      ${esc(item.SUMBER_DANA || '-')}
                      ·
                      anggaran ${money(item.ANGGARAN)}
                      ·
                      sudah dipakai ${money(realized)}
                      ·
                      ${percent}%
                    </span>

                  </div>

                  <div class="record-actions">

                    <span class="badge ${over ? 'danger' : (near ? 'warning' : statusClass(item.STATUS))}">
                      ${
                        over
                          ? 'Melebihi Anggaran'
                          : (
                              near
                                ? 'Mendekati Batas'
                                : esc(simpleLabelV87(item.STATUS || 'Draft'))
                            )
                      }
                    </span>



                    <button
                      class="mini-button"
                      onclick="editEntity('rapbj','${item.ID_RAPBJ}')">

                      Ubah

                    </button>

                  </div>

                </div>
              `;
            }
          )
          .join('')
      : emptyState(
          'Belum ada anggaran tahunan.'
        );
}


function rapbjRealization(
  id
) {
  return state.data.keuangan
    .filter(
      item =>
        String(
          item.ID_RAPBJ
        ) ===
        String(id) &&
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
}


/* =========================================================
   FINANCE
========================================================= */

function renderFinance() {
  const month =
    state.financeFiltersV8.month ||
    (
      Number(
        state.year
      ) ===
      new Date().getFullYear()
        ? (
            new Date().getMonth() +
            1
          )
        : 12
    );

  state.financeFiltersV8.month =
    month;

  const select =
    document.getElementById(
      'financeMonthV8'
    );

  if (select) {
    select.innerHTML =
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
      ]
      .map(
        (
          label,
          index
        ) => `
          <option
            value="${index + 1}"
            ${Number(month) === index + 1 ? 'selected' : ''}>
            ${label}
          </option>
        `
      )
      .join('');
  }

  loadFinanceCommandV8();
}


function changeFinanceMonthV8(
  value
) {
  state.financeFiltersV8.month =
    Number(
      value
    );

  state.financeFiltersV8.type =
    '';

  state.financeFiltersV8.source =
    '';

  state.financeFiltersV8.department =
    '';

  state.financeFiltersV8.rapbj =
    '';

  state.financeFiltersV8.category =
    '';

  loadFinanceCommandV8();
}


function debounceFinanceFilterV8() {
  clearTimeout(
    state.financeFilterTimerV8
  );

  state.financeFilterTimerV8 =
    setTimeout(
      applyFinanceFiltersV8,
      250
    );
}


function applyFinanceFiltersV8() {
  state.financeFiltersV8.type =
    document.getElementById(
      'financeFilterTypeV8'
    )
    .value;

  state.financeFiltersV8.source =
    document.getElementById(
      'financeFilterSourceV8'
    )
    .value;

  state.financeFiltersV8.department =
    document.getElementById(
      'financeFilterDepartmentV8'
    )
    .value;

  state.financeFiltersV8.rapbj =
    document.getElementById(
      'financeFilterRapbjV8'
    )
    .value;

  state.financeFiltersV8.category =
    document.getElementById(
      'financeFilterCategoryV8'
    )
    .value;

  loadFinanceCommandV8(
    true
  );
}


function loadFinanceCommandV8(
  keepFilterControls = false
) {
  const target =
    document.getElementById(
      'financeTransactionListV8'
    );

  if (!target) {
    return;
  }

  target.innerHTML = `
    <div class="finance-v8-loading">
      Menyiapkan catatan keuangan...
    </div>
  `;

  const filters = {
    ...state.financeFiltersV8,
    month:
      Number(
        state.financeFiltersV8.month
      )
  };

  google.script.run

    .withSuccessHandler(
      data => {
        state.financeV8 =
          data;

        renderFinanceCommandV8(
          data,
          keepFilterControls
        );
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

    .getFinanceCommandCenterV8(
      state.year,
      filters
    );
}


function renderFinanceCommandV8(
  data,
  keepFilterControls
) {
  setText(
    'financePeriodTitleV8',
    data.monthLabel +
    ' ' +
    data.year
  );

  setText(
    'financeIncome',
    money(
      data.trend.current.income
    )
  );

  setText(
    'financeExpense',
    money(
      data.trend.current.expense
    )
  );

  setText(
    'financeBalance',
    money(
      data.trend.current.balance
    )
  );

  setText(
    'financeIncomeChangeV8',
    financeChangeTextV8(
      data.trend.incomeChange,
      'bulan sebelumnya'
    )
  );

  setText(
    'financeExpenseChangeV8',
    financeChangeTextV8(
      data.trend.expenseChange,
      'bulan sebelumnya'
    )
  );

  const closed =
    String(
      data.period.IS_CLOSED
    ).toLowerCase() ===
    'true';

  setText(
    'financePeriodStatusV8',
    (
      data.period.STATUS ||
      'Draft'
    ) +
    (
      closed
        ? ' · Ditutup'
        : ''
    )
  );

  renderFinanceTrendV8(
    data
  );

  renderFinanceMinistryV8(
    data
  );

  renderFundLedgersV8(
    data
  );

  renderReconciliationV8(
    data
  );

  if (
    !keepFilterControls
  ) {
    hydrateFinanceFiltersV8(
      data
    );
  }

  renderFinanceTransactionsV8(
    data.transactions
  );
}


function financeChangeTextV8(
  value,
  suffix
) {
  const number =
    Number(
      value ||
      0
    );

  return (
    (
      number >
      0
        ? '+'
        : ''
    ) +
    number +
    '% vs ' +
    suffix
  );
}


function renderFinanceTrendV8(
  data
) {
  const max =
    Math.max(
      1,
      ...data.monthly.map(
        item =>
          Math.max(
            item.income,
            item.expense
          )
      )
    );

  document.getElementById(
    'financeTrendChartV8'
  ).innerHTML =
    data.monthly
      .map(
        item => `
          <div
            class="trend-month-v8 ${item.month === data.month ? 'active' : ''}"
            title="${esc(item.label)}">

            <div class="trend-bars-v8">

              <i
                class="income"
                style="height:${Math.max(3, item.income / max * 100)}%">
              </i>

              <i
                class="expense"
                style="height:${Math.max(3, item.expense / max * 100)}%">
              </i>

            </div>

            <span>
              ${item.label.slice(0,3)}
            </span>

          </div>
        `
      )
      .join('');

  const high =
    data.trend.highestIncome;

  const low =
    data.trend.lowestIncome;

  const expense =
    data.trend.highestExpense;

  document.getElementById(
    'financeTrendHighlightsV8'
  ).innerHTML = `

    <span>
      <small>Pemasukan tertinggi</small>
      <strong>
        ${high ? high.label + ' · ' + money(high.income) : '—'}
      </strong>
    </span>

    <span>
      <small>Pemasukan terendah</small>
      <strong>
        ${low ? low.label + ' · ' + money(low.income) : '—'}
      </strong>
    </span>

    <span>
      <small>Pengeluaran tertinggi</small>
      <strong>
        ${expense ? expense.label + ' · ' + money(expense.expense) : '—'}
      </strong>
    </span>
  `;
}


function targetStatusClassV8(
  status
) {
  return (
    status &&
    status.code
      ? 'target-' +
        status.code
      : 'target-unset'
  );
}


function renderFinanceMinistryV8(
  data
) {
  const metric =
    (
      title,
      item
    ) => `
      <article
        class="ministry-v8-card ${targetStatusClassV8(item.status)}">

        <header>
          <span>${esc(title)}</span>
          <b>${esc(item.status.label)}</b>
        </header>

        <strong>
          ${money(item.actual)}
        </strong>

        <small>
          Target ${money(item.target)}
          ·
          ${
            item.target > 0
              ? item.percent + '%'
              : 'belum diatur'
          }
        </small>

        <div>
          <i style="width:${Math.min(100, Number(item.percent || 0))}%"></i>
        </div>

      </article>
    `;

  document.getElementById(
    'financeMinistryV8'
  ).innerHTML =
    metric(
      'Perpuluhan',
      data.selectedMinistry.perpuluhan
    ) +
    metric(
      'Persembahan Terpadu',
      data.selectedMinistry.persembahanTerpadu
    );

  const p =
    data.ministryMonthly.perpuluhan;

  const t =
    data.ministryMonthly.persembahanTerpadu;

  const max =
    Math.max(
      1,
      ...p.map(
        item =>
          Math.max(
            item.actual,
            item.target
          )
      ),
      ...t.map(
        item =>
          Math.max(
            item.actual,
            item.target
          )
      )
    );

  const historyRow =
    (
      title,
      rows
    ) => `
      <section class="ministry-history-row-v8">

        <header>
          <strong>${esc(title)}</strong>
          <span>■ realisasi &nbsp; □ target</span>
        </header>

        <div class="ministry-monthly-grid-v8">

          ${
            rows
              .map(
                item => `
                  <article>

                    <span>
                      ${item.label.slice(0,3)}
                    </span>

                    <div>

                      <i
                        style="height:${item.actual / max * 100}%"
                        title="Realisasi ${money(item.actual)}">
                      </i>

                      <b
                        style="height:${item.target / max * 100}%"
                        title="Target ${money(item.target)}">
                      </b>

                    </div>

                    <small class="${targetStatusClassV8(item.status)}">
                      ${item.target > 0 ? item.percent + '%' : '—'}
                    </small>

                  </article>
                `
              )
              .join('')
          }

        </div>

      </section>
    `;

  document.getElementById(
    'financeMinistryHistoryV8'
  ).innerHTML =
    historyRow(
      'Perpuluhan',
      p
    ) +
    historyRow(
      'Persembahan Terpadu',
      t
    );
}


function renderFundLedgersV8(
  data
) {
  document.getElementById(
    'financeFundLedgersV8'
  ).innerHTML =
    data.fundLedgers
      .map(
        (
          item,
          index
        ) => `
          <button
            class="fund-ledger-v8"
            onclick="openFundLedgerV8('${escJs(item.source)}')">

            <span>
              ${String(index + 1).padStart(2,'0')}
            </span>

            <div>

              <small>
                ${esc(item.source)}
              </small>

              <strong>
                ${money(item.closing)}
              </strong>

            </div>

            <dl>

              <div>
                <dt>Saldo awal</dt>
                <dd>${money(item.opening)}</dd>
              </div>

              <div>
                <dt>Masuk</dt>
                <dd>${money(item.income)}</dd>
              </div>

              <div>
                <dt>Keluar</dt>
                <dd>${money(item.expense)}</dd>
              </div>

            </dl>

            <b>↗</b>

          </button>
        `
      )
      .join('');
}


function openFundLedgerV8(
  source
) {
  const item =
    state.financeV8.fundLedgers
      .find(
        row =>
          row.source ===
          source
      );

  if (!item) {
    return;
  }

  openActionModal(
    source,
    `
      <div class="fund-ledger-modal-v8">

        <div class="fund-ledger-summary-v8">

          <span>
            <small>Saldo awal</small>
            <strong>${money(item.opening)}</strong>
          </span>

          <span>
            <small>Masuk</small>
            <strong>${money(item.income)}</strong>
          </span>

          <span>
            <small>Keluar</small>
            <strong>${money(item.expense)}</strong>
          </span>

          <span>
            <small>Saldo akhir</small>
            <strong>${money(item.closing)}</strong>
          </span>

        </div>

        <div class="record-list">

          ${
            item.rows.length
              ? item.rows
                  .map(
                    trx => `
                      <div class="record-row">

                        <div class="record-main">

                          <strong>
                            ${esc(trx.DESKRIPSI || trx.KATEGORI || 'Transaksi')}
                          </strong>

                          <span>
                            ${esc(trx.NO_TRANSAKSI || '')}
                            · ${dateLabel(trx.TANGGAL)}
                          </span>

                        </div>

                        <strong>
                          ${trx.JENIS === 'Pengeluaran' ? '−' : '+'}
                          ${money(trx.NOMINAL)}
                        </strong>

                      </div>
                    `
                  )
                  .join('')
              : emptyState('Belum ada transaksi.')
          }

        </div>

      </div>
    `
  );
}


function renderReconciliationV8(
  data
) {
  document.getElementById(
    'financeReconV8'
  ).innerHTML =
    data.reconciliation
      .map(
        item => `
          <article class="recon-card-v8 ${item.status === 'Sesuai' ? 'ok' : (item.status === 'Selisih' ? 'danger' : '')}">

            <header>
              <span>${esc(item.source)}</span>
              <b>${esc(item.status)}</b>
            </header>

            <div>

              <label>
                <span>Saldo sistem</span>
                <strong>${money(item.system)}</strong>
              </label>

              <label>
                <span>Saldo aktual</span>
                <input
                  id="reconActual-${slugV8(item.source)}"
                  type="number"
                  value="${item.actual === null ? '' : Number(item.actual)}"
                  placeholder="0">
              </label>

            </div>

            <footer>

              <span>
                Selisih:
                <strong>
                  ${item.difference === null ? '—' : money(item.difference)}
                </strong>
              </span>

              <button
                onclick="saveReconciliationV8('${escJs(item.source)}')">
                Simpan
              </button>

            </footer>

          </article>
        `
      )
      .join('');
}


function slugV8(
  text
) {
  return String(
    text ||
    ''
  )
  .toLowerCase()
  .replace(
    /[^a-z0-9]+/g,
    '-'
  )
  .replace(
    /^-|-$/g,
    ''
  );
}


function saveReconciliationV8(
  source
) {
  const actual =
    Number(
      document.getElementById(
        'reconActual-' +
        slugV8(
          source
        )
      ).value ||
      0
    );

  google.script.run

    .withSuccessHandler(
      () => {
        toast(
          'Pencocokan saldo tersimpan.'
        );

        loadFinanceCommandV8(
          true
        );
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .saveFinanceReconciliationV8({
      year:
        state.year,
      month:
        state.financeFiltersV8.month,
      source,
      actual
    },
       state.authV84.token);
}


function hydrateFinanceFiltersV8(
  data
) {
  const source =
    document.getElementById(
      'financeFilterSourceV8'
    );

  const department =
    document.getElementById(
      'financeFilterDepartmentV8'
    );

  const rapbj =
    document.getElementById(
      'financeFilterRapbjV8'
    );

  source.innerHTML =
    '<option value="">Semua sumber</option>' +
    data.filters.sources
      .map(
        item =>
          `<option value="${esc(item)}">${esc(item)}</option>`
      )
      .join('');

  department.innerHTML =
    '<option value="">Semua departemen</option>' +
    data.filters.departments
      .map(
        item =>
          `<option value="${esc(item)}">${esc(item)}</option>`
      )
      .join('');

  rapbj.innerHTML =
    '<option value="">Semua anggaran</option>' +
    data.filters.rapbj
      .map(
        item =>
          `<option value="${esc(item.id)}">${esc(item.label)}</option>`
      )
      .join('');

  document.getElementById(
    'financeFilterTypeV8'
  ).value =
    state.financeFiltersV8.type ||
    '';

  document.getElementById(
    'financeFilterCategoryV8'
  ).value =
    state.financeFiltersV8.category ||
    '';
}


function renderFinanceTransactionsV8(
  rows
) {
  document.getElementById(
    'financeTransactionListV8'
  ).innerHTML =
    rows.length
      ? rows
          .map(
            item => `
              <article class="finance-transaction-v8">

                <div class="transaction-number-v8">
                  <small>TRANSAKSI</small>
                  <strong>
                    ${esc(item.NO_TRANSAKSI || '—')}
                  </strong>
                </div>

                <div class="transaction-main-v8">

                  <strong>
                    ${esc(item.DESKRIPSI || item.KATEGORI || 'Transaksi')}
                  </strong>

                  <span>
                    ${dateLabel(item.TANGGAL)}
                    · ${esc(item.JENIS)}
                    · ${esc(item.SUMBER_DANA || '-')}
                    ${item.DEPARTEMEN ? ' · ' + esc(item.DEPARTEMEN) : ''}
                  </span>

                  <small>
                    ${esc(item.KATEGORI || 'Tanpa kategori')}
                  </small>

                </div>

                <div class="transaction-value-v8">

                  <strong>
                    ${item.JENIS === 'Pengeluaran' ? '−' : '+'}
                    ${money(item.NOMINAL)}
                  </strong>

                  <span>
                    ${item.EVIDENCE.length}
                    bukti
                  </span>

                </div>

                <div class="transaction-actions-v8">

                  <button
                    onclick="openFinanceEvidenceV8('${item.ID_TRANSAKSI}')">
                    Bukti
                  </button>

                  <button
                    onclick="openFinanceHistoryV8('${item.ID_TRANSAKSI}')">
                    Riwayat
                  </button>

                  <button
                    onclick="editEntity('keuangan','${item.ID_TRANSAKSI}')"
                    ${String(state.financeV8.period.IS_CLOSED).toLowerCase() === 'true' ? 'disabled' : ''}>
                    Ubah
                  </button>

                </div>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Tidak ada transaksi sesuai filter.'
        );
}


function openFinanceEvidenceV8(
  id
) {
  const item =
    state.financeV8.transactions
      .find(
        row =>
          String(
            row.ID_TRANSAKSI
          ) ===
          String(
            id
          )
      ) ||
    state.data.keuangan
      .find(
        row =>
          String(
            row.ID_TRANSAKSI
          ) ===
          String(
            id
          )
      );

  const evidence =
    item &&
    item.EVIDENCE
      ? item.EVIDENCE
      : [];

  openActionModal(
    'Bukti Transaksi',
    `
      <div class="evidence-list-v8">

        ${
          evidence.length
            ? evidence
                .map(
                  file => `
                    <div class="evidence-row-v8">

                      <span>
                        <strong>${esc(file.JUDUL || file.FILE_NAME)}</strong>
                        <small>${esc(file.MIME_TYPE || '')}</small>
                      </span>

                      <button
                        onclick="previewAttachmentV8('${escJs(file.FILE_ID)}','${escJs(file.JUDUL || file.FILE_NAME)}')">
                        Lihat tampilan
                      </button>

                      <button
                        onclick="removeFinanceEvidenceV8('${file.ID_ATTACHMENT}','${id}')">
                        Hapus
                      </button>

                    </div>
                  `
                )
                .join('')
            : emptyState(
                'Belum ada bukti transaksi.'
              )
        }

      </div>

      <div class="form-actions">

        <button
          class="form-save"
          onclick="
            closeActionModal();
            openEntityAttachmentUpload('keuangan','${id}');
          ">
          + Upload Bukti
        </button>

      </div>
    `
  );
}


function previewAttachmentV8(
  fileId,
  title
) {
  closeActionModal();

  setText(
    'previewTitleV7',
    title ||
    'Bukti Transaksi'
  );

  const body =
    document.getElementById(
      'previewBodyV7'
    );

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
                src="${esc(info.previewUrl)}">
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
      fileId
    );
}


function removeFinanceEvidenceV8(
  attachmentId,
  transactionId
) {
  if (
    !confirm(
      'Hapus bukti transaksi ini?'
    )
  ) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      () => {
        closeActionModal();

        toast(
          'Bukti transaksi dihapus.'
        );

        loadFinanceCommandV8();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .deleteAttachment(
      attachmentId
    );
}


function openFinanceHistoryV8(
  id
) {
  google.script.run

    .withSuccessHandler(
      rows => {
        openActionModal(
          'Riwayat Perubahan',
          `
            <div class="finance-history-v8">

              ${
                rows.length
                  ? rows
                      .map(
                        item => `
                          <article>

                            <header>
                              <span>${dateTimeLabel(item.timestamp)}</span>
                              <b>${esc(item.action)}</b>
                            </header>

                            <small>
                              ${esc(item.user || '')}
                            </small>

                            <div>

                              ${
                                item.changes.length
                                  ? item.changes
                                      .map(
                                        change => `
                                          <p>
                                            <strong>${esc(change.field)}</strong>
                                            <span>${esc(change.oldValue || '—')}</span>
                                            <i>→</i>
                                            <span>${esc(change.newValue || '—')}</span>
                                          </p>
                                        `
                                      )
                                      .join('')
                                  : '<p>Tidak ada perubahan field.</p>'
                              }

                            </div>

                          </article>
                        `
                      )
                      .join('')
                  : emptyState(
                      'Belum ada riwayat perubahan.'
                    )
              }

            </div>
          `
        );
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .getFinanceTransactionHistoryV8(
      id
    );
}


function openFinanceGovernanceV8() {
  const period =
    state.financeV8.period;

  const closed =
    String(
      period.IS_CLOSED
    ).toLowerCase() ===
    'true';

  openActionModal(
    'Periksa & tutup bulan',
    `
      <div class="finance-governance-v8">

        <div class="governance-status-v8">

          <span>
            <small>Periode</small>
            <strong>
              ${esc(state.financeV8.monthLabel)} ${state.year}
            </strong>
          </span>

          <span>
            <small>Status laporan</small>
            <strong>${esc(simpleLabelV87(period.STATUS || 'Draft'))}</strong>
          </span>

          <span>
            <small>Tutup bulan</small>
            <strong>${closed ? 'Ditutup' : 'Terbuka'}</strong>
          </span>

        </div>

        <label>
          <span>Catatan Bendahara</span>
          <textarea id="financePeriodNoteV8">${esc(period.CATATAN_BENDAHARA || '')}</textarea>
        </label>

        ${
          closed
            ? `
              <label>
                <span>Alasan membuka kembali</span>
                <textarea
                  id="financeReopenNoteV8"
                  placeholder="Alasan wajib diisi"></textarea>
              </label>

              <div class="form-actions">
                <button
                  class="form-save"
                  onclick="reopenFinancePeriodV8()">
                  Buka Kembali Periode
                </button>
              </div>
            `
            : `
              <div class="governance-actions-v8">

                <button
                  onclick="saveFinanceStatusV8('Draft')">
                  Belum selesai
                </button>

                <button
                  onclick="saveFinanceStatusV8('Diverifikasi')">
                  Periksa
                </button>

                <button
                  onclick="saveFinanceStatusV8('Final')">
                  Final
                </button>

                <button
                  class="danger"
                  onclick="closeFinancePeriodV8()"
                  ${period.STATUS !== 'Final' ? 'disabled' : ''}>
                  Tutup Bulan
                </button>

              </div>
            `
        }

      </div>
    `
  );
}


function saveFinanceStatusV8(
  status
) {
  const note =
    document.getElementById(
      'financePeriodNoteV8'
    ).value;

  google.script.run

    .withSuccessHandler(
      () => {
        closeActionModal();
        toast(
          'Status laporan diperbarui.'
        );
        loadFinanceCommandV8();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .setFinanceReportStatusV8(
      state.year,
      state.financeFiltersV8.month,
      status,
      note,
       state.authV84.token
    );
}


function closeFinancePeriodV8() {
  if (
    !confirm(
      'Tutup bulan ini? Setelah ditutup, transaksi tidak dapat diubah sampai periode dibuka kembali.'
    )
  ) {
    return;
  }

  const note =
    document.getElementById(
      'financePeriodNoteV8'
    ).value;

  google.script.run

    .withSuccessHandler(
      () => {
        closeActionModal();
        toast(
          'Periode keuangan ditutup.'
        );
        loadData();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .closeFinancePeriodV8(
      state.year,
      state.financeFiltersV8.month,
      note,
       state.authV84.token
    );
}


function reopenFinancePeriodV8() {
  const note =
    document.getElementById(
      'financeReopenNoteV8'
    ).value;

  google.script.run

    .withSuccessHandler(
      () => {
        closeActionModal();
        toast(
          'Periode dibuka kembali.'
        );
        loadFinanceCommandV8();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .reopenFinancePeriodV8(
      state.year,
      state.financeFiltersV8.month,
      note,
       state.authV84.token
    );
}


function downloadFinanceMonthlyPdfV8() {
  showLoader();

  google.script.run

    .withSuccessHandler(
      result => {
        downloadBase64FileV8(
          result
        );

        hideLoader();

        toast(
          'Laporan bulanan siap.'
        );
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .generateFinanceMonthlyPdfV8(
      state.year,
      state.financeFiltersV8.month
    );
}


function downloadBase64FileV8(
  result
) {
  const bytes =
    base64ToBytes(
      result.base64
    );

  const blob =
    new Blob(
      [
        bytes
      ],
      {
        type:
          result.mimeType ||
          'application/pdf'
      }
    );

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
    result.fileName ||
    'laporan.pdf';

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
    1500
  );
}


function openFinanceTargetV702() {
  google.script.run

    .withSuccessHandler(
      data => {
        const m =
          data.ministry;

        openActionModal(
          'Target Jemaat',
          `
            <div class="finance-target-form-v702">

              <p>
                Target bulanan dipakai untuk menghitung ketercapaian per bulan dan akumulasi.
              </p>

              <label>
                <span>Target Perpuluhan / bulan</span>
                <input
                  id="targetPerpuluhanV702"
                  type="number"
                  min="0"
                  value="${Number(m.perpuluhan.targetMonth || 0)}">
              </label>

              <label>
                <span>Target Persembahan Terpadu / bulan</span>
                <input
                  id="targetTerpaduV702"
                  type="number"
                  min="0"
                  value="${Number(m.persembahanTerpadu.targetMonth || 0)}">
              </label>

              <div class="form-actions">
                <button
                  class="form-save"
                  onclick="saveFinanceTargetV702()">
                  Simpan Target
                </button>
              </div>

            </div>
          `
        );
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .getFinanceRevisionDataV702(
      state.year
    );
}


function saveFinanceTargetV702() {
  google.script.run

    .withSuccessHandler(
      () => {
        closeActionModal();

        toast(
          'Target keuangan disimpan.'
        );

        loadFinanceCommandV8();
      }
    )

    .withFailureHandler(
      error =>
        notifyErrorV88(error)
    )

    .setFinanceMinistryTargetsV702({
      perpuluhan:
        Number(
          document.getElementById(
            'targetPerpuluhanV702'
          ).value ||
          0
        ),
      persembahanTerpadu:
        Number(
          document.getElementById(
            'targetTerpaduV702'
          ).value ||
          0
        )
    },
       state.authV84.token);
}


/* =========================================================
   INVENTORY
========================================================= */

function renderInventory() {
  const items =
    state.data.inventaris;

  document.getElementById(
    'inventoryList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item => `
              <article class="inventory-card">

                <h3>
                  ${esc(item.NAMA_BARANG)}
                </h3>

                <p>
                  ${esc(item.KATEGORI || 'Tanpa kategori')}
                  ·
                  ${esc(item.LOKASI || 'Lokasi belum diisi')}
                </p>

                <strong>
                  ${Number(item.JUMLAH || 0)} unit
                </strong>

                <footer>

                  <span class="badge ${item.KONDISI === 'Rusak' ? 'danger' : ''}">
                    ${esc(item.KONDISI || '-')}
                  </span>

                  <button
                    class="mini-button"
                    onclick="editEntity('inventaris','${item.ID_INVENTARIS}')">

                    Ubah

                  </button>

                </footer>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Belum ada inventaris.'
        );
}


/* =========================================================
   PEOPLE
========================================================= */

function renderOfficers() {
  const items =
    state.data.pengurus;

  document.getElementById(
    'officerList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item =>
              personCard(
                item,
                'pengurus'
              )
          )
          .join('')
      : emptyState(
          'Belum ada pengurus.'
        );
}


function memberFamilyNameV82(
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


function memberFullNameV82(
  item
) {
  const name =
    String(
      item.NAMA ||
      ''
    )
    .trim();

  const family =
    memberFamilyNameV82(
      item
    );

  if (!family) {
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


function hydrateMemberFamilyFiltersV82() {
  const select =
    document.getElementById(
      'filterFamilyV82'
    );

  if (!select) {
    return;
  }

  const families =
    Array.from(
      new Set(
        state.data.jemaat
          .map(
            item =>
              memberFamilyNameV82(
                item
              )
          )
          .filter(Boolean)
      )
    )
    .sort(
      (
        a,
        b
      ) =>
        a.localeCompare(
          b,
          'id'
        )
    );

  state.membershipFamiliesV82 =
    families;

  let previous =
    state.memberFiltersV82.family;

  if (
    previous &&
    !families.includes(
      previous
    )
  ) {
    previous =
      '';

    state.memberFiltersV82.family =
      '';
  }

  select.innerHTML =
    `
      <option value="">
        Semua keluarga
      </option>
    ` +
    families
      .map(
        family => `
          <option
            value="${esc(family)}"
            ${family === previous ? 'selected' : ''}>
            ${esc(family)}
          </option>
        `
      )
      .join('');

  updateSelectedFamilyActionV82();
}


function applyMemberFiltersV82() {
  const search =
    document.getElementById(
      'searchJemaat'
    );

  const family =
    document.getElementById(
      'filterFamilyV82'
    );

  const role =
    document.getElementById(
      'filterFamilyRoleV82'
    );

  state.memberFiltersV82.search =
    search
      ? search.value
      : '';

  state.memberFiltersV82.family =
    family
      ? family.value
      : '';

  state.memberFiltersV82.role =
    role
      ? role.value
      : '';

  renderMembers();

  updateSelectedFamilyActionV82();
}


function updateSelectedFamilyActionV82() {
  const family =
    state.memberFiltersV82.family ||
    '';

  const label =
    document.getElementById(
      'selectedFamilyLabelV82'
    );

  const button =
    document.getElementById(
      'familyCardButtonV82'
    );

  if (label) {
    label.textContent =
      family
        ? (
            'Keluarga ' +
            family
          )
        : 'Pilih nama keluarga';
  }

  if (button) {
    button.disabled =
      !family;
  }
}


function renderMembers(
  search
) {
  if (
    search !==
    undefined
  ) {
    state.memberFiltersV82.search =
      String(
        search ||
        ''
      );
  }

  const keyword =
    String(
      state.memberFiltersV82.search ||
      ''
    )
    .toLowerCase()
    .trim();

  const familyFilter =
    String(
      state.memberFiltersV82.family ||
      ''
    )
    .toLowerCase();

  const roleFilter =
    String(
      state.memberFiltersV82.role ||
      ''
    );

  const roleOrder = {
    Ayah:
      1,
    Ibu:
      2,
    Anak:
      3
  };

  const items =
    state.data.jemaat
      .filter(
        item => {
          const family =
            memberFamilyNameV82(
              item
            );

          if (
            familyFilter &&
            family.toLowerCase() !==
            familyFilter
          ) {
            return false;
          }

          if (
            roleFilter &&
            item.POSISI_KELUARGA !==
            roleFilter
          ) {
            return false;
          }

          if (!keyword) {
            return true;
          }

          return [
            memberFullNameV82(
              item
            ),
            item.NAMA,
            family,
            item.POSISI_KELUARGA,
            item.NOMOR_ANGGOTA,
            item.TEMPAT_LAHIR,
            item.TANGGAL_LAHIR,
            item.NO_TELEPON,
            item.NO_WHATSAPP,
            item.ALAMAT
          ]
          .join(' ')
          .toLowerCase()
          .includes(
            keyword
          );
        }
      )
      .sort(
        (
          a,
          b
        ) => {
          const familyCompare =
            memberFamilyNameV82(
              a
            )
            .localeCompare(
              memberFamilyNameV82(
                b
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
              roleOrder[
                a.POSISI_KELUARGA
              ] ||
              99
            ) -
            Number(
              roleOrder[
                b.POSISI_KELUARGA
              ] ||
              99
            );

          if (
            roleCompare
          ) {
            return roleCompare;
          }

          return memberFullNameV82(
            a
          )
          .localeCompare(
            memberFullNameV82(
              b
            ),
            'id'
          );
        }
      );

  const counter =
    document.getElementById(
      'memberFilterCountV82'
    );

  if (counter) {
    counter.textContent =
      items.length +
      ' anggota';
  }

  document.getElementById(
    'memberList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item =>
              personCard(
                item,
                'jemaat'
              )
          )
          .join('')
      : emptyState(
          'Anggota tidak ditemukan.'
        );
}


function personCard(
  item,
  entity
) {
  const id =
    entity ===
    'pengurus'
      ? item.ID_PENGURUS
      : item.ID_ANGGOTA;

  const displayName =
    entity ===
    'jemaat'
      ? memberFullNameV82(
          item
        )
      : item.NAMA;

  const image =
    item.FOTO_URL
      ? `
        <button
          class="person-photo-button-v7"
          onclick="openPersonViewerV7('${entity}','${id}')">

          <img
            src="${esc(item.FOTO_URL)}"
            alt="${esc(displayName || '')}"
            loading="lazy">

        </button>
      `
      : `
        <button
          class="person-photo-button-v7"
          onclick="openPersonViewerV7('${entity}','${id}')">

          <div class="photo-fallback">
            ${initials(displayName)}
          </div>

        </button>
      `;

  const subtitle =
    entity ===
    'pengurus'
      ? (
          esc(item.DEPARTEMEN || '-')
        )
      : (
          '<strong>Keluarga ' +
          esc(
            memberFamilyNameV82(
              item
            ) ||
            'belum diisi'
          ) +
          '</strong>' +
          (
            item.POSISI_KELUARGA
              ? (
                  ' · ' +
                  esc(
                    item.POSISI_KELUARGA
                  )
                )
              : ''
          ) +
          (
            item.NOMOR_ANGGOTA
              ? '<br>No. ' +
                esc(
                  item.NOMOR_ANGGOTA
                )
              : ''
          ) +
          (
            item.NO_TELEPON ||
            item.NO_WHATSAPP
              ? '<br>' +
                esc(
                  item.NO_TELEPON ||
                  item.NO_WHATSAPP
                )
              : ''
          )
        );

  return `
    <article class="person-card ${entity === 'jemaat' ? 'member-card-v82' : ''}">

      <div class="person-photo">
        ${image}
      </div>

      <div class="person-info">

        <h3>
          ${esc(displayName)}
        </h3>

        <p>
          ${subtitle}
        </p>

        <footer>

          <span class="badge ${statusClass(item.STATUS)}">
            ${esc(item.STATUS || 'Aktif')}
          </span>

          ${
            entity ===
            'jemaat'
              ? `
                <button
                  class="mini-button"
                  onclick="openMemberIdentityV82('${id}')">
                  Kartu
                </button>
              `
              : ''
          }

          <button
            class="mini-button"
            onclick="editEntity('${entity}','${id}')">

            Ubah

          </button>

        </footer>

      </div>

    </article>
  `;
}


/* =========================================================
   DOCUMENTS
========================================================= */

function renderDocuments() {
  const items =
    state.data.documents;

  document.getElementById(
    'documentList'
  ).innerHTML =
    items.length
      ? items
          .map(
            item => `
              <article class="document-card">

                <div class="document-mark">
                  DOC
                </div>

                <div>

                  <h3>
                    ${esc(item.JUDUL)}
                  </h3>

                  <p>
                    ${dateLabel(item.TANGGAL)}
                    ·
                    ${esc(item.KATEGORI || '-')}
                    ${
                      item.NOMOR_DOKUMEN
                        ? ' · ' +
                          esc(item.NOMOR_DOKUMEN)
                        : ''
                    }
                  </p>

                </div>

                <div class="record-actions">${publicationControlV87('dokumen', item)}

                  ${
                    item.FILE_URL
                      ? `
                        <button
                          class="mini-button"
                          onclick="previewDocumentV7('${item.ID_DOKUMEN}')">

                          Lihat tampilan

                        </button>

                        <button
                          class="mini-button"
                          onclick="window.open('${escJs(item.FILE_URL)}','_blank')">

                          Buka

                        </button>
                      `
                      : ''
                  }

                  <button
                    class="mini-button"
                    onclick="editEntity('dokumen','${item.ID_DOKUMEN}')">

                    Ubah

                  </button>

                </div>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Belum ada dokumen.'
        );
}


/* =========================================================
   CALENDAR
========================================================= */

function renderCalendar() {
  const date =
    state.calendarDate;

  const year =
    date.getFullYear();

  const month =
    date.getMonth();

  const monthName =
    date.toLocaleDateString(
      'id-ID',
      {
        month:
          'long',

        year:
          'numeric'
      }
    );

  setText(
    'calendarTitle',
    capitalize(
      monthName
    )
  );

  const first =
    new Date(
      year,
      month,
      1
    );

  const last =
    new Date(
      year,
      month +
      1,
      0
    );

  const mondayStart =
    (
      first.getDay() +
      6
    ) %
    7;

  const days = [
    'Sen',
    'Sel',
    'Rab',
    'Kam',
    'Jum',
    'Sab',
    'Min'
  ];

  let html =
    days
      .map(
        day => `
          <div class="calendar-day-name">
            ${day}
          </div>
        `
      )
      .join('');

  const totalCells =
    Math.ceil(
      (
        mondayStart +
        last.getDate()
      ) /
      7
    ) *
    7;

  for (
    let cell = 0;
    cell < totalCells;
    cell++
  ) {
    const day =
      cell -
      mondayStart +
      1;

    const valid =
      day >=
        1 &&
      day <=
        last.getDate();

    const current =
      valid
        ? new Date(
            year,
            month,
            day
          )
        : null;

    const iso =
      current
        ? localIsoDate(
            current
          )
        : '';

    const events =
      current
        ? state.data.calendar
            .filter(
              item =>
                item.date ===
                iso
            )
        : [];

    html += `
      <div class="calendar-cell ${valid ? '' : 'muted'}">

        ${
          valid
            ? `
              <span class="calendar-date">
                ${day}
              </span>

              ${
                events
                  .map(
                    event => `
                      <div class="calendar-event ${esc(event.type)}">
                        ${esc(event.title)}
                      </div>
                    `
                  )
                  .join('')
              }
            `
            : ''
        }

      </div>
    `;
  }

  document.getElementById(
    'calendarGrid'
  ).innerHTML =
    html;

  const monthEvents =
    state.data.calendar
      .filter(
        item => {
          const itemDate =
            new Date(
              item.date +
              'T12:00:00'
            );

          return (
            itemDate.getFullYear() ===
              year &&
            itemDate.getMonth() ===
              month
          );
        }
      );

  document.getElementById(
    'calendarMobile'
  ).innerHTML =
    monthEvents.length
      ? monthEvents
          .map(
            item => `
              <article class="calendar-mobile-day">

                <strong>
                  ${dateLabel(item.date)}
                </strong>

                <div class="calendar-event ${esc(item.type)}">
                  ${esc(item.title)}
                  <br>
                  <small>
                    ${esc(item.meta || '')}
                  </small>
                </div>

              </article>
            `
          )
          .join('')
      : emptyState(
          'Tidak ada agenda pada bulan ini.'
        );
}


function changeCalendarMonth(
  delta
) {
  const next =
    new Date(
      state.calendarDate
        .getFullYear(),
      state.calendarDate
        .getMonth() +
        delta,
      1
    );

  if (
    next.getFullYear() !==
    state.year
  ) {
    state.year =
      next.getFullYear();

    state.calendarDate =
      next;

    loadData();

    return;
  }

  state.calendarDate =
    next;

  renderCalendar();
}


/* =========================================================
   NAVIGATION
========================================================= */

function bindNavigation() {
  /*
   * Nav click is handled by inline shellNavigate().
   * Here we only add keyboard support so there is no duplicate click.
   */
  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(
      button => {
        button.addEventListener(
          'keydown',
          event => {
            if (
              event.key === 'Enter' ||
              event.key === ' '
            ) {
              event.preventDefault();

              shellNavigate(
                button.dataset.page || firstGroupPageV87(button.dataset.group)
              );
            }
          }
        );
      }
    );
}




function setWorkspaceLockedV89(locked){
  document.body.classList.toggle('auth-locked-v89',locked);
  document.querySelectorAll('body > :not(#authGateV84):not(script)').forEach(element=>{
    element.inert=locked;
    if(locked)element.setAttribute('aria-hidden','true');else element.removeAttribute('aria-hidden');
  });
}
function setLoginBusyV89(busy){const button=document.getElementById('loginSubmitV89');if(!button)return;button.disabled=busy;button.setAttribute('aria-busy',String(busy));button.querySelector('span').textContent=busy?'Memeriksa…':'Masuk';}
function showAuthGateV84(msg=''){const g=document.getElementById('authGateV84');if(g)g.classList.add('show');setWorkspaceLockedV89(true);setLoginBusyV89(false);setText('loginErrorV84',msg)}
function hideAuthGateV84(){const g=document.getElementById('authGateV84');if(g)g.classList.remove('show');setWorkspaceLockedV89(false);setLoginBusyV89(false);setText('loginErrorV84','')}

function handleGoogleLogin(response) {
  setLoginBusyV89(true);
  setText('loginErrorV84', 'Memeriksa akun Google...');
  google.script.run
    .withSuccessHandler(r => {
      state.authV84 = { token: r.token, user: r.user };
      localStorage.setItem('mg_auth_token_v84', r.token);
      localStorage.setItem('mg_auth_user_v84', JSON.stringify(r.user));
      document.getElementById('loginPinV84').value = '';
      hideAuthGateV84();
      startBootV601();
    })
    .withFailureHandler(x => {setLoginBusyV89(false);setText('loginErrorV84', errorMessage(x));})
    .loginGoogleV85(response.credential);
}

function loginMajelisV84(e){e.preventDefault();const u=document.getElementById('loginUsernameV84').value,p=document.getElementById('loginPinV84').value;setLoginBusyV89(true);setText('loginErrorV84','Memeriksa akses…');google.script.run.withSuccessHandler(r=>{state.authV84={token:r.token,user:r.user};localStorage.setItem('mg_auth_token_v84',r.token);localStorage.setItem('mg_auth_user_v84',JSON.stringify(r.user));document.getElementById('loginPinV84').value='';hideAuthGateV84();startBootV601()}).withFailureHandler(x=>{setLoginBusyV89(false);setText('loginErrorV84',errorMessage(x))}).loginMajelisV84(u,p)}
function logoutMajelisV84(){const t=state.authV84.token;state.authV84={token:'',user:null};localStorage.removeItem('mg_auth_token_v84');localStorage.removeItem('mg_auth_user_v84');google.script.run.logoutMajelisV84(t);showAuthGateV84('Anda telah keluar.')}
function hasPageAccessV84(p){const u=state.authV84.user;return !!(u&&u.permissions&&Array.isArray(u.permissions.pages)&&u.permissions.pages.includes(p))}
function canWriteEntityV84(e){const u=state.authV84.user;const _r=u&&(u.role||u.ROLE);const l=u&&u.permissions?u.permissions.write:[];const result=Array.isArray(l)&&(l.includes('*')||l.includes(e));if(!result)console.warn('[MG-AUTH] canWriteEntityV84 DENIED entity='+e+' user='+JSON.stringify({role:_r,hasPerms:!!(u&&u.permissions),write:l}));return result;}
function applyRoleUiV84(){const u=state.authV84.user;if(!u)return;const _r=u.role||u.ROLE;document.querySelectorAll('[data-page]').forEach(el=>{el.hidden=!hasPageAccessV84(el.dataset.page)});document.querySelectorAll('.role-admin-only-v84').forEach(el=>{el.hidden=(_r!=='ADMIN'&&_r!=='SUPERADMIN')});applyOfficerControlsV86()}
function loadAccessUsersV84(){const _u=state.authV84.user,_r=_u&&(_u.role||_u.ROLE);if(!_u||(_r!=='ADMIN'&&_r!=='SUPERADMIN'))return;google.script.run.withSuccessHandler(r=>{state.accessUsersV84=r;renderAccessUsersV84()}).withFailureHandler(e=>notifyErrorV88(e)).listAccessUsersV84(state.authV84.token)}
function renderAccessUsersV84() {
  const target=document.getElementById('accessUserListV84');if(!target)return;
  target.innerHTML=(state.accessUsersV84 || []).map(row=>`<article><div><small>${esc(simpleRoleLabelV87(row.role))}${row.canApprove?' · Boleh menyetujui rapat':''}</small><strong>${esc(row.name || row.username)}</strong><span>${esc(row.position || '')} · @${esc(row.username)} · ${esc(row.status)}</span></div><button onclick="openAccessUserFormV84('${escJs(row.id)}')">Ubah</button></article>`).join('') || emptyState('Belum ada akun pengurus.');
}

function openAccessUserFormV84(id='') {
  const row=id?(state.accessUsersV84 || []).find(item=>item.id===id):null;
  const roles=['ADMIN','SEKRETARIS','KEUANGAN','MAJELIS'];
  // Keep old account rights until the administrator explicitly chooses a new profile.
  if(row && !roles.includes(row.role))roles.push(row.role);
  openActionModal(row?'Ubah akun pengurus':'Tambah akun pengurus',`<form id="accessFormV87"><div class="access-form-v84"><label><span>Nama</span><input id="accessNameV84" value="${esc(row?row.name:'')}" required></label><label><span>Nama untuk masuk</span><input id="accessUsernameV84" value="${esc(row?row.username:'')}" required></label><label><span>Jenis akses</span><select id="accessRoleV84">${roles.map(role=>`<option value="${role}" ${(row?row.role:'MAJELIS')===role?'selected':''}>${simpleRoleLabelV87(role)}${!['ADMIN','SEKRETARIS','KEUANGAN','MAJELIS'].includes(role)?' (izin akun lama)':''}</option>`).join('')}</select></label><label><span>Jabatan di gereja (boleh kosong)</span><input id="accessPositionV87" value="${esc(row?row.position || '':'')}" placeholder="Contoh: Ketua jemaat"></label><label><span>Status akun</span><select id="accessStatusV84">${['Aktif','Nonaktif'].map(value=>`<option ${row && row.status===value?'selected':''}>${value}</option>`).join('')}</select></label><label class="full"><span>${row?'Kata sandi baru (kosongkan jika tetap)':'Kata sandi, minimal 6 karakter'}</span><input id="accessPinV84" type="password" minlength="6" ${row?'':'required'} autocomplete="new-password"></label><label class="full"><span><input id="accessApproveV87" type="checkbox" ${row && row.canApprove?'checked':''}> Boleh menyetujui hasil rapat dan membukanya untuk diperbaiki</span></label></div><p class="form-hint-v87">Jenis akses mengatur pekerjaan yang bisa dilakukan. Jabatan hanya keterangan. Izin menyetujui rapat diatur tersendiri.</p><button type="submit">Simpan</button>${row?`<button type="button" class="danger" onclick="deleteAccessUserFormV84('${escJs(row.id)}')">Hapus akun</button>`:''}</form>`,'');
  document.getElementById('accessFormV87').onsubmit=event=>{event.preventDefault();saveAccessUserFormV84(row?row.id:'');};
}

function saveAccessUserFormV84(id) {
  const form=document.getElementById('accessFormV87');if(!form.reportValidity())return;
  const payload={id,name:document.getElementById('accessNameV84').value,username:document.getElementById('accessUsernameV84').value,role:document.getElementById('accessRoleV84').value,status:document.getElementById('accessStatusV84').value,pin:document.getElementById('accessPinV84').value,position:document.getElementById('accessPositionV87').value,canApprove:document.getElementById('accessApproveV87').checked};
  const button=form.querySelector('[type="submit"]');button.disabled=true;
  google.script.run.withSuccessHandler(()=>{closeActionModal();toast('Akun pengurus tersimpan.');loadAccessUsersV84();}).withFailureHandler(error=>{button.disabled=false;notifyErrorV88(error);}).saveAccessUserV84(state.authV84.token,payload);
}

function deleteAccessUserFormV84(id){if(!confirm('Hapus akun ini?'))return;google.script.run.withSuccessHandler(()=>{closeActionModal();loadAccessUsersV84()}).withFailureHandler(e=>notifyErrorV88(e)).deleteAccessUserV84(state.authV84.token,id)}

const PAGE_CREATE_V83 = {
  rapat: {entity: 'notulen', label: 'Tambah Rapat'},
  usulan: {entity: 'usulan', label: 'Tambah Usulan'},

  tindak_lanjut: {entity: 'tindak_lanjut', label: 'Tambah tugas'},
  program: {entity: 'program', label: 'Tambah Program'},
  rapbj: {entity: 'rapbj', label: 'Tambah Pos'},
  keuangan: {entity: 'keuangan', label: 'Tambah Transaksi'},
  inventaris: {entity: 'inventaris', label: 'Tambah Inventaris'},
  pengurus: {entity: 'pengurus', label: 'Tambah Pengurus'},
  jemaat: {entity: 'jemaat', label: 'Tambah Anggota'},
  dokumen: {entity: 'dokumen', label: 'Tambah Dokumen'}
};


function createForCurrentPageV83() {
  const config =
    PAGE_CREATE_V83[
      state.page
    ];

  if (!config) {
    openQuickActionsV7();
    return;
  }

  if(!canWriteEntityV84(config.entity)){toast('Akun Akun ini belum punya izin menambah data di halaman ini.');return;}

  closeQuickActionsV7();

  openForm(
    config.entity,
    defaultEntityData(
      config.entity
    )
  );
}


function openPage(
  page,
  scroll = true
) {
  if(state.authV84.user&&page!=='dashboard'&&!hasPageAccessV84(page)){toast('Halaman ini belum tersedia untuk akun ini.');page='dashboard';}

  /*
   * V8.4.0 navigation invariant:
   * every page transition starts from the compact island state.
   */
  if (
    typeof window.closeDynamicIsland ===
    'function'
  ) {
    window.closeDynamicIsland();
  }

  state.page =
    page;

  updateMobileActionBarV7(
    page
  );

  document
    .querySelectorAll(
      '.nav-item'
    )
    .forEach(
      item => {
        item.classList.toggle(
          'active',
          item.dataset.page ===
          page
        );
      }
    );

  document
    .querySelectorAll(
      '.page'
    )
    .forEach(
      section => {
        section.classList.toggle(
          'active',
          section.id ===
          page
        );
      }
    );

  const titles = {
    dashboard:
      'Ringkasan',

    rapat:
      'Rapat',

    usulan:
      'Usulan rapat',

    keputusan:
      'Keputusan rapat',

    tindak_lanjut:
      'Tugas',

    program:
      'Program Kerja',

    rapbj:
      'RAPBJ',

    keuangan:
      'Keuangan',

    inventaris:
      'Inventaris',

    pengurus:
      'Pengurus',

    jemaat:
      'Anggota Jemaat',

    dokumen:
      'Dokumen',

    surat:
      'Surat',

    akses:
      'Akun pengurus',

    kalender:
      'Kalender',

    arsip:
      'Arsip Tahunan',

    aktivitas:
      'Aktivitas'
  };

  setText(
    'pageTitle',
    titles[page] ||
    'Ringkasan'
  );

  const addMap =
    Object.fromEntries(
      Object.entries(
        PAGE_CREATE_V83
      )
      .map(
        ([page, config]) => [
          page,
          config.label
        ]
      )
    );

  const addButton =
    document.getElementById(
      'addButton'
    );

  const pdfButton =
    document.getElementById(
      'pdfButton'
    );

  if (
    addMap[
      page
    ]
  ) {
    addButton.style.display =
      'inline-flex';

    setText(
      'addButtonLabel',
      addMap[
        page
      ]
    );
  }

  else {
    addButton.style.display =
      'none';
  }

  const pdfPages = [
    'rapat',
    'usulan',
    'keputusan',
    'pic',
    'tindak_lanjut',
    'anggaran',
    'program',
    'rapbj',
    'keuangan',
    'inventaris',
    'pengurus',
    'jemaat',
    'dokumen'
  ];

  pdfButton.style.display =
    pdfPages.includes(
      page
    )
      ? 'inline-flex'
      : 'none';

  if (
    page ===
    'aktivitas'
  ) {
    loadAuditLog();
  }

  if (
    page ===
    'surat'
  ) {
    loadSecretaryLetterModuleV81();
  }

  if(page==='akses'){loadAccessUsersV84();}
  applyRoleUiV84();

  if (
    typeof window.closeDynamicIsland ===
    'function'
  ) {
    window.closeDynamicIsland();
  }

  if (scroll) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}


function openMobileNav() {
  toggleDynamicIsland();
}


function closeMobileNav() {
  closeDynamicIsland();
}


/* =========================================================
   YEAR / SEARCH / ADD
========================================================= */

function bindYear() {
  document
    .getElementById(
      'yearSelect'
    )
    .addEventListener(
      'change',
      event => {
        state.year =
          Number(
            event.target.value
          );

        state.calendarDate =
          new Date(
            state.year,
            0,
            1
          );

        loadData();
      }
    );
}


function bindSearch() {
  document
    .getElementById(
      'searchNotulen'
    )
    .addEventListener(
      'input',
      event => {
        renderNotulen(
          event.target.value
        );
      }
    );

  document
    .getElementById(
      'searchJemaat'
    )
    .addEventListener(
      'input',
      event => {
        state.memberFiltersV82.search =
          event.target.value;

        renderMembers();
      }
    );
}


function bindAdd() {
  const button =
    document.getElementById(
      'addButton'
    );

  if (!button) {
    return;
  }

  button.onclick =
    event => {
      event.preventDefault();

      createForCurrentPageV83();
    };
}


function defaultEntityData(
  entity
) {
  const today =
    localIsoDate(
      new Date()
    );

  const map = {
    notulen: {
      TANGGAL:
        today,

      STATUS:
        'Draft'
    },

    usulan: {
      TANGGAL_USUL:
        today,

      STATUS:
        'Diajukan',

      SUMBER_DANA:
        'Kas Jemaat'
    },

    keputusan: {
      TAHUN:
        state.year,

      PRIORITAS:
        'Normal',

      STATUS:
        'Aktif',

      SUMBER_DANA:
        'Kas Jemaat'
    },

    tindak_lanjut: {
      TAHUN:
        state.year,

      STATUS:
        'Belum Dimulai',

      PROGRESS:
        0
    },

    program: {
      TAHUN:
        state.year,

      STATUS:
        'Rencana',

      SUMBER_DANA:
        'Kas Jemaat'
    },

    rapbj: {
      TAHUN:
        state.year,

      STATUS:
        'Draft',

      SUMBER_DANA:
        'Kas Jemaat'
    },

    keuangan: {
      TANGGAL:
        today,

      JENIS:
        'Pengeluaran',

      SUMBER_DANA:
        'Kas Jemaat'
    },

    inventaris: {
      JUMLAH:
        1,

      KONDISI:
        'Baik',

      STATUS:
        'Aktif'
    },

    pengurus: {
      STATUS:
        'Aktif'
    },

    jemaat: {
      STATUS:
        'Aktif'
    },

    dokumen: {
      TANGGAL:
        today,

      STATUS:
        'Aktif'
    },

    departemen: {
      STATUS:
        'Aktif'
    }
  };

  return map[
    entity
  ] ||
  {};
}


/* =========================================================
   DYNAMIC FORM
========================================================= */

function openForm(
  entity,
  data = {}
) {
  if (!canWriteEntityV84(entity)) { toast('Akun ini belum punya izin mengubah data ini.'); return; }

  const config =
    FORM[
      entity
    ];

  if (!config) {
    toast(
      'Formulir belum tersedia untuk ' +
      entity +
      '.'
    );

    return;
  }

  const incoming =
    data ||
    {};

  const existingId =
    getEntityId(
      entity,
      incoming
    );

  data =
    existingId
      ? {...incoming}
      : {
          ...defaultEntityData(
            entity
          ),
          ...incoming
        };

  clearTimeout(state.draftTimer);
  state.pendingDraftDataV7 = null;
  state.editing = {
    entity,
    data
  };

  state.croppedPhotoPayload =
    null;

  const hasId =
    Boolean(
      getEntityId(
        entity,
        data
      )
    );

  setText(
    'modalTitle',
    (
      hasId
        ? 'Ubah '
        : 'Tambah '
    ) +
    config.title
  );

  const form =
    document.getElementById(
      'dynamicForm'
    );

  form.innerHTML = `
    <div id="draftBannerV7" class="draft-banner-v7"><span id="draftStatusV7">Belum disimpan. Isian akan disimpan sementara saat diubah.</span></div>
    ${renderSimpleFieldsV87(entity, config.fields, data)}
    <div class="form-actions">

      ${
        hasId
          ? `
            <button
              type="button"
              class="delete-button"
              onclick="removeCurrent()">

              Hapus

            </button>
          `
          : ''
      }

      <button
        type="button"
        class="mini-button"
        onclick="closeModal()">

        Batal

      </button>

      <button
        type="submit"
        class="form-save">

        Simpan

      </button>

    </div>
  `;

  form.onsubmit =
    event => {
      event.preventDefault();

      saveCurrent();
    };

  bindFilePratinjaus();
  bindFormFeedbackV88(form);
  bindSimpleFormV87(entity, data);

  document
    .getElementById(
      'modal'
    )
    .classList.add(
      'show'
    );

  attachAutosaveV7(
    entity,
    data
  );
}


function renderField(
  field,
  value,
  data
) {
  const className =
    field.full
      ? 'field full'
      : 'field';

  let input = '';

  if (
    field.type ===
    'select'
  ) {
    input =
      selectHtml(
        field.key,
        field.options,
        value,
        field.required
      );
  }

  else if (
    field.type ===
    'source'
  ) {
    input =
      selectHtml(
        field.key,
        state.data.sources,
        value,
        field.required
      );
  }

  else if (
    field.type ===
    'pengurus'
  ) {
    const options =
      state.data.pengurus
        .filter(
          item =>
            item.STATUS ===
              'Aktif' ||
            item.NAMA ===
              value
        )
        .map(
          item =>
            item.NAMA
        );

    input =
      selectHtml(
        field.key,
        options,
        value,
        field.required,
        true
      );
  }

  else if (
    field.type ===
    'departemen'
  ) {
    const options =
      state.data.departemen
        .filter(
          item =>
            item.STATUS ===
              'Aktif' ||
            item.NAMA_DEPARTEMEN ===
              value
        )
        .map(
          item =>
            item.NAMA_DEPARTEMEN
        );

    input =
      selectHtml(
        field.key,
        options,
        value,
        field.required,
        true
      );
  }

  else if (
    field.type ===
    'notulen'
  ) {
    input =
      objectSelectHtml(
        field.key,
        state.data.notulen,
        'ID_NOTULEN',
        'JUDUL',
        value,
        field.required
      );
  }

  else if (
    field.type ===
    'agenda'
  ) {
    input =
      objectSelectHtml(
        field.key,
        state.data.agenda,
        'ID_AGENDA',
        'AGENDA',
        value,
        field.required
      );
  }

  else if (
    field.type ===
    'rapbj'
  ) {
    input =
      objectSelectHtml(
        field.key,
        state.data.rapbj,
        'ID_RAPBJ',
        'PROGRAM_ATAU_POS',
        value,
        field.required
      );
  }

  else if (
    field.type ===
    'keputusan'
  ) {
    input =
      objectSelectHtml(
        field.key,
        state.data.keputusan,
        'ID_KEPUTUSAN',
        'KEPUTUSAN',
        value,
        field.required
      );
  }

  else if (
    field.type ===
    'textarea'
  ) {
    input = `
      <textarea
        name="${field.key}"
        ${
          field.required
            ? 'required'
            : ''
        }>${esc(value)}</textarea>
    `;
  }

  else if (
    field.type ===
    'photo'
  ) {
    input = `
      <div class="photo-field">

        <div
          id="photoPratinjau"
          class="photo-preview">

          ${
            data.FOTO_URL
              ? `
                <img
                  src="${esc(data.FOTO_URL)}"
                  alt="Foto">
              `
              : initials(
                  data.NAMA ||
                  'Jemaat'
                )
          }

        </div>

        <div>

          <input
            id="photoInput"
            type="file"
            accept="image/png,image/jpeg,image/webp">

          <small>
            Maksimal 5 MB.
          </small>

        </div>

      </div>
    `;
  }

  else if (
    field.type ===
    'file'
  ) {
    input = `
      <div class="file-field">

        <input
          id="documentFileInput"
          type="file">

        <small>
          ${
            data.FILE_NAME
              ? 'File saat ini: ' +
                esc(
                  data.FILE_NAME
                )
              : 'Pilih file yang ingin disimpan.'
          }
        </small>

      </div>
    `;
  }

  else {
    const numericRule =
      field.type ===
        'number'
        ? (
            field.key ===
              'PROGRESS'
              ? 'min="0" max="100" step="1"'
              : (
                  field.key ===
                    'NOMINAL'
                    ? 'min="1" step="1"'
                    : 'min="0" step="1"'
                )
          )
        : '';

    input = `
      <input
        type="${field.type}"
        name="${field.key}"
        value="${esc(value)}"
        ${numericRule}
        ${
          field.required
            ? 'required'
            : ''
        }>
    `;
  }

  return `
    <div class="${className}">

      <label>
        ${esc(simpleLabelV87(field.label))}${field.required ? ' <small>(wajib)</small>' : ''}
      </label>

      ${input}

    </div>
  `;
}


function selectHtml(
  name,
  options,
  value,
  required,
  includeBlank = false
) {
  return `
    <select
      name="${name}"
      ${
        required
          ? 'required'
          : ''
      }>

      ${
        includeBlank
          ? '<option value="">-</option>'
          : ''
      }

      ${
        options
          .map(
            option => `
              <option
                value="${esc(option)}"
                ${
                  String(
                    option
                  ) ===
                  String(
                    value
                  )
                    ? 'selected'
                    : ''
                }>

                ${esc(simpleLabelV87(option))}

              </option>
            `
          )
          .join('')
      }

    </select>
  `;
}


function objectSelectHtml(
  name,
  rows,
  idField,
  labelField,
  value,
  required
) {
  return `
    <select
      name="${name}"
      ${
        required
          ? 'required'
          : ''
      }>

      <option value="">
        -
      </option>

      ${
        rows
          .map(
            item => `
              <option
                value="${esc(item[idField])}"
                ${
                  String(
                    item[idField]
                  ) ===
                  String(
                    value
                  )
                    ? 'selected'
                    : ''
                }>

                ${esc(item[labelField] || '-')}

              </option>
            `
          )
          .join('')
      }

    </select>
  `;
}


function bindFilePratinjaus() {
  const input =
    document.getElementById(
      'photoInput'
    );

  if (input) {
    input.addEventListener(
      'change',
      event => {
        const file =
          event.target.files &&
          event.target.files[0];

        if (!file) {
          return;
        }

        openPhotoCropV7(
          file
        );
      }
    );
  }
}



function validateFormPayloadV83(
  entity,
  data
) {
  const required = {
    notulen: ['TANGGAL', 'JUDUL'],
    agenda: ['ID_NOTULEN', 'AGENDA'],
    usulan: ['JUDUL_USULAN'],
    keputusan: ['KEPUTUSAN'],
    tindak_lanjut: ['URAIAN'],
    program: ['TAHUN', 'NAMA_PROGRAM'],
    rapbj: ['TAHUN', 'PROGRAM_ATAU_POS'],
    keuangan: ['TANGGAL', 'JENIS', 'SUMBER_DANA', 'NOMINAL'],
    inventaris: ['NAMA_BARANG'],
    pengurus: ['NAMA'],
    jemaat: ['NAMA', 'NAMA_KELUARGA', 'POSISI_KELUARGA'],
    dokumen: ['JUDUL'],
    departemen: ['NAMA_DEPARTEMEN']
  };

  const missing =
    (
      required[
        entity
      ] ||
      []
    )
    .find(
      field =>
        !String(
          data[
            field
          ] ??
          ''
        )
        .trim()
    );

  if (missing) {
    return (
      ((FORM[entity]?.fields || []).find(field=>field.key===missing)?.label || 'Bagian ini') +
      ' wajib diisi.'
    );
  }

  if (
    entity ===
      'keuangan' &&
    Number(
      data.NOMINAL ||
      0
    ) <=
      0
  ) {
    return 'Nominal harus lebih dari 0.';
  }

  if (
    entity ===
      'tindak_lanjut'
  ) {
    const progress =
      Number(
        data.PROGRESS ||
        0
      );

    if (
      progress <
        0 ||
      progress >
        100
    ) {
      return 'Kemajuan harus antara 0 sampai 100%.';
    }
  }

  return '';
}


async function saveCurrent() {
  if (
    state.savingEntityV83
  ) {
    return;
  }

  const form =
    document.getElementById(
      'dynamicForm'
    );

  if (!form) {
    toast(
      'Formulir belum terbuka. Buka lagi data yang ingin diubah.'
    );

    return;
  }

  if (
    !form.reportValidity()
  ) {
    toast(
      'Lengkapi bagian yang ditandai dulu.'
    );

    return;
  }

  const data =
    Object.fromEntries(
      new FormData(
        form
      )
      .entries()
    );

  const entity =
    state.editing.entity;

  const old =
    state.editing.data ||
    {};

  if (entity === 'notulen') data.STATUS = old.STATUS || 'Draft';
  if (entity === 'tindak_lanjut' && data.STATUS === 'Selesai') data.PROGRESS = 100;
  const contractError =
    validateFormPayloadV83(
      entity,
      data
    );

  if (contractError) {
    toast(contractError, {kind:'error'});

    return;
  }

  const pageBeforeSave =
    state.page;

  const wasNew =
    !Boolean(
      getEntityId(
        entity,
        old
      )
    );

  const idField =
    getEntityIdField(
      entity
    );

  if (
    idField &&
    old[
      idField
    ]
  ) {
    data[
      idField
    ] =
      old[
        idField
      ];
  }

  if (
    old.TAHUN &&
    data.TAHUN ===
      undefined
  ) {
    data.TAHUN =
      old.TAHUN;
  }

  [
    'FOTO_URL',
    'FOTO_FILE_ID',
    'FILE_NAME',
    'FILE_URL',
    'FILE_ID',
    'JABATAN'
  ].forEach(
    field => {
      if (
        old[
          field
        ]
      ) {
        data[
          field
        ] =
          old[
            field
          ];
      }
    }
  );

  const photo =
    document.getElementById(
      'photoInput'
    );

  if (
    state.croppedPhotoPayload
  ) {
    data.FOTO_DATA =
      state.croppedPhotoPayload;
  }
  else if (
    photo &&
    photo.files &&
    photo.files[0]
  ) {
    if (
      photo.files[0].size >
      5 *
      1024 *
      1024
    ) {
      toast(
        'Foto maksimal 5 MB.'
      );

      return;
    }

    data.FOTO_DATA =
      await fileToPayload(
        photo.files[0]
      );
  }

  const documentInput =
    document.getElementById(
      'documentFileInput'
    );

  if (
    documentInput &&
    documentInput.files &&
    documentInput.files[0]
  ) {
    if (
      documentInput.files[0].size >
      10 *
      1024 *
      1024
    ) {
      toast(
        'File maksimal 10 MB.'
      );

      return;
    }

    data.FILE_DATA =
      await fileToPayload(
        documentInput.files[0]
      );
  }

  const submit =
    form.querySelector(
      '.form-save'
    );

  state.savingEntityV83 =
    true;

  form
    .querySelectorAll(
      'button'
    )
    .forEach(
      button => {
        button.disabled =
          true;
      }
    );

  submit.disabled =
    true;

  submit.textContent =
    'Menyimpan...';

  google.script.run

    .withSuccessHandler(
      result => {
        state.savingEntityV83 =
          false;

        clearAutosaveAfterSaveV7(
          entity,
          old,
          result
        );

        const parentNotulenId =
          entity ===
            'agenda'
            ? (
                data.ID_NOTULEN ||
                old.ID_NOTULEN ||
                ''
              )
            : '';

        closeModal(true);

        toast(
          wasNew
            ? 'Data sudah tersimpan.'
            : 'Perubahan sudah tersimpan.'
        );

        state.page =
          pageBeforeSave;

        loadData(
          () => {
            openPage(
              pageBeforeSave,
              false
            );

            if (
              entity ===
                'agenda' &&
              parentNotulenId
            ) {
              detailNotulen(
                parentNotulenId
              );
            }

            if (
              entity ===
                'notulen' &&
              wasNew &&
              result &&
              result.id
            ) {
              detailNotulen(result.id);
            }
          }
        );
      }
    )

    .withFailureHandler(
      error => {
        state.savingEntityV83 =
          false;

        form
          .querySelectorAll(
            'button'
          )
          .forEach(
            button => {
              button.disabled =
                false;
            }
          );

        submit.disabled =
          false;

        submit.textContent =
          'Simpan';

        notifyErrorV88(error);
        setDraftStatusV88(form, 'Belum tersimpan di sistem. Isian tetap ada di formulir.');
      }
    )

    .saveEntity(
      entity,
      data,
      state.authV84 ? state.authV84.token : ''
    );
}


function editEntity(
  entity,
  id
) {
  if (entity === 'keputusan') {
    const decision=(state.data.keputusan || []).find(row=>String(row.ID_KEPUTUSAN)===String(id));
    if (decision && decision.ID_AGENDA) {
      if (!canWriteEntityV84('agenda')) { toast('Minta pencatat rapat untuk mengubah hasilnya.'); return; }
      detailNotulen(decision.ID_NOTULEN); return;
    }
  }
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
        String(id)
    );

  if (!item) {
    toast(
      'Data tidak ditemukan.'
    );

    return;
  }

  openForm(
    entity,
    item
  );
}


function removeCurrent() {
  const entity =
    state.editing.entity;

  const pageBeforeDelete =
    state.page;

  const id =
    getEntityId(
      entity,
      state.editing.data
    );

  if (!id) {
    return;
  }

  if (
    !confirm(
      'Yakin ingin menghapus data ini?'
    )
  ) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      () => {
        closeModal(true);

        toast(
          'Data sudah dihapus.'
        );

        state.page =
          pageBeforeDelete;

        loadData(
          () => {
            openPage(
              pageBeforeDelete,
              false
            );
          }
        );
      }
    )

    .withFailureHandler(
      error => {
        notifyErrorV88(error);
      }
    )

    .deleteEntity(
      entity,
      id,
      state.authV84 ? state.authV84.token : ''
    );
}


function closeModal(saved=false) {
  if(state.savingEntityV83)return;
  clearTimeout(state.draftTimer);
  const form=document.getElementById('dynamicForm');
  if(!saved && form?.dataset.dirty==='true'){
    if(!saveLocalDraftV88(form) && !confirm('Isian belum bisa disimpan sementara. Tutup dan buang perubahan?'))return;
  }
  document.getElementById('modal').classList.remove('show');state.editing=null;state.pendingDraftDataV7=null;
}

/* =========================================================
   MEETING DETAIL / ATTENDANCE / APPROVAL
========================================================= */

function detailNotulen(
  id
) {
  if (!state.detail || String(state.detail.ID_NOTULEN) !== String(id)) state.meetingTabV87 = 'persiapan';
  showLoader();

  google.script.run

    .withSuccessHandler(
      detail => {
        state.detail =
          detail;

        hideLoader();

        renderNotulenDetail(
          detail
        );
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .getNotulenDetail(
      id
    );
}


function renderNotulenDetail(detail) {
  const locked=String(detail.LOCKED).toLowerCase()==='true';
  const write=canWriteEntityV84('agenda') && !locked;
  const approve=canApproveMeetingV87();
  const tab=state.meetingTabV87 || 'catatan';
  const id=escJs(detail.ID_NOTULEN);
  setText('detailTitle','Rapat');
  const tasks=(state.data.tindakLanjut || []).filter(row=>String(row.ID_NOTULEN)===String(detail.ID_NOTULEN));
  const pending=(state.data.usulan || []).filter(row=>!['Diterima','Ditolak'].includes(row.STATUS));
  let body='';
  if(tab==='catatan') {
    body=`<section class="detail-section"><header><h4>Pembahasan & hasil rapat</h4>${write?`<button class="mini-button" onclick="addAgenda('${id}')">Tambah pembahasan</button>`:''}</header><p>Catat pembahasan dan keputusan di tempat yang sama. Isi penanggung jawab atau batas waktu jika ada tugas yang perlu dikerjakan.</p>${(detail.AGENDA || []).map(agendaDetailHtml).join('') || emptyState('Belum ada pembahasan. Tambahkan sendiri atau pilih dari usulan masuk.')}</section>`;
  } else if(tab==='persiapan') {
    body=`<section class="detail-section"><h4>Siapkan rapat</h4><p>${pending.length} usulan belum dibahas.</p><div class="meeting-cover-actions">${write?`<button onclick="openMeetingProposalsV87('${id}')">Pilih usulan masuk</button><button onclick="openCarryForwardV7('${id}')">Lihat tugas rapat sebelumnya</button>`:''}${!locked && canWriteEntityV84('notulen')?`<button onclick="editEntity('notulen','${id}')">Ubah jadwal & peserta</button>`:''}</div><p>Rapat: ${dateLabel(detail.TANGGAL)} · ${esc(detail.TEMPAT || 'Tempat belum diisi')}</p><p>Pemimpin: ${esc(detail.PIMPINAN_RAPAT || 'Belum diisi')} · Pencatat: ${esc(detail.NOTULIS || 'Belum diisi')}</p></section>`;
  } else if(tab==='hadir') {
    body=`<section class="detail-section"><header><h4>Daftar hadir</h4>${!(detail.KEHADIRAN || []).length && canWriteEntityV84('kehadiran') && !locked?`<button class="mini-button" onclick="initializeAttendance('${id}')">Isi dari daftar pengurus</button>`:''}</header><p>${detail.QUORUM.present}/${detail.QUORUM.total} hadir · ${detail.QUORUM.met?'Jumlah peserta sudah cukup.':'Jumlah peserta belum cukup.'}</p><div class="attendance-table">${(detail.KEHADIRAN || []).map(attendanceRowHtml).join('') || emptyState('Belum ada daftar hadir.')}</div></section>`;
  } else if(tab==='tugas') {
    body=`<section class="detail-section"><h4>Tugas dari rapat ini</h4>${tasks.map(row=>`<article class="simple-panel-v87"><strong>${esc(row.URAIAN)}</strong><p>${esc(row.PIC || 'Belum ada penanggung jawab')} · ${esc(simpleLabelV87(row.STATUS || 'Belum Dimulai'))}</p>${hasPageAccessV84('tindak_lanjut')?`<button onclick="closeDetail();openPage('tindak_lanjut')">Buka daftar tugas</button>`:''}</article>`).join('') || emptyState('Belum ada tugas dari rapat ini.')}</section>`;
  } else {
    body=`<section class="detail-section"><header><h4>Lampiran</h4>${write?`<button class="mini-button" onclick="openAttachmentUpload('${id}')">Tambah file</button>`:''}</header>${(detail.ATTACHMENTS || []).map(item=>`<div class="attachment-row"><a href="${esc(item.FILE_URL)}" target="_blank" rel="noopener">${esc(item.JUDUL || item.FILE_NAME)}</a>${write?`<button onclick="removeAttachment('${escJs(item.ID_ATTACHMENT)}')">Hapus</button>`:''}</div>`).join('') || emptyState('Belum ada lampiran.')}</section>`;
  }
  document.getElementById('detailBody').innerHTML=`<section class="meeting-cover"><h3>${esc(detail.JUDUL)}</h3><p>${dateLabel(detail.TANGGAL)} · ${esc(detail.TEMPAT || 'Tempat belum diisi')} · ${esc(simpleLabelV87(detail.STATUS || 'Draft'))}</p>${meetingActionsV88(detail)}${detail.APPROVAL_NOTE?`<p>Catatan: ${esc(detail.APPROVAL_NOTE)}</p>`:''}</section><nav class="section-menu-v87" aria-label="Bagian rapat">${[['persiapan','Persiapan'],['catatan','Catatan rapat'],['hadir','Daftar hadir'],['tugas','Tugas'],['lampiran','Lampiran']].map(([key,label])=>`<button onclick="setMeetingTabV87('${key}')" ${key===tab?'aria-current="page"':''}>${label}</button>`).join('')}</nav>${body}`;
  document.getElementById('detailModal').classList.add('show');
  if(!write)document.querySelectorAll('#detailBody [onclick^="editAgenda("],#detailBody [onclick^="openEntityAttachmentUpload("]').forEach(button=>button.hidden=true);
  if(locked || !canWriteEntityV84('kehadiran'))document.querySelectorAll('#detailBody .attendance-table input,#detailBody .attendance-table select').forEach(input=>input.disabled=true);
}

function agendaDetailHtml(
  item
) {
  return `
    <article class="agenda-detail">

      <span>
        AGENDA ${Number(item.NO_URUT || 0)}
      </span>

      <h5>
        ${esc(item.AGENDA)}
      </h5>

      ${
        item.PEMBAHASAN
          ? `
            <p>
              ${esc(item.PEMBAHASAN)}
            </p>
          `
          : ''
      }

      ${
        item.KEPUTUSAN
          ? `
            <p>
              <strong>
                Keputusan:
              </strong>
              ${esc(item.KEPUTUSAN)}
            </p>
          `
          : ''
      }

      <p>
        ${esc(item.PIC || 'Penanggung jawab belum diisi')}
        ·
        ${money(item.ANGGARAN || 0)}
        ·
        realisasi ${money(item.REALISASI || 0)}
      </p>

      <div style="margin-top:10px">

        ${
          agendaAttachmentsHtml(
            item.ID_AGENDA
          )
        }

      </div>

      <footer>

        <span class="badge ${statusClass(item.STATUS)}">
          ${esc(simpleLabelV87(item.STATUS || 'Belum Dimulai'))}
        </span>

        <div class="record-actions">

          <button
            class="mini-button"
            onclick="openEntityAttachmentUpload('agenda','${item.ID_AGENDA}')">

            Lampiran

          </button>

          ${
            state.detail &&
            String(
              state.detail.LOCKED
            ).toLowerCase() !==
            'true'
              ? `
                <button
                  class="mini-button"
                  onclick="editAgenda('${item.ID_AGENDA}')">

                  Ubah

                </button>
              `
              : ''
          }

        </div>

      </footer>

    </article>
  `;
}


function agendaAttachmentsHtml(
  agendaId
) {
  const rows =
    state.data.attachments
      .filter(
        item =>
          item.ENTITY_TYPE ===
            'agenda' &&
          String(
            item.ENTITY_ID
          ) ===
          String(
            agendaId
          )
      );

  if (!rows.length) {
    return '';
  }

  return rows
    .map(
      item => `
        <a
          href="${esc(item.FILE_URL)}"
          target="_blank"
          style="
            display:inline-block;
            margin:0 6px 5px 0;
            color:var(--red-900);
            font-size:8px;
            text-decoration:none;
          ">

          ${esc(item.JUDUL || item.FILE_NAME)}

        </a>
      `
    )
    .join('');
}


function attendanceRowHtml(
  item
) {
  const options = [
    'Hadir',
    'Izin',
    'Sakit',
    'Tidak Hadir'
  ];

  return `
    <div class="attendance-row">

      <div>

        <strong>
          ${esc(item.NAMA)}
        </strong>

        <small>
          ${esc(item.DEPARTEMEN || item.JABATAN || '-')}
        </small>

      </div>

      <select
        onchange="updateAttendance('${item.ID_KEHADIRAN}',this.value)">

        ${
          options
            .map(
              option => `
                <option
                  value="${option}"
                  ${
                    option ===
                    item.STATUS_KEHADIRAN
                      ? 'selected'
                      : ''
                  }>
                  ${option}
                </option>
              `
            )
            .join('')
        }

      </select>

    </div>
  `;
}


function addAgenda(
  notulenId
) {
  closeDetail();

  const next =
    state.data.agenda
      .filter(
        item =>
          String(
            item.ID_NOTULEN
          ) ===
          String(
            notulenId
          )
      )
      .reduce(
        (
          max,
          item
        ) =>
          Math.max(
            max,
            Number(
              item.NO_URUT ||
              0
            )
          ),
        0
      ) +
    1;

  openForm(
    'agenda',
    {
      ID_NOTULEN:
        notulenId,

      NO_URUT:
        next,

      STATUS:
        'Belum Dimulai',

      SUMBER_DANA:
        'Kas Jemaat'
    }
  );
}


function editAgenda(
  id
) {
  const item =
    state.data.agenda
      .find(
        agenda =>
          String(
            agenda.ID_AGENDA
          ) ===
          String(id)
      );

  if (!item) {
    toast(
      'Agenda tidak ditemukan.'
    );

    return;
  }

  closeDetail();

  openForm(
    'agenda',
    item
  );
}


function initializeAttendance(
  notulenId
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      () => {
        const meetingId =
          entityType ===
          'notulen'
            ? entityId
            : (
                state.detail
                  ? state.detail.ID_NOTULEN
                  : ''
              );

        loadData(
          () => {
            if (meetingId) {
              detailNotulen(
                meetingId
              );
            }
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

    .initializeAttendance(
      notulenId,
       state.authV84.token
    );
}


function updateAttendance(
  id,
  status
) {
  if (!state.detail) {
    return;
  }

  const current =
    state.detail.KEHADIRAN
      .find(
        item =>
          String(
            item.ID_KEHADIRAN
          ) ===
          String(id)
      );

  if (!current) {
    return;
  }

  google.script.run

    .withSuccessHandler(
      () => {
        loadData(
          () => {
            detailNotulen(
              state.detail
                .ID_NOTULEN
            );
          }
        );
      }
    )

    .withFailureHandler(
      error => {
        notifyErrorV88(error);
      }
    )

    .saveEntity(
      'kehadiran',
      {
        ...current,

        STATUS_KEHADIRAN:
          status
      }
    ,
       state.authV84.token
     );
}


function reviewMeeting(
  id,
  action,
  note = ''
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      () => {
        loadData(
          () => {
            detailNotulen(
              id
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

    .reviewNotulen(
      id,
      action,
      note,
       state.authV84.token
    );
}


function openReviewAction(
  id,
  action
) {
  const labels = {
    approve:
      'Setujui Notulen',

    revise:
      'Minta Revisi',

    unlock:
      'Buka Kunci Notulen'
  };

  openActionModal(
    labels[action] ||
    'Approval',
    `
      <div class="field">

        <label>
          Catatan
        </label>

        <textarea
          id="reviewNote"
          placeholder="Tambahkan catatan bila diperlukan."></textarea>

      </div>

      <div class="form-actions">

        <button
          class="form-save"
          onclick="
            const note =
              document.getElementById('reviewNote').value;
            closeActionModal();
            reviewMeeting('${id}','${action}',note);
          ">

          Lanjutkan

        </button>

      </div>
    `
  );
}


function closeDetail() {
  document
    .getElementById(
      'detailModal'
    )
    .classList.remove(
      'show'
    );
}


/* =========================================================
   ATTACHMENTS
========================================================= */

function openAttachmentUpload(
  notulenId
) {
  openEntityAttachmentUpload(
    'notulen',
    notulenId
  );
}


function openEntityAttachmentUpload(
  entityType,
  entityId
) {
  openActionModal(
    'Tambah Lampiran',
    `
      <div class="field">

        <label>
          Judul Lampiran
        </label>

        <input
          id="attachmentTitle"
          type="text"
          placeholder="Contoh: Rencana kegiatan keluarga">

      </div>

      <div class="field" style="margin-top:12px">

        <label>
          File
        </label>

        <input
          id="attachmentFile"
          type="file">

      </div>

      <div class="form-actions">

        <button
          class="form-save"
          onclick="submitEntityAttachment('${entityType}','${entityId}')">

          Unggah

        </button>

      </div>
    `
  );
}


async function submitEntityAttachment(
  entityType,
  entityId
) {
  const input =
    document.getElementById(
      'attachmentFile'
    );

  const title =
    document.getElementById(
      'attachmentTitle'
    ).value;

  if (
    !input.files ||
    !input.files[0]
  ) {
    toast(
      'Pilih file terlebih dahulu.'
    );

    return;
  }

  if (
    input.files[0].size >
    10 *
    1024 *
    1024
  ) {
    toast(
      'Lampiran maksimal 10 MB.'
    );

    return;
  }

  const payload = {
    ENTITY_TYPE:
      entityType,

    ENTITY_ID:
      entityId,

    JUDUL:
      title,

    FILE_DATA:
      await fileToPayload(
        input.files[0]
      )
  };

  closeActionModal();
  showLoader();

  google.script.run

    .withSuccessHandler(
      () => {
        const meetingId =
          entityType ===
          'notulen'
            ? entityId
            : (
                state.detail
                  ? state.detail.ID_NOTULEN
                  : ''
              );

        loadData(
          () => {
            if (meetingId) {
              detailNotulen(
                meetingId
              );
            }
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

    .uploadAttachment(
      payload
    );
}


function removeAttachment(
  id
) {
  if (
    !confirm(
      'Hapus lampiran ini?'
    )
  ) {
    return;
  }

  const notulenId =
    state.detail
      ? state.detail
          .ID_NOTULEN
      : '';

  showLoader();

  google.script.run

    .withSuccessHandler(
      () => {
        loadData(
          () => {
            if (
              notulenId
            ) {
              detailNotulen(
                notulenId
              );
            }
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

    .deleteAttachment(
      id
    );
}


/* =========================================================
   PROPOSAL ACTION
========================================================= */

function openProposalAccept(
  proposalId
) {
  if (
    !state.data.notulen.length
  ) {
    toast(
      'Buat rapat dulu.'
    );

    return;
  }

  openActionModal(
    'Jadikan Agenda',
    `
      <div class="field">

        <label>
          Masukkan ke rapat
        </label>

        ${objectSelectHtml(
          'proposalMeeting',
          state.data.notulen,
          'ID_NOTULEN',
          'JUDUL',
          '',
          true
        )
        .replace(
          'name="proposalMeeting"',
          'id="proposalMeeting"'
        )}

      </div>

      <div class="form-actions">

        <button
          class="form-save"
          onclick="acceptProposal('${proposalId}')">

          Jadikan Agenda

        </button>

      </div>
    `
  );
}


function acceptProposal(
  proposalId
) {
  const notulenId =
    document.getElementById(
      'proposalMeeting'
    ).value;

  if (!notulenId) {
    toast(
      'Pilih rapat.'
    );

    return;
  }

  closeActionModal();
  showLoader();

  google.script.run

    .withSuccessHandler(
      () => {
        loadData(
          () => {
            openPage(
              'rapat'
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

    .approveAgendaProposal(
      proposalId,
      notulenId,
       state.authV84.token
    );
}


/* =========================================================
   DEPARTMENT MANAGER
========================================================= */

function openDepartmentManager() {
  const rows =
    state.data.departemen;

  openActionModal(
    'Departemen',
    `
      <div class="record-list">

        ${
          rows.length
            ? rows
                .map(
                  item => `
                    <div class="record-row">

                      <div class="record-main">

                        <strong>
                          ${esc(item.NAMA_DEPARTEMEN)}
                        </strong>

                        <span>
                          ${esc(item.KETUA || 'Ketua belum diisi')}
                        </span>

                      </div>

                      <div class="record-actions">

                        <button
                          class="mini-button"
                          onclick="
                            closeActionModal();
                            editEntity('departemen','${item.ID_DEPARTEMEN}');
                          ">

                          Ubah

                        </button>

                      </div>

                    </div>
                  `
                )
                .join('')
            : emptyState(
                'Belum ada departemen.'
              )
        }

      </div>

      <div class="form-actions">

        <button
          class="form-save"
          onclick="
            closeActionModal();
            openForm('departemen',defaultEntityData('departemen'));
          ">

          + Departemen

        </button>

      </div>
    `
  );
}


/* =========================================================
   WHATSAPP
========================================================= */

function sendWhatsAppReminder(
  id
) {
  const task =
    state.data.tindakLanjut
      .find(
        item =>
          String(
            item.ID_TINDAK_LANJUT
          ) ===
          String(id)
      );

  if (!task) {
    return;
  }

  const officer =
    state.data.pengurus
      .find(
        item =>
          String(
            item.NAMA
          )
          .toLowerCase() ===
          String(
            task.PIC ||
            ''
          )
          .toLowerCase()
      );

  const phone =
    officer
      ? normalizePhone(
          officer.NO_WHATSAPP
        )
      : '';

  const message = [
    'Shalom, berikut pengingat tindak lanjut keputusan Majelis Galilea.',
    '',
    task.URAIAN,
    '',
    'Penanggung jawab: ' +
      (
        task.PIC ||
        '-'
      ),
    'Target: ' +
      (
        task.TARGET_SELESAI
          ? dateLabel(
              task.TARGET_SELESAI
            )
          : '-'
      ),
    'Kemajuan: ' +
      Number(
        task.PROGRESS ||
        0
      ) +
      '%',
    'Status: ' +
      (
        task.STATUS ||
        '-'
      ),
    '',
    'Terima kasih.'
  ].join(
    '\n'
  );

  const url =
    'https://wa.me/' +
    phone +
    '?text=' +
    encodeURIComponent(
      message
    );

  window.open(
    url,
    '_blank'
  );
}


/* =========================================================
   PDF
========================================================= */

function downloadCurrentReport() {
  if (
    state.page ===
    'keuangan'
  ) {
    downloadFinanceMonthlyPdfV8();
    return;
  }

  const map = {
    rapat:
      'kehadiran',

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

  const type =
    map[
      state.page
    ];

  if (!type) {
    return;
  }

  downloadPdf(
    type
  );
}


function downloadPdf(
  type,
  referenceId = ''
) {
  showLoader();

  google.script.run

    .withSuccessHandler(
      result => {
        try {
          const bytes =
            base64ToBytes(
              result.base64
            );

          const blob =
            new Blob(
              [
                bytes
              ],
              {
                type:
                  result.mimeType ||
                  'application/pdf'
              }
            );

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
            result.fileName ||
            'laporan.pdf';

          document.body
            .appendChild(
              link
            );

          link.click();

          link.remove();

          setTimeout(
            () =>
              URL.revokeObjectURL(
                url
              ),
            1500
          );

          hideLoader();

          toast(
            'PDF berhasil dibuat.'
          );
        }

        catch (error) {
          hideLoader();

          toast(
            error.message ||
            error
          );
        }
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .generatePdfReport(
      type,
      referenceId,
      state.year
    );
}


function base64ToBytes(
  base64
) {
  const binary =
    atob(
      base64
    );

  const bytes =
    new Uint8Array(
      binary.length
    );

  for (
    let i = 0;
    i < binary.length;
    i++
  ) {
    bytes[i] =
      binary.charCodeAt(
        i
      );
  }

  return bytes;
}


/* =========================================================
   ARCHIVE
========================================================= */

function createArchive() {
  if (
    !confirm(
      'Buat salinan arsip tahun ' +
      state.year +
      '?'
    )
  ) {
    return;
  }

  showLoader();

  google.script.run

    .withSuccessHandler(
      result => {
        hideLoader();

        document.getElementById(
          'archiveResult'
        ).innerHTML = `
          Arsip berhasil dibuat.<br><br>

          <a
            href="${esc(result.folderUrl)}"
            target="_blank">
            Buka folder arsip
          </a>

          &nbsp;·&nbsp;

          <a
            href="${esc(result.zipUrl)}"
            target="_blank">
            ${esc(result.zipName)}
          </a>
        `;

        toast(
          'Arsip tahunan selesai.'
        );
      }
    )

    .withFailureHandler(
      error => {
        hideLoader();

        notifyErrorV88(error);
      }
    )

    .createAnnualArchive(
      state.year,
       state.authV84.token
    );
}


/* =========================================================
   AUDIT
========================================================= */

function loadAuditLog() {
  document.getElementById(
    'auditList'
  ).innerHTML = `
    <div class="empty-state">
      Memuat riwayat…
    </div>
  `;

  google.script.run

    .withSuccessHandler(
      rows => {
        document.getElementById(
          'auditList'
        ).innerHTML =
          rows.length
            ? rows
                .map(
                  item => `
                    <div class="audit-row">

                      <time>
                        ${dateTimeLabel(item.TIMESTAMP)}
                      </time>

                      <b>
                        ${esc(item.ACTION || '-')}
                      </b>

                      <span>
                        ${esc(item.DESCRIPTION || '')}
                        ${
                          item.REFERENCE_ID
                            ? ' · ' +
                              esc(
                                item.REFERENCE_ID
                              )
                            : ''
                        }
                      </span>

                    </div>
                  `
                )
                .join('')
            : emptyState(
                'Belum ada aktivitas.'
              );
      }
    )

    .withFailureHandler(
      error => {
        document.getElementById(
          'auditList'
        ).innerHTML =
          emptyState(
            errorMessage(
              error
            )
          );
      }
    )

    .getAuditLog(
      150
    );
}


/* =========================================================
   LOGO
========================================================= */

function bindBrandLogoUpload() {
  const button =
    document.getElementById(
      'brandButton'
    );
  if (button) button.addEventListener('click', () => shellNavigate('dashboard'));
}


function applyBrandLogo(
  _url
) {
  const url = '/assets/adventist-logo.png';

  const image =
    document.getElementById(
      'brandLogo'
    );

  if (image) {
    image.src =
      url;

    image.classList.remove(
      'hidden'
    );
  }

  if (
    typeof window.syncSignatureLogos ===
    'function'
  ) {
    window.syncSignatureLogos();
  }
}


/* =========================================================
   ACTION MODAL
========================================================= */

function openActionModal(
  title,
  html
) {
  setText(
    'actionTitle',
    title
  );

  document.getElementById(
    'actionBody'
  ).innerHTML =
    html;

  document
    .getElementById(
      'actionModal'
    )
    .classList.add(
      'show'
    );
}


function closeActionModal() {
  document
    .getElementById(
      'actionModal'
    )
    .classList.remove(
      'show'
    );
}


/* =========================================================
   COLLECTION HELPERS
========================================================= */

function getCollection(
  entity
) {
  const map = {
    notulen:
      state.data.notulen,

    agenda:
      state.data.agenda,

    usulan:
      state.data.usulan,

    keputusan:
      state.data.keputusan,

    tindak_lanjut:
      state.data.tindakLanjut,

    program:
      state.data.programs,

    rapbj:
      state.data.rapbj,

    keuangan:
      state.data.keuangan,

    inventaris:
      state.data.inventaris,

    pengurus:
      state.data.pengurus,

    jemaat:
      state.data.jemaat,

    dokumen:
      state.data.documents,

    departemen:
      state.data.departemen
  };

  return (
    map[
      entity
    ] ||
    []
  );
}


function getEntityIdField(
  entity
) {
  return {
    notulen:
      'ID_NOTULEN',

    agenda:
      'ID_AGENDA',

    usulan:
      'ID_USULAN',

    keputusan:
      'ID_KEPUTUSAN',

    tindak_lanjut:
      'ID_TINDAK_LANJUT',

    program:
      'ID_PROGRAM',

    rapbj:
      'ID_RAPBJ',

    keuangan:
      'ID_TRANSAKSI',

    inventaris:
      'ID_INVENTARIS',

    pengurus:
      'ID_PENGURUS',

    jemaat:
      'ID_ANGGOTA',

    dokumen:
      'ID_DOKUMEN',

    departemen:
      'ID_DEPARTEMEN'
  }[
    entity
  ];
}


function getEntityId(
  entity,
  data
) {
  const field =
    getEntityIdField(
      entity
    );

  return (
    field &&
    data
      ? data[
          field
        ] ||
        ''
      : ''
  );
}
