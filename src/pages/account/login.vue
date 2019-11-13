<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card outlined flat>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Đăng nhập hệ thống CRM</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field id="email" label="Địa chỉ email" name="login" prepend-icon="fa-user" type="text"/>
              <v-text-field id="password" label="Mật khẩu" name="password" prepend-icon="fa-lock" type="password"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn depressed color="primary" @click="login">Đăng nhập</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageAccountLogin',
  methods: {
    login () {
      this.$store.dispatch('DO_LOGIN')
      this.$router.push('/')
      this.$store.dispatch('SET_LAYOUT', 'app')
    }
  }
}
</script>
