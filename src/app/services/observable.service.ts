import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Observable } from "rxjs";
import {NoteItem} from "../class/notes-item";
import {Injectable} from "@angular/core";
import { Http,Headers,HttpModule,RequestOptions } from "@angular/http";

@Injectable()
export class SearchWithObservable {
  apiRoot: string = 'http://localhost:3000/notes/59e67508568176170c9b07b5';
  private results: Observable<NoteItem[]>;
  

  constructor(private http: Http) {
  }

  search(): Observable<NoteItem[]> {   
    let headers = new Headers();    
    //headers.append('Access-Control-Allow-Methods', 'GET');
    //headers.append('Content-Type','application/json')    
    return this.http.get(this.apiRoot,{headers:headers})
        .map(res => {
          console.log(res.json());
          return res.json();
        });
  }
}