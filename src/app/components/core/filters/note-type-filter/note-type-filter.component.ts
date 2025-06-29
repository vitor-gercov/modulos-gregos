import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-type-filter',
  imports: [
    FormsModule
  ],
  templateUrl: './note-type-filter.component.html',
  styleUrl: './note-type-filter.component.css'
})
export class NoteTypeFilterComponent {
  noteType = model<string>('abc');
}
