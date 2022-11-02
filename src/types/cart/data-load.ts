import { AxiosResponse } from 'axios'

export type CartDataLoad = {
  cartList: Promise<AxiosResponse<any, any>>
}
