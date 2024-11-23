import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'modulos-gregos',
        pathMatch: 'full'
    },
    {
        path: 'modulos-gregos',
        loadComponent: () => import('./components/modulos-gregos/modulos-gregos.component').then(component => component.ModulosGregosComponent)
    }
];
