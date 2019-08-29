const book = {
  state: {
    name: 2
  },
  mutations: {
    'set_name': (state, newName) => {
      state.name = newName
    }
  },
  actions: {
    setName: ({ commit, state }, newName) => {
      return commit('set_name', newName)
    }
  }
}

export default book
