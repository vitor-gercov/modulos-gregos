import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);
  navbarOptions = signal([
    {
      label: 'Shapes',
      path: '/caged'
    }
  ]);

  helpDialog = viewChild<ElementRef<HTMLDialogElement>>('helpDialog');

  openHelp(): void {
    this.helpDialog()?.nativeElement.showModal();
  }

  closeHelp(): void {
    this.helpDialog()?.nativeElement.close();
  }

  onDialogClick(event: MouseEvent): void {
    const dialog = this.helpDialog()?.nativeElement;
    if (event.target === dialog) {
      dialog?.close();
    }
  }
}
