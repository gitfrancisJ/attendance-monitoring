export const state = () => ({

  userCheckIn: false

  });

  export const getters = () => ({
   isCheckIn: (state) => state.userCheckIn,
});

export const mutations = () => ({
  IS_CHECKEDIN(state) {
    state.userCheckIn = true;
  },
});

export const actions = () => ({
  checkedUser({ commit }) {
    commit("IS_CHECKEDIN");
  },
});