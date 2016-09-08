import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HelloComponent }   from './hello.component';
import { HiComponent }   from './hi.component';
import { routing } from './app.routing';

@NgModule({
	imports: [BrowserModule, routing],
	declarations: [AppComponent, HelloComponent, HiComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
