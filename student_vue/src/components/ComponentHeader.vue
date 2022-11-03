<template>
    <div class="header">
        <el-row>
            <el-col :span="3"><div class="grid-content ep-bg-purple-light" /></el-col>
            <el-col :span="8"><div class="grid-content ep-bg-purple" />
                <span style="font-size: 30px;">l  o  g  o</span>
                <span style="font-size: 30px;">强子考试系统</span>
            </el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
            <el-col :span="8">
                <el-menu
                mode="horizontal"
                :ellipsis="false"
                :default-active="activePath"
                >
                    <el-menu-item v-for="item in noChildren()" :index="item.path" :key="item.path"
                    @click="clickMenu(item)">
                    <span>{{item.label}}</span>
                        </el-menu-item>
                </el-menu>
                <el-dropdown>
                    <span class="el-dropdown-link">
                    username
                    <img src="../../assets/logo.png" class="imageLogo" alt="">
                    <el-icon class="el-icon--right ">
                        <arrow-down />
                    </el-icon>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleLoginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
            <el-col :span="1"><div class="grid-content ep-bg-purple-light" /></el-col>
        </el-row>
    </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default{
    name:"componentAside",
    setup(){
        const router = useRouter();
        const store = useStore();
        const list = store.state.menuList;
        const noChildren = () =>{
            return list.filter((item)=>!item.children)
        }
        const clickMenu = (item)=>{
            router.push({
                name:item.name
            })
        }
        const handleLoginOut = ()=>{
            store.commit('clearMenu')
            store.commit("clearToken")
            router.replace({
                name:'login'
            })
        }
        return {
            noChildren,
            clickMenu,
            handleLoginOut
        }
    }
}
</script>
<style lang="less" scoped>
.header{
  .el-row{
      text-align: center;
      line-height: 70px;
      .el-menu{
          border:0px;
          margin-top:10px;
      }
      .el-col{
          display: flex;
          place-items: center;
      }
  }
}
</style>