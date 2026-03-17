import { Directive } from '@angular/core';

@Directive({
  selector: '[appSectionTitle]',
  host: {
    '[style.font-size]': '"0.85rem"',
    '[style.font-weight]': '"600"',
    '[style.text-transform]': '"uppercase"',
    '[style.letter-spacing]': '"0.12em"',
    '[style.color]': '"var(--color-accent-hover)"',
  }
})
export class SectionTitleDirective {}
