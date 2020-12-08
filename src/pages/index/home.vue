<template>
  <div>
    <!-- 轮播 -->
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item.id"
          ><img :src="$img + item.img" class="imgItems"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 限时抢购 -->
    <div class="seckill">
      <van-grid class="seckillbox">
        <van-grid-item>
          <img src="../../assets/img/seckill.jpeg" alt="" />
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/img/seckill.jpeg" alt="" />
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/img/seckill.jpeg" alt="" />
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/img/seckill.jpeg" alt="" />
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 标签页 -->
    <div>
      <van-tabs type="card">
        <van-tab title="热卖">
          <div v-for="item in hotList" :key="item.id" >
            <van-card
            tag="hot"
            :price="item.price"
            :title="item.goodsname"
            :thumb="$img + item.img"
            :origin-price="item.market_price"
            @click="getDetails(item.id)"
          />
          </div>
        </van-tab>
        <van-tab title="新品">
         <div v-for="item in newList" :key="item.id">
            <van-card
            tag="new"
            :price="item.price"
            :title="item.goodsname"
            :thumb="$img + item.img"
            :origin-price="item.market_price"
            @click="getDetails(item.id)"
          />
          </div>
        </van-tab>
        <van-tab title="秒杀">
          <div v-for="item in allList" :key="item.id">
            <van-card
            tag="flash"
            :price="item.price"
            :title="item.goodsname"
            :thumb="$img + item.img"
            :origin-price="item.market_price"
            @click="getDetails(item.id)"
          />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Swipe, SwipeItem } from "vant";
// 请求banner的数据
import { reqBanner } from "../../utils/request";
// 请求Goods数据
import { reqGoods } from "../../utils/request";
export default {
  props: [],
  components: {},
  data() {
    return {
      bannerList: [],
      hotList: [],
      newList: [],
      allList: [],
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    getDetails(id){
      this.$router.push("/details/"+id)
    }
  },
  mounted() {
    // 请求banner数据
    reqBanner().then((res) => {
      // console.log(res);
      this.bannerList = res.data.list;
    });
    // 请求goods数据
    reqGoods().then((res) => {
      this.hotList = res.data.list[0].content;
      this.newList = res.data.list[1].content;
      this.allList = res.data.list[2].content;
    });
  },
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe {
  height: 2rem;
}
.imgItems {
  width: 100%;
  height: 100%;
}
.seckillbox img {
  width: 100%;
  height: 100%;
}
.van-card__title{
  /* width: 5rem; */
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  font-weight: 500;
}
.van-card__price-currency{
  font-size: 0.2rem;
  color: crimson;
}
.van-card__price-integer{
  font-size: 0.2rem;
  color: crimson;
}
.van-card__origin-price{
  font-size: 0.16rem;
  margin-left: 0.1rem;
}
.van-tabs{
  padding-bottom: 0.5rem;
}
</style>