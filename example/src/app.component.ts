import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HelloComponent} from './hello.component';
import {HiComponent} from './hi.component';

@Component({
	selector: 'app',
	template: `
    <h1>Router example</h1>
    <nav>
      <a [routerLink]="['Hello']">Hello there</a>
      <a [routerLink]="['Hi']">Hi there</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/hello', name: 'Hello', component: HelloComponent},
  {path:'/hi', name: 'Hi', component: HiComponent}
])

export class AppComponent { }