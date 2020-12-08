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
        <van-button  type="primary" @click="gotoLogin" class="btn">登录</van-button>
      </div>
    </div>
    <!-- form表单 -->
    <div class="register-form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.phone"
          type="phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="form.nickname"
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
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            Register
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {reqRegister} from "../../utils/request"
import { Toast } from 'vant';
export default {
  props: [],
  components: {},
  data() {
    return {
      form:{
        nickname: '',
        password: '',
        phone:""
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
    gotoLogin(){
      this.$router.push('/login')
    },
    // 登录按钮
    onSubmit(){
      reqRegister(this.form).then(res=>{
        if(res.data.code===200){
          Toast.success(res.data.msg);
          this.$router.push('/login')
        }else{
          Toast.fail(res.data.msg);
        }
      })
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
.btn{
  height: 0.45rem;
  font-size: 0.16rem;
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
}
</style>