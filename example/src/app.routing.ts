import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiComponent } from './hi.component';
import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/hello', pathMatch: 'full'},
	{ path: 'hello', component: HelloComponent },
	{ path: 'hi', component: HiComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
