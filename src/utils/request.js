import axios from "axios"
import Vue from "vue"
import qs from "qs"
// 本地环境
let baseUrl= "/api"
Vue.prototype.$img = "http://localhost:3000"
// 上线环境
// let baseUrl = ''
// Vue.prototype.$img = ""



axios.interceptors.request.use((res)=>{
  console.log("*****************本次请求的数据是**************")
  console.group(res)
  console.groupEnd("******************************")
  return res
})
axios.interceptors.response.use((res)=>{
  console.log("*****************本次响应的数据是**************")
  console.group(res)
  console.groupEnd("******************************")
  return res
})



export const reqBanner=()=>{
  return axios({
    url:"/api/getbanner",
    method:"get"
  })
}

export const reqGoods=()=>{
  return axios({
    url:"/api/getindexgoods",
    method:"get"
  })
}

export const reqOneMessage=(id)=>{
  return axios({
    url:"/api/getgoodsinfo",
    method:"get",
    params:{
      id:id
    }
  })
}

export const reqCateListTree=()=>{
  return axios({
    url:"/api/getcatetree",
    method:"get"
  })
}

export const reqCateList=(fid)=>{
  return axios({
    url:"/api/getgoods",
    method:"get",
    params:{fid:fid}
  })
}


export const reqLogin=(form)=>{
  return axios({
    url:"/api/login",
    method:"post",
    data:qs.stringify(form)
  })
}

export const reqRegister=(form)=>{
  return axios({
    url:"/api/register",
    method:"post",
    data:qs.stringify(form)
  })
}

export const reqCarAdd=(form)=>{
  return axios({
    url:"/api/cartadd",
    method:"post",
    data:qs.stringify(form)
  })
}

export const reqCarList=(uid)=>{
  return axios({
    url:"/api/cartlist",
    method:"get",
    params:{uid:uid}
  })
}

export const reqCarDel=(id)=>{
  return axios({
    url:"/api/cartdelete",
    method:"post",
    data:{id:id}
  })
}

export const reqCarEdit=(form)=>{
  return axios({
    url:"/api/cartedit",
    method:"post",
    data:qs.stringify(form)
  })
}

