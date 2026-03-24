import { Component, inject } from '@angular/core';
import { ShapeComponent } from 'app/components/shape/shape.component';
import { ScaleStateService } from 'app/services/scale-state.service';
import { ToneAndScaleComponent } from './tone-and-scale/tone-and-scale.component';
import { OptionsComponent } from './options/options.component';
import { ScaleNotesComponent } from './scale-notes/scale-notes.component';
import { ShapesHelpModalComponent } from './shapes-help-modal/shapes-help-modal.component';
import { SectionTitleDirective } from "app/components/core/ui/section-title/section-title.directive";

@Component({
  selector: 'app-shapes',
  imports: [
    ShapeComponent,
    ToneAndScaleComponent,
    OptionsComponent,
    ScaleNotesComponent,
    ShapesHelpModalComponent,
    SectionTitleDirective
  ],
  templateUrl: './shapes.component.html',
  styleUrl: './shapes.component.css'
})
export class ShapesComponent {
  private readonly state = inject(ScaleStateService);

  readonly caged = this.state.caged;
  readonly key = this.state.key;
  readonly stringCount = this.state.stringCount;
}
