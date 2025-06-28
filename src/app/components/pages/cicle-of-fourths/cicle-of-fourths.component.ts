import { Component, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shape } from '@models';
import { ShapeComponent } from 'app/components/shape/shape.component';
import { CicleOfFourths } from 'app/models/cicle-of-fourths.model';

@Component({
  selector: 'app-cicle-of-fourths',
  imports: [
    ShapeComponent,
    FormsModule
  ],
  templateUrl: './cicle-of-fourths.component.html',
  styleUrl: './cicle-of-fourths.component.css'
})
export class CicleOfFourthsComponent {
  selectedShape = model<string>('shape_1');
  shapes = computed<Shape[]>(() => new CicleOfFourths(this.selectedShape()).shapes);
}
