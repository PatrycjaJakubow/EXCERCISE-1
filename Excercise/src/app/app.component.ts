import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myInput = '';

  getMyInput(){
    alert(this.myInput)
  }
}

// 1. definiowac objekt, np myInput
// 2. w html dodac [(ngModel)] = "myInput"
// 3. w miejscu, w ktorym ma sie pojawic ten tekst, dodac {{ myInput }} 

