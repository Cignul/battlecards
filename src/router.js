import Vue from 'vue'
import Router from 'vue-router'
import Battle from './views/Battle.vue'
import myHand from './components/myHand.vue'
import attackPayload from './views/Battle.vue'


Vue.use(Router)

export default new Router({
  routes: [
    //using other examples to set up this router need to finish Battle component
    //or at least have a function for it to look for
    {
      path: '/battle',
      name: 'battle',
      component: Battle
    },
    {
      path: '/battle',
      name: 'attackPayload',
      component: Battle

    },
    // I think these can actually be loaded onto the battle vue from their components
    // add paths for other vues
  ],
})
