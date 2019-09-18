const path = ".netlify/functions/get-deezer-flow"
const URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:34567/${path}`
    : `/${path}`

export const state = () => ({
  songs: []
})

export const mutations = {
  SET_FLOW: (state, payload) => {
    state.songs = payload
  }
}

export const actions = {
  async getFlow({ commit }) {
    const response = await fetch(URL)
    const data = await response.json()

    commit("SET_FLOW", data.data)
  }
}
