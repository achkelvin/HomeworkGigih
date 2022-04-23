import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            userID: undefined,
            DisplayName: undefined,
            imgSrc: undefined,
        }
    },
    reducers: {
        userID: (state, action) => {
            state.value.userID = action.payload;
        },
        userDisplayName: (state, action) => {
            state.value.DisplayName = action.payload;
        },
        setImgSrc: (state, action) => {
            state.value.imgSrc = action.payload;
        },
    }
})

export const { userID, userDisplayName, setImgSrc } = userSlice.actions;
export default userSlice.reducer;