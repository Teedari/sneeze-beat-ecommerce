import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../configs/axios.config";



const getPlaylistThunk = createAsyncThunk(
  'fetch/playlist',
  async (_,{rejectWithValue, fulfillWithValue}) => {
    return instance.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/10141072982',)
      .then( res => {
        console.log(res)
        return fulfillWithValue(res.data.tracks.data)
      })
      .catch( err => {
        console.log("ERRROR")
        console.log(err)
        return rejectWithValue(err)
      })
  }
)


export default getPlaylistThunk