import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PostsActions from '../actions/post.actions';
import { PostsService } from '../services/post.service';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) { }

  listPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.listPosts),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map(data => {
            return PostsActions.listPostsSuccess({ data });
          }),
          catchError(error => {
            return of(PostsActions.listPostsFailure({ error }));
          })
        );
      })
    ));
}