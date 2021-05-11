import axios from 'axios';

const state = {
  todos: []
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo:(state,newTodo) => state.todos.unshift(newTodo)
};
const getters = {
  allTodos: (state) => {
    return state.todos
  }
};
const actions = {
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

export default {
    state,
    getters,
    actions,
    mutations
};

