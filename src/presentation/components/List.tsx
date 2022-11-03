import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table'
import DeleteIcon from '@material-ui/icons/Delete'

export default function List({ data }: { data: [] }) {
  console.log(data)
  return (
    <Table aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell>Product Name</TableCell>
          <TableCell align='right'>Quantity</TableCell>
          <TableCell align='right'>Price</TableCell>
          <TableCell align='right'>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item: { name: string; price: string; quantity: number }, i) => (
          <TableRow key={i}>
            <TableCell component='th' scope='row'>
              {item.name}
            </TableCell>
            <TableCell align='right'>{item.price}</TableCell>
            <TableCell align='right'>{item.quantity}</TableCell>
            <TableCell align='right'>
              <DeleteIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
