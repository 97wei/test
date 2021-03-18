<template>
  <div>
 <router-view></router-view>
  <van-tabbar v-model="active">
  <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/cate" icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item replace to="/car" icon="logistics">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
h3{
    text-align: center;
}
</style>