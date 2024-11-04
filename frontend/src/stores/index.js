import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { EncryptStorage } from "encrypt-storage";
export const encryptStorage = new EncryptStorage(
  toString(import.meta.env.VITE_VUE_APP_USERID_SECRET),
  {
    storageType: "localStorage",
    stateManagementUse: true,
  }
);

export default createStore({
  state: {
    ratingid:null,
    semester:null,
    schoolyear:null,
    user: {},
    paged:'',
    evaluatedID:null,
    isAuthenticated: null,
    paged:'',
    userEvaluated:'',
    userEvaluation:'',
    userTotal:'',
    ileggEvaluated:'',
    ileggEvaluation:'',
    ileggTotal:'',
    iaasEvaluated:'',
    iaasEvaluation:'',
    iaasTotal:'',
    icEvaluated:'',
    icEvaluation:'',
    icTotal:'',
    itedEvaluated:'',
    itedEvaluation:'',
    itedTotal:'',
    iadsEvaluated:'',
    iadsEvaluation:'',
    iadsTotal:'',
    userProfile:'',
    user_esignature:null,
  },
  getters: {
    getSemester(state){
      return state.semester
    },
    getSchoolYear(state){
      return state.schoolyear
    }
  },
  mutations: {
    setRatingId(state, ratingid){

      state.ratingid = ratingid
    },
    setSemester(state, semester){
      state.semester = semester;
    },
    SET_USER_DATA(state, user) {
      state.user = user;
      state.isAuthenticated = true;
      state.loadingUser = false;
      state.error = {};
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
      state.isAuthenticated = true;
    },
  },
  actions: {
    SET_USER(context, payload) {
      context.commit("SET_USER_DATA", payload);
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        setItem: (key, state) => encryptStorage.setItem(key, state),
        getItem: (key) => encryptStorage.getItem(key),
        removeItem: (key) => encryptStorage.removeItem(key),
      },
    }),
  ],
  
});
