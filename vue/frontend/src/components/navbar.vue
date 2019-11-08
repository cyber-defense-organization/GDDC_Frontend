<template lang="html">
  <div class="navbar">
    <div class="navGrid">
      <div class="logo">
        <img src="../assets/glogo.png" alt="">
      </div>
      <div class="bar">
        <p></p>
      </div>
      <div class="dropDown">
        <!-- <p>Menu</p> -->
        <font-awesome-icon icon="coffee"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
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
.navbar{
  width: 100%;
  height: 40px;
  font-size: 1em;
  background-color: $oneColor;
  -webkit-box-shadow: 0px 15px 0px -14px rgba(0,0,0,0.3);
-moz-box-shadow: 0px 15px 0px -14px rgba(0,0,0,0.3);
box-shadow: 0px 15px 0px -14px rgba(0,0,0,0.3);
}

.navGrid{
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 40px;
  grid-template-areas:
  'logo bar dropDown';
  justify-items: center;
  align-items: center;
  color: $twoColor;
}
.navGrid p{
  // -webkit-box-shadow: 0px 0px 46px 2px rgba(255,255,255,1);
  // -moz-box-shadow: 0px 0px 46px 2px rgba(255,255,255,1);
  // box-shadow: 0px 0px 46px 2px rgba(255,255,255,1);
  //text-shadow:.1px .1px 2px #fff, .1px .1px 2px #ccc;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.navGrid p:hover{
  text-shadow:.1px .1px 2px $r3Color, .1px .1px 2px $r2Color;
  color: $r3Color;
}

.logo{
  grid-area: logo;
}
.logo img{
  width: 60%;
  height: 50%;
}
.bar{
  grid-area: bar;
}
.dropDown{
  grid-area: dropDown;
}
</style>
