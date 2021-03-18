import axios from 'axios';
import { Toast } from 'vant';
// 配置基础路径
const baseUrl = "/api";
// 设置响应拦截
axios.interceptors.response.use(res=>{
    console.group('本次响应路径为:'+res.config.url)
    if(res.data.code !== 200){
      // 提示错误信息
      Toast.fail(res.data.msg);
      return;
    }
    console.log(res);
    return res;
  })
  //获取轮播图
  export const getBanner=()=>{
    return axios({
        method:'get',
        url:baseUrl+'/api/getbanner',
      })
  }

  
    //获取商品信息
    export const getIndexGoods=()=>{
        return axios({
            method:'get',
            url:baseUrl+'/api/getindexgoods',
          })
      }
    //购物车列表
    export const cartList=()=>{
        return axios({
            method:'get',
            url:baseUrl+'/api/cartlist',
          })
      }