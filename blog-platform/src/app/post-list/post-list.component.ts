import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @ViewChild(ModalComponent) modal!: ModalComponent;
  constructor(private postServiceService: PostServiceService) {}

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

  openModal(list: any) {
    this.modal.open(list);
  }
}
