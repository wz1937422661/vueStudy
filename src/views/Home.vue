
<template>
  <div class="home">
    <button @click="btn">组件传值</button> <br>
    <button @click="lifeBtn">生命周期</button>
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
    // 组件传值
    btn(){
      this.$router.push({name:'Father',params:{id:'110'}});
    },
    // vue生命周期
    lifeBtn(){
      this.$router.push('/vueLIfeCycle');
    }
  },
  
}
</script>
