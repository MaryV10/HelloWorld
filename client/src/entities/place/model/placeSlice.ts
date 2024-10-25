import { createSlice } from "@reduxjs/toolkit";
import type { Place, PlaceList } from ".";
// import { refreshAccessToken, signIn, signUp, logout } from '../api/userThunks';
import { message } from "antd";
import {  addPlace, approvePlace, getApprovedPlaces, getOnePlace, getPendingPlaces, rejectPlace, removePlace, updatePlace,  } from "../api/placeThunks";

type PlaceSliceType = {
  places: PlaceList;
  place: Place | null;
  error: string | null;
  loading: boolean;
};

const initialState: PlaceSliceType = {
  place: null,
  places: [],
  error: null,
  loading: false,
};

const placeSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getOnePlace.pending, (state) => {
      state.loading = true;
    })
    .addCase(getOnePlace.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Error to load";
      message.error(state.error);
    })
    .addCase(getOnePlace.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.place = action.payload; /////?????????????7
    })
    // -----------------------
      .addCase(getApprovedPlaces.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApprovedPlaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to load";
        message.error(state.error);
      })
      .addCase(getApprovedPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places = action.payload; /////?????????????7
      })
      //!-----------------------
    
         .addCase(getPendingPlaces.pending, (state) => {
          state.loading = true;
        })
        .addCase(getPendingPlaces.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || "Error to load";
          message.error(state.error);
        })
        .addCase(getPendingPlaces.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.places = action.payload; /////?????????????7
        })
             // -----------------------
      .addCase(addPlace.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPlace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to add";
        message.error(state.error);
      })
      .addCase(addPlace.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places.push(action.payload);
      })
//!-----------------------
      .addCase(approvePlace.pending, (state) => {
        state.loading = true;
      })
      .addCase(approvePlace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to update";
        message.error(state.error);
      })
      .addCase(approvePlace.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places = state.places.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      })
      //!-----------------------
      .addCase(rejectPlace.pending, (state) => {
        state.loading = true;
      })
      .addCase(rejectPlace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to update";
        message.error(state.error);
      })
      .addCase(rejectPlace.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places = state.places.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      })
      //!-----------------------
      .addCase(removePlace.pending, (state) => {
        state.loading = true;
      })
      .addCase(removePlace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to remove";
        message.error(state.error);
      })
      .addCase(removePlace.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places = state.places.filter((place) => place.id !== action.payload);
      })
      //!-----------------------
      .addCase(updatePlace.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePlace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to update";
        message.error(state.error);
      })
      .addCase(updatePlace.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places = state.places.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      });
  },
});

export default placeSlice.reducer;
