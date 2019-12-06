<template lang="html">
  <div class="topList">
      <ul>
          <li v-for='(value) in teamScoreAll' v-bind:key="value"><h1>{{ value.name }}</h1> {{ value.score }}</li>
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
</style>
