import { Component } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

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
}

