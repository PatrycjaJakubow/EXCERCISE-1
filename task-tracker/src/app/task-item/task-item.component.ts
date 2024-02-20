import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  id: number;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() taskItemInput!: Task;

  @Output() taskItemOutput = new EventEmitter<string>();

}