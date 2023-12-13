import { Component, inject } from '@angular/core';
import { TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  private todosService = inject(TodosService);

  public newTodoDescription: string = '';
  public newTodoStatus: { value: TodoStatus, name: string  } =
}
