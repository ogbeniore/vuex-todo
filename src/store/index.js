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
    todoItems: [
      {
        title: 'Eat',
        isComplete: false,
        description: 'ssign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties.',
        id: 1
      },
      {
        title: 'Sleep',
        isComplete: false,
        description: 'ssign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties.',
        id: 2
      },
      {
        title: 'Code',
        isComplete: false,
        description: 'ssign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties.',
        id: 3
      }
    ],
    deletedItems: []
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload) },
    updateDeletedItems: (state, payload) => { state.deletedItems.push(payload) }
  },
  actions: {
    addTodoItem: function (context, payload) {
      let currentId = 0
      const idArray = []
      context.state.todoItems.forEach(item => {
        idArray.push(item.id)
      })
      currentId = idArray.length ? Math.max(...idArray) : 0
      const data = {
        ...payload,
        id: currentId + 1,
        isComplete: false
      }
      context.commit('updateTodoItems', data)
    },
    deleteTodoItem: function (context, payload) {
      const currentTodo = context.getters.getTodoById(payload)
      context.commit('updateDeletedItems', currentTodo)
      console.log(currentTodo)
    }
  },
  getters: {
    getTodoItems: (state) => state.todoItems,
    getTodoById: (state) => (id) => {
      return state.todoItems.find(item => item.id === id)
    },
    getDeletedItem: (state) => state.deletedItems
  },
  plugins: [vuexLocal.plugin]
})
