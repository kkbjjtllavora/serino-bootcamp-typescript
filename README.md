# Serino Shopping Cart Mni App

- Serino Shopping Cart ( v1.0.8 )

![Mini App Shopping Cart](https://github.com/kkbjjtllavora/serino-bootcamp-typescript/blob/HEAD/images/mini-app-ss.JPG?raw=true)

Serino shopping cart allows you to add a shopping cart list to your app with ease. This is easy to setup, you can install it in less than 10sec.

## Installation

```sh
npm install serino-bootcamp-typescript
```

## Usage

```sh
import React from 'react'
import { CartList } from 'serino-bootcamp-typescript'
import axios, { AxiosResponse } from 'axios'

export default function CartListPage() {
  const cartListPromise: Promise<AxiosResponse<any, any>> = axios.get('https://jsonplaceholder.typicode.com/todos')

  return (
    <div>
      <h2>Shopping Cart</h2>
      <CartList dataIn={{ buttonTitle: 'Hello' }} dataLoad={{ cartList: cartListPromise }} />
    </div>
  )
}
```

## Types

```sh
  dataLoad: {
    cartList: Promise<AxiosResponse<any, any>>
  }

  dataIn: {
    buttonTitle: string
  }
```

## Changelogs

```sh
- v1.0.10 - Update image on npm
- v1.0.9 - Update README by adding node version
- v1.0.8 - Add dataOut parameter
- v1.0.7 - Update README.md file. Add definitions
- v1.0.6 - Tested axios call on the example folder
- v1.0.5 - Removed axios call inside the miniapp
- v1.0.4 - Change file name and folders according to convention
- v1.0.3 - Add documentation/README.md
- v1.0.2 - Setup base files and folders
- v1.0.1 - Initial publish (just trying to publish a fresh repo)
```

## Peer Dependecies

```sh
"react": ">=16"
```

## Node Version

```sh
v14.15.1
```
