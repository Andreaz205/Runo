import {reducer as userReducer} from '@/store/user/user.slice'
import {reducer as cartReducer} from '@/store/cart/cart.slice'

export const reducers ={
    user: userReducer,
    cart: cartReducer
}