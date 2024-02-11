import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  vysledek!: number; 
  vysledok2!: number;

  @Input() childInput1!: number;
  @Input() childInput2!: number;
  @Input() childInput3!: number;

  @Output() totojemojoutputzchildu = new EventEmitter<number>()

  @Output() druhyoutput = new EventEmitter<number>();

calculateResult(cislo1: number, cislo2: number, cislo3: number) {
  return this.vysledek = cislo1 + cislo2 + cislo3;
}

calculateSecondResult(cislo1: number, cislo2: number, cislo3: number) {
  return this.vysledok2 = cislo1 - cislo2 - cislo3;
}

sendToParent() {
  this.totojemojoutputzchildu.emit(this.calculateResult(this.childInput1, this.childInput2, this.childInput3))
  // do tohto objektu - this. menoobjektu - vysli - emit - a v zatvorke co sa ma vyslat
  this.druhyoutput.emit(this.calculateSecondResult(this.childInput1, this.childInput2, this.childInput3))
}
}
