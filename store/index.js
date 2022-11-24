export const state = () => ({

  user: false,
  userCheckIn: true,
  userBreak: false,

  });

export const getters = {
  isCheckIn: (state) => state.userCheckIn,
  isOnBreak: (state) => state.userBreak
};

export const mutations = {

  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email } = authUser;
      state.user = { uid, email };
    } else {
      state.user = false;
    }
  },

  IS_CHECKEDIN(state) {
    state.userCheckIn = false;
  },

  IS_ONBREAK(state) {
    state.userBreak = true;
  },

};

export const actions = {

  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      console.log("no USER");
    } else {
    }
  },
  
  checkedUser({ commit }) {
    commit("IS_CHECKEDIN");
  },

  userBreak({ commit }) {
    commit("IS_ONBREAK");
  },

};


