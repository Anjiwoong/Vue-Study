import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};
