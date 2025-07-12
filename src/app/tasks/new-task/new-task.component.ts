import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  isAddTaskClose: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<NewTask>();
  onCloseAddTask() {
    this.isAddTaskClose = true;
    this.close.emit(this.isAddTaskClose);
  }

  onSumbit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    })
  }
}
