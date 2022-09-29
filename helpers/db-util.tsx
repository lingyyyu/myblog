export function connectDatabase(){
    //导入mysql模块
    const mysql = require('mysql')
    //sql连接
    const connect = mysql.createConnection({
        host: '127.0.0.1',      //ip地址（可以省略）
        port: 3306,             //端口（可以省略）
        user: 'root',           //用户名
        password: '',           //密码
        database: 'myblog'        //连接后要进入的数据库（这一项可以省略）
    })
    return connect
}