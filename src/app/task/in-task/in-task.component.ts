import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-in-task',
  standalone: true,
  imports: [],
  templateUrl: './in-task.component.html',
  styleUrl: './in-task.component.css'
})
export class InTaskComponent {
  @Input({ required: true }) task!: Task;
}
