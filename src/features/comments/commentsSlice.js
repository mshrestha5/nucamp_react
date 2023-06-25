//import { COMMENTS } from "../../app/shared/oldData/COMMENTS";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(`${baseUrl}/comments`);

    //const response = await fetch(baseUrl + "comments ");
    //return response.json();

    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    } else {
      const data = await response.json();
      return data;
    }
  }
);

const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});
export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
