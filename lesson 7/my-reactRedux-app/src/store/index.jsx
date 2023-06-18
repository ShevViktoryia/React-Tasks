import { legacy_createStore as createStore } from "redux";
import {postsReducer} from "./postsReducer"

export const store = createStore(postsReducer);