import { createSlice } from '@reduxjs/toolkit'

const initialState = { cart: [], totalQuantity: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (!existingItem) {
        const item = action.payload
        const itemtoadd = item.quantity + 1
        item.quantity = itemtoadd
        state.cart.push(item)

        state.totalQuantity++
      } else {
        existingItem.quantity++
        state.totalQuantity++
      }
    },
    removeFromCart(state, action) {
      const existingItem = state.cart.find(
        (product) => action.payload.id === product.id
      )
      if (existingItem.quantity === 1) {
        state.cart.filter((product) => product !== existingItem)
        state.totalQuantity--
      } else {
        existingItem.quantity--
        state.totalQuantity--
      }
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
