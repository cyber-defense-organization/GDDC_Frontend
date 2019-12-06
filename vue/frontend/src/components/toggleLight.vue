<template lang="html">
  <div class="light">
    <div v-if='state' class='lightOn'>
    </div>
    <div v-else class='lightOff'>
    </div>
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
      // show: true
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
.lightOn{
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgb(9, 112, 26);
}

.lightOff{
  height: 10px;
  width: 10px;
  background-color: rgb(146, 20, 20);
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px rgb(255, 0, 0);
}

</style>
