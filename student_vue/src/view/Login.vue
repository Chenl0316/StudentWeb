<template>
    <el-form :model="loginForm" class="login-container">
        <h3>登录页面</h3>
        <el-form-item>
            <el-input type="input" v-model="loginForm.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { reactive,getCurrentInstance } from "vue"
import { useStore } from "vuex";
import { useRouter } from "vue-router";



export default({
    setup() {
        const store = useStore();
        const router = useRouter();
        const {proxy}  = getCurrentInstance();
        const loginForm = reactive({
            userName:"",
            password:""
        })
        const login= async()=>{
            let res = await proxy.$api.getMenu(loginForm);
            //存储store
            store.commit("setMenu",res.data.cataLog)
            //动态添加路由
            store.commit("addMenu",router)
            //设置token
            store.commit("setToken",res.data.token)
            //跳转
            router.replace({
                name:'home'
            })
        }

        return {
            loginForm,
            login
        }
    },
})
</script>
<style lang="less" scoped>
.login-container{
    width:300px;
    border:1px solid rgb(223, 223, 223);
    padding:35px 15px 35px 15px;
    box-shadow: 0px 0px 100px rgb(223, 223, 223);
    margin:180px auto;
    h3{
        text-align: center;
    };
    :deep(.el-form-item__content){
        justify-content: center;
    }
}
</style>
