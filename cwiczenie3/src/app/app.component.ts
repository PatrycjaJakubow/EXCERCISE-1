import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  objektDen!: string;
  objektRecept!: string;
  objektKilogramy!: number;
  objektOsoby!: number;

outputzchildu!: string;

  funkcezparentu($event: string){
this.outputzchildu = $event;

alert(this.outputzchildu);
  }
}
