const IPhoneRoutes = [{
  path: 'main',
  name: 'IPhoneMainLayout',
  component: () => import('./views/main/IPhoneMainLayout')
}, {
  path: 'market',
  name: 'IPhoneMarketLayout',
  component: () => import('./views/market/IPhoneMarketLayout')
}]

export default IPhoneRoutes
