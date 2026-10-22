const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');

for(const file of ['admin/index.html','viewer/index.html']){
  const html=read(file);
  assert.ok(Buffer.byteLength(html)<100000,file+' should remain a small document shell');
  for(const match of html.matchAll(/(?:src|href)="(\/(?:admin|viewer|assets)\/[^"?#]+)"/g)){
    assert.ok(fs.existsSync(path.join(root,match[1])),file+' references missing '+match[1]);
  }
}
for(const file of ['admin/js/shell.js','admin/js/core.js','admin/js/features.js','admin/js/enhancements.js','viewer/app.js']){
  new vm.Script(read(file),{filename:file});
}
assert.doesNotMatch(read('viewer/index.html'),/>\s*MG\s*</,'public viewer must not contain the old monogram');
assert.doesNotMatch(read('admin/index.html'),/>\s*MG\s*</,'admin must not contain the old monogram');
assert.match(read('viewer/index.html'),/\/assets\/adventist-logo\.png/);
assert.match(read('admin/index.html'),/\/assets\/adventist-logo\.png/);
assert.match(read('admin/index.html'),/id="googleSignInButtonV90"/);
assert.doesNotMatch(read('admin/index.html'),/accounts\.google\.com\/gsi\/client" async/,'Google Identity must load in deterministic defer order');
assert.match(read('admin/js/core.js'),/function isAuthFailureV90/);
assert.match(read('admin/js/core.js'),/handleExpiredSessionV90\(\)/);
assert.match(read('api/public.js'),/stale-while-revalidate=86400/);
console.log('Frontend structure passed: modular assets exist, scripts parse, Adventist branding is present, auth recovery is wired, and public caching is configured.');
