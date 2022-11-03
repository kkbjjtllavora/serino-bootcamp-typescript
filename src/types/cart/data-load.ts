import { AxiosResponse } from 'axios'

export type TCartDataLoad = {
  cartList: Promise<AxiosResponse<any, any>>
}
