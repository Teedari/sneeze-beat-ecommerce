import { createAsyncThunk } from '@reduxjs/toolkit'
import { message } from 'antd'
import Message from '../../../models/Message'


const messageCreateThunk = createAsyncThunk(
  'message/fetch',
  async (data, {fulfillWithValue, rejectWithValue}) => {
    try{
      const snapshots = await Message.create(data.name, data.email, data.message)
      /* FIXME: authenticated user also */
      return fulfillWithValue({key: snapshots.id, ...data})
    }
    catch(error){
      message.error('<h2>Messages loading failed, try reloading the page</h2>')
      return rejectWithValue(error)
    }
  }
)


export default messageCreateThunk