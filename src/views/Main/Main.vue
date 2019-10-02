<template>
  <div class="container" :class="$store.state.collapse?'menu-bar-collapse-width':'menu-bar-width'">

    <BreadCrumb></BreadCrumb>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import BreadCrumb from "@/components/BreadCrumb"
  export default {
    data() {
      return {};
    },
    components:{
      BreadCrumb
    },
    methods: {},
    mounted() {

    }
  };
</script>

<style scoped lang="scss">
  .container {
    padding: 0 5px 5px;
    position: absolute;
    top: 60px;
    left: 1px;
    right: 1px;
    bottom: 0px;
    // background: rgba(56, 5, 114, 0.5);

  }

  .menu-bar-width {
    left: 200px;
  }
  .menu-bar-collapse-width {
    left: 65px;
  }
</style>