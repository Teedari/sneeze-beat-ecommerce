import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import UserProfile from "../../../models/User";
import PersistentStorage from "../../../utils/persistent_storage/storage.persistent";
import urls from "../../../utils/routes/page.routes";

const authCreateUserThunk = createAsyncThunk(
  "auth/create/user",
  async ({user, navigate, type}, { fulfillWithValue, rejectWithValue }) => {
    return UserProfile.createUser(user.uid, user?.username, user?.email, type)
    .then( snaphot => {
      PersistentStorage.activateUser(user,  UserProfile.USER_ROLE)
      navigate(urls.homepage)
      return fulfillWithValue(user)
    })
    .catch( error  => {
      navigate(urls.signin)
      message.error('Something went wrong. Please try again.')
      // message.error(error.code)
      return rejectWithValue(error)
    })
  }
);

export default authCreateUserThunk
