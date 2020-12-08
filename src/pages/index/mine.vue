<template>
  <div>
    <div class="mine-top">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1830946543,2731454930&fm=11&gp=0.jpg"
        alt=""
        v-if="list.length == 0"
      />
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1282413950,187088880&fm=26&gp=0.jpg"
        alt=""
        v-else
      />
      <span class="nickname">用户名：{{ list.nickname }}</span>
    </div>
    <div class="shoucang">
      <van-cell title="我的收藏" icon="star-o">
      </van-cell>
    </div>
    <div class="mine-main">
      <van-cell title="我的优惠券" icon="coupon-o" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>

    <div class="mine-main">
      <van-cell title="我的小伙伴" icon="friends-o" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>


    <div class="mine-main">
      <van-cell title="我的钱包" icon="paid" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>

    <div class="mine-main">
      <van-cell title="我的地址" icon="location-o" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
    </div>

    <div class="mine-main">
      <van-cell title="我的二维码" icon="scan" >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="search-icon" />
        </template>
      </van-cell>
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
      list: [],
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {
    let list = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(list);
    this.list = list;
  },
};
</script>
<style scoped>
.mine-top {
  width: 100%;
  height: 3rem;
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
  position: relative;
}
.mine-top img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #fff;
}
.nickname {
  display: block;
  position: absolute;
  bottom: 0.4rem;
  left: 50%;
  transform: translate(-50%);
  font-weight: 600;
}
.shoucang{
  height: 0.5rem;
  /* line-height: 0.5rem; */
  font-size: 0.26rem;
}
.van-cell{
  line-height: 0.3rem;
}
.van-icon-star-o{
  font-size: 0.26rem;
  /* padding-right: 0.1rem; */
  color: red;
}
.van-cell__title span{
  font-size: 0.16rem;
}
.van-icon{
  padding-right: 0.2rem;
}
</style>