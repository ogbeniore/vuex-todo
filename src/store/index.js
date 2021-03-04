import Vue from 'vue'
import Vuex from 'vuex'

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
    ]
  },
  mutations: {
    updateTodoItems: (state, payload) => { state.todoItems.push(payload) }
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
    }
  },
  getters: {
    getTodoItems: (state) => state.todoItems,
    getTodoById: (state) => (id) => {
      return state.todoItems.find(item => item.id === id)
    }
  }
})
