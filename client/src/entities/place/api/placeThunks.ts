import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { PlaceService } from ".";
import type { Place, PlaceList } from "../model";

enum PLACE_THUNKS_ACTIONS {
  GET_ONE_PLACE = "places/getOnePlace",
  GET_APPROVED_PLACES = "places/getApprovedPlaces",
  GET_PENDING_PLACES = "places/getPendingPlaces",
  ADD_PLACE = "places/addPlace",
  APPROVE_PLACE = "places/approvePlace",
  REJECT_PLACE = "places/rejectPlace",
  DELETE_PLACE = "places/deletePlace",
  UPDATE_PLACE = "places/UpdatePlace",
}

type RejectValue = {
  message: string;
};

export const getOnePlace = createAsyncThunk<
  Place,
  { id: number },
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.GET_ONE_PLACE, async ({ id }, { rejectWithValue }) => {
  try {
    return await PlaceService.getOnePlace(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const getApprovedPlaces = createAsyncThunk<
  PlaceList,
  void,
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.GET_APPROVED_PLACES, async (_, { rejectWithValue }) => {
  try {
    return await PlaceService.getAllApprovedPlaces();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const getPendingPlaces = createAsyncThunk<
  PlaceList,
  void,
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.GET_PENDING_PLACES, async (_, { rejectWithValue }) => {
  try {
    return await PlaceService.getAllPendingPlaces();
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const addPlace = createAsyncThunk<
  Place,
  { title: string; description: string; longitude: string; width: string },
  { rejectValue: RejectValue }
>(
  PLACE_THUNKS_ACTIONS.ADD_PLACE,
  async ({ title, description, longitude, width }, { rejectWithValue }) => {
    try {
      return await PlaceService.createPlace(
        title,
        description,
        longitude,
        width
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);

export const approvePlace = createAsyncThunk<
  Place,
  { id: number },
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.APPROVE_PLACE, async ({ id }, { rejectWithValue }) => {
  try {
    return await PlaceService.approvePlace(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const rejectPlace = createAsyncThunk<
  Place,
  { id: number },
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.REJECT_PLACE, async ({ id }, { rejectWithValue }) => {
  try {
    return await PlaceService.rejectPlace(id);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const removePlace = createAsyncThunk<
  number,
  { id: number },
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.DELETE_PLACE, async ({ id }, { rejectWithValue }) => {
  try {
    await PlaceService.deletePlace(id);
    return id;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const updatePlace = createAsyncThunk<
  Place,
  { id: number,
    title: string, description: string, longitude: string, width: string },
  { rejectValue: RejectValue }
>(PLACE_THUNKS_ACTIONS.UPDATE_PLACE, async ({ id,
  title, description, longitude, width }, { rejectWithValue }) => {
  try {
    const newPlace = await PlaceService.updatePlace(id,
      title, description, longitude, width);
    return newPlace;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});
