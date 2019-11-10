<template lang="html">
  <div class="c2">
    <!-- <input
     class="Search__input"
     @keyup.enter="requestData"
     placeholder="npm package name"
     type="search" name="search"
     v-model='package'
     > -->
     <navbar/>

    <div class="error-message" v-if="showError">
      {{ errorMessage }}
    </div>

    <h1 class="title" v-if="loaded">{{ packageName }}</h1>
    <div class="graph">
      <div class="card">
        <line-chart v-if="loaded" :chart-data="downloads" :chart-labels="labels"></line-chart>
        <button class="Search__button" v-on:click="requestData()">Find</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LineChart from './bLine.vue'
import navbar from '../components/navbar.vue'

export default {
  components: {
    LineChart,
    navbar
  },
  name: 'c2',
  data: function () {
    return {
      package: null,
      packageName: '',
      period: 'last-month',
      loaded: false,
      downloads: [],
      labels: [],
      showError: false,
      errorMessage: 'Please enter a package name'
    }
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
body{
  background-color: $threeColor;
}

// .graph{
//   max-width: 300px;
// }
.card{
  background-color: $oneColor;
  height: 400px;
  width: 95%;
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
