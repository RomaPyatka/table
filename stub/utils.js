const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand)
  return rand
}

const randomDouble = (min, max) => Number(
  (Math.random() * (max - min) + min).toFixed(2),
)

const sendData = (ws) => {
  ws.send(JSON.stringify({
    x: randomInteger(0, 29),
    y: randomInteger(0, 29),
    n: randomDouble(-999.99, 999.99)
  }))
}

module.exports = sendData
