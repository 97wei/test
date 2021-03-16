import axios from 'axios'
import qs from 'qs'
import {errorAlert} from './alert'
import store from '../store/index'
import { Dropdown } from 'element-ui';
//设置基础路径
const baseUrl = "/api";

// 在请求拦截中设置请求头
axios.interceptors.request.use(config=>{
  console.group('本次请求路径为:'+config.url)
  if(config.url !== baseUrl+'/api/userlogin'){
    // 需要设置请求头
    config.headers.authorization = store.state.user.token
  }
  console.log(config);
  return config
})


// 设置一个响应拦截
axios.interceptors.response.use(res=>{
  console.group('本次响应路径为:'+res.config.url)
  if(res.data.code !== 200){
    errorAlert(res.data.msg);
    return;
  }
  console.log(res);
  return res;
})
// 添加菜单
export const addMenu = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/menuadd',
    data:qs.stringify(data)
  })
}

// 菜单列表
export const getMenu = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/menulist',
    params,
  })
}


// 获取一条菜单
export const oneMenu = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/menuinfo',
    params,
  })
}


// 修改菜单
export const updateMenu = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/menuedit',
    data:qs.stringify(data)
  })
}


// 删除菜单
export const delMenu = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/menudelete',
    data:qs.stringify(data)
  })
}
  

//添加角色
export const addRole = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roleadd',
    data:qs.stringify(data)
  })
}

//获取角色列表
export const roleList = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/roleList',
    params,
  })
}

///删除角色
export const roleDel = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roledelete',
    data:qs.stringify(data)
  })
}
//获取一条角色信息
export const onerole =(params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/roleinfo',
    params
  })
}

//角色修改
export const updaterole =(data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/roleedit',
    data:qs.stringify(data)
  })
}

//添加管理员
export const adduser =(data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/useradd',
    data:qs.stringify(data)
  })
}

//获取管理员的总数

export const userCount = (params)=>{
   return axios({
    method:'get',
    url:baseUrl+'/api/usercount',
    params
   })
}

//获取管理员列表

export const userList = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/userlist',
    params,
  })
}

//管理员删除
export const userdelete = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/userdelete',
    data:qs.stringify(data)
  })
}

//管理员修改
export const useredit = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/useredit',
    data:qs.stringify(data)
  })
}

//管理员登录
export const userLogin = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/userlogin',
    data:qs.stringify(data)
  })
}

//添加分类
export const cateadd = (data)=>{
  var form = new FormData()
  for(let i in data){
    form.append(i,data[i])
  }
  return axios({
    method:'post',
    url:baseUrl+'/api/cateadd',
    data:form
  })
}
// 商品分类列表
export const getCate = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/catelist',
    params,
  })
}


//获取商品分类
export const getCateone = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/cateinfo',
    params,
  })
}
//分类修改
export const cateedit = (data)=>{
  var form = new FormData()
  for(let i in data){
    form.append(i,data[i])
  }
  return axios({
    method:'post',
    url:baseUrl+'/api/cateedit',
    data:form
  })
}


//分类删除


export const catedelete = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/catedelete',
    data:qs.stringify(data)
  })
}



//商品规格添加
export const specsadd=(data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/specsadd',
    data:qs.stringify(data)
  })
}

//商品规格总数

export const specscount=(params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/specscount',
    params
  })
}
//商品规格列表


export const specslist=(params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/specslist',
    params
  })
}

//获取一条商品规格

export const specsInfo=(params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/specsinfo',
    params
  })
}


//商品规格修改
export const specsEdit=(data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/specsedit',
    data:qs.stringify(data)
  })
}
//删除商品规格

export const specsDelete=(data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/specsdelete',
    data:qs.stringify(data)
  })
}