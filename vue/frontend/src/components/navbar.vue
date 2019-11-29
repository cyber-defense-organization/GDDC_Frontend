<template lang="html">
  <div class="navbar">
    <div class="navGrid">
      <div class="logo">
        <img src="../assets/glogo.png" alt="">
      </div>
      <div class="bar">
        <p>{{ middleText }}</p>
      </div>
      <div class="menu">
        <!-- <p>Menu</p> -->
        <font-awesome-icon class="mButton" icon="bars" v-on:click="menuToggle()"/>
      </div>
    </div>
    <div v-if="dropDown" class='dropDown'>
        <div class="dd1 cardD"><a href="/scoreboard">Scoreboard</a></div>
        <div class="dd2 cardD"><a href="/team">Team</a></div>
        <div class="dd3 cardD"><a href="/shop">Shop</a></div>
        <div class="dd4 cardD"><a href="/">Login</a></div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    middleText: {
      default: '',
      type: String
    }
  },
  name: 'navbar',
  data: function () {
    return {
      dropDown: false
    }
  },
  methods: {
    menuToggle: function () {
      if (this.dropDown) {
        this.dropDown = false
      } else {
        this.dropDown = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.navbar{
  position: fixed;
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  z-index:200;  /* high z index so other content scrolls underneath */
  width: 100%;
  //height: 100%;
  height: 40px;
  font-size: 1em;
  background-color: $oneColor;
  // -webkit-box-shadow: 0px 15px 0px -14px rgba(0,0,0,0.3);
  // -moz-box-shadow: 0px 15px 0px -14px rgba(0,0,0,0.3);
  // box-shadow: 0px 15px 0px -14px rgba(0,0,0,0.3);
  box-shadow: 0px 1px 20px -10px $twoColor;

  //animation: dropDown 1s ;
}

a {
  text-decoration: none;
  color: $oneColor;
}

.dropDown{
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
  '. dd1'
  '. dd2'
  '. dd3'
  '. dd4';
  text-align: center;
  // justify-items: center;
  // align-items: center;
  color: $twoColor;
  //animation: dropDown 3s ;
}

.dd1{grid-area: dd1}
.dd2{grid-area: dd2}
.dd3{grid-area: dd3}
.dd4{grid-area: dd4}

@keyframes dropDown {
    from {height: 40px;}
    to {height: 100%}
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
  text-shadow:.1px .1px 2px $vape4, .1px .1px 2px $vape5;
  color: $oneColor;
}

.logo{
  grid-area: logo;
}
.logo img{
  margin-top: 3px;
  width: 60%;
  height: 50%;
}
.bar{
  grid-area: bar;
}
.dropDown{
  grid-area: dropDown;
}

.mButton:hover{
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: .5em;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>
