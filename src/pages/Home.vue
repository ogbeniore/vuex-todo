<template>
  <div class="home">
    <b-container>
      <h1>Welcome to the Todo Vuex application</h1>
      <p>Here a few of the tasks you have to do:</p>
      <b-list-group>
        <b-list-group-item v-for="item in todo" :key="item.id" >
          <div class="d-flex item">
            <div>
            {{ item.title }}
            </div>
            <div class="actions">
              <b-button
                variant="primary"
                class="mr-1"
                @click="$router.push(`view-todo/${item.id}`)">
                View
              </b-button>
              <b-button variant="primary-outline" class="mr-1">Edit</b-button>
              <b-button variant="danger" class="ml-1">Delete</b-button>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      todo: 'getTodoItems'
    })
  }
}
</script>

<style scoped>
.item {
  justify-content: space-between;
  align-items:  center;
}
</style>
