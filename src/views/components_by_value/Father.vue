<template>
  <div class="father">
    {{name}}
    <childrenFirst @listenChildren="childrenData" :title="title"></childrenFirst>
    <childrenSecond></childrenSecond>
  </div>
</template>

<script>
// 引入你要使用的组件
import childrenFirst from "./Children_first";
import childrenSecond from "./Children_second";
// 学习vue的组件传值，
// 1、父子组件传值方法
// 局部组件注册
export default {
  name: "",
  data() {
    return {
      name: "父组件",
      title: "我是父组件传的值",
    };
  },
  //必须要在父组件里进行注册才可以使用
  components: {
    childrenFirst,
    childrenSecond,
  },
  methods: {
    btn() {
      // console.log(this.title);
    },
    childrenData(res) {
      console.log(res);
    }
  },
  created() {}
};
</script>

<style>
</style>
