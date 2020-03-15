<template>
  <div class>
    子元素1111
    <div>侧边栏</div>
    <router-link :to="{name:'Children_second'}">路由嵌套</router-link>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {},
  watch: {
    '$route'(to, from) {
      console.log(to);
      console.log('---------');
      console.log(from);
    }
  }
};
</script>

<style>
</style>
