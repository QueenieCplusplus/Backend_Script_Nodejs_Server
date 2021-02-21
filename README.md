# Backend_Script_Nodejs_Server

在終端機 cd 此 file 的資料夾後，下指令 node filename 即可。


    // 2021, 2/21 sun

    const http = require('http');

    const hostname = 'localhost';
    const port = 3000;

    const server = http.createServer((req, res) => {

        res.statusCode = 200;
        res.setHeader = ('content-Type', 'text/html');
        res.end(`<h1> This is my nodejs server </h1>`);

    })

    server.listen(port, hostname, () =>{
        console.log(`my server is listening on http://${hostname}:${port}.`)
    })

![](https://raw.githubusercontent.com/QueenieCplusplus/Backend_Script_Nodejs_Server/main/output.png)

ref:

https://medium.com/pierceshih/筆記-如何使用-node-js-建立一個本機伺服器-30b8d91c3ec1 (無 express)

https://expressjs.com/zh-tw/starter/installing.html (有 express)

https://expressjs.com/zh-tw/starter/generator.html (Express 框架)
