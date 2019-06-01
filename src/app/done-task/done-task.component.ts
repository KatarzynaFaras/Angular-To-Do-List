import { Task } from "./../model/Task";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TasksService } from "../services/tasks.service";

@Component({
  selector: "app-done-task",
  templateUrl: "./done-task.component.html",
  styleUrls: ["./done-task.component.css"]
})
export class DoneTaskComponent implements OnInit {
  doneTasksList: Array<Task> = [];
  //do konstruktora wstrzykujemy obiekt TaskService, pobieramy listę tasków które są w obserwatorze, i filtrujemy ją na obecność tasków z isDone: true, i te przypisujemy do listy doneTasksList
  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.doneTasksList = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {}

  delete(task: Task) {
    this.doneTasksList = this.doneTasksList.filter(t => t !== task);
  }
}
