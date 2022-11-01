import React from 'react'

export default function List({ data }: { data: [] }) {
  console.log(data)
  return (
    <div style={{ padding: 20 }}>
      {data.map((item: { title: string }, i) => {
        return (
          <div
            key={i}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              padding: 20,
              border: '1px solid black',
              margin: 10,
            }}
          >
            <div>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}
