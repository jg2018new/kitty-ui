import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse:false , // 导航栏收缩状态
    themeColor: "#14889A",  // 主题颜色
    oldThemeColor: "#14889A",   // 上一次主题颜色
    menuRouteLoaded:false  ,  // 菜单和路由是否已经加载
    menuTree:[]
  },
  mutations: {
    collapse(state) {  // 改变收缩状态
      state.collapse = !state.collapse;
    },
    setThemeColor(state, themeColor) {  // 改变主题颜色
      state.oldThemeColor = state.themeColor
      state.themeColor = themeColor
    },
    setMenuTree(state,menuTree){
      console.log(menuTree)
      state.menuTree = menuTree;
    },
    menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
      state.menuRouteLoaded = menuRouteLoaded;
    }
  }
})
