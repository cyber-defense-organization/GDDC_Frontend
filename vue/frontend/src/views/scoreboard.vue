<template lang="html">
  <div class="scoreboard">
    <navbar :middleText='this.mid' />
    <div class="scoreGrid">
      <div class="main cardS">
        <h1>LeaderBoard</h1>
        <h2>Team - Points</h2>
        <barChart/>
      </div>
      <topList class="s cardS"/>
      <!-- <div class="sidebar card">
          <sidebar/>
      </div> -->
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import topList from '../components/topList.vue'
import barChart from '../components/barChart.vue'

export default {
  components: {
    'navbar': navbar,
    'topList': topList,
    'barChart': barChart
  },
  name: 'scoreboard',
  data: function () {
    return {
      mid: 'ScoreBoard'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
h1{
  font-size: 2em;
}
.scoreGrid {
  margin-top: 40px;
  padding: 1em;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 2em;
  grid-template-rows: auto;
  grid-template-areas:
    "m m s";
}
.main{
  grid-area: m;
  grid-gap: 1em;
  padding: 1em;
}
.s{
  grid-area: s;
}
</style>
