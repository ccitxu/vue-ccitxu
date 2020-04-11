<template>
    <div style="font-size:30px;height:100px;overflow:auto">aaaaaa
        {{name}}
        <button @click="aclick()">点击</button>
        <button @click="aclick2()">点击2</button>
        {{a}}<br>
        {{b}}<br>
        {{a1}}<br>
        {{b1}}<br>
        {{a}}<br>
        {{b}}<br>
        {{a1}}<br>
        {{b1}}<br>
    </div>
    
</template>
<script>
import Bus from '../../js/bus'
import {mapState} from 'vuex'
export default {
    data (){
        return{
          name:'Lili',
        }
    },
    created(){
        console.log('aaaa');
    },
    computed:{
        ...mapState({
           a : state=>state.cart.productname,
           b : state=>state.cart.productnumber,
           a1 : state=>state.shopping.productname,
           b1 : state=>state.shopping.productnumber,
        })
    },
    methods:{
        aclick2(){
           this.mixindc()
        //    this.$store.state.sex='3dd';
        //    this.$store.commit('changesex','3dd');
           console.log(this.$store.state.cart.productnumber)
        },
        aclick(){
          this.name=this.name+'1'
          Bus.$emit('getTarget', this.name);
        }
    }
}
</script>