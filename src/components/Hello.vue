<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<upload @handleSuccess='handleSuccess' action='/vip/m/suyunorder/cancelOrder' multiple>
<!-- <div @click.stop='handleClickDiv'  ref="child">点击上传</div> -->
<button>上传</button>
</upload>

  </div>
</template>

<script>
import Button from '@/components/button'
import Upload from '@/components/upload'
export default {
  name: 'hello',
  components:{
    'button':Button,
    'upload':Upload
  },
  data () {
    return {
      msg: '测试上传'
    }
  },
  methods:{
    handleSuccess(a,b,c){
      console.log('handleSuccess');
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
