import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        component:()=>import("../view/Main.vue"),
        children:[
            {
                path:"/home",
                name:"home",
                component:() => import("../view/home/Home.vue")
            },
            {
                path:"/page1",
                name:"page1",
                component:() => import("../view/other/Page1.vue")
            }
        ]
    }
]