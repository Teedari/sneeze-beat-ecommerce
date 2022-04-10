import { createAsyncThunk } from "@reduxjs/toolkit";
import Genre from "../../models/Genre";

const genreCreateThunk = createAsyncThunk(
  'genre/create', 
  async ({data, form},{fulfiledWithValue, rejectWithValue}) => {
  return Genre.create(data.name, data.description)
  .then( snapshot => {
    form.resetFields()
    return Promise.resolve({key: snapshot.id, ...data})
  })
  .catch( err => {
    console.log(err)
    return rejectWithValue(err)
  })
})

export default genreCreateThunk