import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";



import { FeedbackService } from ".";
import { Place } from "@/entities/place";

enum FEEDBACK_THUNKS_ACTIONS {
  ADD_FEEDBACK = "feedbacks/addFeedback",
  UPDATE_FEEDBACK = "feedbacks/updateFeedback",
  DELETE_FEEDBACK = "feedbacks/deleteFeedback",
}

type RejectValue = {
  message: string;
};

export const addFeedback = createAsyncThunk<
  Place,
  { comment: string, score: number, placeId: number },
  { rejectValue: RejectValue }
>(
  FEEDBACK_THUNKS_ACTIONS.ADD_FEEDBACK,
  async ({comment, score, placeId}, { rejectWithValue }) => {
    try {

      return await FeedbackService.createFeedback(
        comment, score, placeId
      );
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);


export const removeFeedback = createAsyncThunk<
Place,
  { id: number },
  { rejectValue: RejectValue }
>(FEEDBACK_THUNKS_ACTIONS.DELETE_FEEDBACK, async ( {id} , { rejectWithValue }) => {
  try {
   return await FeedbackService.deleteFeedback(id);
    
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});

export const updateFeedback = createAsyncThunk<
Place,
{ id: number, comment: string, score:number, placeId: number },
  { rejectValue: RejectValue }
>(FEEDBACK_THUNKS_ACTIONS.UPDATE_FEEDBACK, async ( {id, comment, score, placeId} , { rejectWithValue }) => {
  try {
   return await FeedbackService.updateFeedback(id, comment, score, placeId);
    
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({ message: err.message });
  }
});


