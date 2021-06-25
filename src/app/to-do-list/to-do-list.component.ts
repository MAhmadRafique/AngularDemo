import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public newTaskToAdd = '';
  public tasks: any[] = [
    { taskDesc: 'Sample Task' },
    { taskDesc: 'Sample Task 2' },
    { taskDesc: 'Sample Task' },
    { taskDesc: 'Sample Task 2' },
    { taskDesc: 'Sample Task' },
    { taskDesc: 'Sample Task 2' },
    { taskDesc: 'Sample Task' },
    { taskDesc: 'Sample Task 2' },
    { taskDesc: 'Sample Task' },
    { taskDesc: 'Sample Task 2' },
    { taskDesc: 'Sample Task' },
    { taskDesc: 'Sample Task 2' },
  ];
  constructor() {}

  ngOnInit(): void {}

  public deletePerson(task: any) {
    this.tasks = this.tasks.filter((filterTask) => {
      return filterTask != task;
    });
  }

  public addTask(event: any) {
    if (this.newTaskToAdd != null && this.newTaskToAdd != '') {
      this.tasks.unshift({ taskDesc: this.newTaskToAdd });
      this.newTaskToAdd = '';
    }
  }
}
