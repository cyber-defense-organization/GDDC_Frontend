<template lang="html">
  <div class="shop">
    <navbar :middleText='this.mid' />
      <h1 class='cardS'> Shop Balance: {{ shopScore }}</h1>
      <div class='cardD' v-if='this.showBuy'>{{ shopResp }}</div>
      <div class="shopGrid">
        <div class='card si1'>
          <h1>Snack : 100</h1>
          <button @click='buy(item1, 100)'>Buy Item</button>
        </div>
        <div class='card si2'>
          <h1>Red Team Joke : 100</h1>
          <button @click='buy(item2, 100)'>Buy Item</button>
        </div>
        <div class='card si3'>
          <h1>Song Request : 300</h1>
          <button @click='buy(item3, 300)'>Buy Item</button>
        </div>
        <div class='card si4'>
          <h1>Inject Extension 15m: 500</h1>
          <button @click='buy(item4, 500)'>Buy Item</button>
        </div>
        <div class='card si5'>
          <h1>Inject Extension 15m: 600</h1>
          <button @click='buy(item5, 600)'>Buy Item</button>
        </div>
        <div class='card si6'>
          <h1>White Team Advise : 1000</h1>
          <button @click='buy(item6, 1000)'>Buy Item</button>
        </div>
        <div class='card si7'>
          <h1>Red Team Advise : 1500</h1>
          <button @click='buy(item6, 1500)'>Buy Item</button>
        </div>
        <div class='card si8'>
          <h1>Take Away Another Teams Chairs : 2000</h1>
          <button @click='buy(item8, 2000)'>Buy Item</button>
        </div>
        <div class='card si9'>
          <h1>Quote Law Enforcement Seizer : 2000</h1>
          <button @click='buy(item9, 2000)'>Buy Item</button>
        </div>
        <div class='card si10'>
          <h1>Inject Extension 1hr: 2000</h1>
          <button @click='buy(item10, 2000)'>Buy Item</button>
        </div>
        <div class='card si11'>
          <h1>Revert One Machine : 2500</h1>
          <button @click='buy(item11, 2500)'>Buy Item</button>
        </div>
        <div class='card si12'>
          <h1>Revert Router : 2750</h1>
          <button @click='buy(item12, 2750)'>Buy Item</button>
        </div>
        <div class='divider'></div>
        <div class="cardS ep">
          <h1>Ways to Earn Money:</h1>
          <p>Give Red Team a Compliment - 100 Points</p>
          <p>Lockpicking Challenges - 200 Points</p>
          </div>
      </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import auth from '@/services/authy.js'
import ti from '@/services/teamInfo.js'
export default {
  components: {
    'navbar': navbar
  },
  name: 'shop',
  data: function () {
    return {
      mid: 'Shop',
      teamName: '',
      shopResp: '',
      showBuy: false,
      jwt: '',
      shopScore: '',
      item1: 'Snack',
      item2: 'Buy Red Team Joke',
      item3: 'Song Request',
      item4: 'Inject extension 15min',
      item5: 'Inject extension 30min',
      item6: 'White Team Advise',
      item7: 'Red Team Advise',
      item8: 'Take Away a Team Chairs',
      item9: 'Law enformcemnt Sezier Machine',
      item10: 'Inject Extension 1hr',
      item11: 'Revert 1 Machine',
      item12: 'Revert Router'
    }
  },
  async mounted () {
    this.teamName = this.$cookie.get('team')
    this.jwt = this.$cookie.get('JWT')
    const response = await ti.getScores(this.teamName)
    this.shopScore = response.data.out.shopScore
  },
  methods: {
    async buy (item, price) {
      // console.log(item + ' : ' + price)
      const response = await auth.transaction(this.teamName, this.jwt, item, price)
      this.shopResp = response.data.message
      this.showBuy = true
      const responseS = await ti.getScores(this.teamName)
      this.shopScore = responseS.data.out.shopScore
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.shop{
  margin-top: 40px;
}
.divider{
  grid-area: d;
  height: 3px;
  background-color: $oneColor;
  width: 100%;
}
.shopGrid{
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  grid-template-rows: auto;
  grid-template-areas:
    "si1 si2 si3 si4"
    "si5 si6 si7 si8"
    "si9 si10 si11 si12"
    "d d d d"
    "ep ep ep ep";
}

.ep{
  grid-area: ep
}
.si1{
  grid-area: si1;
}
.si2{
  grid-area: si2;
}
.si3{
  grid-area: si3;
}
.si4{
  grid-area: si4;
}
.si5{
  grid-area: si5;
}
.si6{
  grid-area: si6;
}
.si7{
  grid-area: si7;
}
.si8{
  grid-area: si8;
}
.si9{
  grid-area: si9;
}
.si10{
  grid-area: si10;
}
.si11{
  grid-area: si11;
}
.si12{
  grid-area: si12;
}
</style>
