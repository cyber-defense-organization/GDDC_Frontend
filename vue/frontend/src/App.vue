<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '/style/var.scss';
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
html, body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100%;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //margin-bottom: 60px;
  //background-color: $twoColor;
  background-image: url('./assets/backgroundVape.jpg');
  background-size: cover;
  //color: #2c3e50;
}

// #nav {
//   padding: 30px;
//
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
