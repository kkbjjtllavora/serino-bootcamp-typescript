import { useState } from 'react'
import axios from 'axios'
import { CartDataLoad } from '../types/cart'

export type Props = {
  dataLoad: CartDataLoad
}

export default function CartListModel({ dataLoad }: Props) {
  const [cartList, setCartList] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  async function getCartList() {
    setIsLoading(true)
    await axios
      .get(`${dataLoad.baseUrl}/${dataLoad.endpoint}`)
      .then((response) => {
        setCartList(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error.message)
      })
  }
  return {
    isLoading,
    getCartList,
    cartList,
    error,
  }
}
