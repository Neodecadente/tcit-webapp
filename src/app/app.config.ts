import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { postsReducer } from '../store/reducers/post.reducer';
import { PostsEffects } from '../store/effects/post.effect';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ posts: postsReducer }),
    provideEffects([PostsEffects]),
    provideHttpClient()
  ]
};