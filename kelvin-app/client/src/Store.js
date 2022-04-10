import { configureStore } from "@reduxjs/toolkit";
import { accessTokenSlice } from "./redux/Token";

export default configureStore({
  reducer: {
    accessToken: accessTokenSlice,
  }
});