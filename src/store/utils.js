export function getInitTable(x = 30, y = 30) {
  const table = []

  for (let i = 0; i < y; i++) {
    table[i] = []

    for (let j = 0; j < x; j++) {
      table[i][j] = {
        x: j,
        y: i,
        n: null
      }
    }
  }

  return table
}
