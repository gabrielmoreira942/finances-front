import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'gabs',
      lastName: 'Moreira'
    }
  },
  getters: {
    // OPÇÃO 1
    // getName(state){
    //   console.log('get', state );
    //   return state.user.name
    // },

    // OPÇÃO 2
    getName: state => state.user.name,
    getLastName: state => state.user.lastName
  },
  mutations: {
    // OPÇÃO1
    // setName(state, newName) {
    //   state.user.name = newName
    // }

    // OPÇÃO2
    setName: (state, newName) => state.user.name = newName,
    setLastName: (state, lastName) => state.user.lastName = lastName
  },
  actions: {
    // OPÇÃO1
    // changeName(context, newName){
    //   context.commit('setName',newName)
    // },

    // OPÇÃO2
    changeName: ({ commit }, newName) => commit('setName', newName),
    changeLastName: ({ commit }, newLastName) => commit('setLastName', newLastName),
  },
  modules: {
  }
})
