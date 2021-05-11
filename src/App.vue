<template>
  <div id="app">
    <AddTodo />
    <FilterTodos/>
    <TodosList />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodosList from './components/TodosList.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'App',
  components: {
    AddTodo,
    TodosList,
    FilterTodos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
