<template>
  <div>
    <div>
      <h1>Todos</h1>
      <div class="todosList">
        <div
          v-for="todo in allTodos"
          class="todo"
          v-bind:key="todo.key" >
          {{ todo.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "TodosList",
  methods:{
      ...mapActions(["fetchTodos"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>

</style>