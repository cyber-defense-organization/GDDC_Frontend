<template lang="html">
  <div class="teamPanel cardS">
    <div class="Title">
      <p>{{ teamName }}</p>
    </div>
    <br>
    <scorebox/>
    <button @click='getTeamInfo()'>Refresh</button>
    <table class='cardDS'>
      <thead>
        <tr>
          <th>Status</th>
          <th>Service</th>
          <th>Error</th>
          <th>TimeStamp</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(value, index) in teamInfo' v-bind:key='value.status'>
          <td class="" v-if="value.error !== 'na'"><light :state='value.status'/></td>
          <td class="" v-if="value.error !== 'na'">{{ index }}</td>
          <td class="" v-if="value.error !== 'na'">{{ value.error }}</td>
          <td class="" v-if="value.error !== 'na'">{{ value.timeStamp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ti from '@/services/teamInfo.js'
import scorebox from './scorebox.vue'
import light from '../components/toggleLight.vue'
export default {
  components: {
    'scorebox': scorebox,
    'light': light
  },
  name: 'teamPanel',
  data: function () {
    return {
      teamInfo: [],
      teamName: '',
      jwt: ''

    }
  },
  mounted () {
    this.teamName = this.$cookie.get('team')
    this.jwt = this.$cookie.get('JWT')
    this.getTeamInfo()
    console.log('yeeee')
  },
  methods: {
    async getTeamInfo () {
      this.teamInfo = []
      const response = await ti.getTeamInfo(this.teamName, this.jwt)
      this.teamInfo = response.data.out
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
table{
  width: 100%;
}
thead{
  text-align: center;
  height: 40px;
  }
td{
  padding: 1em;
}
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
