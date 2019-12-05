<template lang="html">
  <div class="index">
    <div class='hgrid'>
      <div class='cardS m'>
        <h1>Welcome To</h1>
        <img @click="sbpush()" src="../assets/glogo.png">
        <p>If you already have your team credentials login here</p>
      </div>
      <div class="card l">
        <input type="text" name="" value="" v-bind='username' placeholder="Team Name">
        <input type="password" name="" value="" v-bind='password' placeholder="Team Password">
        <button @click='login'>Login</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import navbar from '../components/navbar.vue'
import auth from '@/services/authy.js'
export default {
  components: {
    // navbar
  },
  name: 'index',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sbpush () {
      this.$router.push('scoreboard')
    },
    async login () {
      const response = await auth.login({
        username: this.username,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/../style/var.scss';
body{
  background-color: $oneColor;
}

h1 {
  font-size: 2em;
}

.m{
  grid-area: m;
  text-align: center;
}

.l{
  grid-area: l;

}

.l input{
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: .5em;
}

.m img{
  width: 75%;
}

.hgrid{
  //margin-top: 40px;
  padding: 5em;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1em;
  grid-template-rows: 3fr 1fr;
  grid-template-areas:
    ". m ."
    ". l .";
}
</style>
