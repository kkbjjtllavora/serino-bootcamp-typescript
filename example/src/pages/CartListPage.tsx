import React from 'react'
import { CartList } from 'serino-bootcamp-typescript'
import axios, { AxiosResponse } from 'axios'

export default function CartListPage() {
  const cartListPromise: Promise<AxiosResponse<any, any>> = axios.get('https://jsonplaceholder.typicode.com/todos')

  return (
    <div>
      <h2>Shopping Cart</h2>
      <CartList dataIn={{ buttonTitle: 'Hello' }} dataLoad={{ cartList: cartListPromise }} />
    </div>
  )
}
