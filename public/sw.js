if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    i[s] ||
      new Promise(i => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const o = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[o]) return;
    let t = {};
    const l = e => s(e, o),
      f = { module: { uri: o }, exports: t, require: l };
    i[o] = Promise.all(n.map(e => f[e] || l(e))).then(e => (r(...e), t));
  };
}
define(['./workbox-3e911b1d'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'assets/english.lazy-DqGqy236.js', revision: null },
        { url: 'assets/index-at-1fuVB.js', revision: null },
        { url: 'assets/index-ZYjx2j1D.css', revision: null },
        { url: 'index.html', revision: 'efc3014ac3e3de2596c11e78c45d9798' },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        { url: 'favicon.ico', revision: '7df620e272a823d72f5c816500010c07' },
        { url: 'apple-touch-icon.png', revision: 'f6976e8a7afb66407a295656141f12cf' },
        { url: 'pwa-192x192.png', revision: 'eb23c93725644a6f4122469a6e6f10ca' },
        { url: 'pwa-512x512.png', revision: '4b6d5b7d2ae770a9b02096aaf7ff93e1' },
        { url: 'manifest.webmanifest', revision: 'f51ee30e61e2ff419f92deacf7a3e69f' },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
