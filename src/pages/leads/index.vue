<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <v-card-title class="headline">Leads</v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field label="Search" v-model="table.search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-data-table show-select :headers="table.headers" :items="table.desserts" :search="table.search"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>

<script>
import Navigation from '../../partials/navigation'

export default {
  name: 'PageLeads',
  components: {
    Navigation
  },
  data () {
    return {
      table: {
        search: '',
        headers: [
          {
            text: 'Tên',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Địa chỉ', value: 'address' },
          { text: 'Email', value: 'email' },
          { text: 'Điện thoại', value: 'phone' },
          { text: 'Total', value: 'total' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            address: 'Hanoi',
            email: 'admin@exaple.com',
            phone: 24,
            total: 4.0
          },
          {
            name: 'Ice cream sandwich',
            address: 'Hanoi',
            email: 'admin@exaple.com',
            phone: 37,
            protein: 4.3
          },
          {
            name: 'Eclair',
            address: 'Ho Chi Minh',
            email: 'admin@exaple.com',
            phone: 23,
            protein: 6.0
          },
          {
            name: 'Cupcake',
            address: 'Da Nang',
            email: 'admin@exaple.com',
            phone: 67,
            protein: 4.3
          },
          {
            name: 'Gingerbread',
            address: 'Hanoi',
            email: 'admin@exaple.com',
            phone: 49,
            protein: 3.9
          },
          {
            name: 'Jelly bean',
            address: 'Hanoi',
            email: 'admin@exaple.com',
            phone: 94,
            protein: 0.0
          },
          {
            name: 'Lollipop',
            address: 'Hai Phong',
            email: 'admin@exaple.com',
            phone: 98,
            protein: 0
          },
          {
            name: 'Honeycomb',
            address: 'Bac Giang',
            email: 'admin@exaple.com',
            phone: 87,
            protein: 6.5
          },
          {
            name: 'Donut',
            address: 'Hanoi',
            email: 'admin@exaple.com',
            phone: 51,
            protein: 4.9
          },
          {
            name: 'KitKat',
            address: 'Hanoi',
            email: 'admin@exaple.com',
            phone: 65,
            protein: 7
          }
        ]
      } // end table
    }
  }
}
</script>
