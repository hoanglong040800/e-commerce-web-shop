import React from 'react'
import ReactDOM from 'react-dom'
import MainRoute from './routes/MainRoute'
import 'normalize.css'
import './assets/css/base.css'

ReactDOM.render(
  <React.StrictMode>
    <MainRoute />
  </React.StrictMode>,
  document.getElementById('root'),
)
