import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dominant-hand-filter',
  imports: [
    FormsModule
  ],
  templateUrl: './dominant-hand-filter.component.html',
  styleUrl: './dominant-hand-filter.component.css'
})
export class DominantHandFilterComponent {
  dominantHand = model<string>('right_handed');
}
