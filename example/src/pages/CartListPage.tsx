import React, { useEffect, useState } from 'react'
import { CartList } from 'serino-bootcamp-typescript'
import axios, { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CartListPage() {
  const [errorMessage, setErrorMessage] = useState<string>('')

  /**
   * Sample Data On data.json
    [
      { "id": 1, "name": "Birthday Cake", "price": "2.00", "quantity": 2 },
      { "id": 2, "name": "Party Cups", "price": "3.55", "quantity": 3 },
      { "id": 3, "name": "Poung of Beef", "price": "2.56", "quantity": 5 },
      { "id": 4, "name": "Bullet-proof vest", "price": "4.56", "quantity": 6 },
      {
        "id": 5,
        "name": "Motor helmet",
        "price": "7.89",
        "quantity": 4
      }
    ]
  */
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
