import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public isVisible: boolean = false;
  public list: any;

  constructor() { }

  open(list: any) {
    this.list = list;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}
