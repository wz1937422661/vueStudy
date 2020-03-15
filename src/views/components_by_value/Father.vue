<template>
  <div class="father">
    {{name}}
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: "父组件"
    };
  },
  components: {},
  methods: {},
  created(){
    //回去路由参数
    let url_id=this.$route.params.id;
    console.log(url_id);
  }
};
</script>

<style>
</style>
