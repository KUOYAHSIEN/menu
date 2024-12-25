
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/menu"
  }
],
  assets: {
    'index.csr.html': {size: 506, hash: '13bcca038d9ba9e0cc58c400a5b48e19ec5415a2d6bb084ce87dce8ba3e55abf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '56d4b3ae36a5ad2ebe2bc1c1755aad2872c812451f28d1af04a64a37b296435f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 20829, hash: '861be988681428f442840f8a9416ef37b3b280c8e3eb6b5339e5952a5dda296d', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
