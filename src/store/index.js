import { createStore } from 'vuex'

export default createStore({
    state: {
      token: null,
      authenticated: false
    },
    mutations: {
      setToken(state, token){
        state.token = token
      }
    },
    actions: {
      setToken({commit}){
        commit('setToken')
      }
    },
    getters:{
      isLoggedIn(state){
        return !state.token
      },
      getToken(state){
        return state.token
      }
    },
    modules: {}
})