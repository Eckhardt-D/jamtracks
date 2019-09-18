export const state = () => ({
  dataLoaded: false,
  searchLoaded: false
})

export const mutations = {
  SET_LOADED: (state, payload) => {
    state.dataLoaded = payload
  },
  SET_SEARCH_LOADED: (state, payload) => {
    state.searchLoaded = payload
  }
}

export const actions = {
  async initialize({ dispatch, commit }) {
    const lastUser = localStorage.getItem('deezer_user')

    if(lastUser) {
      await dispatch('user/setUser', lastUser)
      await dispatch('songs/searchUserSongs', lastUser)
    }
    commit('SET_LOADED', true);
    commit('SET_SEARCH_LOADED', true);
  }
}
