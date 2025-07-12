import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  isAddTask: boolean = false;
  @Input() userId!: string;
  @Input() name!: string;
  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
  }
  onAddTask() {
    this.isAddTask = true;
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }
}
