import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import UserProfile from "../../../models/User";
import PersistentStorage from "../../../utils/persistent_storage/storage.persistent";
import urls from "../../../utils/routes/page.routes";

const authFetchUserThunk = createAsyncThunk(
  "auth/fetch/user",
  async ({uid, navigate}, { fulfillWithValue, rejectWithValue }) => {
    return UserProfile.getUser(uid)
    .then( snaphots => {
      PersistentStorage.activateUser({username: snaphots.data().username},  UserProfile.USER_ROLE)
      navigate(urls.homepage)
      return fulfillWithValue(snaphots.data())
    })
    .catch( error  => {
      navigate(urls.signin)
      message.error('Something went wrong. Please try again.')
      return rejectWithValue(error)
    })
  }
);

export default authFetchUserThunk
