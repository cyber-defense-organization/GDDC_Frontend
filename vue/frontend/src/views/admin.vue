<template lang="html">
  <div class="admin">
      <navbar :middleText='this.middleInfo'/>
    <div class='agrid'>
      <div class='cardS m'>
        <h1>Admin Panel</h1>
        <p>Clock Speed :{{ slider }}</p>
        <input class='slider' v-model="slider" type="range" min="1" max="100" value="50">
        <div class='teamCardGrid'>
            <div class="cardD t1">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
                <div class='card'>Hello</div>
                <light/>
            </div>
            <div class="cardD t2">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t3">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t4">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t5">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t6">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t7">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t8">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t9">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
            <div class="cardD t10">
                <p>Team Name : </p>
                <p>Current Score : </p>
                <p> : </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ti from '@/services/teamInfo.js'
import navbar from '../components/navbar.vue'
import light from '../components/toggleLight.vue'

export default {
  components: {
    navbar,
    light
  },
  name: 'admin',
  data: function () {
    return {
      middleInfo: 'Admin Panel GTFO if your not suppose to be here',
      slider: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
h1 {
  font-size: 2em;
}

.m{
  grid-area: m;
  text-align: center;
}
.slider{
  width: 100%;
}

.t1{
    grid-area: t1;
}
.t2{
    grid-area: t2;
}
.t3{
    grid-area: t3;
}
.t4{
    grid-area: t4;
}
.t5{
    grid-area: t5;
}
.t6{
    grid-area: t6;
}
.t7{
    grid-area: t7;
}
.t8{
    grid-area: t8;
}
.t9{
    grid-area: t9;
}
.t10{
    grid-area: t10;
}

.agrid{
  margin-top: 40px;
  padding: .5em;
  display: grid;
  grid-template-columns: Auto;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    " m ";
}

.teamCardGrid{
  padding: .5em;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 1em;
  grid-template-areas:
    "t1 t2 t3 t4"
    "t5 t6 t7 t8"
    "t9 t10 . .";
}
</style>
