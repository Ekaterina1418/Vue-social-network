import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: null,
    messages: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_CLEAR(state) {
      state.user = null;
    },
   
  },
  getters: {
    chekAuthUser(state) {
      return state.user != null;
    },
    
  },
  modules: {
    actions,
  },
});
