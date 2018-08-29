import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)
let batteApi = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000,

})

export default new Vuex.Store({
  state: {
    cards: [], //from db
    myCards: [{}], //from myCards component vue
    opponentCards: [{}], //from opponentCards component vue
    game: {} //from Game.vue

  },
  //cards selected and deck state will be mutations
  mutations: {},
  //when things need to update to/from server
  actions: {}
})