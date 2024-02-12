import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()  receivedDen!: string;
  @Input()  receivedRecept!: string;
  @Input()  receivedKilogramy!: number;
  @Input()  receivedOsoby!: number;

  @Output() zchilddoparent = new EventEmitter<string>();

  posliOutput(){
    const amountPerPerson = (this.receivedKilogramy / this.receivedOsoby) * 1000;

    this.zchilddoparent.emit(`On ${this.receivedDen} you will eat ${this.receivedRecept} and each person will get ${amountPerPerson}`)
  }
}
