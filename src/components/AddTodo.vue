<template>
    <div>
        <div>
          <h3>Limited to show only 10 todos at atime</h3>
            <h3>Add Todo</h3>
            <div class="add">
              <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo" />
                <input type="submit" value="Submit">
              </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(event) {
      event.preventDefault();
      this.addTodo(this.title);

      this.title = '';
    }
  }
}
</script>

<style scoped>

</style>