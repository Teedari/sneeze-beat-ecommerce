import { createAsyncThunk } from "@reduxjs/toolkit";
import Genre from "../../../models/Genre";

const genreDeleteThunk = createAsyncThunk(
  'genre/delete',
  async ({key}, { rejectWithValue }) => {
    try {
     const snapshots = await Genre.delete(key)
     return Promise.resolve(key)
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)


export default genreDeleteThunk