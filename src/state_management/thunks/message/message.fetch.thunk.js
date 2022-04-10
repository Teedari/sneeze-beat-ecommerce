import { createAsyncThunk } from '@reduxjs/toolkit'
import { message } from 'antd'
import Message from '../../../models/Message'


const messageFetchThunk = createAsyncThunk(
  'message/fetch',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try{
      const snapshots = await Message.get()
      return fulfillWithValue(Message.convert(snapshots))
    }
    catch(error){
      message.error('<h2>Messages loading failed, try reloading the page</h2>')
      return rejectWithValue(error)
    }
  }
)


export default messageFetchThunk