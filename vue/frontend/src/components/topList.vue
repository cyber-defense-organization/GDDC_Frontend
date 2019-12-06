<template lang="html">
  <div class="topList">
      <ul>
          <li v-for='(value) in teamScoreAll' v-bind:key="value">{{ value.name }} - {{ value.score }}</li>
      </ul>
  </div>
</template>

<script>
import ti from '@/services/teamInfo.js'
export default {
  name: 'topList',
  data: function () {
    return {
      teamScoreAll: []
    }
  },
  mounted () {
    this.getScoreAll()
  },
  methods: {
    async getScoreAll () {
      this.teamScoreAll = []
      const response = await ti.getScoreAll()
      this.teamScoreAll = response.data.out
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
ul{
  list-style: none;
}
li:nth-child(1) {
  font-size: 5em;
}
li:nth-child(2) {
  font-size: 4em;
}
li:nth-child(3) {
  font-size: 3em;
}
li:nth-child(4) {
  font-size: 2em;
}
li:nth-child(5) {
  font-size: 1em;
}
li:nth-child(6) {
  font-size: .8em;
}
li:nth-child(7) {
  font-size: .6em;
}
li:nth-child(8) {
  font-size: .5em;
}
li:nth-child(9) {
  font-size: .3em;
}
li:nth-child(10) {
  font-size: .2em;
}
</style>
