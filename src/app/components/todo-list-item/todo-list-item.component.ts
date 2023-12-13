import { Component, Input, inject } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo?: Todo;

  private todosServices = inject(TodosService);

  public removeTodo() {

    if(!this.todo) return
    this.todosServices.removeTodo(this.todo.id)
  }
}
