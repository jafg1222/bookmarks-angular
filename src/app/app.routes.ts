import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {AgNotesComponent} from "./ag-notes/ag-notes.component";
import {AppComponent} from "./app.component";
import {ListNotesComponent} from "./list-notes/list-notes.component";
import {TimerComponent} from "./timer/timer.component";
import {NoteDetailComponent} from "./note-detail/note-detail.component";

const AppRoutes:Routes = [
    {path: '', redirectTo: "/home", pathMatch: "full"},
    {path:'home', component: HomeComponent},
    {path:'newNote', component: AgNotesComponent},
    {path:'listNotes',component: ListNotesComponent},  
    {path:'note-detail/:id',component:NoteDetailComponent}      
];

export const routes:ModuleWithProviders = RouterModule.forRoot(AppRoutes);