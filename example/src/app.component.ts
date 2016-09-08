import {Component} from '@angular/core';
import {HelloComponent} from './hello.component';
import {HiComponent} from './hi.component';

@Component({
	selector: 'app',
	template: `
    <h1>Router example</h1>
    <nav>
      <a routerLink="/hello">Hello there</a>
      <a routerLink="/hi">Hi there</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }