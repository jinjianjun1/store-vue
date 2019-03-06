import Vue from 'vue'
import Vuex from 'vuex'
import Address from './assets/js/addressService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:null
  },
  mutations: {
    init(state,lists){
    state.lists=lists
    }
  },
  actions: {
    getLists({commit}){
      Address.list().then(res=>{
        commit('init',res.data.lists)
      })
    }
  }
})
