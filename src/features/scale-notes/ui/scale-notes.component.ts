import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CardComponent } from 'shared/ui/card/card.component';
import { CardHelpDirective } from 'shared/ui/card/card-help.directive';
import { AccordionComponent } from 'shared/ui/accordion/accordion.component';
import { ScaleStateService } from 'entities/scale/model/scale-state.service';
import { ScaleNotesHelpModalComponent } from './scale-notes-help-modal/scale-notes-help-modal.component';

@Component({
  selector: 'app-scale-notes',
  imports: [CardComponent, CardHelpDirective, AccordionComponent, ScaleNotesHelpModalComponent],
  templateUrl: './scale-notes.component.html',
  styleUrl: './scale-notes.component.css'
})
export class ScaleNotesComponent implements OnInit, OnDestroy {
  protected readonly state = inject(ScaleStateService);

  private readonly platformId = inject(PLATFORM_ID);
  readonly isDesktop = signal(false);
  private mq: MediaQueryList | null = null;
  private readonly mqListener = (e: MediaQueryListEvent) => this.isDesktop.set(e.matches);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.mq = window.matchMedia('(min-width: 700px)');
      this.isDesktop.set(this.mq.matches);
      this.mq.addEventListener('change', this.mqListener);
    }
  }

  ngOnDestroy(): void {
    this.mq?.removeEventListener('change', this.mqListener);
  }
}
