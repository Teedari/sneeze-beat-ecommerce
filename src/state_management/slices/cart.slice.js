import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  count: 0
}


const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItemToCart: ( state, {payload}) => {
      state.items.push(payload)
      state.count = state.items.length
    },
    removeItemFromCart: ( state, {payload} ) => {
      const items = state.items.filter( item => item.id !== payload?.id)
      state.items = items
      if(state.items.count !== 0){
        state.count = state.items.length
      }
    },
  }
})



export const {addItemToCart, removeItemFromCart} = cartSlice.actions

export default cartSlice.reducer