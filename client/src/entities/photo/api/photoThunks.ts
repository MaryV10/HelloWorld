import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { PhotoService } from ".";
import { Place } from "@/entities/place";

enum PHOTO_THUNKS_ACTIONS {
  ADD_PHOTO = "photos/addPhoto",
  DELETE_PHOTO = "photos/deletePhoto",
}

type RejectValue = {
  message: string;
};

export const addPhoto = createAsyncThunk<
  Place,
  { imageUrl: string, placeId: number },
  { rejectValue: RejectValue }
>(
  PHOTO_THUNKS_ACTIONS.ADD_PHOTO,
  async ({ imageUrl, placeId}, { rejectWithValue }) => {
    try {
        
      return await PhotoService.uploadPhoto(
        imageUrl, placeId
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);


export const removePhoto = createAsyncThunk<
  Place,
  { id: number },
  { rejectValue: RejectValue }
>(PHOTO_THUNKS_ACTIONS.DELETE_PHOTO, async ( {id} , { rejectWithValue }) => {
  try {
   return  await PhotoService.deletePhoto(id);
    
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});


