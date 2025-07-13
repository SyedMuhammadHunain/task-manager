import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';
import { CardComponent } from '../shared/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [SharedModule, FormsModule, CommonModule],
  exports: [TasksComponent],
})
export class TasksModule {}
