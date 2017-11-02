import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Http } from '@angular/http';

import { AppComponent } from './app.component';
import { consultingService } from './services/http.service';
import { SearchWithObservable } from "./services/observable.service";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { routes } from "./app.routes";
import { AgNotesComponent } from './ag-notes/ag-notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { TimerComponent } from './timer/timer.component';
import { FooterComponent } from './footer/footer.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AgNotesComponent,
    ListNotesComponent,
    TimerComponent,
    FooterComponent,
    NoteDetailComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule    
  ],
  providers: [consultingService,SearchWithObservable],
  bootstrap: [AppComponent]
})
export class AppModule { }
