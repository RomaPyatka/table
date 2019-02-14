import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

import { FlexReverse, Cell } from 'src/components/atoms'


export const SidebarDump = ({
  store: { sidebar },
}) => (
  <FlexReverse>
    {Array.from(sidebar, ([key, value]) => (
      <Cell
        key={key}
        single
        mode={value >= 0 ? 'blue' : 'red'}
      >
        {value}
      </Cell>
    ))}
  </FlexReverse>
)

SidebarDump.propTypes = {
  store: PropTypes.shape({
    sidebar: PropTypes.object.isRequired,
  }).isRequired,
}

export const Sidebar = inject('store')(observer(SidebarDump))
