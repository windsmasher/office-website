import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import AboutTherapy from '../views/AboutTherapy.vue';
import CompanyInfo from '../views/CompanyInfo.vue';
import Contact from '../views/Contact.vue';
import MyOffer from '../views/MyOffer.vue';
import Prices from '../views/Prices.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/o-mnie',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/o-terapii',
    name: 'AboutTherapy',
    component: AboutTherapy
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/moja-oferta',
    name: 'MyOffer',
    component: MyOffer
  },
  {
    path: '/cennik',
    name: 'Prices',
    component: Prices
  },
  {
    path: '/dane-firmy',
    name: 'CompanyInfo',
    component: CompanyInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
