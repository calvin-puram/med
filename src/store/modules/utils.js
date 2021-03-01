const state = {
  menuIcons: false,
};

const getters = {
  menuIcons: () => state.menuIcons,
};

const actions = {
  // mobile navigation and sidebar toggler
  toogleMenu({ commit, state }) {
    return commit("toggle_nav", !state.menuIcons);
  },
};

const mutations = {
  toggle_nav(state, data) {
    state.menuIcons = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
