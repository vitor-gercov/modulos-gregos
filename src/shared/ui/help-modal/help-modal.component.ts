import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrl: './help-modal.component.css'
})
export class HelpModalComponent {
  label = input.required<string>();
  ariaLabel = input<string>('');
  title = input.required<string>();
  subtitle = input<string>('');

  private dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  open(): void {
    this.dialog()?.nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.dialog()?.nativeElement.close();
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog()?.nativeElement) {
      this.close();
    }
  }
}
