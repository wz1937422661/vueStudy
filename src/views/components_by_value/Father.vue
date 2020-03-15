<template>
  <div class="father">
    {{name}}
    <childrenLirst @listenChildren="childrenData" :title="title"></childrenLirst>
    <button @click="btn">父组件按钮</button>
  </div>
</template>

<script>
// 引入你要使用的组件
import childrenLirst from "./Children_first";
// 学习vue的组件传值，
// 1、父子组件传值方法
export default {
  name: "",
  data() {
    return {
      name: "父组件",
      title:'我是父组件传的值'
    };
  },
  //必须要在父组件里进行注册才可以使用
  components: {
    childrenLirst
  },
  methods: {
    btn(){
     console.log(this.title);
    },
    childrenData(res){
      console.log(res);
    }
  },
  created() {}
};
</script>

<style>
</style>
