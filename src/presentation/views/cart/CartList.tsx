import React, { useEffect } from 'react'
import useCartListModel from '../../../models/useCartListModel'
import List from '../../components/List'
import { TCartDataLoad, TCartDataIn, TCartDataOut } from '../../../types/cart'

export type TCartListProps = {
  dataLoad: TCartDataLoad
  dataIn: TCartDataIn
  dataOut: TCartDataOut
}

export default function CartList({ dataLoad, dataIn, dataOut }: TCartListProps) {
  const { cartList, getCartList, isLoading } = useCartListModel(dataLoad, dataOut)

  useEffect(() => {
    getCartList()
  }, [])

  return (
    <div className='container'>
      <div>
        <h2>{dataIn.cartTitle}</h2>
      </div>
      <div className='inp'>
        <input type='text' placeholder='e.g. eggs 500g' />
        <button className='submit'>Submit</button>
      </div>

      {isLoading ? <div>Loading...</div> : <List data={cartList} />}
      <button className='clearAll'>Clear Items</button>
    </div>
  )
}
