// 引入需要使用的路由依赖模块
import Vue from "vue";
import VueRouter from "vue-router";
//引入外部组件的方法;
import Home from "@/views/Home";
import ChildrenFirst from "@/views/components_by_value/Children_first";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    components:{
      default:Home,
      a:ChildrenFirst,
      
    }
  },
  {
    path: "/Father",
    name: "Father",
    // 使用懒加载优化项目
    component: resolve =>
    require(["@/views/components_by_value/Father"], resolve),
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
];

const router = new VueRouter({
  routes
});

export default router;