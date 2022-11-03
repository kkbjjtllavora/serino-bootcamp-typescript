import { AxiosResponse } from 'axios'

export type TCartDataLoad = {
  /**
   * AxioResponse Sample Data
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
  cartList: Promise<AxiosResponse<any, any>>
}
