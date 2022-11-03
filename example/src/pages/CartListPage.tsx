import React, { useEffect, useState } from 'react'
import { CartList } from 'serino-bootcamp-typescript'
import axios, { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

export default function CartListPage() {
  const [errorMessage, setErrorMessage] = useState<string>('')

  const cartListPromise: Promise<AxiosResponse<any, any>> = axios.get('./data.json')

  useEffect(() => {
    errorMessage && toast(errorMessage)
  }, [errorMessage])

  return (
    <div>
      <ToastContainer />

      <CartList
        dataIn={{ cartTitle: 'Serino Shopping Cart' }}
        dataLoad={{ cartList: cartListPromise }}
        dataOut={{ errorMessage: setErrorMessage }}
      />
    </div>
  )
}
