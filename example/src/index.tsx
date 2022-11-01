import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartList } from 'serino-bootcamp-typescript'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Shopping Cart</h2>
      <CartList
        dataIn={{ buttonTitle: 'Hello' }}
        dataLoad={{ baseUrl: 'https://jsonplaceholder.typicode.com', endpoint: 'todos' }}
      />
    </div>
  </React.StrictMode>,
)
