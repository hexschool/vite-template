import { defineStore } from 'pinia';

export default defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count += 1;
    },
  },
});
