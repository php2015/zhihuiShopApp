<template>
  <div>
    <div class="header">
      <div class="header-right">
        <h1>{{ $route.meta.name }}</h1>
      </div>
      <div class="header-icon">
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div class="header-iconright">
        <!-- <span class="iconfont icon-dingbudaohang-zhangh"></span> -->
        <van-button type="primary" @click="gotoRegister" class="btn"
          >注册</van-button
        >
      </div>
    </div>
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.phone"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <a @click="foggetPW" class="foggetPW">忘记密码</a>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            Login
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {reqLogin} from "../../utils/request"
import { Toast } from 'vant';
export default {
  props: [],
  components: {},
  data() {
    return {
      form:{
        phone: '',
        password: '',
      }
    };
  },
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
    goback() {
      this.$router.go(-1);
    },
    gotoRegister() {
      this.$router.push("/register");
    },

    // 登录按钮
    onSubmit(){
      reqLogin(this.form).then(res=>{
        if(res.data.code===200){
          Toast.success(res.data.msg);
          // 存数据转换成json串
          sessionStorage.setItem('userInfo',JSON.stringify(res.data.list))
          this.$router.push('/index')
        }else{
          Toast.fail(res.data.msg);
        }
      })
    },
    // 忘记密码
    foggetPW(){
      console.log(456);
    }
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
  position: relative;
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

.btn {
  height: 0.45rem;
  font-size: 0.16rem;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
.foggetPW{
  display: block;
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: right;
  padding-right: 0.2rem;
}
</style>