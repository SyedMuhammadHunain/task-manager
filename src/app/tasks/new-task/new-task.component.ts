import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  isAddTaskClose: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  
  onCloseAddTask() {
    this.isAddTaskClose = true;
    this.close.emit(this.isAddTaskClose);
  }
}
