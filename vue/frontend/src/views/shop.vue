<template lang="html">
  <div class="shop">
    <navbar :middleText='this.mid' />
      <h1 class='cardS'> Shop Balance: {{ shopScore }}</h1>
      <div class="shopGrid">
        <div class='card'>
          <h1>Item titme</h1>
          <button @click='buy(item1, 1)'>Buy Item</button>
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
      jwt: '',
      shopScore: '',
      item1: 'LIAM BOIIIIII'
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
      const response = await auth.transaction(this.teamName, this.jwt, item, price)
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.shop{
  margin-top: 40px;
}
</style>
