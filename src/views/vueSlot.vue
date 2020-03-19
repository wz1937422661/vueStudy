<template>
  <div class>
    <div>我是插槽语法</div>
    <!-- 使用slot占位符来接受多余内容  slot也可以定义初始内容如果不传递参数默认渲染初始内容-->
    <!-- <slot></slot> -->
    <!-- 具名插槽  通过给slot 指定name属性来渲染不同内容-->
    <!-- <slot name="header"></slot>
         <slot name="content"></slot>
    <slot name="footer"></slot>-->

    <!-- 作用域插槽 -->

    <slot :user="user">{{user.firstName}}</slot>
  </div>
</template>

<script>
// 关于vue的插槽学习
export default {
    name: "",
    data() {
        return {
            user:{
                firstName:'李四',
                lastName:'李树',
            }
        }
    },
    components: {},
    methods: {

     },
    created(){
        // console.log(this.user);
        
    }
}

// js面向对象

    // let obj={age:10};
    // console.log(obj);
//
    


</script>

<style>
</style>
