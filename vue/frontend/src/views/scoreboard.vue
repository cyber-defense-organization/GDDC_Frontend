<template lang="html">
  <div class="scoreboard">
    <navbar :middleText='this.mid' />
    <div class="scoreGrid">
      <div class="main cardS">
        <p>Team 1 :{}</p>
      </div>
      <div class="sidebar card">
          <sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import sidebar from '../components/sidebar.vue'

export default {
  components: {
    'navbar': navbar,
    'sidebar': sidebar
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
</style>
