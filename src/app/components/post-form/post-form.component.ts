import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../store/models/post.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  name: string = '';
  description: string = '';
  @Output() create: EventEmitter<Post> = new EventEmitter<Post>();

  onCreate() {
    console.log('post-form.component.ts - onCreate');
    const newPost: Post = { id: Date.now(), nombre: this.name, descripcion: this.description };
    this.create.emit(newPost);
    this.name = '';
    this.description = '';
  }
}
