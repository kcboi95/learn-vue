<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import AppLayout from './layouts/AppLayout'
import BlankLayout from './layouts/BlankLayout'

export default {
  name: 'App',
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'app': AppLayout,
    'blank': BlankLayout
  },
  watch: {
    '$route' (to, from) {
      document.title = to.meta.title || 'CRM'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
</style>
