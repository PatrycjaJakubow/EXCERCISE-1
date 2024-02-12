import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

@Input() receivedNameContent!: string; //tu si ulozim to co mi parent posle. Ale parent to musi poslat priamo do tohto objektu, musi vediet jeho meno.
@Input() receivedAgeContent!: number;
@Input() receivedLocationContent!: string;

@Output() sentenceFromChild = new EventEmitter<string>();
//Output bude object ktory posleme do parentu, nazov je uplne jedno.A tiez to bude string, lebo to bude ta veta.


zobrazeniVetyZParentu(){

this.sentenceFromChild.emit(`Hello, you are ${this.receivedNameContent}, you are ${this.receivedAgeContent} years old and you live in ${this.receivedLocationContent}.`)
}
}
