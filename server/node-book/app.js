const http = require("http")

let server = http.createServer(
  (req,res)=>{
    res.end("hello node.js")
  }
)

server.listen(3000)