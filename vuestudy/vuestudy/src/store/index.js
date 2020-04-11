import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex);
// const state={
//      sex:'女',
//      age:'34'
// }
// const mutations={
//     changesex(store,flag){
//        store.sex=flag;
//     },
//     changeage(store,flag){
//        store.age=flag;
//     }
// }
// let i=0;
// const actions={
//     increment ({ commit }) {
//         i++
//       commit('changeage',i)
//     }
//   }
export default new Vuex.Store({
  modules
})