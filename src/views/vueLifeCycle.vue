<template>
  <div class>
    <div>vue生命周期</div>
    <!-- 测试生命周期数据变化 -->
    <div ref="dom">{{num}}</div>
  </div>
  <!-- 测试生命周期数据 -->
</template>

<script>
// vue生命周期的学习
export default {
  name: "",
  data() {
    return {
      num: 100
    };
  },
  components: {},
  methods: {
    test() {
      console.log("方法测试");
    }
  },

  //vue生命周期一公有11个，常用的一下八个
  beforeCreate() {
    //这个生命周期是在数据观测，和事件、water事件配置之前被调用
    //在此时的生命周期内,vue的实例正在初始化,还没有初始化完成相关的属性和配置。
    //在此时对数据还不能进行获取, 方法也不能进行调用/否则会报错
    console.log("实例正在初始化");
    //   console.log(this.num);
    //   this.test();
  },

  created() {
    //这个生命周期是在实例创建之后被立即调用,
    //在这里实例已完成如下配置 数据的获取、属性方法的调用，watch事件的回调,
    //不过在这里挂载还未开始 $el属性还不可以使用
    //当前el属性还未挂载我们还不能对html做相关操作,因为没有指定dom元素,js和dom还没有对接上
    //此时如果你要通过ref获取dom元素，将会失败。
    console.log("实例创建完成");
    // console.log(this.num);
    this.test();
    //当前el属性还未挂载  此时如果你要通过ref获取dom元素，将会失败。
    // let dom = this.$refs.dom;
    // console.log(dom);
    // this.num=20;
  },
  beforeMount() {
    //在挂el载之前被调用,相关的render函数首次被调用
    console.log("实例、挂载前");
  },
  mounted() {
    //这个生命周期会在实例被挂载之后调用,这时el被创建的vm$el替换
    //在实例挂载之后可以使用
    // 此时可以获取dom元素   不过他不会保证子组件也被挂载,可以使用this.$nextTicK方法
    // 这个方法会在所有dom渲染完成后调用，可以在这里获取子组件元素
    // 如果在这里有些子组件还未挂载完成,不能执行获取操作
    console.log("在实例挂载后被调用");
  },
  beforeUpdate() {
    //在数据更新时被调用
    // 发生在虚拟dom打补丁之前(也就时dom更新前)。
    // 这个理适合在更新之前访问现有dom,比如移除事件监听器。

    console.log("更新");
  },

  updated() {
    //这个生命周期会在数据更改导致虚拟dom重新渲染和打补丁之后调用。
    console.log("更新后");
  },
  beforeDestroy() {
    // 实例销毁之前调用，在这里实例仍然可以使用
    // 在这里如果有本地存储，可以对不需要使用的数据进行销毁，防止内存泄漏
    console.log("销毁前");
  },
  destroyed() {
    //实例被销毁之后调用，该生命周期被调用后，对应的vue实例所有指令都被解绑，所有
    // 事件监听器被移除，所有的实例也都被销毁。
    console.log("销毁后");
  }
};
</script>

<style>
</style>
