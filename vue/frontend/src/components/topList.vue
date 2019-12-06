<template lang="html">
  <div class="topList">
      <ol>
          <li>1</li>
          <li>2</li>
      </ol>
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
