import { ref } from 'vue'
import { defineStore } from 'pinia'

// Example setup store (Composition API style).
// Add one file per domain in src/stores, e.g. auth.js, loans.js.
export const useAppStore = defineStore('app', () => {
  const drawer = ref(true)

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  return { drawer, toggleDrawer }
})
