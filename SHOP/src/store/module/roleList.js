import {roleList} from '../../utils/request'
const state = {
  roleList:[],//初始化数据
}

// 操作数据
const mutations = {
    changeRoleList(state,arr){
    state.roleList = arr
  }
}

const actions = {
    roleListActions(context){
    // 发起菜单列表请求
    roleList().then(res=>{
      context.commit('changeRoleList',res.data.list);
    })
  }
}

const getters = {
  RoleList(state){
    return state.roleList
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced:true,
}
