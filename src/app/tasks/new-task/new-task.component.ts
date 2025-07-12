import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  isAddTaskClose: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  private tasksService = inject(TasksService);

  onCloseAddTask() {
    this.close.emit();
  }

  onSumbit() {
    this.tasksService.onAddNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    this.close.emit();
  }
}
