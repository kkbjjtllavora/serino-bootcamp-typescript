import React, { useEffect } from 'react'
import useCartListModel from '../../../models/useCartListModel'
import List from '../../components/List'
import { TCartDataLoad, TCartDataIn, TCartDataOut } from '../../../types/cart'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'

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
    <TableContainer component={Paper}>
      <div>
        <h2>{dataIn.cartTitle}</h2>
      </div>

      {isLoading ? <div>Loading...</div> : <List data={cartList} />}
    </TableContainer>
  )
}
