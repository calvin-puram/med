import jwtInterceptor from "@/Utils/jwtInterceptor";
import { jwtDecrypt, tokenAlive } from "@/Utils/jwtHelper";

export const state = {
  authData: {
    token: "",
    refreshToken: "",
    tokenExp: "",
    userId: "",
  },
  agentProfile: null,
  clinicProfile: null,
  donorProfile: null,
  loading: false,
  authErr: [],
};

export const getters = {
  getAuthData: (state) => state.authData,
  getAgentProfile: (state) => state.agentProfile,
  getClinicProfile: (state) => state.clinicProfile,
  getDonorProfile: (state) => state.donorProfile,
  getloading: (state) => state.loading,
  getAuthErr: (state) => state.authErr,
  isTokenActive: (state) => {
    if (!state.authData.tokenExp) {
      return false;
    }
    return tokenAlive(state.authData.tokenExp);
  },
};

export const actions = {
  async login({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.post(payload.api, payload);
      if (res && res.data) {
        commit("saveTokenData", res.data);
        commit("setLoginStatus", false);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.errors);
      }
    }
  },

  async getAgentProfileIfAny({ commit }) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.get(
        "https://medbarncore.herokuapp.com/api/v1/identity/agent/profile"
      );
      if (res && res.data) {
        commit("saveAgentProfile", res.data.data);
        commit("setLoginStatus", false);
      }
      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
        commit("setLoginStatus", false);
      }
    }
  },

  async getClinicProfileIfAny({ commit }) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.get(
        "https://medbarncore.herokuapp.com/api/v1/identity/clinic/profile"
      );
      if (res && res.data) {
        commit("saveClinicProfile", res.data.data);
        commit("setLoginStatus", false);
      }
      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
        commit("setLoginStatus", false);
      }
    }
  },

  async getDonorIfAny({ commit }) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.get(
        "https://medbarncore.herokuapp.com/api/v1/identity/donor/profile"
      );
      if (res && res.data) {
        commit("saveDonorProfile", res.data.data);
        commit("setLoginStatus", false);
      }
      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
        commit("setLoginStatus", false);
      }
    }
  },

  async addClinicProfile({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.put(
        "https://medbarncore.herokuapp.com/api/v1/identity/clinic/update",
        payload
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.error);
      }
    }
  },

  async addAgentProfile({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.put(
        "https://medbarncore.herokuapp.com/api/v1/identity/agent/update",
        payload
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.errors);
      }
    }
  },

  async verifyDonorNIMC({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.post(
        "https://medbarncore.herokuapp.com/api/v1/identity/donor/verify",
        payload
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.errors);
      }
    }
  },

  async verifyDonorAgent({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.post(
        "https://medbarncore.herokuapp.com/api/v1/agency/donor/request",
        payload
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.errors);
      }
    }
  },

  async addDonorProfile({ commit }, payload) {
    try {
      commit("setLoginStatus", true);
      const res = await jwtInterceptor.put(
        "https://medbarncore.herokuapp.com/api/v1/identity/donor/update",
        payload
      );
      if (res && res.data) {
        commit("setLoginStatus", false);
      }
      commit("setLoginStatus", false);

      return res;
    } catch (err) {
      if (err && err.response.data) {
        commit("auth_err", err.response.data.errors);
      }
    }
  },
};

const mutations = {
  saveTokenData(state, data) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
    let jwtDecodedValue;
    if (data.token && data.refreshToken) {
      jwtDecodedValue = jwtDecrypt(data.token);
    }

    const newTokenData = {
      token: data.token,
      refreshToken: data.refreshToken,
      tokenExp: jwtDecodedValue.exp,
    };
    state.authData = newTokenData;
  },

  setLoginStatus(state, value) {
    state.loading = value;
  },

  auth_err(state, err) {
    state.authErr = err;
    state.loading = false;
  },

  saveAgentProfile(state, data) {
    state.agentProfile = data;
  },

  saveClinicProfile(state, data) {
    state.clinicProfile = data;
  },

  saveDonorProfile(state, data) {
    state.donorProfile = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
