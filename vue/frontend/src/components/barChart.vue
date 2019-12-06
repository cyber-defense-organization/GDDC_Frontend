<template>
  <div class="example">
    <apexcharts
      width="100%"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
    <!-- {{ teamScoreAll }} -->
    {{ teamSocre1 }}
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import ti from '@/services/teamInfo.js'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts
  },
  data: function () {
    return {
      teamScoreAll: [],
      teamSocre1: 0,
      teamSocre2: 0,
      teamSocre3: 0,
      teamSocre4: 0,
      teamSocre5: 0,
      teamSocre6: 0,
      teamSocre7: 0,
      teamSocre8: 0,
      teamSocre9: 0,
      teamSocre10: 0,
      dataOut: [],
      chartOptions: {
        chart: {
          id: 'basic-bar',
          animations: {
            speed: 200
          }
        },
        theme: {
          palette: 'palette10'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
        xaxis: {
          categories: ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 'Team9', 'Team10']
        }
      },
      series: [
        {
          name: 'Team Score',
          data: this.getData()
        }
      ]
    }
  },
  mounted () {
    this.getScoreAll()
  },
  methods: {
    async getScoreAll () {
      this.teamScoreAll = []
      const response = await ti.getScoreAll()
      this.teamScoreAll = response.data.out[0]
      this.teamSocre1 = response.data.out[0].score
      this.teamSocre2 = response.data.out[1].score
      this.teamSocre3 = response.data.out[2].score
      this.teamSocre4 = response.data.out[3].score
      this.teamSocre5 = response.data.out[4].score
      this.teamSocre6 = response.data.out[5].score
      this.teamSocre7 = response.data.out[6].score
      this.teamSocre8 = response.data.out[7].score
      this.teamSocre9 = response.data.out[8].score
      this.teamSocre10 = response.data.out[9].score
    },
    getData () {
      var dataSet = []
      console.log(dataSet)
      console.log(this.teamScore1)
      dataSet.push(this.teamSocre1)
      dataSet.push(2)
      console.log(dataSet)
      return dataSet
    }
  }
}
</script>
