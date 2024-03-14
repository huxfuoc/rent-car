import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout/Layout.jsx'
import './index.scss'
import Login from './pages/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Layout />
  </React.StrictMode>,
)
