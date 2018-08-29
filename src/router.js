import Vue from 'vue'
import Router from 'vue-router'
import Battle from './views/Battle.vue'
//import Vendr from './views/Vendr.vue'


Vue.use(Router)

export default new Router({
  routes: [
    //using other examples to set up this router need to finish Battle component
    //or at least have a function for it to look for
    {
      path: '/',
      name: 'battle',
      component: Battle
    },

    // add paths for other vues, myHand, opponentHand
    // {
    //   path: '/',
    //   name: 'slap',
    //   component: Slap
    // },
    // {
    //   path: '/vendr',
    //   name: 'vendr',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Vendr

    // }
  ]
})
