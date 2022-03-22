import Vue from 'vue'
import VueRouter from 'vue-router'
import PagHome from '../views/PagHome'
import Login from '../views/Login'
import ListaOvos from '../views/ListaOvos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'PagHome',
    component: PagHome
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/listalocais',
    name: 'ListaLocais',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaLocais.vue')
  },
  {
    path: '/ovos',
    name: 'ListaOvos',
    component: ListaOvos
  }
]

const router = new VueRouter({
  routes
})

export default router
