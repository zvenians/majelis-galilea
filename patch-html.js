const fs = require('fs');
const htmlPath = 'admin/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Add Google GSI script to head
html = html.replace('</title>', '</title>\n<script src="https://accounts.google.com/gsi/client" async defer></script>');

// 2. Replace auth-gate with new UI
const oldAuthGate = /<div id="authGateV84" class="auth-gate-v84">.*<\/section><\/div>/;
const newAuthGate = `
<div id="authGateV84" class="auth-gate-v84">
  <section class="auth-card-v84">
    <div class="auth-brand-v84">
      <span>MG</span>
      <div>
        <small>MAJELIS GALILEA</small>
        <strong>Administrasi Jemaat</strong>
      </div>
    </div>
    
    <!-- Google Login Button -->
    <div style="margin: 20px 0; display: flex; justify-content: center;">
      <div id="g_id_onload"
           data-client_id="152249823054-gtalq11ff14re7cpnas3dktaf7u4t432.apps.googleusercontent.com"
           data-context="signin"
           data-ux_mode="popup"
           data-callback="handleGoogleLogin"
           data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
           data-type="standard"
           data-shape="rectangular"
           data-theme="outline"
           data-text="continue_with"
           data-size="large"
           data-logo_alignment="left">
      </div>
    </div>
    
    <div style="text-align: center; margin: 10px 0; color: #888; font-size: 12px;">atau</div>
    
    <form id="loginFormV84" onsubmit="loginMajelisV84(event)">
      <label>
        <span>Username</span>
        <input id="loginUsernameV84" required>
      </label>
      <label>
        <span>Password</span>
        <input id="loginPinV84" type="password" required>
      </label>
      <p id="loginErrorV84"></p>
      <button type="submit">Login</button>
    </form>
  </section>
</div>
`.trim();

html = html.replace(oldAuthGate, newAuthGate);

// 3. Add handleGoogleLogin function
const googleLoginFunc = `
function handleGoogleLogin(response) {
  setText('loginErrorV84', 'Verifikasi akun Google...');
  google.script.run
    .withSuccessHandler(r => {
      state.authV84 = { token: r.token, user: r.user };
      localStorage.setItem('mg_auth_token_v84', r.token);
      document.getElementById('loginPinV84').value = '';
      hideAuthGateV84();
      startBootV601();
    })
    .withFailureHandler(x => setText('loginErrorV84', errorMessage(x)))
    .loginGoogleV85(response.credential);
}
`;

html = html.replace('function loginMajelisV84(e)', googleLoginFunc + '\nfunction loginMajelisV84(e)');

fs.writeFileSync(htmlPath, html);
console.log('Patched admin/index.html successfully');
