<template>
  <div class="test">
    <div><img src="./../assets/images/logo.png"/></div>
    <h1>{{msg}}</h1>
    <div class="cc-test">
      <div>代理配置: http://restapi.amap.com/v3/</div>
      <div>测试接口: {{testUrl}}</div>
      <div id="testframe">
        <table style="font-size:100px;" class="dim">
          <tr v-for="(item,index) in [1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]" :key='index'>
            <td>{{index}}</td>
            <td>{{item}}</td>
          </tr>
        </table>
        <button class="cs-btn" @click="sendGet">测试2</button>
        <button class="cs-btn" style="color:red">跳转</button>
        <button class="cs-btn" @click="print()">打印</button>
      </div>
      <div>返回结果: {{result}}</div>
      <iframe id="ciframe" :src="location+'demo'"></iframe>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        location:window.location,
        msg: 'Welcome to Your Vue.js App',
        ss: 3433,
        testUrl: '/v3/assistant/coordinate/convert?key=ff0bcf778c5eeb93bd8b068b6e3f7781&locations=116.481499,39.990475|116.481499,39.990375',
        result: '',
      }
    },
    methods: {
      print() {
           let sctent=document.getElementById('testframe');
           let iframe=document.getElementById('ciframe');
           let doc=iframe.contentWindow.document;
          //  doc.write('<style lang="stylus" ref="stylesheet/stylus" scoped>@import "./test-styl.styl";</style>');
          //  doc.write('<LINK rel="stylesheet" type="text/css" href="./test.css">');
           let cont=doc.getElementById('dd');
           cont.innerHTML='<div  class="a">'+sctent.innerHTML+'</div>';
           doc.close();
           console.log(doc);
         iframe.contentWindow.print();
      },
      /**
       * 测试  
       */
      sendGet() {
        this.log('开始请求')
        this.info('开始请求')
        this.warn('开始请求')
        this.error('开始请求')
        this.result = ''
        this.http.get(this.testUrl)
          .then((resp) => {
            this.result = resp
          })
          .catch(() => {
            this.error('出错了')
          })
      },
      startDemo() {
        this.http.post('/api/xlf/newAccountReceipt/updataAccountStatus').then((res) => {
          console.log(res)
        })
      },
    },  
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
// @import './test-styl.styl';
  .test {
    padding: 20px;
    color: #2c3e50;
  }
  div {
    padding: 5px 0;
  }

  h1 {
    font-size: 24px;
  }

  .cc-test {
    width: 860px;
    margin: 0 auto;
    text-align: left;
  }

  .cs-btn {
    padding: 3px 10px;
    border: 1px solid #ccc;
    background-color: red;
    margin-right: 30px;
    border-radius: 6px;
  }


</style>
<style lang="stylus" ref="stylesheet/stylus">
  // @import './test-styl.styl';
  @import './test.css';

  .test {
    text-align: center;
  }
</style>
