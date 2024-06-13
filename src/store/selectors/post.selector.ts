import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from '../reducers/post.reducer';

export const selectPostState = createFeatureSelector<PostsState>('posts');

export const selectAllPosts = createSelector(
  selectPostState,
  (state: PostsState) => state.data
);
