const IPhoneMarketRoutes = [{
  path: 'main',
  name: 'IPhoneMain',
  component: () => import('./views/IPhoneMain')
}, {
  path: 'market',
  name: 'IPhoneMarket',
  component: () => import('./views/IPhoneMarket')
}]

export default IPhoneMarketRoutes
