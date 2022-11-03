import React from 'react'

export default function List({ data }: { data: [] }) {
  console.log(data)
  return (
    <ul>
      <li>
        <div>
          <span className='price'>Price</span>
          <span className='quantity'>Quantity</span>
        </div>
        <span>Product</span>
        <div>&nbsp;</div>
      </li>

      {data.map((item: { name: string; price: string; quantity: number }, i) => {
        return (
          <li key={i}>
            <div>
              <span className='price'>${item.price}</span>
              <span className='quantity'>{item.quantity}</span>
            </div>
            <span>{item.name}</span>
            <div>
              <img
                className='edit'
                src='https://img.icons8.com/external-dashed-line-kawalan-studio/50/000000/external-edit-user-interface-dashed-line-kawalan-studio-2.png'
              />
              <img className='delete' src='https://img.icons8.com/windows/32/000000/trash.png' />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
