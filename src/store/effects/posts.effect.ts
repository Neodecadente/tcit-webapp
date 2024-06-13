import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import * as PostsActions from '../actions/posts.actions';
import { PostsService } from '../services/posts.service';

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
          map(data => PostsActions.listPostsSuccess({ data })),
          catchError(error => of(PostsActions.listPostsFailure({ error })))
        );
      })
    ));
}