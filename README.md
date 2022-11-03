# Serino Shopping Cart Mni App

- Serino Shopping Cart ( v1.11.0 )

![Mini App Shopping Cart](https://github.com/kkbjjtllavora/serino-bootcamp-typescript/blob/master/images/mini-app-ss-a.JPG?raw=true)

Serino shopping cart allows you to add a shopping cart list to your app with ease. This is easy to setup, you can install it in less than 10sec.

## Installation

```sh
npm install serino-bootcamp-typescript
```

## Usage

```sh
import React, { useEffect, useState } from 'react'
import { CartList } from 'serino-bootcamp-typescript'
import axios, { AxiosResponse } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CartListPage() {
  const [errorMessage, setErrorMessage] = useState<string>('')

  /**
   * Sample Data On data.json
    [
      { "id": 1, "name": "Birthday Cake", "price": "2.00", "quantity": 2 },
      { "id": 2, "name": "Party Cups", "price": "3.55", "quantity": 3 },
      { "id": 3, "name": "Poung of Beef", "price": "2.56", "quantity": 5 },
      { "id": 4, "name": "Bullet-proof vest", "price": "4.56", "quantity": 6 },
      {
        "id": 5,
        "name": "Motor helmet",
        "price": "7.89",
        "quantity": 4
      }
    ]
  */
  const cartListPromise: Promise<AxiosResponse<any, any>> = axios.get('./data.json')

  useEffect(() => {
    errorMessage && toast(errorMessage)
  }, [errorMessage])

  return (
    <div>
      <ToastContainer />

      <CartList
        dataIn={{ cartTitle: 'Serino Shopping Cart' }}
        dataLoad={{ cartList: cartListPromise }}
        dataOut={{ errorMessage: setErrorMessage }}
      />
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

  dataOut: {
    errorMessage: (message: string) => void
  }
```

## Changelogs

```sh
- v1.11.0 - Transfer styling to mini-app repo
- v1.10.0 - Update mini app image on readme
- v1.9.0 - Add list titles
- v1.8.0 - Transfer price and quantity to the left of the name
- v1.7.0 - Update the button on the list
- v1.6.0 - Update the whole UI
- v1.5.0 - Remove inline styling
- v1.4.0 - Remove styling
- v1.3.0 - Adjust the import of the css
- v1.2.0 - Add css styling on the list
- v1.1.1 - Remove button
- v1.1.0 - Add new parameters on list
- v1.0.10 - Update image on npm
- v1.0.9 - Update README by adding node version
- v1.0.8 - Add dataOut parameter
.....
.....
```

## Peer Dependecies

```sh
"react": ">=16"
```

## Node Version

```sh
v14.15.1
```
