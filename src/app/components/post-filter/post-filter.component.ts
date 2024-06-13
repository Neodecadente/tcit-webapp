import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent {
  filter: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.filter);
  }
}
