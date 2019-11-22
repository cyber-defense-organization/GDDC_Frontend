<template lang="html">
  <div class="home">
    <navbar/>
    <div class='hgrid'>
      <div class='card'>content</div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import navbar from '../components/navbar.vue'

export default {
  components: {
    navbar
  },
  name: 'home',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
body{
  background-color: $oneColor;
}
.hgrid{
  margin-top: 40px;
  padding: 1em;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 2em;
  grid-template-rows: auto;
  grid-template-areas:
    "m m s"
    "m m .";
}

</style>
