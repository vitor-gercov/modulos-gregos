import { Component, computed, inject, model, ModelSignal, Signal, signal } from '@angular/core';
import { Shape } from '../../../models';
import { FormsModule } from '@angular/forms';
import { CAGED } from '../../../models/caged.model';
import { ShapeComponent } from 'app/components/shape/shape.component';
import { DominantHandFilterComponent } from 'app/components/core/filters/dominant-hand-filter/dominant-hand-filter.component';
import { ToneSelectorComponent } from 'app/components/core/filters/tone-selector/tone-selector.component';
import { TranspositionService } from 'app/services/transposition.service';
import { HelpModalComponent } from 'app/components/core/ui/help-modal/help-modal.component';
import { SectionTitleDirective } from 'app/components/core/ui/section-title/section-title.directive';

const SCALE_LABELS: Record<string, string> = {
  major: 'Maior',
  penta: 'Pentatônica',
  penta_blues: 'Penta Blues',
};

const INTERVAL_NAMES: Record<number, string> = {
  0: 'T', 1: '2m', 2: '2M', 3: '3m', 4: '3M',
  5: '4J', 6: 'TT', 7: '5J', 8: '6m', 9: '6M', 10: '7m', 11: '7M',
};

@Component({
  selector: 'app-shapes',
  imports: [
    ShapeComponent,
    DominantHandFilterComponent,
    ToneSelectorComponent,
    HelpModalComponent,
    SectionTitleDirective,
    FormsModule,
  ],
  templateUrl: './shapes.component.html',
  styleUrl: './shapes.component.css'
})
export class ShapesComponent {
  scaleSelected: ModelSignal<string> = model<string>('major');
  dominantHand = model<string>('right_handed');
  key = model<string>('C');

  optionsOpen = signal(false);
  scaleNotesOpen = signal(false);

  private transposition = inject(TranspositionService);

  caged: Signal<Shape[]> = computed(() => {
    const shapes = new CAGED(this.scaleSelected(), this.dominantHand()).shapes;
    return this.transposition.transposeShapes(shapes, this.key());
  });

  scaleLabel = computed(() =>
    `${this.key()} ${SCALE_LABELS[this.scaleSelected()] ?? this.scaleSelected()}`
  );

  scaleNotes = computed(() => {
    const key = this.key();
    const noteSet = new Set<string>();
    for (const shape of this.caged()) {
      for (const gs of shape.guitarStrings) {
        for (const note of gs.notes) {
          if (note) noteSet.add(note);
        }
      }
    }
    return Array.from(noteSet)
      .map(note => ({ note, distance: this.transposition.semitoneDistance(key, note) }))
      .sort((a, b) => a.distance - b.distance)
      .map(({ note, distance }) => ({ note, interval: INTERVAL_NAMES[distance] ?? '?' }));
  });

  readonly intervalsList = [
    { symbol: 'T',  name: 'Tônica',         semitones: 0,  example: 'C → C'  },
    { symbol: '2m', name: 'Segunda menor',   semitones: 1,  example: 'C → Db' },
    { symbol: '2M', name: 'Segunda maior',   semitones: 2,  example: 'C → D'  },
    { symbol: '3m', name: 'Terça menor',     semitones: 3,  example: 'C → Eb' },
    { symbol: '3M', name: 'Terça maior',     semitones: 4,  example: 'C → E'  },
    { symbol: '4J', name: 'Quarta justa',    semitones: 5,  example: 'C → F'  },
    { symbol: 'TT', name: 'Trítono',         semitones: 6,  example: 'C → F#' },
    { symbol: '5J', name: 'Quinta justa',    semitones: 7,  example: 'C → G'  },
    { symbol: '6m', name: 'Sexta menor',     semitones: 8,  example: 'C → Ab' },
    { symbol: '6M', name: 'Sexta maior',     semitones: 9,  example: 'C → A'  },
    { symbol: '7m', name: 'Sétima menor',    semitones: 10, example: 'C → Bb' },
    { symbol: '7M', name: 'Sétima maior',    semitones: 11, example: 'C → B'  },
  ];

  readonly scaleIntervals = [
    { name: 'Maior',       intervals: ['T', '2M', '3M', '4J', '5J', '6M', '7M'] },
    { name: 'Pentatônica', intervals: ['T', '2M', '3M', '5J', '6M']             },
    { name: 'Penta Blues', intervals: ['T', '3m', '4J', 'TT', '5J', '7m']       },
  ];
}
