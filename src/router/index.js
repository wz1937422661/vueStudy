// 引入需要使用的路由依赖模块
import Vue from "vue";
import VueRouter from "vue-router";
//引入外部组件的方法;
const Home=()=>import("@/views/Home");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component:Home
  },
  {
    path: "/Father",
    name: "Father",
    // 使用懒加载优化项目

    // function fn(){}
    component: resolve =>require(["@/views/components_by_value/Father"], resolve),
    children: [
      {
        path: "Children_second",
        name: "Children_second",
        component: resolve =>
        require(["@/views/components_by_value/Children_second"], resolve),
      }
    ]
  },
  {
    path: "/Children_first",
    name: "Children_first",
    component: resolve =>
      require(["@/views/components_by_value/Children_first"], resolve)
  },

  {
    path:'/Children_second',
    name:'Children_second',
    component:resolve=>require(['@/views/components_by_value/Children_second'],resolve),
  },
  {
    path:'/vueLIfeCycle',
    name:'vueLIfeCycle',
    component:resolve=>require(['@/views/vueLifeCycle'],resolve),
  },
  {
    path:'/vueSlot',
    name:'vueSlot',
    component:resolve=>require(['@/views/vueSlot'],resolve),
  },
  {
    path:'/vuexUse',
    name:'vuexUse',
    component:resolve=>require(['@/views/vuexUse'],resolve),
  },
  {
    path:'/objectStudy',
    name:'objectStudy',
    component:resolve=>require(['@/views/nativejs/objectStudy'],resolve),
  },


];

const router = new VueRouter({
  routes
});

export default router;