<template>
  <div>
      <van-nav-bar
        :title="this.$route.name"
        left-text="返回"
        left-arrow
        />
      </div>
</template>

<script>
import {carList} from '../utils/request'
export default {
    methods: {
        requestCartList(){
             carList().then(res=>{

             })
        }
    },
    
      mounted () {
          this.requestCartList()
      }
}
</script>

<style>

</style> 