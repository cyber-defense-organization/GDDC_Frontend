<template lang="html">
  <div class="navbar2">

    <!-- {{{ body }}} -->
        <svgImg/>
        <!-- <img src="../assets/BinBGtile.svg" alt=""> -->
        <footer class="footer">
      <div class="container">
        <p class="text-muted">Webserver Created by: Jake Anderson | All rights reserved | 2018<input type="range" min="1" max="100" value="50" class="fader" id="fader" onchange="setVale()"></p>
      </div>
    </footer>
  </div>
</template>

<script>
import svgImg from 'svg.vue'
export default {
  name: 'navbar2',
  components: {
    'svgImg': svgImg
  },
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

.navbar2 {
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  //background-color: #F7F7F7;
}
.fader {
  float: right;
  width: 10% !important;
}
#logo{
  float:left;
  width:auto;
  margin: 5px;
  height:40px;

}

#loglogo {
  height:60px;
  width:auto;
}

.login {
  margin: 20%;
}

.card {
  background: #fff;
  padding: 1em;

}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  height:auto;
  text-align:center;
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>
