import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from 'src/components/atoms'

import { Cell } from './cell'


export const Table = ({
  data,
}) => (
  data.map((row, i) => (
    <Flex key={i}>
      {row.map(({ x, y }) => (
        <Cell
          key={`${y}${x}`}
          initX={x}
          initY={y}
        />
      ))}
    </Flex>
  ))
)

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired
  ).isRequired,
}
