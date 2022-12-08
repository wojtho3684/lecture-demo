const express = require('express')
const app = express()
const port = normalizePort(process.env.PORT || '3000'); 

app.get('/', (req, res) => {
    if(req.query.user) {
        user = req.query.user
    } else {
        user = "World"
    }
    res.send(`Hello ${user}!`)
    console.log(`Request from ${req.ip}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
} 