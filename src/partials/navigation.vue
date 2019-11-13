<template>
    <v-navigation-drawer app clipped height="100vh" :mini-variant.sync="this.$store.getters.miniDrawer" dark>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" dense>
          <v-list-item-icon>
            <v-icon dense>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      items: [
        {title: 'Dashboard', icon: 'fas fa-tachometer-alt', to: {name: 'PageHome'}},
        {title: 'Leads', icon: 'fas fa-user', to: {name: 'PageLeads'}},
        {title: 'Telesales', icon: 'fas fa-headphones', to: {name: 'PageTelesales'}},
        {title: 'Quản lý nhóm', icon: 'fas fa-users', to: {name: 'PageGroups'}},
        {title: 'Đơn hàng', icon: 'fas fa-clipboard-list', to: {name: 'PageOrders'}},
        {title: 'Giao vận', icon: 'fas fa-shipping-fast', to: {name: 'PageShipping'}},
        {title: 'Hoàn hàng', icon: 'fas fa-undo', to: {name: 'PageReturn'}},
        {title: 'Báo cáo', icon: 'fas fa-chart-line', to: {name: 'PageReports'}},
        {title: 'Nguồn dữ liệu', icon: 'fas fa-database', to: {name: 'PageDataSource'}},
        {title: 'Cài đặt', icon: 'fas fa-cog', to: {name: 'PageSettings'}}
      ]
    }
  }
}
</script>
