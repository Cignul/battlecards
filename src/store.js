import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)
let battleApi = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000,

})

export default new Vuex.Store({
  state: {
    cards: [], //from db not sure if this is how to get tho
    myCards: [], //from myCards component vue
    opponentCards: [], //from opponentCards() method in component vue
    game: {}, //from Game.vue
    games: []

  },
  //cards selected and deck state will be mutations
  mutations: {
    setCurrentGame(state, gameData) {
      state.game = gameData
    },
    setAllGames(state, gameData) {
      state.games = gameData
    },
  },
  //when things need to update to/from server
  actions: {
    getAllGames({ commit, dispatch }) {
      battleApi.get('')
        .then(res => {
          commit('setAllGames', res.data)
        })
    },
    getGame({ commit }, gameId) {
      battleApi.get(gameId).then(res => {
        commit('setCurrentGame', res.data.data)
      })
    },
    createNewGame({ commit, dispatch }) {
      battleApi.post('')
        .then(res => {
          console.log(res)
          commit("setCurrentGame", res.data)
        })
    },
    selectCards() {
      //i think i can do the @click and if both selected -> fire start game
    },
    //a post request to server
    attack({ commit, dispatch }, attack) {
      battleApi.put(attack.gameId, attack).then(res => {
        dispatch('getGame', attack.gameId)
      })
    }
  }
})