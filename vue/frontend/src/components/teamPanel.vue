<template lang="html">
  <div class="teamPanel card">
    <div class="Title">
      <p>{{ title }}</p>
    </div>
    <br>
    <scorebox/>
    <button @click='getTeamInfo()'>Refresh</button>
    <br>
    <div class='services'>
      <h1> - Services - </h1>
      <p>Linux ICMP Box 1 = {{ ICMP_linux1 }}</p>

      <h1> - Debug - </h1>
    </div>
    <br>
    <p v-for='value in teamInfo' v-bind:key="value.id"> {{ value }} </p>
  </div>
</template>

<script>
import ti from '@/services/teamInfo.js'
import scorebox from './scorebox.vue'
export default {
  components: {
    'scorebox': scorebox
  },
  name: 'teamPanel',
  data: function () {
    return {
      title: 'Team Name or Team(num)',
      teamInfo: [],
      teamName: 't1',
      ICMP_linux1: ''
    }
  },
  methods: {
    async getTeamInfo () {
      this.teamInfo = []
      const response = await ti.getTeamInfo(this.teamName)
      // console.log(response.data.prof[0].com[1].msg)
      // console.log(response.data.out)
      this.teamInfo = response.data
      // for (var i = 0; i < response.data.out.length; i++) {
      //   this.teamInfo.push(response.data.out[i])
      // }
      // this.teamInfo = this.teamInfo.push(response.data)
      // this.items = response.data.msg
      // console.log(response)
      // this.events = response.data.evnts
      this.ICMP_linux1 = response.data.out.status
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.teamPanel{
  background-color: $oneColor;
}
.services{
  text-align: left;
}
</style>
