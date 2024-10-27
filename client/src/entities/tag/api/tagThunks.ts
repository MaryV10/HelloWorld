import { createAsyncThunk } from "@reduxjs/toolkit";
import { TagService } from ".";
import { AxiosError } from "axios";
import { TagList } from "../model";

enum TAG_THUNKS_ACTIONS {
    GET_ALL_TAGS = "tag/GET_ALL_TAGS"
}

type RejectValue = {
    message: string;
  };
  

  export const getAllTags = createAsyncThunk<
    TagList,
    void,
    { rejectValue: RejectValue }
  >(TAG_THUNKS_ACTIONS.GET_ALL_TAGS, async (_, { rejectWithValue }) => {
    try {
      return await TagService.getAllTags();
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  })