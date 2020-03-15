
<template>
  <div class="home">
    <!-- <router-link :to="url">去父组件</router-link> -->
    <button @click="btn">按钮</button>
    <div>分支提交的测试</div>
    <div>git commit命令的学习</div>
    <span>git diff</span>
  </div>
</template>

<script>
//

export default {
  name: 'Home',
  data(){
    return{
      url:'/Father'
    }
  },
  components: {
  },
  methods:{
    btn(){
      this.$router.push({name:'Father',params:{id:'110'}});
      
    }
  },
  
}
</script>
