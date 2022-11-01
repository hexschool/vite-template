<template>
  <div>
    <button type="button" class="btn btn-primary" @click="count++">count is {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
</style>
