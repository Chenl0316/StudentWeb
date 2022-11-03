import {createStore} from 'vuex'
import Cookie from 'js-cookie'
const modules = import.meta.glob('../view/**/*.vue')
export default createStore({
    state:{
        menuList:[],
        token:""
    },
    mutations:{
        //登录时存路由
        setMenu(state,val){
            state.menuList = val
            localStorage.setItem('cataLog',JSON.stringify(val));
        },
        //数据持久化
        //临时存储
        addMenu(state,router){
            if(!localStorage.getItem("cataLog")){
                return;
            }
            const menu = JSON.parse(localStorage.getItem("cataLog"))
            state.menuList = menu; 
            //动态路由
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item=>{
                        item.component =modules[(`../view/${item.url}.vue`)]
                        return item;
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component = modules[(`../view/${item.url}.vue`)]
                    menuArray.push(item)
                }
            });
            menuArray.forEach(item=>{
                router.addRoute('home1',item)
            })
        },
        setToken(state,val){
            state.token=val
            Cookie.set('token',val)
        },
        getToken(state){
            state.token=state.token||Cookie.get('token')
        },
        clearMenu(state){
            state.menuList = []
            localStorage.removeItem('cataLog')
        },
        clearToken(state){
            state.token=''
            Cookie.remove('token')
        }
    }
})