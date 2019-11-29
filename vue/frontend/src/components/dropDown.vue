<template lang="html">
  <div class="dropDown">
    <div class="menuGrid">
      <ul id="v-for-object" class="demo">
        <li :class="[ 'm' + index ]" v-for="(item, index) in listItem" :key="index">
           {{ item }}
         </li>
         <li :class="[ 'l' + index ]" v-for="(item, index) in listItem" :key="index">
           {{ item }}
          </li>
        <!-- <li v-for="value in listItem">
          {{ value }}  'obj-' + obj.id  'active'+index: index === 0
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dropDown',
  data: function () {
    return {
      listItem: [
        'Stats',
        'Teams',
        'Test'
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
// body{
//   background-color: $threeColor;
// }
.menuGrid{
  background-color: $vape1;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas:
  'l0 m0'
  'l1 m1'
  'l2 m2';
}
.m0{
  grid-area: m0;
}
.m1{
  grid-area: m1;
}
.m2{
  grid-area: m2;
}
.l0{
  grid-area: l0;
}
.l1{
  grid-area: l1;
}
.l2{
  grid-area: l2;
}
</style>
