import * as userActions from './user/user.actions'
import * as cartActions from './cart/cart.actions'

export const allActions = {
    ...userActions,
    ...cartActions
}