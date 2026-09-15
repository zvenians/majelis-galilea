# MAJELIS GALILEA

Sistem administrasi Majelis Galilea — standalone web application.

## Arsitektur

```
Frontend (Vercel)  →  /api/gas  →  Google Apps Script (Code.gs)  →  Google Sheets
```

- **Frontend:** Single-page HTML app hosted on Vercel
- **API Proxy:** Vercel serverless function (`/api/gas`) bridges frontend to backend
- **Backend:** Google Apps Script (`Code.gs`) — 251 functions, role-based access
- **Database:** Google Sheets — 23 tabs

## Role System

| Level | Role | Deskripsi |
|-------|------|-----------|
| ADMIN | Admin | Akses penuh, kelola akun & role |
| KEUANGAN | Bendahara | Kelola keuangan, RAPBJ, rekonsiliasi |
| PENGURUS | Sekretaris/Pengurus | Administrasi rapat, jemaat, dokumen, surat |
| MAJELIS | Anggota Majelis | Read + usulan & tindak lanjut |

## Authentication

Login menggunakan **username + PIN**.
PIN disimpan sebagai **SHA-256 + salt hash**.
Session 6 jam via CacheService.

## Setup

### Prasyarat
- Google Apps Script project dengan `Code.gs`
- Google Sheets sebagai database
- Vercel account untuk deployment

### Clasp Configuration (Local Development)
1. Salin template konfigurasi: `cp .clasp.json.example .clasp.json`
2. Isi `scriptId` dengan Script ID proyek Apps Script Anda (**Project Settings > Script ID**).
3. File `.clasp.json` diabaikan oleh Git (`.gitignore`) untuk mencegah kebocoran ID proyek.
4. Jalankan validasi: `node scripts/validate-gas.js`
5. Push ke Apps Script: `npx @google/clasp push`

### Environment Variables (Vercel)
```
APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

### Deploy
1. Push ke GitHub repository `majelis-galilea`
2. Connect repository di Vercel
3. Set environment variables
4. Deploy

## Fitur

- Dashboard (role-based)
- Notulen Rapat (CRUD, detail, review/approval)
- Usulan Agenda
- Keputusan Rapat
- Tindak Lanjut
- Program Kerja
- RAPBJ (Rencana Anggaran)
- Keuangan (Kas Jemaat, Sumbangan, Uang Pembangunan)
- Inventaris
- Pengurus
- Anggota Jemaat (family grouping, identity cards)
- Dokumen & Arsip
- Surat Keluar (Secretary Letters with PDF generation)
- Kalender
- Meeting Mode
- Global Search
- Draft Autosave
- PDF Reports
- File Attachments (Google Drive)
- Settings Center
- Akses & Role Management
