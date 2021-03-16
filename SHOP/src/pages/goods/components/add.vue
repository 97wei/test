<template>
  <div>
<el-dialog  :title='info.title' :visible.sync="info.isshow">
<el-form  label-width="100px" class="demo-ruleForm">
     <el-form-item label="一级分类" >
     <el-select v-model="form.first_cateid" @change="changeCate()">
      <el-option lable="请选择" value='' disabled>--请选择--</el-option>
      <el-option :label="item.catename" v-for="item in first_cate" :value="item.id" :key='item.id'></el-option>
    </el-select>
      </el-form-item>
      <el-form-item label="二级分类" >
     <el-select v-model="form.second_cateid">
      <el-option lable="请选择" value='' disabled>--请选择--</el-option>
      <el-option :label="item.catename" v-for="item in secondCate" :value="item.id" :key='item.id'></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="商品名称" >
     <el-input  v-model="form.goodsname" ></el-input>
  </el-form-item>
  <el-form-item label="价格" >
      <el-input v-model="form.price"></el-input>
  </el-form-item>
   <el-form-item label="市场价格" >
      <el-input v-model="form.market_price"></el-input>
  </el-form-item>
    <el-form-item label="图片" >
     <el-upload
          class="avatar-uploader"
          action="#"
          :on-change='changeImg'
          :show-file-list="false"
          >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
        </el-form-item>
        <el-form-item label="商品规格" >
            <el-select v-model="form.specsid">
            <el-option lable="请选择" value='' disabled>--请选择--</el-option>
            <!-- <el-option :label="item.rolename" v-for="item in roledata" :value="item.id" :key='item.id'></el-option> -->
            </el-select>
            </el-form-item>
            <el-form-item label="规格属性" >
            <el-select v-model="form.specsattr">
            <el-option lable="请选择" value='' disabled>--请选择--</el-option>
            <!-- <el-option :label="item.rolename" v-for="item in roledata" :value="item.id" :key='item.id'></el-option> -->
            </el-select>
        </el-form-item>
            <el-form-item label="是否新品" :label-width="formLabelWidth">
            <template>
                <el-radio v-model="form.isnew" :label="1">是</el-radio>
                <el-radio v-model="form.isnew" :label="2">否</el-radio>
            </template>
          </el-form-item>
          <el-form-item label="是否热卖" :label-width="formLabelWidth">
            <template>
                <el-radio v-model="form.ishot" :label="1">是</el-radio>
                <el-radio v-model="form.ishot" :label="2">否</el-radio>
            </template>
          </el-form-item>
     <el-form-item label="状态" :label-width="formLabelWidth">
         <el-switch
            v-model="form.status"
            active-color="blue"
            inactive-color="grey" :active-value="1" :inactive-value="2">
        </el-switch>
    </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button  v-if="info.isAdd" type="primary" @click="confrim">确 定</el-button>
    <el-button v-else type="primary" @click="update" >修 改</el-button>
  </span>
</el-dialog>
</div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
export default {
props: ['info'],
 data () {
     return {
      secondCate:[],
      formLabelWidth:'120px',
      form:{
        first_cateid:'',
        second_cateid:'',
        goodsname:'',
        price:'',
        market_price:'',
        img:'',
        description:'',
        specsid:'',
        specsattr:[],
        isnew:1,
        ishot:1,
        status:1
      }  
     }
 },
 methods: {
         ...mapActions({
            'requestCatelist':'cate/CatelistActions'
        }),
        changeCate(f){
             if(!f){
                 this.form.second_cateid = '';
             }
             var index =  this.first_cate.findIndex(item=>item.id==this.form.first_cateid)
             this.secondCate = this.first_cate[index].children
        },
     confrim(){
       
     }
 },
 computed: {
          ...mapGetters({
        "first_cate":'cate/catelist'
        } )
 },
 mounted () {
  this.requestCatelist()
 }
}
</script>

<style scoped>
 .avatar-uploader>>>.el-upload {
    border: 1px dashed grey;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader>>>.el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>