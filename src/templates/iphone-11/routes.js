const IPhoneRoutes = [{
  path: 'main',
  name: 'IPhoneMainLayout',
  meta: { title: 'iPhone11' },
  component: () => import('./views/main/IPhoneMainLayout')
}, {
  path: 'market',
  name: 'IPhoneMarketLayout',
  meta: { title: 'iPhone11 구입하기' },
  component: () => import('./views/market/IPhoneMarketLayout')
}, {
  path: 'service',
  name: 'IPhoneServiceLayout',
  meta: { title: 'Apple 고객센터' },
  component: () => import('./views/serviceCenter/IPhoneServiceLayout')
}]

export default IPhoneRoutes
