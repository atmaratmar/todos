import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';


// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state : {
    todos: []
  },
  mutations : {
      setTodos: (state, todos) => (state.todos = todos),
      addTodo:(state,newTodo) => state.todos.unshift(newTodo)
  },
  getters : {
    allTodos: (state) => {
      return state.todos
    }
  },
  actions : {
      async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    
        commit('setTodos', response.data);
      },
      async addTodo({commit},title){
          const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,
          {title:title,completed:false})
    
          commit('addTodo',response.data)
      }
    }
});