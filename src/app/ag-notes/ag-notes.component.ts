import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteItem } from "../class/notes-item";
import { consultingService } from "../services/http.service";


@Component({
  selector: 'app-ag-notes',
  templateUrl: './ag-notes.component.html',
  styleUrls: ['./ag-notes.component.css'],
})
export class AgNotesComponent implements OnInit {

  nForm:FormGroup;
  post:any;
  notes:NoteItem[] = [];
  titleAlert:string = 'Please enter the title';  



  constructor(private fb:FormBuilder, private noteService:consultingService ) {

    this.nForm = fb.group({
      'title': [null,Validators.required],
      'bodyNote': [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(400)])]      
    });
   }

  ngOnInit() {    
    this.noteService.getLastNotes().then(notas =>  this.notes = notas);
  }

  addPost(post){
    let newNote = [{'title':post.title,'body':post.bodyNote,'flag':true}];
    console.log(JSON.stringify(newNote));
    
    this.noteService.postNotes(JSON.stringify(newNote))
    .then(
      (res)=>this.noteService.getLastNotes()
            .then(
                notas =>  this.notes = notas))
    .catch((err)=>{console.log(err)});
    
        
    this.nForm.reset();
  }

}
