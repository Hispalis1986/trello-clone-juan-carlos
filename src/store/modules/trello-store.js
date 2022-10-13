import axios from 'axios';

const state = {
    trello: null
}

const getters = {
    getTrelloDatas(state) {
        return state.trello
    }
}

const actions = {
    setTrello({ commit }, data) {
        commit('SET_TRELLO', data)
    }
}

const mutations = {
    SET_TRELLO(state, data) {
        state.trello = data
    }
}

const trelloModule = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default trelloModule;