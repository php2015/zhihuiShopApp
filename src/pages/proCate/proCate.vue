<template>
<div>
  <v-header></v-header>
  <div v-for="item in list" :key="item.id" @click="getDetails(item.id)">
      <van-card
        :price="item.price"
        :origin-price="item.market_price"
        :title="item.goodsname"
        :thumb="$img + item.img"
      >
        <template #tags>
          <van-tag plain type="danger" v-if="item.ishot">热卖</van-tag>
          <van-tag plain type="danger" v-if="item.isnew">新品</van-tag>
        </template>
      </van-card>
    </div>
</div>
</template>
<script>
 import {mapGetters,mapActions} from 'vuex';
 import {reqCateList} from "../../utils/request"
export default {
props: [],
components: {},
data() {
return {
  list:[]
};
},
computed: {
...mapGetters({}),
},
methods: {
...mapActions({}),
getDetails(id){
  this.$router.push('/details/'+id)
}
},
mounted() {
  // console.log(this.$route);
  reqCateList(this.$route.params.id).then(res=>{
    this.list = res.data.list
  })
},
};
</script>
<style scoped>
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
.van-card{
  margin-top: 0.1rem;
}
</style>