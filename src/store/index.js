import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    layout: 'blank',
    auth: false,
    miniDrawer: false
  },
  getters: {
    isAuth (state) {
      return state.auth
    },
    layout (state) {
      return state.layout
    },
    miniDrawer (state) {
      return state.miniDrawer
    }
  },
  actions: {
    DO_LOGIN: ({commit}) => {
      // TODO: implement cookie
      commit('SET_AUTH', true)
    },
    DO_LOGOUT: ({commit}) => {
      commit('SET_AUTH', false)
    },
    SET_LAYOUT: ({commit}, value) => {
      commit('SET_LAYOUT', value)
    },
    TOGGLE_DRAWER: ({commit}) => {
      commit('TOGGLE_DRAWER')
    }
  },
  mutations: {
    SET_AUTH: (state, value) => {
      state.auth = value
    },
    SET_LAYOUT: (state, value) => {
      state.layout = value
    },
    TOGGLE_DRAWER: (state) => {
      state.miniDrawer = !state.miniDrawer
    }
  }
})

export default store
