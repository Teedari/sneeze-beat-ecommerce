import { createAsyncThunk } from '@reduxjs/toolkit'
import { message } from 'antd'
import License from '../../../models/License'


const licenseCreateThunk = createAsyncThunk(
  'license/create',
  async (data, {fulfillWithValue, rejectWithValue}) => {
    try{
      const snapshots = await License.create(data.license_content, data.price_tag)
      return fulfillWithValue({key: snapshots.id, ...data})
    }
    catch(error){
      message.error('Create License was unsuccessful, try again')
      return rejectWithValue(error)
    }
  }
)


export default licenseCreateThunk