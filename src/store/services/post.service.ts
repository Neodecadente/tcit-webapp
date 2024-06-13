import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { deletePost } from '../actions/post.actions';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://localhost:5289/api/post';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/${id}`);
  }
}
