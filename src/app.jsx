import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import { GlobalStyles } from './components/atoms'
import { Store } from './store'
import { Layout } from './layout'


ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider store={Store}>
      <Layout />
    </Provider>
  </>,
  document.getElementById('app')
)
