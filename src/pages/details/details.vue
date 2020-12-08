<template>
  <div class="details">
    <v-header></v-header>
    <img :src="$img + oneMessage.img" alt="" class="details-header" />
    <!-- 中间部分 -->
    <div>
      <van-card
        :price="oneMessage.price"
        :origin-price="oneMessage.market_price"
        :title="oneMessage.goodsname"
      >
        <template #tags>
          <van-tag plain type="danger" v-if="oneMessage.ishot">热卖</van-tag>
          <van-tag plain type="danger" v-if="oneMessage.isnew">新品</van-tag>
        </template>
        <template #desc>
          <van-icon name="like" class="icon" @click="shoucang" ref="icon" />
        </template>
      </van-card>
    </div>
    <!-- 下面部分 -->
    <div class="det-bt">
      <div class="details-bottom" ref="bottom"></div>
    </div>

    <!-- 底部操作 -->
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          badge="5"
          @click="show = true"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="addToCar"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="buyDetails"
        />
      </van-goods-action>

      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <van-stepper v-model="num" input-width="0.4rem" button-size="0.4rem" />
        <van-button type="info" @click="sure">确认加入购物车</van-button>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqOneMessage } from "../../utils/request";
import { reqCarAdd } from "../../utils/request";
import { Toast } from "vant";
import Vue from "vue";
import { Sku } from "vant";

Vue.use(Sku);
import skuData from "../../utils/data";
export default {
  props: [],
  components: {},
  data() {
    return {
      oneMessage: [],
      show: false,
      num: 1,
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),

    shoucang() {
      if (this.$refs.icon.style.color == "red") {
        this.$refs.icon.style.color = "#ccc";
      } else {
        this.$refs.icon.style.color = "red";
      }
    },

    addToCar() {
      this.show = !this.show;
    },

    sure() {
      let list = JSON.parse(sessionStorage.getItem("userInfo"));
      let form = {
        uid: list.uid,
        goodsid: this.$route.params.id,
        num: this.num,
      };
      reqCarAdd(form).then((res) => {
        Toast.success(res.data.msg);
        this.$router.push('/index/car')
      });

    },
    // // buyDetails
    buyDetails() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
    },
  },
  mounted() {
    let id = this.$route.params.id;
    reqOneMessage(id).then((res) => {
      this.oneMessage = res.data.list[0];
      this.$refs.bottom.innerHTML = this.oneMessage.description;
    });
  },
};
</script>
<style scoped>
.details-header {
  width: 100%;
  height: 2rem;
}
.van-card__title {
  height: 0.24rem;
  line-height: 0.24rem;
  font-size: 0.22rem;
}
.van-tag {
  height: 0.2rem;
  font-size: 0.16rem;
  margin-top: 0.1rem;
}
.van-card__price-currency {
  font-size: 0.18rem;
  color: crimson;
}
.van-card__price-integer {
  font-size: 0.2rem;
  color: crimson;
}
.van-card__origin-price {
  font-size: 0.16rem;
}
.van-icon {
  position: absolute;
  right: 0;
  top: 0;
  margin-left: 0.5rem;
}
.icon {
  font-size: 0.2rem;
  color: #ccc;
}
.det-bt {
  margin-bottom: 0.5rem;
}
.van-stepper{
  height: 1.5rem;
  line-height: 1.5rem;
  margin-left: 1.2rem;
}
.van-button--info{
  margin-left: 1.2rem;
}
</style>