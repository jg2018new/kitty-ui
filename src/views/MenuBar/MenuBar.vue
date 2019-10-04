<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :class="$store.state.collapse?'menu-bar-collapse-width':'menu-bar-width'">
      <img :src="this.logo"/>
      <div>{{$store.state.collapse?'':sysName}}</div>
    </div>
    <!-- 导航菜单 -->


    <el-menu default-active="1-1" :class="$store.state.collapse?'menu-bar-collapse-width':'menu-bar-width'"
             @open="handleopen"
             @close="handleclose" @select="handleselect" :collapse="$store.state.collapse">

      <MenuTree v-for="item in $store.state.menuTree" :key="item.menuId" :menu="item"></MenuTree>

    </el-menu>
  </div>
</template>

<script>
  import MenuTree from "@/components/MenuTree"

  export default {
    data() {
      return {
        sysName: "",
        logo: "",
      };
    },
    components: {
      MenuTree
    },
    methods: {
      handleopen() {
        console.log('handleopen');
      },
      handleclose() {
        console.log('handleclose');
      },
      handleselect(a, b) {
        console.log('handleselect');
      },

      /**
       * 添加动态(菜单)路由
       * @param {*} menuList 菜单列表
       * @param {*} routes 递归创建的动态(菜单)路由
       */

      findMenuTree() {

        // this.$api.findMenuTree()
        //     .then(res => {
        //         this.$store.commit('setMenuTree', res.data)
        //       //添加动态路由
        //       let routes=this.addDynamicMenuRoutes(res.data)
        //       for(let i=0;i<routes.length;i++){
        //         this.$router.options.routes[0].children.push(routes[i])
        //       }
        //       this.$router.addRoutes(this.$router.options.routes);
        //     })
        //     .catch(function (res) {
        //       alert(res);
        //     });
      }
    },
    mounted() {
      this.sysName = "I like Kitty";
      this.logo = require("@/assets/logo.png");
      //this.findMenuTree();
    }
  };
</script>

<style scoped lang="scss">
  .menu-bar-container {
    .el-menu {
      position: absolute;
      top: 60px;
      bottom: 0px;
      text-align: left;
    }
    .logo {
      position: absolute;
      top: 0px;
      height: 60px;
      line-height: 60px;
      background: #4b5f6e;
      img {
        width: 40px;
        height: 40px;
        border-radius: 0px;
        margin: 10px 10px 10px 10px;
        float: left;
      }
      div {
        font-size: 22px;
        color: white;
        text-align: left;
      }
    }
    .menu-bar-width {
      width: 200px;
    }
    .menu-bar-collapse-width {
      width: 65px;
    }
  }
</style>