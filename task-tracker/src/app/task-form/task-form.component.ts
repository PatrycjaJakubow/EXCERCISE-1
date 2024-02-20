import { Component, ViewChild } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

 @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(private taskService: TaskServiceService) {}

  retrievedData: any;
  
  @Input() nameInput!: string;


  ngOnInit() {
    this.taskService.getData().subscribe(
      (response) => {
        this.retrievedData = response;
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