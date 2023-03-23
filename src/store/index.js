import { createStore } from 'vuex'

export default createStore({
    state: {
      authenticated: false
    },
    mutations: {
      SET_AUTH: (function (state, auth) { 
        return state.authenticated = auth; 
      }),
    },
    actions: {
      setAuth: (function (_a, auth) {
          var commit = _a.commit;
          return commit('SET_AUTH', auth);
      }),
    },
    modules: {}
})