
<template>
  <div class="home">
    <button @click="btn">组件传值</button>
    <br />
    <button @click="lifeBtn">生命周期</button>
    <div>插槽的使用</div>
    <vueSlot>
      <!-- 匿名插槽 只提供一个接口 -->
      <!-- <div>我是使用插槽传递的数据</div> -->
      <!-- 具名插槽 通过name属性提供不同的接口 -->
      <!-- 在向具名插槽提供内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称： -->
        
      <!-- <template v-slot:header>
         <div>
            我是头部
         </div>
       </template>
        <template v-slot:content>
         <div>
            我是内容
         </div>
       </template>
        <template v-slot:footer>
         <div>
            我是内容区域
         </div>
      </template>-->

      <!-- 插槽语法如何访问子组件里的内容 -->
      <template v-slot:default="sloProps">{{sloProps.user.lastName}}</template>

      <!-- 也可以使用解构赋值来传入具体的参数 -->
      <template v-slot:default="{user}">{{user.lastName}}</template>
      <!-- 也可以自定义后备内容 -->

      <!-- 作用域插槽 -->
    </vueSlot>
    <router-link to="vuexUse">vuex的使用</router-link>
      

  </div>
</template>

<script>
//引入插槽学习页面
import vueSlot from "./vueSlot";

export default {
  name: "Home",
  data() {
    return {
      url: "/Father"
    };
  },
  components: {
    vueSlot
  },
  methods: {
    // 组件传值
    btn() {
      this.$router.push({ name: "Father", params: { id: "110" } });
    },
    // vue生命周期
    lifeBtn() {
      this.$router.push("/vueLIfeCycle");
    }
  }
};
</script>
