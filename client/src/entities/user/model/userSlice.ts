import { User } from ".";
import { createSlice } from "@reduxjs/toolkit";
import { refreshAccessToken, signIn, signUp, logout } from "../api/userThunks";
import { message } from "antd";

type UserSliceType = {
    user: User | null;
    error: string | null;
    loading: boolean;
}

const initialState: UserSliceType = {
    user: null,
    error: null,
    loading: false,
  };


  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(refreshAccessToken.pending, (state) => {
          state.loading = true;
        })
        .addCase(refreshAccessToken.rejected, (state) => {
          state.loading = false;
        })
        .addCase(refreshAccessToken.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload.user;
        })
        //-----------------------   signIn  ----------------------- 
        .addCase(signIn.pending, (state) => {
          state.loading = true;
        })
        .addCase(signIn.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Error to login';
          message.error(state.error);
        })
        .addCase(signIn.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload.user;
        })
        //-----------------------   signUp   ----------------------- 
        .addCase(signUp.pending, (state) => {
          state.loading = true;
        })
        .addCase(signUp.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Error to register';
          message.error(state.error);
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload.user;
        })
        //-----------------------   logout   ----------------------- 
        .addCase(logout.pending, (state) => {
          state.loading = true;
        })
        .addCase(logout.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Error to logout';
          message.error(state.error);
        })
        .addCase(logout.fulfilled, (state) => {
          state.loading = false;
          state.error = null;
          state.user = null;
        });
    },
  });
  
  export default userSlice.reducer;
  