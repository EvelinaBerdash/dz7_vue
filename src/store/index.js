import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costList: [],
    page: 1,
    itemsPerPage: 5,
    lastID: 0,
    // addPayments: [
    //   { id:1, category: 'food', count: 200, title: 'добавить платеж категории Food с ценой 200'},
    //   { id:2, category: 'transport', count: 50, title: 'добавить платеж категории Transport с ценой 50'},
    //   { id:3, category: 'entertainment', count: 2000, title: 'добавить платеж категории Entertainment с ценой 2000'}
    // ]
  },
  getters: {
    getList: (state) => {
      const startIdx = (state.page - 1) * state.itemsPerPage
      const endIdx = (startIdx + state.itemsPerPage <= state.costList.length) ? startIdx + state.itemsPerPage : state.costList.length
      return state.costList.slice(startIdx, endIdx)
    },
    // getAddList: (state) => state.addPayments,
  },
  mutations: {
    setList: (state, list) => { state.costList = list },
    setPage: (state, pageNum) => { state.page = pageNum },
    nextPage: (state) => {
      const pageCount = state.costList.length / state.itemsPerPage
      if (state.page > pageCount) {
        state.page = 1
      } else {
        state.page = ++state.page
      }
    },
    prevPage: (state) => {
      const pageCount = Math.ceil(state.costList.length / state.itemsPerPage)
      if (state.page > 1) {
        state.page--
      } else {
        state.page = pageCount
      }
    },
    setLastID: (state, value) => state.lastID = value,
    addCost: (state, payload) => {
      const date = new Date();
      state.costList.push(Object.assign({
        id: ++state.lastID,
        date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
      }, payload))
    },
    delete: (state, id) => {
      state.costList = state.costList.filter(function (obj) {
        return obj.id !== id;
      });
    }
    // addPaymentsList: (state, payload) => state.costList.push(payload),
  },
  actions: {
    getList({ commit }) {
      return new Promise((res) => {
        setTimeout(() => {
          commit('setList', [
            { id: 1, category: 'food', date: '08.11.2022', value: 235 },
            { id: 2, category: 'transport', date: '09.11.2022', value: 15 },
            { id: 3, category: 'food', date: '10.11.2022', value: 156 },
            { id: 4, category: 'enterteinment', date: '12.11.2022', value: 5160 },
            { id: 5, category: 'transport', date: '12.11.2022', value: 844653 },
            { id: 6, category: 'food', date: '13.11.2022', value: 846 },
            { id: 7, category: 'transport', date: '14.11.2022', value: 1565 },
            { id: 8, category: 'enterteinment', date: '14.11.2022', value: 2516 },
            { id: 9, category: 'transport', date: '15.11.2022', value: 314 },
            { id: 10, category: 'food', date: '16.11.2022', value: 156 },
            { id: 11, category: 'enterteinment', date: '16.11.2022', value: 156 },
            { id: 12, category: 'food', date: '18.11.2022', value: 4568 }
          ])
          commit('setLastID', 12)
          res()
        }, 1000)
      })
    }
  },
  modules: {
  }
})
