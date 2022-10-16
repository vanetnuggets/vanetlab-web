import { createStore } from 'vuex'

let state = {
  fadein_els: []
}

let mutations = {
  add_fadein_el(state, el) {
    state.fadein_els.push(el);
  }
}

let getters = {
  fadein_els(state) {
    return state.fadein_els;
  }
}

let actions = {
  
}

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});