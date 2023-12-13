import { Component } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-do List';

  todos: Todo[] = [
    {
      id: 1,
      description: 'Tarea 1',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 2,
      description: 'Tarea 2',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 3,
      description: 'Tarea 3',
      createdAt: new Date(),
      status: 'empty',
    }
  ];
}
