
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/menu/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/menu"
  }
],
  assets: {
    'index.csr.html': {size: 733, hash: '7e1635ac660eeaf644e3f35dbb4c6542f1e92b3e4ff31ee633c0d5d5f52005e6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '736b85deab17e3242c756d925df26e4636e05df1b44c3b1419cf68c121672b34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5418, hash: 'bdaad90f1b42bc045a545595f1148890116a3388d5eb48f0b8c9445fa681951f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QT23L7M2.css': {size: 270, hash: '6CSl6hLLmkg', text: () => import('./assets-chunks/styles-QT23L7M2_css.mjs').then(m => m.default)}
  },
};
