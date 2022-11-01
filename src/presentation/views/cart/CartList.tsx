import React, { useEffect } from 'react'
import useCartListModel from '../../models/CartListModel'
import List from '../../components/List'
import Button from '../../components/Button'
import { CartDataLoad, CartDataIn } from '../../types/cart'

export type Props = {
  dataLoad: CartDataLoad
  dataIn: CartDataIn
}

export default function CartList({ dataLoad, dataIn }: Props) {
  const { cartList, getCartList, isLoading } = useCartListModel({ dataLoad })

  useEffect(() => {
    getCartList()
  }, [])

  return (
    <div className='page'>
      <div>
        <h2>Cart List</h2>
        <Button title={dataIn.buttonTitle} />
      </div>

      {isLoading ? <div>Loading...</div> : <List data={cartList} />}
    </div>
  )
}
