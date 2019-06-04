import { TasksService } from "./../services/tasks.service";
import { Task } from "./../model/Task";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-done-task",
  templateUrl: "./done-task.component.html",
  styleUrls: ["./done-task.component.css"]
})
export class DoneTaskComponent implements OnInit {
  doneTasksList = [];
  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.doneTasksList = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {}

  delete(task: Task) {
    this.tasksService.delete(task);
  }
}
