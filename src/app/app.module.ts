import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TodoTaskComponent } from "./todo-task/todo-task.component";
import { DoneTaskComponent } from "./done-task/done-task.component";
import { TasksService } from "./services/tasks.service";
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
