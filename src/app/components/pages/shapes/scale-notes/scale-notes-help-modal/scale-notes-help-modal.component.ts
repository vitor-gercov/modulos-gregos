import { Component } from '@angular/core';
import { HelpModalComponent } from 'app/components/core/ui/help-modal/help-modal.component';

@Component({
  selector: 'app-scale-notes-help-modal',
  imports: [HelpModalComponent],
  templateUrl: './scale-notes-help-modal.component.html',
  styleUrl: './scale-notes-help-modal.component.css'
})
export class ScaleNotesHelpModalComponent {
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
