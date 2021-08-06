// import getGlobalVars from '@/apollo/query/fetchGlobal.gql'

export const state = () => ({
  globals: {},
})

export const mutations = {
  set_globals: (state, globals) => {
    state.globals = globals
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    // return new Promise((resolve, reject) => {
    const globals = await $axios.$get('http://localhost:1337/global')
    commit('set_globals', globals)
    // })
  },
}
