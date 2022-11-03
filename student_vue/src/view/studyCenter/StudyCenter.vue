<template>
    <div class="home">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <div class="Info-top">
                    学生信息
                </div>
                <div class="Info-bottom">
                    其他信息
                </div>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
.Info-top{
    width:100%;
    height:200px;
    background-color:white;
    margin:20px 0px 20px 0px ;
}
.Info-bottom{
    width:100%;
    height:100%;
    background-color:white;
}
</style>