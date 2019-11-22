<template lang="html">
  <div class="team">
    <navbar :middleText='this.teamName' />
    <div class="teamGrid">
      <div class="main">
        <teamPanel/>
        <liveTestGraph/>
      </div>
      <div class="sidebar">
        <sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import sidebar from '../components/sidebar.vue'
import teamPanel from '../components/teamPanel.vue'
import c2 from '../components/c2.vue'
// import LineChart from '../components/LineChart.js'
export default {
  components: {
    'teamPanel': teamPanel,
    'navbar': navbar,
    'sidebar': sidebar,
    'liveTestGraph': c2
  },
  name: 'team',
  data: function () {
    return {
      teamName: 'Team Name or Num'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.teamGrid {
  margin-top: 40px;
  padding: 1em;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 2em;
  grid-template-rows: auto;
  grid-template-areas:
    "m m s"
    "m m .";
}
.main{
  grid-area: m;
  grid-gap: 1em;
  padding: 1em;
  background-color: white;
}
.sidebar{
  grid-area: s;
  padding: 1em;

}
</style>
