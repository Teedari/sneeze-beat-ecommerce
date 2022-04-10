import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import Beat from "../../../models/Beat";





const beatFetchThunk = createAsyncThunk(
  'beat/fetch',
  async (data, {fulfillWithValue, rejectWithValue}) => {
    try{
      const snapshots = await Beat.get()
      return fulfillWithValue(Beat.convert(snapshots))
    } 
    catch(error){
      message.error('Error Occured, Beats was not fetched')
      return rejectWithValue(error)
    }   
  }
)

export default beatFetchThunk