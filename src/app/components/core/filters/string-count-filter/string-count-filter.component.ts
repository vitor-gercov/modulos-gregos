import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-count-filter',
  imports: [FormsModule],
  templateUrl: './string-count-filter.component.html',
})
export class StringCountFilterComponent {
  stringCount = model<number>(6);
}
