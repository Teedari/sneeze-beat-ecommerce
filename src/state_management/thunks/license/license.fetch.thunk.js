import { createAsyncThunk } from '@reduxjs/toolkit'
import { message } from 'antd'
import License from '../../../models/License'


const licenseFetchThunk = createAsyncThunk(
  'license/fetch',
  async (_, {fulfillWithValue, rejectWithValue}) => {
    try{
      const snapshots = await License.get()
      return fulfillWithValue(License.convert(snapshots))
    }
    catch(error){
      message.error('<h2>Licenses loading failed, try reloading the page</h2>')
      return rejectWithValue(error)
    }
  }
)


export default licenseFetchThunk