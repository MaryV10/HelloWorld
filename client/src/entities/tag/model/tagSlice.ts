import { createSlice } from "@reduxjs/toolkit";
import { Tag, TagList } from ".";
import { getAllTags } from "../api/tagThunks";
import { message } from "antd";


type TagSliceType = {
    tagList: TagList;
    tag: Tag | null;
    error: string | null;
  loading: boolean;
}

const initialState: TagSliceType = {
    tagList: [],
    tag: null,
    error: null,
    loading: false,
  };

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Error to load";
        message.error(state.error);
      })
      .addCase(getAllTags.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tagList = action.payload;
      });
  },
});

export default tagSlice.reducer;