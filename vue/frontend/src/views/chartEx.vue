<template>
  <div class="chart">
    <navbar></navbar>
    <div class="chartGrid">
      <div class="card card1">
        <div class="g1">
          <line-chart :chart-data="datacollection"></line-chart>
          <button @click="fillData()">Randomize</button>
        </div>
      </div>
      <div class="card card1">
        <div class="g2">
          <line-chart :chart-data="datacollection"></line-chart>
          <button @click="fillData()">Randomize</button>
        </div>
      </div>
      <div class="card card1">
        <div class="g3">
          <line-chart :chart-data="datacollection"></line-chart>
          <button @click="fillData()">Randomize</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import LineChart from '../components/LineChart.js'

export default {
  components: {
    LineChart,
    navbar
  },
  data () {
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [0, 100, 'red'],
        datasets: [
          {
            label: 'Yuh',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Yer',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style lang="scss">
@import '/../style/var.scss';
.chartGrid{
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 40px;
  grid-template-areas:
  'g1 g2 g3';
}
.g1{
  grid-area: g1;
}
.g2{
  grid-area: g2;
}
.g3{
  grid-area: g3;
}
.graph{
  max-width: 300px;
}
.card{
  background-color: $oneColor;
  height: 400px;
  width: 320px;
  padding: 1em;
  margin: 1em;
  //box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow: 0 1px 3px rgba(255,255,255,0.12), 0 1px 2px rgba(255,255,255,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card:hover {
  //box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
   box-shadow: 0 14px 28px rgba(255,255,255,0.25), 0 10px 10px rgba(255,255,255,0.22);
}
</style>
