import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: localStorage,
  key: 'vuex-todo'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: [],
    deletedItems: [],
    currentId: 0
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload) },
    updateDeletedItems: (state, payload) => { state.deletedItems.push(payload) },
    updateCurrentId: (state) => { state.currentId += 1 },
    removeItem: (state, payload) => {
      state.todoItems = state.todoItems.filter(item => item.id !== payload)
    },
    removeDeletedItem: (state, payload) => {
      state.deletedItems = state.deletedItems.filter(item => item.id !== payload)
    }
  },
  actions: {
    addTodoItem: function (context, payload) {
      const currentId = context.state.currentId
      const data = {
        ...payload,
        id: currentId + 1,
        isComplete: false
      }
      context.commit('updateTodoItems', data)
      context.commit('updateCurrentId')
    },
    deleteTodoItem: function (context, payload) {
      const currentTodo = context.getters.getTodoById(payload)
      context.commit('updateDeletedItems', currentTodo)
      context.commit('removeItem', payload)
    },
    restoreTodoItem: function (context, payload) {
      const currentTodo = context.state.deletedItems.find(item => item.id === payload)
      context.commit('updateTodoItems', currentTodo)
      context.commit('removeDeletedItem', payload)
    }
  },
  getters: {
    getTodoItems: (state) => state.todoItems,
    getTodoById: (state) => (id) => {
      return state.todoItems.find(item => item.id === id)
    },
    getDeletedItems: (state) => state.deletedItems
  },
  plugins: [vuexLocal.plugin]
})
