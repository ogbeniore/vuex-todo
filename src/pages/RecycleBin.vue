<template>
  <div class="home">
    <b-container>
      <p>Here a few of the tasks you have deleted:</p>
      <b-list-group>
        <b-list-group-item v-for="item in todo" :key="item.id" >
          <div class="d-flex item">
            <div>
            {{ item.title }}
            </div>
            <div class="actions">
              <b-button variant="primary" class="mr-1" @click="restoreTodoItem(item.id)">Restore</b-button>
              <b-button variant="danger" class="ml-1" @click="removeDeletedItem(item.id)">Delete</b-button>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      todo: 'getDeletedItems'
    })
  },
  methods: {
    ...mapActions(['restoreTodoItem']),
    ...mapMutations(['removeDeletedItem'])
  }
}
</script>

<style scoped>
.item {
  justify-content: space-between;
  align-items:  center;
}
</style>
