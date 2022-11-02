import React, { useEffect } from 'react'
import useCartListModel from '../../../models/useCartListModel'
import List from '../../components/List'
import Button from '../../components/Button'
import { CartDataLoad, CartDataIn, CartDataOut } from '../../../types/cart'

export type TCartListProps = {
  dataLoad: CartDataLoad
  dataIn: CartDataIn
  dataOut: CartDataOut
}

export default function CartList({ dataLoad, dataIn, dataOut }: TCartListProps) {
  const { cartList, getCartList, isLoading } = useCartListModel(dataLoad, dataOut)

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
