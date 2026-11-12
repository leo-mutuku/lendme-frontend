<template>
  <v-main>
    <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
      <h1 class="text-h2 mb-2">
        404
      </h1>
      <p class="text-body-1 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <v-btn
        color="primary"
        :to="{ name: 'home' }"
      >
        Go home
      </v-btn>
    </v-container>
  </v-main>
</template>
