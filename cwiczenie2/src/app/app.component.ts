import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nameInputContent!: string;
  ageInputContent!: number;
  locationInputContent!: string;



  //Tu musime mat objekty pre inputy (ako uz mas), ale takisto aj objekt kde ulozime ten output co pride od childu. A do toho outputu potom ulozime ten child objekt. 

outputFromChild!: string;


// Ked robis funkciu, nazov parametru je iba na tebe. Mozes to nazvat message, mozes to nazvat drist, ako chces. Je to len na to, ze definujes, ze v tej
// funkcii bude 1 parameter a bude mat takyto typ.
handleOutput(sentence: string){
  this.outputFromChild = sentence
}
}
