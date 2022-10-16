import { createStore } from 'vuex'

const isElemVisible = (el) => {
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top + 100 // 200 = buffer
  var elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

let state = {
  fadein_els: [],
  show_ui: 0,
  showing: false
}

let mutations = {
  add_fadein_el(state, el) {
    if (state.fadein_els.includes(el) == false) {
      state.fadein_els.push(el);
    }
  },
  show_page(state, idx) {
    state.showing = true
    setTimeout(() => {
      state.show_ui = idx;
    }, 300);
  },
  exit_page(state) {
    state.showing = false
    setTimeout(() => {
      state.show_ui = 0;
    }, 300);
  }
}

let getters = {
  fadein_els(state) {
    return state.fadein_els;
  },
  show(state) {
    return state.show_ui;
  },
  showing(state) {
    return state.showing;
  }
}

let actions = {
  handleScroll(ctx) {
    for (var i = 0; i < ctx.state.fadein_els.length; i++) {
      var elem = ctx.state.fadein_els[i]
      if (isElemVisible(elem)) {
        elem.style.opacity = '1'
        elem.style.transform = 'scale(1)'
      } else {
        elem.style.opacity = '0'
        elem.style.transform = 'scale(0)'
      }
    }
  }
}

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});