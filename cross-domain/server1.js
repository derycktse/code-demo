const http = require('http')

let port1 = 8081
let port2 = 8082
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:8082',
    'Set-Cookie': 'date=' + new Date(),
    // 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  })
  res.end('{"port":"8081"}')
  console.log(port1 + ':' + req.headers.cookie)
}).listen(port1, () => {
  console.log(`server is listen at ${port1}`)
})


http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end('{"port":"8082"}')
  console.log(port2 + ':' + req.headers.cookie)
}).listen(port2, () => {
  console.log(`server is listen at ${port2}`)
})