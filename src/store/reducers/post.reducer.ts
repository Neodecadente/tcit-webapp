import { createReducer, on } from "@ngrx/store";
import * as PostsActions from "../actions/post.actions";
import { Post } from "../models/post.model";

export interface PostsState {
  data: Post[];
  filteredData: Post[];
  loading: boolean;
  error: any;
}

export const initialState: PostsState = {
  data: [],
  filteredData: [],
  loading: false,
  error: null,
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.createNewPost, (state) => ({
    ...state,
    loading: true,
  })),
  on(PostsActions.createNewPostSuccess, (state, { post }) => ({
    ...state,
    data: [...state.data, post],
    loading: false,
  })),
  on(PostsActions.createNewPostFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(PostsActions.formInputError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PostsActions.deletePost, (state) => ({
    ...state,
    loading: true,
  })),
  on(PostsActions.deletePostSuccess, (state, { post }) => ({
    ...state,
    data: state.data.filter((p) => p.id !== post.id),
    loading: false,
  })),
  on(PostsActions.deletePostFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(PostsActions.filterPosts, (state, { filter }) => ({
    ...state,
    filteredData: state.data.filter(post => post.nombre.includes(filter))
  })),
  on(PostsActions.listPosts, (state) => ({
    ...state,
    loading: true,
  })),
  on(PostsActions.listPostsSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(PostsActions.listPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);