const http = require('http');


const port = 3000;

http.createServer((req, res)=>{
  
  setTimeout(function(){
    res.end('hello world');
  },15000)

}).listen(port, ()=>{
  console.log('server is listening', port);
})