import Vue from 'vue'
import Vuex from 'vuex'
import albums from './modules/albums'
import someComments from './modules/someComments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    albums,
    someComments
    
  }
})
