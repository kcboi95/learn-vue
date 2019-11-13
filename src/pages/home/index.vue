<template>
  <v-container fluid>
    <!-- Stat blocks -->
    <v-row class="mb-4">
      <v-col cols="3">
        <v-card outlined>
          <v-card-title>Budget</v-card-title>
          <div class="d-flex flex-no-wrap">
            <v-card-text class="headline">$24,000</v-card-text>
            <v-avatar class="ma-3">
              <v-icon>fas fa-wallet</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card outlined>
          <v-card-title>Đơn hàng hôm nay</v-card-title>
          <div class="d-flex flex-no-wrap">
            <v-card-text class="headline">5000+</v-card-text>
            <v-avatar class="ma-3">
              <v-icon>fas fa-shipping-fast</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card outlined>
          <v-card-title>Leads mới</v-card-title>
          <div class="d-flex flex-no-wrap">
            <v-card-text class="headline">128</v-card-text>
            <v-avatar class="ma-3">
              <v-icon>fas fa-users</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card outlined>
          <v-card-title>Doanh thu</v-card-title>
          <div class="d-flex flex-no-wrap">
            <v-card-text class="headline">$5000</v-card-text>
            <v-avatar class="ma-3">
              <v-icon>fas fa-hand-holding-usd</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- Chart -->
    <v-row>
      <v-col cols="4">
        <v-card outlined>
          <charts :options="chartOpts"></charts>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card outlined>
          <charts :options="chartOpts2"></charts>
        </v-card>
      </v-col>
    </v-row>
    <!-- Table -->
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title>
            Desserts <v-spacer></v-spacer>
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
  name: 'PageHome',
  components: {
    Navigation
  },
  data () {
    return {
      chartOpts: {
        title: {
          text: 'Tỉ lệ loại mặt hàng tiêu thụ'
        },
        series: [
          {
            type: 'pie',
            data: [
              {y: 39, name: 'Thực phẩm chức năng'},
              {y: 31, name: 'Dầu gội'},
              {y: 25, name: 'Thuốc'},
              {y: 5, name: 'Khác'}
            ]
          }
        ]
      }, // end chartOpts
      chartOpts2: {
        title: {
          text: 'Biểu đồ doanh thu tháng'
        },
        series: [
          {
            data: [
              {y: 39, name: 'Thực phẩm chức năng'},
              {y: 31, name: 'Dầu gội'},
              {y: 25, name: 'Thuốc'},
              {y: 5, name: 'Khác'}
            ]
          }
        ]
      }, // end chartOpts2
      table: {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      } // end table
    }
  }
}
</script>
