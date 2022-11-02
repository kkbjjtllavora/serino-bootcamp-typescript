import React from 'react'
import ReactDOM from 'react-dom/client'
import CartListPage from './pages/CartListPage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CartListPage />
  </React.StrictMode>,
)
