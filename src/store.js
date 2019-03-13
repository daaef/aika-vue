import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    welcome: true,
    started: false,
    message: "",
    verify: false,
    confirm: false,
    complete: false,
    landing: false
  },
  mutations: {
    getStarted(state) {
      state.welcome = false;
      state.started = true;
      state.verify = true;
      state.message =
        "Send Anything, Anywhere at Anytime from your mobile device";
    },
    nextVerify(state) {
      state.verify = false;
      state.confirm = true;
    },
    nextConfirm(state) {
      state.confirm = false;
      state.complete = true;
    },
    complete(state) {
      state.complete = false;
      state.landing = true;
    }
  },
  actions: {}
});
