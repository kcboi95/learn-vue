<template>
  <v-app>
    <Navigation></Navigation>
    <AppBars></AppBars>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '../partials/navigation'
import AppBars from '../partials/appbars'

export default {
  name: 'AppLayout',
  components: {
    Navigation,
    AppBars
  }
}
</script>
