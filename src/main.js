// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './sass/index.scss'

import Flare from '@lkmx/flare/src/main'

import Faq from './components/Faq'
import Newsletter from './components/Newsletter'
import HomePageHero from './components/HomePageHero'
import SimpleCard from './components/SimpleCard'
import Separator from './components/Separator'
import Card from './components/Card'
import CardHolder from './components/CardHolder'

require('hind');

export default function (Vue, { router, head, isClient }) {
  Vue.config.productionTip = false
  Vue.use(Flare)

  Vue.component('Faq', Faq)
  Vue.component('Newsletter', Newsletter)
  Vue.component('HomePageHero', HomePageHero)
  Vue.component('SimpleCard', SimpleCard)
  Vue.component('Separator', Separator)
  Vue.component('Card', Card)
  Vue.component('CardHolder', CardHolder)

  if (isClient) {
    Vue.$setDefaultTheme()
  }
}
