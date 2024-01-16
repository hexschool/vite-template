<template>
  <div class="home">
    <h1>Hello, This is Home Page.</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
</style>
