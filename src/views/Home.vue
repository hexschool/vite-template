<template>
  <div class="home">
    <h1>Hello, This is Home Page.</h1>
    <router-link to="/about">關於</router-link>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomePage',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
</style>
