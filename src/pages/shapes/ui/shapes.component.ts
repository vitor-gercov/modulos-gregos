import { Component, inject } from '@angular/core';
import { ShapeComponent } from 'entities/scale/ui/shape.component';
import { ScaleStateService } from 'entities/scale/model/scale-state.service';
import { ToneAndScaleComponent } from 'features/tone-and-scale/ui/tone-and-scale.component';
import { OptionsComponent } from 'features/scale-options/ui/options.component';
import { ScaleNotesComponent } from 'features/scale-notes/ui/scale-notes.component';
import { ShapesHelpModalComponent } from './shapes-help-modal/shapes-help-modal.component';
import { SectionTitleDirective } from "shared/ui/section-title/section-title.directive";

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
