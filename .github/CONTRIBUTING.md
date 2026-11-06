# Panduan kontribusi

## Standar perubahan
- Pertahankan batas akses berdasarkan peran dan pemisahan data pengurus.
- Tulis kode dengan penamaan yang jelas dan penanganan gagal yang eksplisit.
- Pastikan formulir, tabel, dan dialog dapat diakses dari keyboard pada layar ponsel maupun desktop.
- Hindari informasi contoh yang menyerupai data jemaat nyata dan klaim fungsi yang belum diuji.
- Jaga `.clasp.json`, token, dan data sensitif di luar repository.

## Validasi
```sh
node scripts/validate-gas.js
node scripts/test-frontend-structure.js
node scripts/test-access-boundaries.js
```

Lakukan pengujian manual sesuai modul yang diubah, termasuk alur login, izin akses, penanganan kesalahan, dan tampilan seluler bila terkait. Jelaskan setiap pemeriksaan yang belum dapat dilakukan.

## Review
Gunakan branch dan pull request terpisah. Uraikan dampak perubahan terhadap admin, viewer, Google Apps Script, atau proxy Vercel. Jangan menyamakan push ke GitHub dengan rilis Apps Script produksi.
