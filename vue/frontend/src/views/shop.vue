<template lang="html">
  <div class="shop">
    <navbar :middleText='this.mid' />
      <div class="shopGrid">
        <div class='card'>
          <h1>Item titme</h1>
          <button @click='buy(item1, 1)'>Buy my Bitch</button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import auth from '@/services/authy.js'
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
      item1: 'YUH BOI'
    }
  },
  mounted () {
    this.teamName = this.$cookie.get('team')
    this.jwt = this.$cookie.get('JWT')
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
