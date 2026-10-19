const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
function createWorkspaceRuntime() {
  const c=vm.createContext({console});
  new vm.Script(fs.readFileSync(path.join(__dirname,'../../apps-script/Code.gs'),'utf8')).runInContext(c);
  const app=vm.runInContext('APP',c), tables={},sessions=new Map(),audits=[];
  for(const [name,columns] of Object.entries(app.SCHEMA)) {
    const table={headers:[...columns],rows:[],getLastColumn(){return this.headers.length;},getMaxColumns(){return this.headers.length;},getLastRow(){return this.rows.length+1;},insertColumnsAfter(){},appendRow(values){this.rows.push(Object.fromEntries(this.headers.map((key,i)=>[key,values[i]??''])));},deleteRow(row){this.rows.splice(row-2,1);},getRange(row,col,height=1,width=1){return {
      getValues:()=>Array.from({length:height},(_,i)=>Array.from({length:width},(_,j)=>row+i===1?table.headers[col+j-1]:table.rows[row+i-2]?.[table.headers[col+j-1]]??'')),
      getDisplayValues(){return this.getValues().map(values=>values.map(String));},
      setValues(values){values.forEach((values,i)=>values.forEach((value,j)=>{if(row+i===1)table.headers[col+j-1]=value;else table.rows[row+i-2][table.headers[col+j-1]]=value;}));},
      setValue(value){this.setValues([[value]]);}
    };}};
    tables[name]=table;
  }
  let serial=0;
  c.getSheet_=name=>{if(!tables[name])throw new Error('Missing fixture table '+name);return tables[name];};
  c.getHeaders_=table=>[...table.headers];
  c.readSheet_=name=>tables[name].rows.map(row=>({...row}));
  c.findRowById_=(table,key,id)=>{const i=table.rows.findIndex(row=>String(row[key])===String(id));return i<0?0:i+2;};
  c.rowToObject_=(table,row)=>table.rows[row-2]?{...table.rows[row-2]}:null;
  c.findObjectById_=(name,key,id)=>{const row=tables[name].rows.find(row=>String(row[key])===String(id));return row?{...row}:null;};
  c.generateId_=prefix=>prefix+'-TEST-'+(++serial);
  c.withDocumentLock_=fn=>fn();
  c.audit_=(...args)=>audits.push(args);
  c.hashPinV84_=(username,pin)=>require('node:crypto').createHash('sha256').update(username+'|'+pin).digest('hex');
  c.userLabel_=()=> 'Pengurus contoh';
  c.getSettingSafe_=()=>'';
  c.getSetting_=()=>'';
  c.currentYear_=()=>2026;
  c.normalizeWrite_=(_,value)=>value;
  c.authCacheV84_=()=>({get:key=>sessions.get(key),put:(key,value)=>sessions.set(key,value),remove:key=>sessions.delete(key)});
  c.Utilities={formatDate:date=>new Date(date).toISOString().slice(0,10),getUuid:()=>String(++serial)};
  c.ContentService={MimeType:{JSON:'application/json'},createTextOutput:text=>({text,setMimeType(){return this;}})};
  c.buildDecisionNumber_=()=> 'KEP/'+(++serial)+'/2026';
  c.generateTransactionNumberV8_=()=> 'TRX-'+(++serial);
  c.assertFinancePeriodWritableV8_=()=>{};
  c.recordFinanceTransactionAuditV8_=()=>{};
  c.getAttachments_=()=>[];
  c.runCrudAlignmentSelfTestV83=()=>({success:true,issues:[]});
  c.getBackendStatus=()=>({ok:true,version:'8.4.0'});
  c.getBirthdayCenterV81=()=>({today:[],thisMonth:[],monthLabel:'Oktober',year:2026});
  c.getNotificationCenterV8=()=>({count:2,notifications:[{id:'task',page:'tindak_lanjut',title:'Tugas belum selesai',level:'info'},{id:'backup',page:'arsip',title:'Periksa salinan data',level:'info'}]});
  c.getSecretaryLetterModuleV81=()=>({});
  c.saveUserDraftV7=()=>({success:true}); c.getUserDraftV7=()=>null;c.deleteUserDraftV7=()=>({success:true});
  const account=(role,id=role)=>{
    tables[app.SHEETS.ACCESS].rows.push({ID_USER:id,USERNAME:id.toLowerCase(),NAMA:'Pengurus '+role,ROLE:role,STATUS:'Aktif'});
    sessions.set(c.authKeyV84_(id),JSON.stringify({id,role}));return id;
  };
  ['ADMIN','SEKRETARIS','KEUANGAN','MAJELIS','VIEWER'].forEach(role=>account(role));
  const put=(key,row)=>tables[app.SHEETS[key]].rows.push(row);
  put('NOTULEN',{ID_NOTULEN:'N1',TAHUN:2026,TANGGAL:'2026-10-25',JUDUL:'Rapat pelayanan Oktober',TEMPAT:'Gereja Galilea',STATUS:'Draft',LOCKED:false});
  put('AGENDA',{ID_AGENDA:'A1',ID_NOTULEN:'N1',NO_URUT:1,AGENDA:'Kunjungan jemaat',PEMBAHASAN:'Menyiapkan kunjungan',KEPUTUSAN:'',STATUS:'Belum Dimulai'});
  put('USULAN',{ID_USULAN:'U1',TAHUN:2026,JUDUL_USULAN:'Pelayanan keluarga',LATAR_BELAKANG:'Mendampingi keluarga baru',STATUS:'Diajukan'});
  put('PROGRAM',{ID_PROGRAM:'P1',TAHUN:2026,NAMA_PROGRAM:'Kunjungan keluarga',DEPARTEMEN:'Pelayanan',ANGGARAN:500000,STATUS:'Rencana',PIC:'Maria'});
  put('TINDAK_LANJUT',{ID_TINDAK_LANJUT:'T1',TAHUN:2026,ID_NOTULEN:'N1',URAIAN:'Siapkan daftar kunjungan',PIC:'Maria',STATUS:'Proses',PROGRESS:25,CATATAN:'Catatan yang harus tetap tersimpan',TARGET_SELESAI:'2026-10-24'});
  put('INVENTARIS',{ID_INVENTARIS:'I1',NAMA_BARANG:'Proyektor',JUMLAH:1,KONDISI:'Baik',LOKASI:'Ruang ibadah',STATUS:'Aktif'});
  put('PENGURUS',{ID_PENGURUS:'O1',NAMA:'Maria',JABATAN:'Sekretaris',DEPARTEMEN:'Pelayanan',STATUS:'Aktif'});
  put('DEPARTEMEN',{ID_DEPARTEMEN:'DPT1',NAMA_DEPARTEMEN:'Pelayanan',STATUS:'Aktif'});
  put('JEMAAT',{ID_ANGGOTA:'J1',NAMA:'Maria',NAMA_KELUARGA:'Simatupang',POSISI_KELUARGA:'Istri',JENIS_KELAMIN:'Perempuan',TANGGAL_LAHIR:'1990-04-10',STATUS:'Aktif'});
  c.getAppData=({year=2026}={})=>{
    const data={app:{name:'Majelis Galilea',logoUrl:''},year,years:[2025,2026],sources:[...app.SOURCES]};
    const map={notulen:'NOTULEN',agenda:'AGENDA',kehadiran:'KEHADIRAN',usulan:'USULAN',keputusan:'KEPUTUSAN',tindakLanjut:'TINDAK_LANJUT',programs:'PROGRAM',rapbj:'RAPBJ',keuangan:'KEUANGAN',inventaris:'INVENTARIS',pengurus:'PENGURUS',jemaat:'JEMAAT',departemen:'DEPARTEMEN',documents:'DOKUMEN'};
    Object.entries(map).forEach(([key,table])=>data[key]=c.readSheet_(app.SHEETS[table]).filter(row=>!row.TAHUN || Number(row.TAHUN)===Number(year)));
    data.attachments=[];data.letters=[];data.calendar=[];
    data.summary={totalNotulen:data.notulen.length,activeDecisions:data.keputusan.length,overdueTasks:0,attendance:{average:0},totalPrograms:data.programs.length,inventoryIssue:0,rapbjPlan:0,rapbjRealized:0,rapbjRemaining:0,funds:Object.fromEntries(app.SOURCES.map(source=>[source,{balance:0,income:0,expense:0}])),attention:[],nextMeeting:data.notulen[0]};
    return data;
  };
  return {context:c,tables,app,account,sessions,audits,put,dispatch:body=>JSON.parse(c.doPost({postData:{contents:JSON.stringify(body)}}).text)};
}
module.exports={createWorkspaceRuntime};
