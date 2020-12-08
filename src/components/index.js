import Vue from "vue"
import vHeader from "../components/vHeader.vue"

let obj = {
  vHeader
}

for(let key in obj){
  Vue.component(key,obj[key])
}

export default obj