/**
 * Created by chens on 2020/4/2.
 */
const Mock = require('mockjs');
//const Random = Mock.Random;
//造新闻列表数据
const adminInfo=[
    {
        name:'admin',
        password:'admin',
        email:'4399@qq.com'
    },{
        name:'test',
        password:'test',
        email:'1341313944@qq.com'
    },{
        name:'admin',
        password:'abc123',
        email:'112360@qq.com'
    }
]

//用户名密码验证
Mock.mock('/api/test/temp','post',function(req){
    console.log('req:', req);
    let obj={};
    if(req.body){
        let name= req.body.split('&')[0];
        let password=req.body.split('&')[1];
        console.log('name:', name,',pass:', password);
        adminInfo.forEach(item=>{
            if(item.name===name||item.name===item.email){
                if(item.password===password){
                    obj.name=item.name;
                }
            }
        })
        return obj;
    }
    return obj;
})

Mock.mock('/api/test/tmp2','get',function(req){
    console.log('req:', req);
    return adminInfo;
})

