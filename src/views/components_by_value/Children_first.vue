<template>
  <div class>
    <div>我是子元素</div>
    <span>{{age}}</span>
    <button @click="edit">子组件按钮</button>
  </div>
</template>

<script>

// 子组件向父组件传值

// 

export default {

  name: "",
  data() {
    return {
      age:'33'
    };
  },
  props:['title'],
  components: {},
  methods: {
    edit(){
      this.$emit('listenChildren','我是子组件的数据');
    }
  },
 
};
</script>

<style>
</style>
