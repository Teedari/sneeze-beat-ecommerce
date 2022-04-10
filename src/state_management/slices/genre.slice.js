import { createSlice } from "@reduxjs/toolkit";
import HttpStatus from "../../utils/HttpStatus";
import genreCreateThunk from "../thunks/genre.thunk";
import genreDeleteThunk from "../thunks/genre/genre.delete.thunk";
import genreListAllThunk from "../thunks/genre/genre.list.thunk";

const initialState = {
  list: [],
  count: 0,
  fetchingState: HttpStatus.IDLE,
};

const genreSlice = createSlice({
  name: "genreSlice",
  initialState,
  extraReducers: {
    /** PENDING REQUESTS */
    [genreCreateThunk.pending.type]: (state) => {
      state.fetchingState = HttpStatus.PENDING;
    },

    /** FULFILED REQUESTS */
    [genreCreateThunk.fulfilled.type]: (state, { payload }) => {
      state.list.push(payload);
      state.count += 1;
      state.fetchingState = HttpStatus.FULFILED;
    },
    [genreListAllThunk.fulfilled.type]: (state, { payload }) => {
      state.list = payload;
      state.count = payload.length;
      state.fetchingState = HttpStatus.FULFILED;
    },
    [genreDeleteThunk.fulfilled.type]: (state, { payload }) => {
      const undeletedGenres = state.list.filter(
        (genre) => genre.key !== payload
      );
      state.list = undeletedGenres;
      state.count -= 1;
      state.fetchingState = HttpStatus.FULFILED;
    },

    /** REJECT REQUESTS */
    [genreCreateThunk.rejected.type]: (state, payload) => {
      state.fetchingState = HttpStatus.REDJECTED;
    },
  },
});

export default genreSlice.reducer;
