import { createSlice } from "@reduxjs/toolkit";
import licenseFetchThunk from "../thunks/license/license.fetch.thunk";
import licenseCreateThunk from "../thunks/message/license.create.thunk";
import { HttpStatus } from "../types";


const initialState = {
  list: [],
  fetchingState: HttpStatus.IDLE,
  sendingState: HttpStatus.IDLE
}

const licenseSlice = createSlice({
  name: 'licenseSlice',
  initialState,
  extraReducers: {
    /** PENDING REQUESTS */
    [licenseFetchThunk.pending.type]: ( state , action) => {
      state.fetchingState  = HttpStatus.PENDING
    },
    [licenseCreateThunk.pending.type]: ( state , action) => {
      state.sendingState  = HttpStatus.PENDING
    },

    /** FULFILLED REQUESTS */
    [licenseFetchThunk.fulfilled.type]: ( state , { payload }) => {
      state.list = payload
      state.fetchingState  = HttpStatus.FULFILLED
    },
    [licenseCreateThunk.fulfilled.type]: ( state , { payload }) => {
      state.list.push(payload)
      state.sendingState  = HttpStatus.FULFILLED
    },
    
    /** REJECTED REQUESTS */
    [licenseFetchThunk.rejected.type]: ( state , action) => {
      state.fetchingState  = HttpStatus.PENDING
    },
    [licenseCreateThunk.rejected.type]: ( state , action) => {
      state.sendingState  = HttpStatus.PENDING
    },
  }
})


export default licenseSlice.reducer