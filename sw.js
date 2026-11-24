const CACHE='sigma-v12';
const CDN='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
const CORE=['./','./index.html','./data.enc','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png',CDN];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>
    (u.startsWith('http')?fetch(u,{mode:'no-cors'}):fetch(u,{cache:'reload'})).then(r=>c.put(u,r)).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('sigma-')&&x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
async function netFirst(req){
  const cache=await caches.open(CACHE);
  const hit=await cache.match(req,{ignoreSearch:true});
  const net=fetch(req.mode==='navigate'?req:new Request(req,{cache:'no-cache'}))
    .then(r=>{if(r&&r.ok){cache.put(req,r.clone());return r}return hit||r});
  if(!hit)return net.catch(()=>Response.error());
  const ms=req.mode==='navigate'?3500:15000;
  return Promise.race([net,new Promise(res=>setTimeout(()=>res(hit),ms))]).catch(()=>hit);
}
async function cacheFirst(req){
  const cache=await caches.open(CACHE);
  const hit=await cache.match(req);
  if(hit)return hit;
  const r=await fetch(req);
  if(r&&(r.ok||r.type==='opaque'))cache.put(req,r.clone());
  return r;
}
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const same=new URL(e.request.url).origin===location.origin;
  e.respondWith(same?netFirst(e.request):cacheFirst(e.request));
});
