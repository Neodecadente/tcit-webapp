import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const createNewPost = createAction(
  '[Posts] Create New Post',
  props<{ post: Post }>()
);

export const createNewPostSuccess = createAction(
  '[Posts] Create New Post Success',
  props<{ post: Post }>()
);

export const createNewPostFailure = createAction(
  '[Posts] Create New Post Failure',
  props<{ error: any }>()
);

export const formInputError = createAction(
  '[Post Form] Form Input Error',
  props<{ error: string }>()
);

export const deletePost = createAction(
  '[Posts] Delete Post',
  props<{ post: Post }>()
);

export const deletePostSuccess = createAction(
  '[Posts] Delete Post Success',
  props<{ post: Post }>()
);

export const deletePostFailure = createAction(
  '[Posts] Delete Post Failure',
  props<{ error: any }>()
);

export const listPosts = createAction(
  '[Posts] List Posts'
);

export const listPostsSuccess = createAction(
  '[Posts] List Posts Success',
  props<{ data: Post[] }>()
);

export const listPostsFailure = createAction(
  '[Posts] List Posts Failure',
  props<{ error: any }>()
);

export const filterPosts = createAction(
  '[Posts] Filter Posts',
  props<{ filter: string }>()
);