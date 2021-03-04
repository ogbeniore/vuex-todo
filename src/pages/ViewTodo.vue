<template>
  <b-container>
    <h3>Todo Title: {{ currentTodo.title }}</h3>
    <hr>
    <p>{{ currentTodo.description }}</p>
    <small>
      {{ currentTodo.isComplete ? 'Done' : 'In progress'}}
    </small>
    <div class="d-flex">
      <b-button variant="primary" class="mr-1">Edit</b-button>
      <b-button variant="danger" class="ml-1">Delete</b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'ViewTodo',
  computed: {
    currentTodo () {
      const { params } = this.$route
      return this.$store.getters.getTodoById(Number(params.id))
    }
  }
}
</script>
