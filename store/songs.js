const path = ".netlify/functions/get-deezer-flow"
const URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:34567/${path}`
    : `/${path}`

export const state = () => ({
  data: []
})

export const mutations = {
  SET_SONGS: (state, songs) => {
    state.data = songs
  }
}

export const actions = {
  async searchUserSongs({ commit }, payload) {
    const response = await fetch(URL + "/?id=" + payload)
    const songs = await response.json()
    commit("SET_SONGS", songs)
  }
}
