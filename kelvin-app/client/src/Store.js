import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./redux/Token";
import userSlice from "./redux/Slice";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice
  }
});