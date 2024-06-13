import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../store/models/post.model';
import * as PostActions from '../store/actions/post.actions';
import * as PostSelectors from '../store/selectors/post.selector';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostFilterComponent } from './components/post-filter/post-filter.component';
import { PostListComponent } from './components/post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, PostFormComponent, PostFilterComponent, PostListComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tcit-webapp';
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  posts$: Observable<Post[]>;

  constructor(private store: Store<{ posts: Post[] }>) {
    this.posts$ = this.store.select(PostSelectors.selectAllPosts);
  }


  ngOnInit() {
    this.store.dispatch(PostActions.listPosts());
    this.posts$.subscribe({
      next: data => {
        this.posts = data.slice(0, 10);
      },
      error: err => {
        console.error('Error subscribing to posts:', err);
      }
    });
  }

  onSearch(filter: string) {
    this.filteredPosts = this.posts.filter(post => post.title.includes(filter));
  }

  onCreate(post: Post) {
    this.posts.push(post);
    this.onSearch('post'); // Update filtered posts
  }

  onDelete(post: Post) {
    this.posts = this.posts.filter(p => p !== post);
    this.onSearch('post'); // Update filtered posts
  }
}