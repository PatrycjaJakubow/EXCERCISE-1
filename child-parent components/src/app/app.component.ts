import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

vysledekZChildu!: number;
vysledekZChildu2!: number;

 formInput1!: number;
 formInput2!: number;
 formInput3!: number;

 spracujSpravu(messageZChildu: number) {
  this.vysledekZChildu = messageZChildu
}

spracujDruhuSpravu(messge: number) {
  this.vysledekZChildu2 = messge
}
}
