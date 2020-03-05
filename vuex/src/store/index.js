import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    myName: 'nserallah'
  },
  getters: {
    upOne (state) {
      return state.count + 'CLICK'
    },
    name (state) {
      return state.myName
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
});
