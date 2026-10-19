const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const root=path.join(__dirname,'..');
const {createWorkspaceRuntime}=require(root+'/scripts/fixtures/workspace-runtime');
(async()=>{
 const fixture=createWorkspaceRuntime();
 const failures=[];
 let proxy;
 const server=http.createServer(async(req,res)=>{
   if(req.method==='POST') {
     let raw='';for await(const chunk of req)raw+=chunk;req.body=JSON.parse(raw);
     if(req.url==='/fixture-gas'){
       const data=fixture.dispatch(req.body); if(data.__error__)failures.push({action:req.body.action,error:data.__error__});
       res.setHeader('content-type','application/json');res.end(JSON.stringify(data));return;
     }
     res.status=code=>{res.statusCode=code;return res;};res.json=data=>res.end(JSON.stringify(data));await proxy(req,res);return;
   }
   res.setHeader('content-type','text/html');res.end(fs.readFileSync(root+'/admin/index.html'));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const url='http://127.0.0.1:'+server.address().port;
 process.env.APPS_SCRIPT_URL=url+'/fixture-gas';
 proxy=(await import('data:text/javascript;base64,'+Buffer.from(fs.readFileSync(root+'/api/gas.js','utf8')).toString('base64'))).default;
 const browser=await chromium.launch({executablePath:process.env.MG_CHROMIUM_PATH || undefined,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu']});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 await context.route('https://**/*',route=>route.abort());
 const page=await context.newPage();page.setDefaultTimeout(10000);const errors=[];page.on('pageerror',error=>errors.push(error.message));page.on('console',msg=>{if(msg.type()==='error' && !msg.text().includes('net::ERR'))console.log('CONSOLE',msg.text());});
 await page.addInitScript(()=>{localStorage.setItem('mg_auth_token_v84','ADMIN');});
 try {
  await page.goto(url);await page.waitForFunction(()=>window.__MG840_FULL_APP_READY__ && document.getElementById('bootNoticeTitle').textContent==='Terhubung',null,{timeout:20000});
  assert.equal(await page.locator('#officerNavigationV86 [data-main-group]').count(),5);
  assert.equal(await page.locator('.summary-grid-v87 article').count(),3);
  await page.waitForTimeout(1200);
  await page.screenshot({path:require('node:os').tmpdir()+'/galilea-desktop.png',fullPage:true});
  await page.locator('[data-main-group="rapat"]').click();
  assert.equal(await page.locator('#officerNavigationV86 [data-section-page]').count(),4);
  await page.evaluate(()=>detailNotulen('N1'));
  await page.locator('#detailModal.show').waitFor();
  await page.getByRole('button',{name:'Persiapan',exact:true}).click();
  await page.getByRole('button',{name:'Pilih usulan masuk',exact:true}).click();
  await page.getByRole('button',{name:'Masukkan ke rapat',exact:true}).click();
  await page.waitForFunction(()=>state.data.usulan[0].STATUS==='Diterima');
  await page.getByRole('button',{name:'Catatan rapat',exact:true}).click();
  await page.locator('#detailBody button[onclick^="editAgenda"]').first().click();
  await page.locator('#dynamicForm [name="KEPUTUSAN"]').fill('Kunjungi keluarga baru');
  await page.locator('#dynamicForm [name="PIC"]').selectOption('Maria');
  await page.locator('#dynamicForm [name="DEADLINE"]').fill('2026-10-29');
  await page.locator('#dynamicForm .form-save').click();
  await page.waitForFunction(()=>state.data.keputusan.length===1);
  await page.evaluate(()=>closeDetail());
  await page.locator('[data-section-page="tindak_lanjut"]').click();
  await page.locator('.task-status-v87').first().selectOption('Selesai');
  await page.waitForFunction(()=>state.data.tindakLanjut[0].STATUS==='Selesai');
  await page.locator('[data-main-group="program"]').click();
  await page.getByRole('button',{name:'Atur anggaran',exact:true}).click();
  await page.locator('#programBudgetFormV87 [name="ANGGARAN"]').fill('750000');
  await page.getByRole('button',{name:'Simpan anggaran',exact:true}).click();
  await page.waitForFunction(()=>state.data.programs[0].ID_RAPBJ);
  await page.locator('[data-main-group="keuangan"]').click();
  assert.equal(await page.locator('#keuangan .finance-filter-v8').isVisible(),true);
  await page.locator('#financeTabsV87').getByRole('button',{name:'Laporan',exact:true}).click();
  assert.equal(await page.locator('#financeReportsV87').isVisible(),true);
  assert.equal(await page.locator('#keuangan .finance-filter-v8').isVisible(),false);
  await page.evaluate(()=>openWorkspaceSettingsV87());
  await page.getByRole('button',{name:'Akun pengurus',exact:true}).click();
  await page.getByRole('button',{name:'Tambah akun',exact:true}).click();
  assert.equal(await page.locator('#accessRoleV84 option').count(),4);
  await page.locator('#accessNameV84').fill('Anggota contoh');
  await page.locator('#accessUsernameV84').fill('anggota-contoh');
  await page.locator('#accessPinV84').fill('contoh123');
  await page.locator('#accessFormV87 [type="submit"]').click();
  await page.waitForFunction(()=>state.accessUsersV84.some(row=>row.username==='anggota-contoh'));
  await page.locator('[data-main-group="administrasi"]').click();
  await page.locator('[data-section-page="inventaris"]').click();
  assert.equal(await page.locator('.inventory-card').count(),1);
  await page.locator('[data-section-page="jemaat"]').click();
  // Confirm all retained member tools remain callable and visible.
  await page.evaluate(()=>openMemberIdentityV82('J1'));
  await page.locator('#membershipIdentityV82.show').waitFor();
  await page.waitForTimeout(300);
  await page.screenshot({path:require('node:os').tmpdir()+'/galilea-card.png'});
  const memberDownload=page.waitForEvent('download');
  await page.locator('[onclick="downloadIdentityPngV82()"]').click();
  assert.match((await memberDownload).suggestedFilename(),/\.png$/);
  await page.evaluate(()=>closeMembershipIdentityV82());
  await page.evaluate(()=>openFamilyIdentityV82('Simatupang'));
  await page.waitForFunction(()=>state.identityV82 && state.identityV82.mode==='family');
  const familyDownload=page.waitForEvent('download');
  await page.locator('[onclick="downloadIdentityPngV82()"]').click();
  assert.match((await familyDownload).suggestedFilename(),/\.png$/);
  await page.evaluate(()=>closeMembershipIdentityV82());
  await page.evaluate(()=>editEntity('jemaat','J1'));
  await page.locator('#photoInput').waitFor({state:'visible'});
  const photo=await page.evaluate(()=>{const c=document.createElement('canvas');c.width=60;c.height=80;const x=c.getContext('2d');x.fillStyle='#692a3f';x.fillRect(0,0,60,80);return c.toDataURL('image/png').split(',')[1];});
  await page.locator('#photoInput').setInputFiles({name:'foto-contoh.png',mimeType:'image/png',buffer:Buffer.from(photo,'base64')});
  await page.locator('#photoCropModalV7.show').waitFor();
  await page.locator('[onclick="applyPhotoCropV7()"]').click();
  assert.equal(await page.evaluate(()=>!!state.croppedPhotoPayload.base64),true);
  await page.evaluate(()=>closeModal());
  await page.setViewportSize({width:390,height:844});
  await page.locator('[data-main-group="ringkasan"]').click();
  await page.waitForTimeout(350); await page.screenshot({path:require('node:os').tmpdir()+'/galilea-mobile.png',fullPage:true,animations:'disabled'});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  for(const role of ['SEKRETARIS','KEUANGAN','MAJELIS','VIEWER']){
    await page.evaluate(role=>{state.authV84.token=role;localStorage.setItem('mg_auth_token_v84',role);state.page='dashboard';loadData();},role);
    await page.waitForFunction(role=>state.authV84.user.role===role,role);
    await page.waitForTimeout(100);
    await page.locator('[data-main-group="rapat"]').click();
    if(role==='VIEWER')assert.equal(await page.locator('#addButton').isVisible(),false);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,role+' overflow');
  }
  console.log('BROWSER_ERRORS',errors);console.log('API_ERRORS',failures);
  assert.deepEqual(errors,[]);
  console.log('Browser workflow passed.');
 }catch(error){console.log('FAILED',error.stack);console.log('PAGE',await page.locator('#bootNotice').innerText());console.log('BROWSER_ERRORS',errors);console.log('API_ERRORS',failures);await page.screenshot({path:require('node:os').tmpdir()+'/galilea-failed.png',fullPage:true});process.exitCode=1;}
 finally {await browser.close();server.close();}
})();
