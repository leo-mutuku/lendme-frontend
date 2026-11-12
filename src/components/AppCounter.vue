<script setup>
import { ref } from 'vue'

const props = defineProps({
  start: { type: Number, default: 0 },
})

const count = ref(props.start)
</script>

<template>
  <v-card
    title="Example component"
    subtitle="<script setup> + Vuetify"
  >
    <v-card-text>Count: {{ count }}</v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        variant="tonal"
        prepend-icon="mdi-plus"
        @click="count++"
      >
        Increment
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
