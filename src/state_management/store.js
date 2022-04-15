import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiSlice from './slices/ui.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import cartSlice from './slices/cart.slice'
import genreSlice from './slices/genre.slice'
import beatSlice from './slices/beat.slice'
import messageSlice from './slices/message.slice'
import licenseSlice from './slices/license.slice'
import authSlice from './slices/auth.slice'

const rootReducer = combineReducers({
  ui: uiSlice,
  cart: cartSlice,
  genre: genreSlice,
  beat: beatSlice,
  message: messageSlice,
  license: licenseSlice,
  auth: authSlice,
})


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer =  persistReducer(persistConfig, rootReducer)
let store = configureStore({reducer: persistedReducer})
let persistor = persistStore(store)

export { store, persistor}
