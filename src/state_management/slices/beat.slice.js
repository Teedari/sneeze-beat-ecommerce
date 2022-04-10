import { createSlice } from "@reduxjs/toolkit";
import beatCreateThunk from "../thunks/beat/beat.create.thunk";
import beatDeleteThunk from "../thunks/beat/beat.delete.thunk";
import beatFetchThunk from "../thunks/beat/beat.fetch.thunk";
import beatUpdateThunk from "../thunks/beat/beat.update.thunk";
import { HttpStatus } from "../types";

const initialState = {
  fetchingState: HttpStatus.IDLE,
  sendingState: HttpStatus.IDLE,
  list: [],
  count: 0
};

const beatSlice = createSlice({
  name: "beatSlice",
  initialState,
  extraReducers: {
    /** PENDING REQUEST */
    [beatCreateThunk.pending.type]: (state, actions) => {
      state.sendingState = HttpStatus.PENDING;
    },
    [beatFetchThunk.pending.type]: (state, actions) => {
      state.fetchingState = HttpStatus.PENDING;
    },
    [beatUpdateThunk.pending.type]: (state, actions) => {
      state.sendingState = HttpStatus.PENDING;
    },
    [beatDeleteThunk.pending.type]: (state, actions) => {
      state.sendingState = HttpStatus.PENDING;
    },

    /** FULFILED REQUESTS */
    [beatCreateThunk.fulfilled.type]: (state, { payload }) => {
      state.list.push(payload);
      state.sendingState = HttpStatus.FULFILLED;
    },
    [beatFetchThunk.fulfilled.type]: (state, { payload }) => {
      state.list = payload;
      state.count = payload.length
      state.fetchingState = HttpStatus.FULFILLED;
    },
    [beatUpdateThunk.fulfilled.type]: (state, { payload }) => {
      const selectedBeatIndex = state.list.findIndex(
        (beat) => beat.key === payload.key
      );

      const data = state.list[selectedBeatIndex];
      state.list[selectedBeatIndex] = { ...data, ...payload };
      state.sendingState = HttpStatus.FULFILLED;
    },
    [beatDeleteThunk.fulfilled.type]: (state, { payload }) => {
      const new_list = state.list.filter((beat) => beat.key !== payload);
      state.list = new_list;
      state.count-=1
      state.sendingState = HttpStatus.FULFILLED;
    },

    /** REJECETED REQUESTS */
    [beatCreateThunk.rejected.type]: (state, { payload }) => {
      state.sendingState = HttpStatus.REJECTED;
    },
    [beatFetchThunk.rejected.type]: (state, { payload }) => {
      state.fetchingState = HttpStatus.REJECTED;
    },
    [beatUpdateThunk.rejected.type ]: (state, { payload }) => {
      state.sendingState = HttpStatus.REJECTED;
    },
    [beatDeleteThunk.rejected.type]: (state, { payload }) => {
      state.sendingState = HttpStatus.REJECTED;
    },
  },
});

export default beatSlice.reducer;
