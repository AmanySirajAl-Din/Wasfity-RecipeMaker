import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // import react bootstrap
import 'bootstrap/dist/css/bootstrap.css' // import bootstrap
import store from './store/index'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
