<template>
  <div class>
    <div>我是state里获取的数据{{this.$store.state.count}}</div>
    <div>我是getters里获取的数据{{this.$store.getters.gettersNew}}</div>

    <!--如何修改数据的值  -->
    <button @click="addFun">+</button>
    <button @click="reduction">-</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {
    addFun() {
    // 这里是直接调用mutations里的数据 
    // this.$store.commit("add");
    this.$store.dispatch('addFun');

    },
    reduction() {
    let num=10;
    //   this.$store.commit("reduction");
    this.$store.dispatch('reduction',num);

    }
  }
};
</script>

<style>
</style>
