# Panduan pengurus Majelis Galilea

Dashboard menampilkan pintasan sesuai jabatan. Semua menu memuat halaman yang boleh dibuka oleh akun tersebut. Pilihan tahun berlaku untuk data, laporan, dan pengaturan publikasi yang sedang dilihat.

## Publikasi untuk jemaat

Administrator, ketua jemaat, dan sekretaris dapat membuka **Publikasi jemaat** melalui Menu atau Panduan pengurus.

- Notulen perlu berstatus Disetujui atau Final sebelum dipublikasikan. Viewer menampilkan identitas rapat, bukan seluruh isi notulen.
- Keputusan memiliki izin publikasi sendiri dan hanya tampil jika notulen induknya juga disetujui dan dipublikasikan.
- Program yang dibatalkan dan dokumen yang tidak aktif tidak dapat dipublikasikan.
- Data lama tanpa pilihan publikasi dianggap internal. Tidak ada publikasi massal otomatis.
- Pengeditan melalui penyimpanan aplikasi, sinkronisasi keputusan, atau perubahan status rapat mengembalikan informasi yang diubah menjadi internal. Pengurus memeriksanya sebelum mempublikasikan ulang.
- Publikasi dan penarikannya tercatat di log aktivitas, beserta nama akun yang mengaturnya.

Untuk dokumen, periksa isi file sebelum mempublikasikan tautannya. Mengubah pilihan menjadi Internal menghentikan penayangan di viewer; tautan yang sudah diketahui seseorang tetap mengikuti izin Google Drive. Batasi izin file di Drive jika akses file juga perlu dicabut.

Kolom `PUBLIKASI`, `PUBLIKASI_OLEH`, dan `PUBLIKASI_PADA` ditambahkan di akhir tab yang bersangkutan ketika publikasi pertama kali diatur. Kolom lama tidak dipindahkan. Status operasional dan kunci notulen tetap dipertahankan. Perubahan manual di spreadsheet atau pada file Drive tidak melalui pemeriksaan publikasi aplikasi; pengelola perlu menarik publikasi sebelum mengubahnya.

## Pergantian pengurus

1. Administrator membuat backup seluruh database.
2. Buka Akses & Role, buat akun pengurus baru dan pilih jabatan yang sesuai.
3. Nonaktifkan akun pengurus lama setelah penyerahan tugas. Hindari menghapus akun hanya untuk pergantian jabatan agar jejak administrasinya tetap tersedia.
4. Minta pengurus baru masuk dengan akunnya sendiri dan memeriksa pintasan serta pekerjaan yang belum selesai.
5. Simpan kepemilikan spreadsheet, folder Drive, proyek Apps Script, dan hosting pada pengelola yang ditunjuk gereja.

Perubahan jabatan dan penonaktifan akun dibaca ulang pada pemeriksaan sesi berikutnya. Permintaan yang sudah berjalan atau data yang sudah tampil di perangkat pengguna tidak dapat ditarik kembali oleh perubahan akun tersebut.

## Backup dan pemulihan

**Backup seluruh database** tersedia untuk administrator pada Panduan pengurus. Tombol ini membuat salinan lengkap spreadsheet di folder arsip yang sudah dikonfigurasi. Salinan mencakup seluruh tab, termasuk akun, pengaturan, dan log sebelum proses backup. Salinan ini tidak menyalin file lampiran Drive atau kode Apps Script; keduanya perlu dikelola terpisah. Jangan membagikan spreadsheet backup kepada publik.

Arsip tahunan tetap digunakan untuk laporan dan arsip per periode. Status kesehatan backup menerima catatan arsip tahunan maupun salinan database; periksa jenisnya pada log sebelum melakukan pemulihan.

Jika data perlu dipulihkan:

1. Hentikan sementara input pengurus dan buat backup kondisi terbaru.
2. Buka salinan yang hendak dipakai, periksa tanggal, tab, header, dan data yang dibutuhkan.
3. Administrator mengembalikan isi tab yang diperlukan ke tab dengan nama yang sama pada spreadsheet asli. Pertahankan ID spreadsheet dan proyek Apps Script yang sudah terhubung; jangan mengganti file utama dengan salinan tanpa memperbarui koneksi.
4. Jika tab akses ikut dipulihkan, pastikan akun pengurus lama tetap nonaktif dan jabatan akun masih sesuai sebelum layanan dibuka kembali.
5. Periksa koneksi, jumlah data, saldo, keputusan, dan izin publikasi; lalu minta pengurus memuat ulang halaman.

Pemulihan bersifat manual agar data aktif tidak tertimpa oleh satu klik.

## Penerapan pembaruan

Frontend Vercel, proxy, dan backend Apps Script perlu memakai kode dari perubahan yang sama. Jalankan pengujian lokal dan CI terlebih dahulu:

```bash
cp .clasp.json.example .clasp.json
node scripts/validate-gas.js
node scripts/test-governance.js
```

Konfigurasi template hanya digunakan untuk validasi. Untuk penerapan, gunakan ID proyek dan deployment Apps Script yang sudah berjalan. Buat backup database produksi, dorong sumber Apps Script, lalu perbarui versi deployment yang sama. Setelah itu terapkan frontend dan proxy di Vercel. Jangan membuat URL backend baru sebagai pengganti tanpa memperbarui konfigurasi hosting.

Frontend lama belum mengirim `authToken` pada badan permintaan proxy. Karena backend baru memeriksa token pada semua tindakan internal, lakukan pergantian backend dan frontend pada jendela pemeliharaan yang sama dan minta pengurus memuat ulang halaman. Data lama tetap internal sampai publikasi dipilih pengurus; viewer dapat kosong sesaat setelah pembaruan.

Pengujian perilaku menggunakan data contoh dan runtime Apps Script tiruan. Tetap periksa login asli, publikasi satu data contoh yang disetujui pengurus, penarikan publikasi, backup Drive, dan akses per jabatan pada deployment setelah penerapan.
