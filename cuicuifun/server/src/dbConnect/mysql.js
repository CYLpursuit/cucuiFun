const mysql = require('mysql')
const {MYSQL_CONF} = require('../dbConfig/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect(err=>{
    if(err) {
        console.log(err)
        throw err;
    }
    console.log('Connected!')
})

// 统一执行sql函数
function exec(sql){
    const promise = new Promise((resolve,reject)=>{
        con.query(sql,(err,result)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            console.log(result)
            resolve(result)
        })
    })
    return promise
}
exec('select * from blogs');
// con.end() 不用断开连接 作为单例使用
module.exports = {
    exec
}
