import { Component, OnInit } from '@angular/core';
import { SearchWithObservable } from "./services/observable.service";
import {consultingService} from "./services/http.service"
import { NoteItem } from "./class/notes-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private note:consultingService){}
  
  ngOnInit(){
   
  }

  /*
  private loading: boolean = false;
  private results: SearchItem[];
  
  
  constructor(private itunes:SearchWithObservable){
  }

  ngOnInit(){
    this.doSearch();    
  }  

  doSearch() {
    this.loading = true;
    this.itunes.search().subscribe( data => {
      this.loading = false;
      this.results = data 
    });
  }*/
}
