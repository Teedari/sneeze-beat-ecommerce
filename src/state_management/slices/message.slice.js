import { createSlice } from "@reduxjs/toolkit";
import messageFetchThunk from "../thunks/message/message.fetch.thunk";
import { HttpStatus } from "../types";


const initialState = {
  list: [],
  count: 0,
  fetchingState: HttpStatus.IDLE
}

const messageSlice = createSlice({
  name: 'messageSlice',
  initialState,
  extraReducers: {
    /** PENDING REQUESTS */
    [messageFetchThunk.pending.type]: ( state , action) => {
      state.fetchingState  = HttpStatus.PENDING
    },

    /** FULFILLED REQUESTS */
    [messageFetchThunk.fulfilled.type]: ( state , { payload }) => {
      state.list = payload
      state.count = payload.length
      state.fetchingState  = HttpStatus.FULFILLED
    },
    
    /** REJECTED REQUESTS */
    [messageFetchThunk.rejected.type]: ( state , action) => {
      state.fetchingState  = HttpStatus.PENDING
    },
  }
})


export default messageSlice.reducer