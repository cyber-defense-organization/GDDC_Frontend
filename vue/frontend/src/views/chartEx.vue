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
        <bLine/>
        <button class="Search__button" v-on:click="requestData()">Find</button>
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
import axios from 'axios'
import navbar from '../components/navbar.vue'
import LineChart from '../components/LineChart.js'
import bLine from '../components/bLine.vue'

export default {
  components: {
    LineChart,
    bLine,
    navbar
  },
  data () {
    return {
      package: null,
      packageName: '',
      period: 'last-month',
      loaded: false,
      downloads: [],
      labels: [],
      showError: false,
      errorMessage: 'Please enter a package name',
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
    this.datacollection.forEach(function (obj) {
      console.log(obj)
      // obj.datasets += ({
      //   label: 'Yuh3',
      //   data: [this.getRandomInt(), this.getRandomInt()]
      // },)
    })
  },
  methods: {
    requestData () {
      axios.get(`https://api.npmjs.org/downloads/range/${this.period}/${this.package}`)
        .then(response => {
          console.log(response)
          this.downloads = response.data.downloads.map(download => download.downloads)
          this.labels = response.data.downloads.map(download => download.day)
          this.packageName = response.data.package
          this.loaded = true
        })
        .catch(err => {
          this.errorMessage = err.response.data.error
          this.showError = true
        })
    },
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
  margin-top: 40px;
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
