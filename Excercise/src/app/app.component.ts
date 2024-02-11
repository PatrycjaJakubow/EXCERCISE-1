import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
messageFromChild!: string; //wiadomosc od childu musi byc w parencie zapisany w objekcie

handleTrigger(message: string) {
  this.messageFromChild = message
}

}

