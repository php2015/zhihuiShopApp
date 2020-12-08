<template>
  <div>
    <v-header></v-header>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <!-- 底部的二级路由跳转图标 -->
    <div>
      <van-tabbar v-model="active" active-color="orangered" inactive-color="#000" fixed route>
        <van-tabbar-item icon="home-o" to="/index/home">首页</van-tabbar-item>
        <van-tabbar-item icon="qr" to="/index/cate">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/index/car">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/index/mine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {},
};
</script>
<style scoped>
</style>