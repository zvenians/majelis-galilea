const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const {createWorkspaceRuntime}=require('./fixtures/workspace-runtime');
const r=createWorkspaceRuntime(),c=r.context;
const request=(action,args,role='VIEWER')=>r.dispatch({action,args,authToken:role});
const search=request('globalSearchV7',['Maria',2026,30,'ADMIN']);
assert.ok(search.result.length);
assert.ok(search.result.every(row=>c.getAuthContextV84('VIEWER').user.permissions.pages.includes(row.page)));
assert.ok(request('globalSearchV7',['Maria',2026,30],'ADMIN').result.some(row=>row.type==='jemaat'));
assert.throws(()=>c.globalSearchV7('Maria',2026,30),/AUTH_REQUIRED/);
const data=c.getAppData;
c.getAppData=filters=>({...data(filters),summary:{...data(filters).summary,totalIncome:981234,totalBalance:981234,funds:{'Kas Jemaat':{balance:981234}},attendance:{average:75}},attachments:[
 {ENTITY_TYPE:'jemaat',ENTITY_ID:'J1',FILE_NAME:'private-member'},
 {ENTITY_TYPE:'notulen',ENTITY_ID:'N1',FILE_NAME:'meeting-file'},
 {ENTITY_TYPE:'unknown',ENTITY_ID:'N1',FILE_NAME:'unknown-file'}
]});
const restricted=request('getSecureAppDataV84',['VIEWER',{}]).result;
assert.equal(restricted.summary.totalIncome,0);
assert.equal(restricted.summary.totalBalance,0);
assert.equal(restricted.summary.totalJemaat,0);
assert.equal(restricted.summary.attendance.average,75);
assert.deepEqual(restricted.attachments.map(row=>row.FILE_NAME),['meeting-file']);
assert.ok(!restricted.calendar.some(row=>row.type==='deadline'));
const finance=request('getSecureAppDataV84',['KEUANGAN',{}],'KEUANGAN').result;
assert.equal(finance.summary.totalBalance,981234);
assert.equal(finance.summary.funds['Kas Jemaat'].balance,981234);
assert.equal(request('getSecureAppDataV84',['ADMIN',{}],'ADMIN').result.attachments.length,2);
const account=r.tables[r.app.SHEETS.ACCESS].rows.find(row=>row.ROLE==='VIEWER');
account.PIN_HASH=c.hashPinV84_('viewer','test-password');
for(let i=0;i<5;i++)assert.throws(()=>c.loginMajelisV84('VIEWER','wrong'),/tidak valid/);
assert.throws(()=>c.loginMajelisV84(' viewer ','test-password'),/15 menit/);
const store=c.PropertiesService.getScriptProperties();
store.setProperty('MG-LOGIN-LIMIT-VIEWER',JSON.stringify({count:5,until:Date.now()-1}));
assert.ok(c.loginMajelisV84('viewer','test-password').token);
assert.equal(store.getProperty('MG-LOGIN-LIMIT-VIEWER'),null);
assert.throws(()=>c.loginMajelisV84('viewer','wrong'),/tidak valid/);
assert.ok(c.loginMajelisV84('viewer','test-password').token);
assert.equal(store.getProperty('MG-LOGIN-LIMIT-VIEWER'),null);
let released=false;
c.LockService={getScriptLock:()=>({tryLock:()=>true,releaseLock:()=>{released=true;}})};
assert.throws(()=>c.loginMajelisV84('missing','wrong'),/tidak valid/);
assert.equal(released,true);
const html=fs.readFileSync(path.join(__dirname,'../viewer/index.html'),'utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1].replace(/\n    load\(\);\s*$/, '\n');
const elements={};const get=id=>elements[id]??={value:'',innerHTML:'',textContent:'',hidden:false};
const v=vm.createContext({document:{getElementById:get},window:{},URL,Date,AbortSignal});
vm.runInContext(script,v);
v.window.MG_VIEWER_CALLBACK({success:true,year:2026,programs:[{name:'Kunjungan',status:'Proses',start:'2026-10-21'}],summary:{programs:1}});
for(const term of ['Sedang dikerjakan','Oktober','kunjungan']){
 get('viewerSearch').value=term;vm.runInContext('renderViewer()',v);assert.match(get('prog').innerHTML,/Kunjungan/);
}
get('viewerSearch').value='Tidak ada';vm.runInContext('renderViewer()',v);assert.match(get('prog').innerHTML,/Tidak ada yang cocok/);
console.log('Access boundaries passed: role-scoped search, summaries, attachments, calendar, finance preservation, login throttling/reset, and displayed-label search.');
