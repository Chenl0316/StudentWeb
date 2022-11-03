/**
 * 整个项目api管理
 */
 import permission from "./testData/permission.js"
 export default{
     getMenu(params){
        return permission.getMenu({"body":params})
     }
 }