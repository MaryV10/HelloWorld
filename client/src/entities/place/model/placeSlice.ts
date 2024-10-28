import { createSlice } from "@reduxjs/toolkit";
import type { Place, PlaceList } from ".";
import { message } from "antd";

import {
  addPlace,
  approvePlace,
  getApprovedPlaces,
  getMyPlaces,
  getOnePlace,
  getPendingPlaces,
  rejectPlace,
  removePlace,
  updatePlace,
} from "../api/placeThunks";

import { addPhoto, removePhoto } from "@/entities/photo/api/photoThunks";
import {
  addFeedback,
  removeFeedback,
  updateFeedback,
} from "@/entities/feedback/api/feedbackThunks";

type PlaceSliceType = {
  places: PlaceList;
  pendingPlaces: PlaceList;
  approvedPlaces: PlaceList;
  allPlaces: PlaceList;
  place: Place | null;
  error: string | null;
  loading: boolean;
};

const initialState: PlaceSliceType = {
  place: null,
  places: [],
  pendingPlaces: [],
  approvedPlaces: [],
  allPlaces: [],
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
        state.place = action.payload;
      })
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
        state.approvedPlaces = action.payload
      })
      //!-----------------------
      .addCase(getMyPlaces.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyPlaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to load";
        message.error(state.error);
      })
      .addCase(getMyPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.places = action.payload;
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
        state.pendingPlaces = action.payload;
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
      // -----------------------
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
        state.place = action.payload;
        state.places = state.places.map((place) => {
          if (place.id === action.payload.id) {
            return action.payload;
          }
          return place;
        });
        state.pendingPlaces = state.pendingPlaces.filter(
          (place) => place.id !== action.payload.id
        );
      })
      // -----------------------
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
        state.place = action.payload;
        state.places = state.places.map((place) => {
          if (place.id === action.payload.id) {
            return action.payload;
          }
          return place;
        });
        state.pendingPlaces = state.pendingPlaces.filter(
          (place) => place.id !== action.payload.id
        );
      })

      // -----------------------
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
        state.places = state.places.filter(
          (place) => place.id !== action.payload
        );
      })
      // -----------------------
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
      })
      // -----------------------
      .addCase(addPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to add";
        message.error(state.error);
      })
      .addCase(addPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.approvedPlaces = state.approvedPlaces.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      })
      // -----------------------
      .addCase(removePhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(removePhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to remove";
        message.error(state.error);
      })
      .addCase(removePhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.approvedPlaces = state.approvedPlaces.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      })
      // -----------------------
      .addCase(addFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to add";
        message.error(state.error);
      })
      .addCase(addFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.approvedPlaces= state.approvedPlaces.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      })
      // -----------------------
      .addCase(removeFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to remove";
        message.error(state.error);
      })
      .addCase(removeFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.approvedPlaces = state.approvedPlaces.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      })

      // -----------------------
      .addCase(updateFeedback.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to remove";
        message.error(state.error);
      })
      .addCase(updateFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.approvedPlaces = state.approvedPlaces.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );
      });
  },
});

export default placeSlice.reducer;
