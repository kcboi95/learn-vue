<template>
  <v-app-bar app clipped-left dense elevation="1" dark>
<!--    <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
    <v-btn depressed text rounded left min-width="36" @click="toggleDrawer">
      <v-icon dense>fa-bars</v-icon>
    </v-btn>
    <v-app-bar-title>Administrator</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBars',
  methods: {
    toggleDrawer () {
      this.$store.dispatch('TOGGLE_DRAWER')
    }
  }
}
</script>
