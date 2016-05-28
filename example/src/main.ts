import {AppComponent} from './app.component';
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
])
