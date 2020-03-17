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
      name: {}
    };
  },
  props: ["title"],
  components: {},
  created() {
    //接受父组件传值  个人理解父组件传值的原理时通过原型链的方式进行传值，
    // 在引入子组件的地方相当于父组件借用继承了该子组件实例，但是该子组件的的原型指向还是之前的组件本身，通过原型的查找
    // 在进行传值的时候，因为本身没有，则会向上层查找(也就是原型链),通过这样来给子组件传值
    // console.log(this.title);
  },
  methods: {
    // 子组件给父组件传值  在使用子组件的地方绑定该事件
    edit() {
      this.$emit("listenChildren", "我是子组件的数据");

      //
    },
    // 兄弟组件传值  使用相同的实例，使用自定义事件
    changeSize() {
      eventBus.$emit("add", this.age, "年龄");
      // console.log(this.name);
    }
  }
};
</script>

<style>
</style>
