const express = require('express')
const http = require('http')
const WebSocket = require('ws')

const sendData = require('./utils')


const port = 8888
const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
  let id = setInterval(() => {
    sendData(ws)
  }, 100)

  ws.on('close', () => {
    clearInterval(id)
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
