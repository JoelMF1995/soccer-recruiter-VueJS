import Vue from 'vue';
import Router from 'vue-router';
import clubList from './clublist.vue'
import joueurList from './joueurlist.vue'
import newPlayer from './newjoueur.vue'
Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: '/',
      name: 'joueurlist',
      component: joueurList,
    },
    {
      path: '/clubs',
      name: 'clublist',
      component: clubList,
    },
    {
        path: '/newplayer',
        name: 'newplayer',
        component: newPlayer,
      },
  ],
});