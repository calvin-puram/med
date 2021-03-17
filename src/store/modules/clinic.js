import jwtInterceptor from "@/Utils/jwtInterceptor";

const state = {
  clinicLoading: false,
  clinicErr: [],
  clinicUsers: [],
  searchDonors: [],
};

const getters = {
  getClinicLoading: (state) => state.clinicLoading,
  getClinicErr: (state) => state.clinicErr,
  getClinicUsers: (state) => state.clinicUsers,
  getSearchDonors: (state) => state.searchDonors,
};

const actions = {
  async addClinicUser({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.post(
        "https://medbarncore.herokuapp.com/api/v1/identity/clinic/adduser",
        payload
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
      } else {
        commit("setLoginStatus", false);
      }

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
      }
    }
  },

  async clinicUsers({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.get(
        `https://medbarncore.herokuapp.com/api/v1/identity/clinic/users/${payload}`
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
        commit("clinicUsers", res.data.data);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
      }
    }
  },

  async searchDonors({ commit }, payload) {
    try {
      commit("setLoginStatus", true);

      const res = await jwtInterceptor.get(
        `https://medbarncore.herokuapp.com/api/v1/agency/donors/?maxheight=${parseInt(
          payload.maxHeight
        )}&minHeight=${payload.minHeight}&Complexion=${
          payload.complexion
        }&ethnicity=${payload.ethnicity}&levelofeducatio=${
          payload.education
        }&Gender=${payload.gender}&Religion=${
          payload.religion
        }&minAge=${parseInt(payload.minAge)}&MaxAge=${parseInt(payload.maxAge)}`
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
        commit("searchDonors", res.data.data);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
      }
    }
  },
};

const mutations = {
  setLoginStatus(state, value) {
    state.clinicLoading = value;
  },

  clinicUsers(state, value) {
    state.clinicUsers = value;
  },

  searchDonors(state, value) {
    state.searchDonors = value;
  },

  auth_err(state, err) {
    state.clinicErr = err;
    state.clinicLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
