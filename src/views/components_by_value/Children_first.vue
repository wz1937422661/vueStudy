<template>
  <div class="childrenirst">
    <div>我是子元素</div>
    <span>{{age}}</span>
    <button @click="changeSize">子组件按钮</button>
  </div>
</template>

<script>
// 子组件向父组件传值
import eventBus from "./eventBus";
export default {
  name: "",
  data() {
    return {
      age: "33",
      name:{}
    };
  },
  props: ["title"],
  components: {},
  methods: {
    edit() {
      this.$emit("listenChildren", "我是子组件的数据");

      //
    },
    // 兄弟组件传值
    changeSize() {
      eventBus.$emit("add", this.age,'年龄');
      console.log(this.name);
    }
  }
};
</script>

<style>
</style>
