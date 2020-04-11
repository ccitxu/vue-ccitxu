<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="aflag=true">AAA</button>
    <button @click="aflag=false">BBB</button>
   <keep-alive>
   <xa v-if="aflag"></xa>
   <xb ref='xb' v-if="!aflag"></xb>
   </keep-alive>
   
    <button @click="test">mianclick</button>
  </div>
</template>

<script>
import xa from './components/a'
import xb from './components/b'
export default {
  name: 'HelloWorld',
  components:{
    xa,xb
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      aflag:true
    }
  },
  methods:{
    test(){
      console.log('ff')
      this.$refs.xb.mes();
      console.log(this.$refs.xb.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
