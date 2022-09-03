import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExInterpComponent } from './views/ex-interp/ex-interp.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { ExEventoComponent } from './views/ex-evento/ex-evento.component';
import { Ex05Component } from './views/ex05/ex05.component';
import { Ex06Component } from './views/ex06/ex06.component';
import { Ex07Component } from './views/ex07/ex07.component';

@NgModule({
  declarations: [
    AppComponent,
    ExInterpComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    ExEventoComponent,
    Ex05Component,
    Ex06Component,
    Ex07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
