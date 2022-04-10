import { createAsyncThunk } from "@reduxjs/toolkit";
import Genre from "../../../models/Genre";
import HttpStatus from "../../../utils/HttpStatus";

const genreListAllThunk = createAsyncThunk(
  'genre/list/all',
  async (_, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
     const snapshots = await Genre.all()

     return Promise.resolve(Genre.convert_to_genre(snapshots))
    } catch (error) {
      return rejectWithValue(error)
    }
  },
  {
    condition: (_,{getState, extra}) => {
      const { genre } = getState()
      if(genre.fetchingState === HttpStatus.FULFILED){
        return false;
      }
    }
  }
)


export default genreListAllThunk