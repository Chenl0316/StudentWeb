<template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <ComponentHeader></ComponentHeader>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import ComponentHeader from "../components/ComponentHeader.vue"
export default {
  name: 'Main',
  components:{
    ComponentHeader
  }
}
</script>
<style lang="less" scoped>
.common-layout {
  height:100%;
  .el-container{
    height:100%;
    .el-header{
      padding:0px;
      width:100%;
      height:70px;
    }
    .el-main{
      padding:0px;
      width:100%;
      background-color:rgb(240,244,247);
    }
  }
}

</style>