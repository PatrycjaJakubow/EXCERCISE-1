import { Component, Input, Output, OnInit, EventEmitter, input } from '@angular/core';


@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent implements OnInit {

  @Input() SampleText: string;

  ngOnInit(): void {
    
  }
}
