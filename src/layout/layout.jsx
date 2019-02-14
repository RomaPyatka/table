import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'

import { Flex, Aside, Main } from 'src/components/atoms'
import { Sidebar, Table } from 'src/components/molecules'


export class LayoutDump extends React.Component {
  constructor(props) {
    super(props)

    this.socket = new WebSocket('ws://localhost:8888')
  }

  componentDidMount() {
    const { store } = this.props

    this.socket.onmessage = (e) => {
      store.updateCell(JSON.parse(e.data))
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    const { store } = this.props

    return (
      <Flex>
        <Aside>
          <Sidebar />
        </Aside>

        <Main>
          <Table data={store.table} />
        </Main>
      </Flex>
    )
  }
}

LayoutDump.propTypes = {
  store: PropTypes.shape({
    table: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
    updateCell: PropTypes.func.isRequired,
  }).isRequired,
}

export const Layout = inject('store')(LayoutDump)
