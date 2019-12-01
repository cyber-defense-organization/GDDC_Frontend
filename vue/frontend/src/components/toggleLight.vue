<template lang="html">
  <div class="lightO">
  <button v-on:click="show = !show">
  </button>
  <div class="light"></div>
  <br>
  <div class='lightOff'></div>
  </div>
</template>

<script>

export default {
  props: {
    state: {
      default: false,
      type: Boolean
    }
  },
  name: 'light',
  data: function () {
    return {
      show: true
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.light{
  height: 5px;
  width: 5px;
  background-color: green;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgb(9, 112, 26);
}

.lightOff{
  height: 5px;
  width: 5px;
  background-color: rgb(146, 20, 20);
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgb(255, 0, 0);
}

</style>
