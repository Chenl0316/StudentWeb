import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        component:()=>import("../view/Main.vue"),
        redirect:'/home',  //重定向到home
        name:'home1',
        children:[]
    },
    {
        path:"/login",
        name:"login",
        component:() => import("../view/Login.vue")
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router