/* ====== Sincronizzazione online (Firebase: accesso Google + Firestore) ======
   Un solo documento per utente: utenti/{uid}/dati/stato = {json, ver, da, agg}.
   - ogni modifica si salva subito in questo browser (localStorage) e dopo ~1,5 s su Firestore;
   - le modifiche fatte su un altro computer arrivano da sole (onSnapshot);
   - senza internet si continua a lavorare: si invia appena la connessione torna;
   - se due computer cambiano insieme, si chiede quale versione tenere. */
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithRedirect,onAuthStateChanged,signOut,setPersistence,browserLocalPersistence} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {getFirestore,doc,onSnapshot,runTransaction,serverTimestamp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const CFG=window.FIREBASE_CONFIG;
const K_VER='contabilita_sync_ver', K_PEND='contabilita_sync_pend', K_DEV='contabilita_sync_dev';
const dev=lsGet(K_DEV)||(()=>{const d='d'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);lsSet(K_DEV,d);return d})();
const st={stato:'avvio',user:null,ref:null,ver:+(lsGet(K_VER)||0),pend:lsGet(K_PEND)==='1',timer:null,inCorso:false,remota:null,conflitto:false,primo:false};
window.SYNC=st;

const app=initializeApp(CFG), auth=getAuth(app), db=getFirestore(app);
setPersistence(auth,browserLocalPersistence).catch(()=>{});

/* ---- indicatore in alto ---- */
const TESTI={avvio:'collegamento…',fuori:'non collegato',ok:'sincronizzato',invio:'invio…',attesa:'in attesa di internet',conflitto:'da decidere',errore:'errore di sincronizzazione'};
function segna(s){st.stato=s;mostra()}
function mostra(){
  const el=document.querySelector('#salvato');if(!el)return;
  const ora=ultimoSalvataggio?' alle '+ultimoSalvataggio.toTimeString().slice(0,5):'';
  const ico={ok:'☁︎ ✓',invio:'☁︎ ↑',attesa:'☁︎ ⏸',fuori:'☁︎ ✕',conflitto:'☁︎ !',errore:'☁︎ ⚠',avvio:'☁︎ …'}[st.stato];
  el.innerHTML=`<button type="button" class="sync-st sync-${st.stato}" data-sync-info title="${st.user?esc(st.user.email):''}">${ico} ${TESTI[st.stato]}${st.stato==='ok'?ora:''}</button>`;
}
const _rs=window.renderSalvato;window.renderSalvato=function(){_rs();if(st.stato!=='avvio'||st.user)mostra()};

/* ---- finestre ---- */
function finestraSync(html){
  document.querySelector('#sync-fin')?.remove();
  document.body.insertAdjacentHTML('beforeend',`<div id="sync-fin" class="sync-velo"><div class="sync-box">${html}</div></div>`);
}
function chiudiSync(){document.querySelector('#sync-fin')?.remove()}
function login(){
  finestraSync(`<h2>Contabilità</h2><p>Entra con il tuo account Google: i dati sono salvati online e li ritrovi uguali su ogni computer.</p>
    <button class="btn" data-sync-login>Accedi con Google</button><p class="sync-nota">Puoi anche lavorare senza accedere: le modifiche restano in questo browser e partono appena entri.</p><button class="btn chiaro" data-sync-dopo>Più tardi</button>`);
}

/* ---- dati remoti ---- */
function applicaRemota(d){
  try{const nuovo=JSON.parse(d.json);S=nuovo;migra();storia=[];}catch(e){segna('errore');return}
  lsSet(CHIAVE,JSON.stringify(S));st.ver=d.ver;lsSet(K_VER,String(d.ver));st.pend=false;lsSet(K_PEND,'0');
  render();segna('ok');
}
// non ridisegnare mentre si sta scrivendo: si aspetta che la finestra sia chiusa
function quandoLibero(fn){
  const occupato=()=>document.querySelector('.finestra, #modale:not(:empty), .velo')||/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement||{}).tagName||'');
  if(!occupato())return fn();
  segna('ok');const el=document.querySelector('#salvato');if(el)el.title='Ci sono modifiche da un altro computer: arrivano appena chiudi la finestra';
  clearTimeout(st.tLib);st.tLib=setTimeout(()=>quandoLibero(fn),1200);
}
function conflitto(d){
  st.conflitto=true;segna('conflitto');
  const quando=d.agg&&d.agg.toDate?d.agg.toDate().toLocaleString('it-IT',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}):'';
  finestraSync(`<h2>Modifiche su due computer</h2><p>Su un altro computer i dati sono stati cambiati${quando?' ('+quando+')':''}, mentre anche qui c'erano modifiche non ancora inviate. Quale versione tieni?</p>
    <div class="sync-az"><button class="btn" data-sync-tieni>Tieni questa (di questo computer)</button><button class="btn chiaro" data-sync-prendi>Prendi quella online</button></div>
    <p class="sync-nota">Prima di decidere puoi scaricare un backup di questa versione da Impostazioni e backup.</p>`);
}

/* ---- invio ---- */
function programma(){clearTimeout(st.timer);st.timer=setTimeout(invia,1500)}
async function invia(forza){
  if(!st.user||!st.ref||st.inCorso||st.conflitto)return;
  if(!st.pend&&!forza)return;
  if(!navigator.onLine){segna('attesa');return}
  st.inCorso=true;segna('invio');const json=JSON.stringify(S);
  try{
    const r=await runTransaction(db,async tx=>{
      const s=await tx.get(st.ref);const v=s.exists()?(s.data().ver||0):0;
      if(s.exists()&&v!==st.ver&&!forza)return {conflitto:s.data()};
      tx.set(st.ref,{json,ver:v+1,da:dev,agg:serverTimestamp()});return {ver:v+1};
    });
    st.inCorso=false;
    if(r.conflitto){conflitto(r.conflitto);return}
    st.ver=r.ver;lsSet(K_VER,String(r.ver));
    if(json===JSON.stringify(S)){st.pend=false;lsSet(K_PEND,'0')}else programma();
    segna('ok');
  }catch(e){st.inCorso=false;console.warn('sync',e);segna(navigator.onLine?'errore':'attesa');clearTimeout(st.timer);st.timer=setTimeout(invia,20000)}
}
window.dopoSalva=()=>{st.pend=true;lsSet(K_PEND,'1');if(st.user)programma()};
addEventListener('online',()=>invia());
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')invia()});

/* ---- accesso ---- */
let stop=null;
onAuthStateChanged(auth,u=>{
  if(stop){stop();stop=null}
  st.user=u;
  if(!u){segna('fuori');if(!sessionStorage.getItem('sync_dopo'))login();return}
  chiudiSync();segna('avvio');
  st.ref=doc(db,'utenti',u.uid,'dati','stato');
  stop=onSnapshot(st.ref,{includeMetadataChanges:false},snap=>{
    if(snap.metadata.hasPendingWrites)return;
    if(!snap.exists()){primoAvvio();return}
    const d=snap.data();st.remota=d;
    if(d.ver===st.ver){if(st.pend)programma();segna(st.pend?'invio':'ok');return}
    if(d.ver<st.ver&&d.da===dev){segna('ok');return}
    if(st.pend&&st.ver>0){conflitto(d);return}
    if(st.pend&&st.ver===0){ // questo browser non era mai stato collegato
      conflitto(d);return}
    quandoLibero(()=>{applicaRemota(d);toast('Dati aggiornati da un altro computer')});
  },e=>{console.warn('snapshot',e);segna(e.code==='permission-denied'?'errore':'attesa');
    if(e.code==='permission-denied')finestraSync(`<h2>Accesso non permesso</h2><p>L'account <b>${esc(u.email)}</b> non può leggere questi dati. Controlla la mail scritta nelle regole di Firestore, oppure esci ed entra con un altro account.</p><div class="sync-az"><button class="btn chiaro" data-sync-esci>Esci</button></div>`)});
});
function primoAvvio(){
  st.primo=true;segna('fuori');
  const n=(S&&S.movimenti||[]).length;
  finestraSync(`<h2>Primo collegamento</h2><p>Online non ci sono ancora dati. Da dove parto?</p>
    <div class="sync-az sync-col"><label class="btn">Carica un backup (.json)… <input type="file" id="sync-file" accept=".json,application/json" hidden></label>
    ${n?`<button class="btn chiaro" data-sync-questi>Usa i dati di questo browser (${n} movimenti)</button>`:''}</div>
    <p class="sync-nota">Il backup si scarica da Impostazioni e backup → Scarica backup, sul computer con i dati più aggiornati.</p>`);
}

/* ---- clic ---- */
document.addEventListener('click',async e=>{
  const t=e.target.closest('[data-sync-login],[data-sync-dopo],[data-sync-tieni],[data-sync-prendi],[data-sync-questi],[data-sync-esci],[data-sync-info]');if(!t)return;
  e.preventDefault();e.stopPropagation();
  if(t.matches('[data-sync-login]')){const pr=new GoogleAuthProvider();pr.setCustomParameters({prompt:'select_account'});
    try{await signInWithPopup(auth,pr)}catch(x){if(/popup/.test(x.code||''))signInWithRedirect(auth,pr);else toast('Accesso non riuscito: '+(x.code||x.message))}}
  else if(t.matches('[data-sync-dopo]')){sessionStorage.setItem('sync_dopo','1');chiudiSync()}
  else if(t.matches('[data-sync-tieni]')){st.conflitto=false;chiudiSync();st.pend=true;await invia(true);toast('Tenuta la versione di questo computer')}
  else if(t.matches('[data-sync-prendi]')){st.conflitto=false;chiudiSync();if(st.remota)applicaRemota(st.remota);toast('Presa la versione online')}
  else if(t.matches('[data-sync-questi]')){st.primo=false;chiudiSync();st.ver=0;st.pend=true;await invia(true);toast('Dati di questo browser caricati online',true)}
  else if(t.matches('[data-sync-esci]')){chiudiSync();await signOut(auth)}
  else if(t.matches('[data-sync-info]')){
    finestraSync(`<h2>Sincronizzazione</h2><p>${st.user?`Collegato come <b>${esc(st.user.email)}</b>.<br>Stato: ${TESTI[st.stato]}${st.remota&&st.remota.agg&&st.remota.agg.toDate?', ultima versione online del '+st.remota.agg.toDate().toLocaleString('it-IT'):''}.`:'Non collegato: le modifiche restano in questo browser.'}</p>
    <div class="sync-az">${st.user?`<button class="btn chiaro" data-sync-esci>Esci</button>`:`<button class="btn" data-sync-login>Accedi con Google</button>`}<button class="btn chiaro" onclick="document.querySelector('#sync-fin').remove()">Chiudi</button></div>`)}
},true);
document.addEventListener('change',e=>{
  if(e.target.id!=='sync-file'||!e.target.files[0])return;
  leggiFile(e.target.files[0],t=>{try{const d=JSON.parse(t);if(!d.movimenti||!d.impostazioni)throw 0;S=d;migra();salva();render();chiudiSync();st.primo=false;st.ver=0;st.pend=true;invia(true);toast('Backup caricato online',true)}catch(x){toast('Questo file non è un backup valido')}});
},true);
mostra();
