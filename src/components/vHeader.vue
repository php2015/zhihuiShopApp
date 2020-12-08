<template>
  <div class="header">
    <div class="header-right">
      <h1>{{ $route.meta.name }}</h1>
    </div>
    <div class="header-icon">
      <van-icon name="arrow-left" @click="goback" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    goback() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #999;
  font-size: 0.24rem;
  font-weight: 800;
  color: #666;
}
.header-icon {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
}
.header-icon i {
  font-size: 0.25rem;
  line-height: 0.6rem;
}
.header-right {
  position: relative;
}
</style>