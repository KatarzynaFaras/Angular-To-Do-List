import { Task } from "./../model/Task";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService {
  private tasksList: Array<Task> = [];
  private doneTasksList: Array<Task> = [];

  tasksListObs = new BehaviorSubject<Array<Task>>([]);
  tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      { name: "Sprzatanie kuwety kota papilota", created: new Date() },
      { name: "Spacer", created: new Date() },
      { name: "Zakupy", created: new Date() },
      { name: "Nauka Angulara", created: new Date() }
    ];
    this.tasksListObs.next(this.tasksList);
    this.tasksDoneObs.next(this.doneTasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }

  delete(task: Task) {
    this.doneTasksList = this.doneTasksList.filter(s => s !== task);
    this.tasksDoneObs.next(this.doneTasksList);
  }
  done(task: Task) {
    this.remove(task);
    this.doneTasksList.push(task);
    this.tasksDoneObs.next(this.doneTasksList);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
