import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

// 创建vuex实例
const store = new Vuex.Store({
  // state是vuex的数据源，我们需要保存的数据保存在这儿
  // 可以在页面里获取我们定义的数据
  state: {
    count: 1
  },
  // 相当于vue里的computed计算属性//用于监听state里的数据的值发生的变化，返回新值
  // 如果数据要结合别的数据进行计算，使用该属性
  getters:{
    gettersNew(state){
      return state.count+1
    }
  },
  // 如果我们需要对数据进行修改怎么办呢
  mutations:{
    add(state){
      state.count=state.count+1;
    },
    reduction(state,n){
      state.count=state.count-n;
    }
  },
  // 注册actions,类似于vue里的methods
  // 个人理解为什么要使用action，因为数据的修改，不应该和方法混合在一起，
  // 应该各自独立处理各自的事情//让我们能够更好的追踪数据变化
  // 可以在action里进行异步请求
  actions:{
    addFun(context,){  
    context.commit('add');

    },
    reduction(content,n){
      content.commit('reduction',n);
    }
  },
  // 选项的设计初衷就是因为如果依赖的数据很多，不利于管理，
  // 解决这种麻烦的使用可以将store分割为模块
  // 每个模块里都有state,mutations,action,对应的选项
  module:{

  }


});

export default store; //导出vuex
