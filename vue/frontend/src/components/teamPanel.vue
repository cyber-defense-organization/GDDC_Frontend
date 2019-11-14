<template lang="html">
  <div class="teamPanel card">
    <div class="Title">
      <p>{{ title }}</p>
    </div>
    <br>
    <scorebox/>
  </div>
</template>

<script>
import scorebox from './scorebox.vue'
export default {
  components: {
    'scorebox': scorebox
  },
  name: 'teamPanel',
  data: function () {
    return {
      title: 'Team Name or Team(num)'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.teamPanel{
  background-color: $oneColor;
}
</style>
