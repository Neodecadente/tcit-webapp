import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PostsActions from '../actions/post.actions';
import { PostService } from '../services/post.service';
import { AlertService } from '../../app/alert.service';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private alertService: AlertService
  ) { }

  listPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.listPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map(data => {
            return PostsActions.listPostsSuccess({ data });
          }),
          catchError(error => {
            this.alertService.showAlert(`Error: ${error.message}`, 'error');
            return of(PostsActions.listPostsFailure({ error }));
          })
        );
      })
    ));

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.createNewPost),
      mergeMap(({ post }) => {
        return this.postService.createPost(post).pipe(
          map(data => {
            this.alertService.showAlert('Post creado correctamente', 'success');
            return PostsActions.createNewPostSuccess({ post: data });
          }),
          catchError(error => {
            this.alertService.showAlert(`Error: ${error.message}`, 'error');
            return of(PostsActions.createNewPostFailure({ error }));
          })
        );
      })
    ));
  
  inputError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.formInputError),
      map(({ error }) => {
        this.alertService.showAlert(error, 'error');
      })
    ), { dispatch: false });  

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.deletePost),
      mergeMap(({ post }) => {
        return this.postService.deletePost(post.id).pipe(
          map(() => {
            this.alertService.showAlert('Post eliminado correctamente', 'success');
            return PostsActions.deletePostSuccess({ post });
          }),
          catchError(error => {
            this.alertService.showAlert(`Error: ${error.message}`, 'error');
            return of(PostsActions.deletePostFailure({ error }));
          })
        );
      })
    ));
}
