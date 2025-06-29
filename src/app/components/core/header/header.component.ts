import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navbarOptions = signal([
    {
      label: 'Shapes',
      path: '/caged'
    },
    {
      label: 'Ciclo de quartas',
      path: '/cicle-of-fourths'
    }
  ]);
}
