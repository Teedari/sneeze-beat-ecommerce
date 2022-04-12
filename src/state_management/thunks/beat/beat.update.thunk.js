import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import Beat from "../../../models/Beat";





const beatUpdateThunk = createAsyncThunk(
  'beat/update',
  async (data, {fulfillWithValue, rejectWithValue}) => {
    try{
      const snapshot = await Beat.update(data.key, data.name, data.genre, data.bpm, data?.category, data.general_price, data.exclusive_price)
      message.success(`Beat #${data.key} has been updated successfully`)
      // console.log(data, snapshot)
      return fulfillWithValue(data)
    } 
    catch(error){
      message.error('Error Occured, Beat update was unsuccessful')
      return rejectWithValue(error)
    }   
  }
)

export default beatUpdateThunk