import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiSlice from './slices/ui.slice'
import deezerSlice from './slices/deezer.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import cartSlice from './slices/cart.slice'
import genreSlice from './slices/genre.slice'
import beatSlice from './slices/beat.slice'
import messageSlice from './slices/message.slice'
import licenseSlice from './slices/license.slice'

const rootReducer = combineReducers({
  ui: uiSlice,
  deezer: deezerSlice,
  cart: cartSlice,
  genre: genreSlice,
  beat: beatSlice,
  message: messageSlice,
  license: licenseSlice
})


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer =  persistReducer(persistConfig, rootReducer)
let store = configureStore({reducer: persistedReducer})
let persistor = persistStore(store)

export { store, persistor}
