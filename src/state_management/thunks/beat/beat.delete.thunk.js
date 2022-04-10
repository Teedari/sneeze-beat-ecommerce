import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import Beat from "../../../models/Beat";





const beatDeleteThunk = createAsyncThunk(
  'beat/delete',
  async (key, {fulfillWithValue, rejectWithValue}) => {
    return Beat.delete(key)
      .then( snapshot => {
        message.success('Beat #:ID deleted successfully'.replace(':ID', key))
        return fulfillWithValue(key)
        
      })
      .catch(error => {
        message.error('Error Occured, Beat #:ID deletion was unsuccessful'.replace(':ID', key))
        return rejectWithValue(error)
      }) 
  }
)

export default beatDeleteThunk