const fs = require('fs');
const codePath = 'apps-script/Code.gs';
let code = fs.readFileSync(codePath, 'utf8');

code = code.replace(
  'loginMajelisV84: loginMajelisV84,',
  'loginMajelisV84: loginMajelisV84,\n      loginGoogleV85: loginGoogleV85,'
);

code = code.replace(
  'const APP = {',
  'const GOOGLE_CLIENT_ID = "152249823054-gtalq11ff14re7cpnas3dktaf7u4t432.apps.googleusercontent.com";\nconst SUPERADMIN_EMAIL = "simatupangkevin9@gmail.com";\n\nconst APP = {'
);

const googleLoginFunc = \
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
      ID_USER: 'SA-01',
      USERNAME: 'superadmin',
      NAMA: 'Superadmin',
      ROLE: 'SUPERADMIN',
      STATUS: 'Aktif',
      AUTH_PROVIDER: 'GOOGLE',
      GOOGLE_EMAIL: data.email,
      permissions: {
        pages: ['rapat', 'usulan', 'keputusan', 'tindak_lanjut', 'program', 'rapbj', 'keuangan', 'inventaris', 'pengurus', 'jemaat', 'dokumen', 'surat', 'kalender', 'arsip', 'settings', 'access'],
        write: ['*'],
        remove: ['*']
      }
    };
    
    authCacheV84_().put(authKeyV84_(token), JSON.stringify(user), 21600);
    return { success: true, token: token, user: user };
  } catch (e) {
    throw new Error('Google Login gagal: ' + e.message);
  }
}
\;

code = code.replace(
  'function loginMajelisV84(username,pin){',
  googleLoginFunc + '\\nfunction loginMajelisV84(username,pin){'
);

code = code.replace(
  "if(!u||u.PIN_HASH!==hashPinV84_(username,pin))throw new Error('Username atau Password tidak valid.');",
  "const hashed = hashPinV84_(username,pin);\\n  if(!u || (u.PASSWORD_HASH !== hashed && u.PIN_HASH !== hashed)) throw new Error('Username atau Password tidak valid.');\\n  if(u.ROLE === 'SUPERADMIN') throw new Error('SUPERADMIN harus menggunakan Google Login.');"
);

const migrationFunc = \
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
\;

code = code.replace(
  'loginMajelisV84: loginMajelisV84,',
  'migrateAuthV85: migrateAuthV85,\\n      loginMajelisV84: loginMajelisV84,'
);
code += '\\n' + migrationFunc;

fs.writeFileSync(codePath, code);
console.log('Patched Code.gs successfully');
