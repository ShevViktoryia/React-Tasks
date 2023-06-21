import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const ADD_POST = "ADD_POST";
export const GET_POST = "GET_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const IS_LOADING = "IS_LOADING";

const initialState = {
  posts: [],
  isLoading: false
}

export const getPostThunk = createAsyncThunk('posts/getPosts',
  async function (_, {rejectWithValue}) {
    try {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=15`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addPostThunk = createAsyncThunk('posts/addPosts',
  async function (post, {rejectWithValue}) {
    const newPost = {
      title: post.title,
      body: post.body
    }
    try {
      const {data} = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {...newPost});
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deletePostThunk = createAsyncThunk('posts/deletePosts',
  async function (id, {rejectWithValue}) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const updatePostThunk = createAsyncThunk('posts/updatePosts',
  async function (id, {rejectWithValue}) {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const postsReducer = createReducer(initialState, builder => {
  
  builder.addCase(getPostThunk.fulfilled, (state, action) => ({
    ...state,
    posts: action.payload
  }))

  builder.addCase(addPostThunk.fulfilled, (state, action) => ({
    ...state,
    posts: [...state.posts, action.payload]
  }))

  builder.addCase(deletePostThunk.fulfilled, (state, action) => ({
    ...state,
    posts: state.posts.filter(post => post.id != action.payload)
  }))

  builder.addCase(updatePostThunk.fulfilled, (state, action) => ({
    ...state,
    posts: state.posts.map(post => post.id == action.payload ? [...post, action.payload] : post)
  }))
})
