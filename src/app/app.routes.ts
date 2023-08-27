import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>  import('./layouts/template-layout/template-layout.component').then((x) => x.TemplateLayoutComponent)
    }
];
