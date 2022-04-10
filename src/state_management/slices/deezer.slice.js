import { createSlice } from "@reduxjs/toolkit";
import getPlaylistThunk from "../thunks/deezer.thunk";
import { HttpStatus } from "../types";



const initialState = {
  data: [],
  playlist: {
    recommended: [],
    trending: []
  },
  fetchState: HttpStatus.IDLE
}


const deezeSlice = createSlice({
  name: 'deezer',
  initialState,
  extraReducers: {
    [getPlaylistThunk.fulfilled.type]: (state, {payload}) => {
      state.data = payload;

      if(payload.length !== 0){
        const divide = payload.length / 2
        state.playlist.recommended = payload.slice(0, divide)
        state.playlist.trending = payload.slice(divide + 1)
      }

      state.fetchState = HttpStatus.FULFILLED
    },
    [getPlaylistThunk.pending.type]: (state) => {
      state.fetchState = HttpStatus.PENDING
    },
    [getPlaylistThunk.rejected.type]: (state) => {
      state.fetchState = HttpStatus.REJECTED
    }
  }
})

// export const {} =  deezeSlice.actions


export default deezeSlice.reducer