
export default{
    getMenu:()=>{
        return{
            code:200,
            message:"获取成功",
            data:{
                token:Math.random().toString(36).slice(-8),
                permission:"admin",
                cataLog:[
                    {
                        path:"/home",
                        name:"home",
                        label:"首页",
                        icon:"House",
                        url:'home/Home',
                    },
                    {

                    },
                    {
                        label:"学生管理",
                        icon:"UserFilled",
                        children:[
                            {
                                path:"/tea_admPublic/student",
                                name:"student",
                                label:"学生信息",
                                icon:"Postcard",  //vue3中图标库
                                url:'tea_admPublic/Student',
                            },
                            {
                                path:"/tea_admPublic/examinationPaper_Score",
                                name:"examinationPaper_Score",
                                label:"考试记录",
                                icon:"DocumentAdd",  //vue3中图标库
                                url:'tea_admPublic/ExaminationPaper_Score',
                            },
                        ]
                    },
                    {
                        path:"/tea_admPublic/personCenter",
                        name:"personCenter",
                        label:"个人中心",
                        icon:"Setting",  
                        url:'tea_admPublic/PersonCenter',
                    },
                ],
                info:{
                    mainId:784231,
                    schoolName:"中南林业科技大学",
                    professionId:8945,
                    professionName:"计算机科学与技术",
                    adminId:8945,
                    adminrName:"张三",
                    teacherId:8945,
                    teacherName:"李四",
                    studentClass:"202095",
                    studentName:"王五",
                    studentNum:"20206545",
                    password:"123456",
                    email:"2020@qq.com",
                    isAllowOrderExercises:1,
                    lastEndTime:"2020-12-10 10:10:10",
                    createTime:"2020-12-10 10:10:10"
                }
            }
        }
    }
}