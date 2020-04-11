<template>
    <div>{{name}}
        <div class="title">
            <div>123</div>
            <div class="step">
              <span>123</span>
              <div style="width:40px"><van-stepper v-model="value" integer /></div>
            </div>
        </div>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    bbb<br>
    </div>
</template>
<style  scoped>
.title{
    display: flex;
    width: 300px;
    justify-content: space-between;
}
.title .step{display: flex;}
</style>
<script>
import Bus from '../../js/bus'
export default {
    data(){
        return{
         name:'bbb'
        }
    },
    created(){
       console.log('bbbb');
        Bus.$on('getTarget', target => {  
            this.name=target;
        }); 
    },
    methods:{
        mes(){
            console.log('mes');
            console.log(this.$store.state)
        }
    }
}
</script>