// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.mixin({
  methods:{
    mixindc(){
      this.name='222'
      console.log('mixin');
    }
  }
})
console.log(store);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
