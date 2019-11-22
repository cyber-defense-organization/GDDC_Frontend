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
  //transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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
  background: url('./assets/backgroundVape.jpg') no-repeat center center fixed;
  background-size: cover;
  //animation: fade 10s ;

  //background-color: $twoColor;

  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  // background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  // background-blend-mode: multiply,multiply;

  //color: #2c3e50;
}

@keyframes fade {
    from {opacity: 0.5;}
    to {opacity: 1;}
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
