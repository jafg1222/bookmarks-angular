import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'timer',
    template: `{{clocking | async | date:'medium'}}`,
    styles: []
})
export class TimerComponent{
    clocking = Observable.interval(1000).map(()=> new Date());
    constructor(){}

          
}
