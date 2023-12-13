import { Component, inject } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todosServices = inject(TodosService);

  get todos() {
    return this.todosServices.getTodos();
  }
}
