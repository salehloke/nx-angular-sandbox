import { Route } from '@angular/router';

export const appRoutes: Route[] = [];

// configure dashboard as default route
appRoutes.push({
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
});

