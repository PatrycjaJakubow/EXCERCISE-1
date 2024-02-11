import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent implements OnInit {

  @Input() sampleText!: string;  //nazwa objektu 'sampletext' i jej typ

  ngOnInit(): void {
    
  }

  @Output() trigger = new EventEmitter<string>();

  sendToParent(){
    this.trigger.emit('message from child');  //funkcja, ktora wysle dana informacje (z childu) do innego componentu (do parenta)
  }
}

//@Input() - to, co child dostanie z parentu
//@Output() - to, co child wysle do parenta