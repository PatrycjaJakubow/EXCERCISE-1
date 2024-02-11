import { Component } from '@angular/core';
import { TestDataService } from './test-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  retrievedData: any;
  constructor(private testDataService: TestDataService) { }

  ngOnInit() {
    this.testDataService.getData().subscribe(
      (response) => {
        console.log(response),
        this.retrievedData = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // jak pobrac dane z serwisu? 
  // 1. w ngOnInit() { } zawolac this.NAZWASERWISU.NazwaFunkcjiZSerwisu().subscribe(dopisac co w przypadku response i co w error)

  myInput = '';

  getMyInput(){
    alert(this.myInput)
  }
}

// 1. definiowac objekt, np myInput
// 2. w html dodac [(ngModel)] = "myInput"
// 3. w miejscu, w ktorym ma sie pojawic ten tekst, dodac {{ myInput }} 

