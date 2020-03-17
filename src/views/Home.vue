
<template>
  <div class="home">
    <button @click="btn">按钮</button>
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
