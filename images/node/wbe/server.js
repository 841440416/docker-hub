let http = require('http')
let mysql = require('mysql')
let connection = mysql.createConnection({
  hots: 'db',
  user: 'jujuxia',
  password: 'Yy940320',
  database:'node'
})
connection.connect()
let server = http.createServer(function(req, res) {
  connection.query("select 1+1 as solution", function(err, result) {
    res.end(''+result[0].solution)
  })
})
server.listen(3000)