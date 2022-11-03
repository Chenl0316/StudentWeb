import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store/index.js'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import api from "./api/api.js"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//挂载全局api
app.config.globalProperties.$api = api
//防止刷新页面路由找不到
store.commit("addMenu",router)

function checkRouter(path){
  let hasCheck = router.getRoutes().filter(route=>route.path==path).length
  if(hasCheck){
      return true;
  }else{
      return false;
  }
}
router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const  token = store.state.token
  if(!token&&to.name!=="login"){
      next({name:'login',replace:true})
  }else if(!checkRouter(to.path)){
      next({name:'home',replace:true})
  }
  else{
      next()
  }
})

app.use(ElementPlus).use(router).use(store)
app.mount('#app')
