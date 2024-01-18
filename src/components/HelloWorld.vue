<template>
  <div>
    <button type="button" class="btn btn-primary" @click="increment">count is {{ count }}</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import counterStore from '@/stores/counter'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(counterStore, ['increment'])
  },
  computed: {
    ...mapState(counterStore, ['count'])
  }
}
</script>

<style scoped>
</style>
