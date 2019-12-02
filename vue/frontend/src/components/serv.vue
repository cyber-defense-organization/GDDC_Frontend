<template lang="html">
  <div class="vote">
  <input type="range" min="0" max="100" step="1" v-model="value">
  <p>{{value}}</p>
      <div class='v1'><div v-bind:style="styleObj" class='leftpoll'></div></div>
      <div class='v2'><div v-bind:style="{height: this.lHeight + 'px',backgroundColor: this.color}" class='rightpoll'></div></div>
      <div class='b1'><div class='leftButton'><button>Hello</button></div></div>
      <div class='b2'><div class='rightButton'></div></div>
  </div>
  
</div>
</template>

<script>
import updateProf from '@/services/profUp.js'

export default {
  name: 'temp',
  data: function () {
    return {
      uDate: null,
      sty: 'background-color: red;',
      lHeight: 0,
      value: 50,
      color: 'blue',
      nameIn: '',
      ageIn: '',
      bcIn: '',
      imgIn: '',
      items: [],
      pos:'',
      card:'card',
      styleObj: {
        height: this.lHeight + 'px',
        backgroundColor: this.color
      }
    }
  },
  methods: {
    clock () {
  		this.uDate = setInterval(() => {
        //Count Her
        //this.getItems();

  		}, 1000)
  	},
    async getItems () {
      this.items = [];
      const response = await updateProf.fetchProfiles()
      //console.log(response.data.prof[0].com[1].msg)
      console.log(response.data.prof);
      for (var i = 0; i < response.data.prof.length; i++) {
        this.items.push(response.data.prof[i])
      }
      //this.items = response.data.msg
      //console.log(response)
      //this.events = response.data.evnts
    },
    async addAdmin () {
      await updateProf.addAdmin({
        name: this.nameIn,
        img: this.imgIn,
        age: this.ageIn,
        bc: this.bcIn
      })
      this.nameIn = '';
      this.imgIn = '';
      this.ageIn = '';
      this.bcIn = '';
    },
  },
  beforeDestroy() {
     clearInterval(this.uDate)
  },
  created() {
     this.clock();
  }
}


</script>

<style lang="css" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400);
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

/*
light FCF9EA
dark blue 293A49
 blue 364C64
light blue A2D8D4

*/
html{
  /*background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 60%);*/
  background-color: white;
  height: 100%;
}

body {
  height:100%;
  padding-top:60px;
  margin:0 auto;
  background-color: white;
  font-family: Raleway,sans-serif;
  /*font-family: 'Open Sans', sans-serif;*/
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:hover{
  color:white;
}

.leftpoll{
  height: 300px;
  /* background-color: green; */
}
/* .rightpoll{
  height: 500px;
  
} */

.v1{
  grid-area: v1;
  
}
.v2{
  grid-area: v2;
  
}
.b1{
  grid-area: b1;
  background-color: lightgreen;
}
.b2{
  grid-area: b2;
  background-color: yellow;
}

.vote{
  background-color: #white;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  grid-gap: .5em;
  /* grid-template-rows: auto; */
  grid-template-areas:
    ". v1 . v2 ."
    ". b1 . b2 .";
}


#navbar{
  position:fixed;
  top:0;
  left:0;
  right:0;
  height: 60px;
background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
  color: #FCF9EA;
  -webkit-box-shadow: 0px 4px 15px -7px rgba(0,0,0,1);
  -moz-box-shadow: 0px 4px 15px -7px rgba(0,0,0,1);
  box-shadow: 0px 4px 15px -7px rgba(0,0,0,1);
}
.navSel{
  height: 50px;
  padding-right:  1em;
  background-color: #f09819;
  -webkit-box-shadow: 0px 4px 15px -7px rgba(0,0,0,1);
  -moz-box-shadow: 0px 4px 15px -7px rgba(0,0,0,1);
  box-shadow: 0px 4px 15px -7px rgba(0,0,0,1);
}

.left {
  float:left;
  padding:0em;
  margin:0em;
  text-align:center;
}

.left li {
  display:inline-block;
  padding-left:1em;
  margin: .5em auto;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
}

.right {
  float:right;
  padding:0em;
  margin:0em;
  text-align:center;
}

.right li {
  display:inline-block;
  padding-right:1em;
  padding-bottom: 1em;
  margin: .5em auto;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
}

.dropbtn {
    display: none;
    background-color: #f09819;
    color: white;
    padding: 16px;
    font-size: 16px;
    height: 60px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: #f09840;
}

.rightbtn {
    background-color: #ff5858;
    opacity: .75;
    color: white;
    padding: 16px;
    font-size: 16px;
    height: 60px;
    border: none;
    cursor: pointer;
}

.rightbtn:hover, .rightbtn:focus {
    background-color: #ff5840;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {background-color: #ddd}

.show {display:block;}
/*end Drop*/


.footer{
  height:60px;
}
.botCot{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 1em;
}

.main{
  grid-area: m;
  grid-gap: 1em;
  padding: 1em;
  background-color: white;
}


.sidebar{
  grid-area: s;
  padding: 1em;

}

.statc {
  grid-area: sc;
  padding: 1em;
}

.imgInner {
  width: 100px;
  height: 100px;

}

/*Product Grid selection*/
.f1{
  grid-area: f1;
}
.f2{
  grid-area: f2;
}
.f3{
  grid-area: f3;
}
.f4{
  grid-area: f4;
}
.f5{
  grid-area: f5;
}
.p1{
  grid-area: p1;
}
.p2{
  grid-area: p2;
}
.p3{
  grid-area: p3;
}
.p4{
  grid-area: p4;
}
.p5{
  grid-area: p5;
}
.p6{
  grid-area: p6;
}
.p7{
  grid-area: p7;
}
.p8{
  grid-area: p8;
}
.p9{
  grid-area: p9;
}
.s1{
  grid-area: s1;
}
.s2{
  grid-area: s2;
}
.s3{
  grid-area: s3;
}
.s4{
  grid-area: s4;
}
.y1 {
  grid-area: y1;
}
.y2 {
  grid-area: y2;
  padding-left: 10px;
}
.y3 {
  grid-area: y3;
  padding-left: 10px;
}
.y4 {
  grid-area: y4;
  padding-left: 10px;
}

.intGrid{
  background-color: #white;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 33px 33px 33px;
  /* grid-gap: .5em; */
  /* grid-template-rows: auto; */
  grid-template-areas:
    "y1 y2 y2 y2"
    "y1 y3 y3 y3"
    "y1 y4 y4 y4";
}
.tnest{
  background-color: #white;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "f1 f2 f3 f4 f5";
}
.grid {
  background-color: #white;
  padding: 1em;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "m m s"
    "m m .";

}
.grid2 {
  background-color: #white;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "s s s"
    ". m .";

}
.mainNest{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "p1 p2 p3"
    "p4 p5 p6"
    "p7 p8 p9";
}
.statc {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "s1 s2 s3 s4";
}

#minNest1{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "ip1"
    "ip2"
    "ip3"
    "ip4"
    "ip5"
    "ip6";
}

#minNest2{
  display: none;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "ip1 ip2"
    "ip3 ip4"
    "ip5 ip6";
}

#minNest3{
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-rows: auto;
  grid-template-areas:
    "ip1 ip2 ip3"
    "ip4 ip5 ip6";
}

.card {
    /*background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 60%);*/
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
}
.bcard {
    /*background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 60%);*/
    background-color: #3a3a3a;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
}

.cc{
  padding: 1em;
}


.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.formc{
  padding: 1em;
}

.data-table{
  margin: 1em auto;
}


.data-heading{
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color:white;
}


@media (max-width: 1000px) {
  .mainNest{
    grid-template-areas:
      "p3 p2 p1"
      "p5 p4 p6"
      "p7 p9 p8";
  }

}
@media (max-width: 900px) {
  .mainNest{
    grid-template-areas:
      "p1 p1 p2"
      "p1 p1 p3"
      "p4 p5 p5"
      "p8 p6 p9"
      "p7 p7 p7";
  }

}

@media (max-width: 800px) {
  .statc{
    grid-template-columns: 1fr;
    grid-template-areas:
      "s1"
      "s2"
      "s3"
      "s4";
  }
}


@media (max-width: 600px) {
  .left li {
    display: none;
  }
  .grid{
    grid-template-columns: 1fr;
    grid-template-areas:
      "s"
      "m";
  }
  .dropbtn {
      display: inline;
    }
}

</style>
