<template>
  <div>
      <van-nav-bar
        :title="this.$route.name"
        left-arrow
        />
        <div class="bg">
        <van-image
            round
            width="10rem"
            height="10rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
      </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.bg{
    width: 100%;
    height: 200px;
    background-color: gray;
    text-align: center;
        line-height: 200px;

}
van-image{
    /* display: inline-block; */
}
</style>