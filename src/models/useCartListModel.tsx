import { useState } from 'react'
import { CartDataLoad } from '../types/cart'
import { AxiosResponse } from 'axios'

export default function CartListModel(dataLoad: CartDataLoad) {
  const [cartList, setCartList] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function getCartList() {
    setIsLoading(true)
    await dataLoad.cartList
      .then((response: AxiosResponse) => {
        setCartList(response.data)
        setIsLoading(false)
      })
      .catch((error: { message: string }) => {
        setError(error.message)
        setIsLoading(false)
      })
  }

  return {
    isLoading,
    getCartList,
    cartList,
    error,
  }
}
