const $=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const CACHE_PREFIX='galilea-public-v1:';
let viewerData=null,requestId=0,loading=false;
function cacheKey(year){return CACHE_PREFIX+year}
function readCache(year){try{const item=JSON.parse(localStorage.getItem(cacheKey(year))||'null');return item&&item.data?item:null}catch(_){return null}}
function writeCache(year,data){try{localStorage.setItem(cacheKey(year),JSON.stringify({savedAt:Date.now(),data}))}catch(_){}}
function safeDocumentUrl(value){try{const url=new URL(value);return url.protocol==='https:'?url.href:''}catch(_){return ''}}
function dateLabel(value){if(!value)return '';const date=new Date(value);return Number.isNaN(date.getTime())?String(value):date.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}
function statusLabel(value){return ({Draft:'Belum selesai',Final:'Selesai','Belum Dimulai':'Belum dikerjakan',Proses:'Sedang dikerjakan','Perlu Revisi':'Perlu diperbaiki'})[value]||value}
function hasContent(data){return ['meetings','decisions','programs','documents'].some(key=>(data[key]||[]).length)}
function setLoading(active,year){loading=active;$('viewerReload').disabled=active;$('viewerReload').querySelector('span').textContent=active?'Memuat…':'Muat ulang';if(active&&!viewerData){$('viewerProgress').textContent=`Memuat informasi tahun ${year}…`;$('emptyYear').hidden=true;$('informationSections').hidden=false;['meet','dec','prog','docs'].forEach(id=>{$(id).innerHTML='<div class="skeleton" aria-hidden="true"></div>'});['m','d','p','f'].forEach(id=>{$(id).textContent='—'})}}
function renderList(id,rows,content){$(id).innerHTML=rows.length?rows.map(content).join(''):`<p class="empty">${$('viewerSearch').value.trim()?'Tidak ada yang cocok. Coba kata lain.':'Belum ada informasi di bagian ini.'}</p>`}
function renderViewer(){
  if(!viewerData)return;const search=$('viewerSearch').value.trim().toLocaleLowerCase('id');
  const filter=rows=>(rows||[]).filter(row=>[...Object.values(row),statusLabel(row.status),...['date','target','start','end'].map(key=>dateLabel(row[key]))].some(value=>String(value||'').toLocaleLowerCase('id').includes(search)));
  renderList('meet',filter(viewerData.meetings),row=>`<article><strong>${esc(row.title)}</strong><small>${esc([dateLabel(row.date),row.type,row.place].filter(Boolean).join(' · '))}</small></article>`);
  renderList('dec',filter(viewerData.decisions),row=>`<article><strong>${esc(row.decision)}</strong><small>${esc([row.number,row.department,statusLabel(row.status),row.target&&'Batas waktu: '+dateLabel(row.target)].filter(Boolean).join(' · '))}</small></article>`);
  renderList('prog',filter(viewerData.programs),row=>`<article><strong>${esc(row.name)}</strong><small>${esc([row.department,statusLabel(row.status),[dateLabel(row.start),row.end!==row.start&&dateLabel(row.end)].filter(Boolean).join(' – ')].filter(Boolean).join(' · '))}</small></article>`);
  renderList('docs',filter(viewerData.documents),row=>{const url=safeDocumentUrl(row.url);return `<article><strong>${url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(row.title||'Dokumen')} ↗</a>`:esc(row.title||'Dokumen')}</strong><small>${esc([row.category,row.number,dateLabel(row.date)].filter(Boolean).join(' · '))}</small></article>`});
  $('emptyYear').hidden=hasContent(viewerData)||Boolean(search);$('informationSections').hidden=!hasContent(viewerData)&&!search;
}
function acceptData(data,{cached=false,savedAt=0}={}){
  if(!data||!data.success)throw new Error('Informasi jemaat belum tersedia.');viewerData=data;
  ['m','d','p','f'].forEach((id,index)=>{$(id).textContent=data.summary?.[['meetings','decisions','programs','documents'][index]]||0});renderViewer();
  $('status').hidden=!cached;$('status').className='status'+(cached?' cached':'');if(cached){const time=savedAt?new Date(savedAt).toLocaleString('id-ID',{dateStyle:'medium',timeStyle:'short'}):'';$('status').textContent=`Menampilkan salinan terakhir${time?' dari '+time:''}. Kami akan mencoba memperbaruinya lagi saat koneksi tersedia.`}$('viewerProgress').textContent=`Informasi tahun ${data.year}${cached?' · salinan tersimpan':' · sudah diperbarui'}.`;
}
async function load(){
  const year=Number($('viewerYear').value);if(!Number.isInteger(year)||year<2000||year>2100)return;const current=++requestId,cached=readCache(year);viewerData=null;setLoading(true,year);$('status').hidden=true;
  if(cached)acceptData(cached.data,{cached:true,savedAt:cached.savedAt});
  try{const response=await fetch(`/api/public?year=${encodeURIComponent(year)}`,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(45000)});if(!response.ok)throw new Error('HTTP '+response.status);const data=await response.json();if(current!==requestId)return;if(data.__error__)throw new Error(data.__error__);const result=data.result||data;writeCache(year,result);acceptData(result)}catch(error){if(current!==requestId)return;if(!cached){$('status').className='status';$('status').textContent='Informasi belum dapat diperbarui. Periksa koneksi lalu tekan Muat ulang.';$('status').hidden=false;$('viewerProgress').textContent='Pembaruan tertunda.';['meet','dec','prog','docs'].forEach(id=>{$(id).innerHTML='<p class="empty">Belum ada salinan informasi di perangkat ini.</p>'})}}finally{if(current===requestId)setLoading(false,year)}
}
document.addEventListener('DOMContentLoaded',()=>{$('viewerYear').value=new Date().getFullYear();$('viewerFilters').addEventListener('submit',event=>{event.preventDefault();load()});$('viewerYear').addEventListener('change',()=>{if($('viewerYear').checkValidity())load()});$('viewerSearch').addEventListener('input',()=>{if(!loading)renderViewer()});$('previousYear').addEventListener('click',()=>{$('viewerYear').value=Number($('viewerYear').value)-1;load()});load()});
if(typeof window!=='undefined')window.MG_VIEWER={acceptData,renderViewer,load};
