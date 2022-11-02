import React, { useEffect, useState } from 'react'
import { CartList } from 'serino-bootcamp-typescript'
import axios, { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CartListPage() {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const cartListPromise: Promise<AxiosResponse<any, any>> = axios.get('https://jsonplaceholder.typicode.com/todos')

  useEffect(() => {
    errorMessage && toast(errorMessage)
  }, [errorMessage])

  return (
    <div>
      <ToastContainer />

      <h2>Shopping Cart</h2>
      <CartList
        dataIn={{ buttonTitle: 'Click Me' }}
        dataLoad={{ cartList: cartListPromise }}
        dataOut={{ errorMessage: setErrorMessage }}
      />
    </div>
  )
}
