import { Component, OnInit } from '@angular/core';
import {consultingService} from "../services/http.service"
import {NoteItem} from '../class/notes-item';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  Notes :NoteItem[] = []
  constructor(private note:consultingService) {}
  
  ngOnInit() {    
   this.note.getNotes().then(notes => {this.Notes = notes; console.log(this.Notes.length)});    
  }  

  delete(note:NoteItem): void{
    console.log(note._id);
    this.note.deletedNotes(note._id).then(()=>{
      console.log(note);
      console.log(this.Notes);
      this.Notes = this.Notes.filter(h => h !== note);
    });
  }

}
