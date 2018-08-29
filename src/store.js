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
  state: {},
  mutations: {},
  actions: {}
})