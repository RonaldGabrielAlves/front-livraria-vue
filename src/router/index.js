import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aluguel from '../views/Aluguel.vue'
import Editoras from '../views/Editoras.vue'
import Livros from '../views/Livros.vue'
import Clientes from '../views/Clientes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aluguel',
    name: 'Aluguel',
    component: Aluguel
     
  },
  {
    path: '/editoras',
    name: 'Editoras',
    component: Editoras
  },
  {
    path: '/livros',
    name: 'Livros',
    component: Livros
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  } 
]

const router = new VueRouter({
  routes
})

export default router
