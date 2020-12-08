<template>
  <div>
    <!-- 没有数据显示空 -->
    <div v-if="list.length === 0">
      <van-empty description="购物车空啦~" />
    </div>
    <!-- 有数据显示真实的购物车数据 -->
    <div v-else>
      <div v-for="item in list" :key="item.id" class="box">
        <div>
          <van-checkbox
            class="boxleft"
            v-model="item.isTrue"
            @click="oneCheck"
          ></van-checkbox>
        </div>
        <van-swipe-cell class="boxright">
          <van-card
            :price="item.price"
            :title="item.goodsname"
            class="goods-card"
            :thumb="$img + item.img"
          />
          <template>
            <van-stepper
              v-model="item.num"
              class="steper"
              @plus="add(item.id)"
              @minus="sub(item.id)"
            />
          </template>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="del(item.id)"
            />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <!-- 提交订单 -->
    <div>
      <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
        class="sendOrder"
      >
        <van-checkbox v-model="checkAll" @click="allCheck">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqCarList } from "../../utils/request";
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";
import { reqCarDel } from "../../utils/request";
import { Toast } from "vant";
import { reqCarEdit } from "../../utils/request";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
  props: [],
  components: {},
  data() {
    return {
      list: [],
      num: "",
      checkAll: false,
    };
  },
  computed: {
    ...mapGetters({}),
    totalPrice() {
      let sum = 0;
      this.list.forEach((ele) => {
        if (ele.isTrue) {
          console.log(ele.price);
          sum += ele.price * ele.num * 100;
        }
      });
      return sum;
    },
  },
  methods: {
    ...mapActions({}),
    onSubmit() {
      console.log(123);
    },
    // 全选
    allCheck() {
      this.list.forEach((item) => (item.isTrue = this.checkAll));
    },
    // 子复选框
    oneCheck() {
      this.checkAll = this.list.every((ele) => ele.isTrue);
    },
    // 删除
    del(id) {
      reqCarDel(id).then((res) => {
        if (res.data.code === 200) {
          Toast.success(res.data.msg);
          let info = JSON.parse(sessionStorage.getItem("userInfo"));
          let uid = info.uid;
          reqCarList(uid).then((res) => {
            let hahaha = res.data.list;
            // 为每一个list中的数组添加isTrue属性
            hahaha.forEach((ele) => (ele.isTrue = false));
            this.list = hahaha;
          });
        } else {
          Toast.fail(res.data.msg);
        }
      });
    },
    // plus  +
    add(id) {
      reqCarEdit({ id: id, type: 2 });
    },
    sub(id) {
      reqCarEdit({ id: id, type: 1 });
    },
  },
  mounted() {
    let info = JSON.parse(sessionStorage.getItem("userInfo"));
    let uid = info.uid;
    reqCarList(uid).then((res) => {
      let hahaha = res.data.list ? res.data.list : [];
      // 为每一个list中的数组添加isTrue属性

      hahaha.forEach((ele) => (ele.isTrue = false));
      this.list = hahaha;
    });
  },
};
</script>
<style scoped>
.delete-button {
  height: 100%;
}
.box {
  display: flex;
}
.boxleft {
  margin-top: 0.4rem;
  padding-left: 0.1rem;
}
.boxright {
  flex: 1;
}
.steper {
  position: absolute;
  right: 0;
  bottom: 0.3rem;
}
.van-card__price {
  font-size: 0.2rem;
  color: crimson;
}
.van-card__price-integer {
  font-size: 0.2rem;
  color: crimson;
}
.van-card__origin-price {
  font-size: 0.16rem;
}
.van-card__title {
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
.sendOrder {
  bottom: 0.5rem;
}
</style>