import { useState } from 'react'
import { TCartDataLoad, TCartDataOut } from '../types/cart'
import { AxiosResponse } from 'axios'

export default function CartListModel(dataLoad: TCartDataLoad, dataOut: TCartDataOut) {
  const [cartList, setCartList] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function getCartList() {
    setIsLoading(true)
    await dataLoad.cartList
      .then((response: AxiosResponse) => {
        setCartList(response.data)
        setIsLoading(false)
      })
      .catch((error: { message: string }) => {
        dataOut.errorMessage(error.message)
        setIsLoading(false)
      })
  }

  return {
    isLoading,
    getCartList,
    cartList,
  }
}
