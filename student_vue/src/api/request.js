import axios  from "axios"
import config from '../config'
import {ElMessage} from 'element-plus'

const NETWORK_ERROR = "请求错误，请稍后重试..."

//创建一个axios实例
const service = axios.create({
    baseURL :config
})

//请求之前做一些事
service.interceptors.request.use((req)=>{
    return req;
})

//请求之后
service.interceptors.response.use((res)=>{
    const {code ,data,message} = res.data  //统一返回一下格式
    if(code==200){
        return {"message":message,"data":data};
    }else{
        ElMessage.error(message || NETWORK_ERROR)
        return Promise.reject(message || NETWORK_ERROR)
    }

})


//核心
function request(options){
    //先判断用户请求的时候指定了请求方法没，get或者post
    options.method = options.method || 'get'
    if(options.method.toLowerCase() == 'get'){
        options.params = options.data
    }

    service.defaults.baseURL = config;
    return service(options)
}
export default request;