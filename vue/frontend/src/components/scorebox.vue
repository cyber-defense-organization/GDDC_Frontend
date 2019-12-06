<template lang="html">
  <div class="scorebox">
    <div class="sc1">
      <h3>{{ score }}</h3>
      <p>Current Score</p>
    </div>
    <div class="sc3">
      <h3>{{ shopScore }}</h3>
      <p>Balance</p>
    </div>
  </div>
</template>

<script>
import ti from '@/services/teamInfo.js'
export default {
  name: 'scorebox',
  data: function () {
    return {
      teamName: '',
      score: '',
      shopScore: ''
    }
  },
  methods: {
  },
  async mounted () {
    this.teamName = this.$cookie.get('team')
    const response = await ti.getScores(this.teamName)
    this.score = response.data.out.score
    console.log('score-----' + response.data.out.score)
    this.shopScore = response.data.out.shopScore
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.scorebox{
  background-color: $oneColor;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;;
  grid-template-areas:
  "sc1 sc2 sc3";
}
.sc1{
  grid-area: sc1;
}
.sc2{
  grid-area: sc2;
}
.sc3{
  grid-area: sc3;
}
</style>
