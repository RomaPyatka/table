import { types } from 'mobx-state-tree'

import { getInitTable } from './utils'


const {
  model,
  number,
  maybeNull,
  array,
  map,
} = types

const Cell = model('Cell', {
  x: number,
  y: number,
  n: maybeNull(number),
})

export const Store = types
  .model('Store', {
    table: array(array(Cell)),
    sidebar: map(number),
  })
  .actions(self => ({
    updateCell(cell) {
      const { x, y, n } = cell

      const sidebarCellKey = `${y}${x}`

      self.table[y][x] = cell

      if (self.sidebar.has(sidebarCellKey)) {
        self.sidebar.set(sidebarCellKey, n)
      }
    },
    addSidebarCell(key, value) {
      self.sidebar.set(key, value)
    },
    removeSidebarCell(key) {
      self.sidebar.delete(key)
    },
  }))
  .create({
    table: getInitTable(),
    sidebar: {},
  })
