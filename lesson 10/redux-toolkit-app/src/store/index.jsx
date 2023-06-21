import {postsReducer} from "./postsReducer"
import { commentsReducer } from "./commentsReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})