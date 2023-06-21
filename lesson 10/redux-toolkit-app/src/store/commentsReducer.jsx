import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
  isLoading: false
}

export const getCommentsThunk = createAsyncThunk('posts/getPosts',
  async function (id, {rejectWithValue}) {
    try {
      await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const commentsReducer = createReducer(initialState, builder => {
  
  builder.addCase(getCommentsThunk.fulfilled, (state, action) => ({
    ...state,
    comments: action.payload
  }))
})