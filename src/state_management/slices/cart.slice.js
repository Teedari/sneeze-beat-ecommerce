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
      const price = payload.type.toLowerCase() === 'general' ? payload.data?.general?.price : payload.data?.exclusive?.price
      const label = payload.type.toLowerCase() === 'general' ? payload.data?.general?.label : payload.data?.exclusive?.label
      state.items.push({name: payload.data?.name, assets: payload.data?.assets, price, label})
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