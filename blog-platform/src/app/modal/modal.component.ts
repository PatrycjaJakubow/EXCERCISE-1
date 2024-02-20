import { Component } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  public isVisible: boolean = false;
  public list: any;
  constructor(private postServiceService: PostServiceService){}


  listItems: any;
  
  ngOnInit() {
    this.postServiceService.getData().subscribe(
      (response) => {
        this.listItems = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  open(list: any) {
    this.list = list;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
  }