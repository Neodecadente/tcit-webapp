import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Post } from '../../../store/models/post.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  name: string = '';
  description: string = '';
  @Output() create: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() error: EventEmitter<string> = new EventEmitter<string>();

  onCreate() {
    if (!this.name || this.name.trim() === '') {
      this.error.emit('Se requiere un nombre para el post');
      return;
    }

    const newPost: Post = { id: Date.now(), nombre: this.name, descripcion: this.description };
    this.create.emit(newPost);
    this.name = '';
    this.description = '';
  }
}
