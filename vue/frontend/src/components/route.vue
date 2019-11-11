<template lang="html">
  <div class="route">
    <div class="ref">
      <router-link :class="{ active: route.path === $router.currentRoute.path }" v-for="route in $router.options.routes" :key="route.path" :to="route.path">
        <ul>
          <li>{{ route.name }}</li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../style/var.scss';
.ref{
  background-color: white;
}

.active {
  background-color: firebrick;
}
</style>
