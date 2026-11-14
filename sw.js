/* Re/Prime · service worker delle notifiche (va caricato su GitHub accanto a index.html, con il nome sw.js) */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(_){d={titolo:'Re/Prime',testo:e.data?e.data.text():''}}
 const t=d.titolo||'Re/Prime';e.waitUntil(self.registration.showNotification(t,{body:d.testo||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag||'reprime',renotify:true,data:{url:d.url||'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const u=(e.notification.data&&e.notification.data.url)||'./';
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(L=>{for(const c of L){if('focus' in c)return c.focus()}return self.clients.openWindow(u)}))});
