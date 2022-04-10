import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import Beat from "../../../models/Beat";

const beatCreateThunk = createAsyncThunk(
  'beat/create',
  async (data, {fulfillWithValue, rejectWithValue, getState}) => {

    try {
      const snapshot = await Beat.create(data.name, data.genre, data.bpm, data.general_price, data.exclusive_price, data.path, data.coverUrl, data.beatUrl)
      message.success('Beat Created Successfully')
      return fulfillWithValue({key: snapshot.id, ...data})
    } catch (error) {
      message.error('Something went wrong, your beat creation was unsuccessful')
      return rejectWithValue(error)
    }
  }
)


export default beatCreateThunk