import { Task } from "./../model/Task";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService {
  tasksListObs = new BehaviorSubject<Array<Task>>([]);
  tasksDoneObs = new BehaviorSubject<Array<Task>>([]);
  constructor() {
    const tasksList = [
      {
        name: "Sprzatanie kuwety kota papilota",
        created: new Date().toLocaleString(),
        isDone: false
      },
      { name: "Spacer", created: new Date().toLocaleString(), isDone: false },
      { name: "Zakupy", created: new Date().toLocaleString(), isDone: false },
      {
        name: "Nauka Angulara",
        created: new Date().toLocaleString(),
        end: new Date().toLocaleString(),
        isDone: false
      }
    ];
    this.tasksListObs.next(tasksList);
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }
  delete(task: Task) {
    task.isDone = false;
    this.remove(task);
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  getDoneListObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }

  setDoneListObs(array: Array<Task>) {
    this.tasksDoneObs.next(array);
  }
}
