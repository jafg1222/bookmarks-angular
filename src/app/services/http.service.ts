import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { NoteItem } from "../class/notes-item";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class consultingService{
    url = "http://192.168.0.106:8080/api/notes";    

    constructor(private http:Http){        
    }

    getNotes(): Promise<NoteItem[]>{
        let headers =  new Headers({'Access-Control-Allow-Origin':'*'});
        return this.http.get(this.url)
                    .toPromise()
                    .then(response => response.json().data as NoteItem[])
                    .catch(this.handleError)

    }

    getLastNotes(): Promise<NoteItem[]>{
        let ApiUrl:string = "http://localhost:3000/lastNotes";
        return this.http.get(ApiUrl)
        .toPromise()
        .then(response=> response.json() as NoteItem[])
        .catch(this.handleError)
    }

    deletedNotes(id): Promise<void>{
        let UrlDeleted = this.url+'/'+id;        
        return this.http.delete(UrlDeleted)
        .toPromise()
        .then(() => null)
        .catch( this.handleError)
    }

    postNotes(data): Promise<NoteItem>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url,data,options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError)
    }

    getOneNote(id):Promise<NoteItem[]>{
        let urlApi = `http://localhost:3000/notes/${id}`;
        return this.http.get(urlApi)
        .toPromise()
        .then(response=> response.json() as NoteItem[])
        .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();        
            return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
      
    
}