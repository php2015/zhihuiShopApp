<template>
  <div class="cate-main">
    <!-- 左 -->
    <div class="cate-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item.catename"
          v-for="item in cateListTree"
          :key="item.id"
          @click="changeActiveKey"
        />
      </van-sidebar>
    </div>
    <!-- 右 -->
    <div class="cate-right" :column-num="4">
      <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="item in children" :key="item.id" @click="gotoProCate(item.id)" >
          <van-image :src="$img + item.img" class="imgbox" />
           <van-grid-item  :text="item.catename"  />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqCateListTree } from "../../utils/request";
import { reqCateList } from "../../utils/request";
export default {
  props: [],
  components: {},
  data() {
    return {
      activeKey: 0,
      cateListTree: [],
      children:[]
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    changeActiveKey(){
      reqCateListTree().then((res) => {
      // 获取左侧部分数据
      this.cateListTree = res.data.list;
      this.children = res.data.list[this.activeKey].children
      
    });
    },
    gotoProCate(id){
      this.$router.push('/proCate/'+id)
    }
  },
  mounted() {
    reqCateListTree().then((res) => {
      // 获取左侧部分数据
      this.cateListTree = res.data.list;
      this.children = res.data.list[this.activeKey].children
    });
  },
};
</script>
<style scoped>
.cate-left {
  width: 0.8rem;
  height: 100vh;
  background-color: rgb(247, 248, 250);
}
.cate-main {
  display: flex;
}
.imgbox{
  height: 0.57rem;
}
</style>