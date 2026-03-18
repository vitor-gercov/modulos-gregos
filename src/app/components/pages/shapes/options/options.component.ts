import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CardComponent } from 'app/components/core/ui/card/card.component';
import { AccordionComponent } from 'app/components/core/ui/accordion/accordion.component';
import { DominantHandFilterComponent } from 'app/components/core/filters/dominant-hand-filter/dominant-hand-filter.component';
import { ScaleStateService } from 'app/services/scale-state.service';

@Component({
  selector: 'app-options',
  imports: [CardComponent, AccordionComponent, DominantHandFilterComponent],
  templateUrl: './options.component.html',
})
export class OptionsComponent implements OnInit, OnDestroy {
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
