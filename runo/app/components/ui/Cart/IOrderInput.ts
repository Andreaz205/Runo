export type IDeliveryType = 'delivery' | 'pickup'


export interface IOrderInput {
    userName: string
    address: string
    comment: string
    email: string
    phone: number
    deliveryType: IDeliveryType
}
