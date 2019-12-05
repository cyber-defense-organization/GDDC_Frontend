<template lang="html">
  <div class="teamPanel card">
    <div class="Title">
      <p>{{ title }}</p>
    </div>
    <br>
    <scorebox/>
    <button @click='getTeamInfo()'>Refresh</button>
    <br>
    <!-- <div class='services'>
      <h1> - Services - </h1>
      <div class='servGrid'>
        <div class='icmp1'>ICMP_Linux1</div>
        <div class='icmp1s'>{{ICMP_Linux1s}}</div>
        <div class='icmp1e'>{{ICMP_Linux1e}}</div>
      </div>
      <p>Linux ICMP Box 1 = {{ ICMP_Linux1 }}</p>
      <p>Linux ICMP Box 2 = {{ ICMP_Linux2 }}</p>
      <p>Windows ICMP Box 3 = {{ ICMP_Windows1 }}</p>
      <p>Windows ICMP Box 4 = {{ ICMP_Windows2 }}</p>
      <p>98 ICMP Box 5 = {{ ICMP_98 }}</p>

      <h1> - Debug - </h1>
    </div> -->
    <br>
    <!-- <p v-for='(value, index) in teamInfo' v-bind:key="value"> {{ value }} </p> -->
    <ul class="teamInfo">
      <li v-for='(value, index) in teamInfo' v-bind:key="value">
        {{ index }} ||
        {{ value.status }} ||
        {{ value.timeStamp }} ||
        {{ value.error }}
      </li>
    </ul>
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
      teamName: 't1'
    }
  },
  methods: {
    async getTeamInfo () {
      this.teamInfo = []
      const response = await ti.getTeamInfo(this.teamName)
      this.teamInfo = response.data.out
      // console.log(response.data.prof[0].com[1].msg)
      // console.log(response.data.out)
      // for (var i = 0; i < response.data.out.length; i++) {
      //   this.teamInfo.push(response.data.out[i])
      // }
      // this.teamInfo = this.teamInfo.push(response.data)
      // this.items = response.data.msg
      // console.log(response)
      // this.events = response.data.evnts
      // console.log(response.data.out.AD_Linux1.status)
      // this.ICMP_Linux1s = response.data.out.ICMP_Linux1.status
      // this.ICMP_Linux2s = response.data.out.ICMP_Linux2.status
      // this.ICMP_Windows1s = response.data.out.ICMP_Windows1.status
      // this.ICMP_Windows2s = response.data.out.ICMP_Windows2.status
      // this.ICMP_98s = response.data.out.ICMP_98.status

      // this.ICMP_Linux1e = response.data.out.ICMP_Linux1.error
      // this.ICMP_Linux2e = response.data.out.ICMP_Linux2.error
      // this.ICMP_Windows1e = response.data.out.ICMP_Windows1.error
      // this.ICMP_Windows2e = response.data.out.ICMP_Windows2.error
      // this.ICMP_98e = response.data.out.ICMP_98.error
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.teamInfo{
  text-align: left;
  list-style: none;
}
.teamPanel{
  background-color: $oneColor;
}
.services{
  text-align: left;
}
.servGrid{
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;;
  grid-template-areas:
  "icmp1 icmp1s icmp1e";
}

.icmp1{
  grid-area: icmp1;
}
.icmp1s{
  grid-area: icmp1s;
}
.icmp1w{
  grid-area: icmp1e;
}

</style>
