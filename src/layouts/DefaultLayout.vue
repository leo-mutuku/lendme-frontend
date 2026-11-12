<script setup>
import { useTheme } from 'vuetify'

import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const theme = useTheme()

const navItems = [
  { title: 'Home', icon: 'mdi-home', to: { name: 'home' } },
  { title: 'About', icon: 'mdi-information', to: { name: 'about' } },
]

function toggleTheme() {
  theme.toggle()
}
</script>

<template>
  <v-navigation-drawer v-model="appStore.drawer">
    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
        exact
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="appStore.toggleDrawer" />
    <v-app-bar-title>LendMe</v-app-bar-title>
    <template #append>
      <v-btn
        icon="mdi-theme-light-dark"
        aria-label="Toggle theme"
        @click="toggleTheme"
      />
    </template>
  </v-app-bar>

  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>
