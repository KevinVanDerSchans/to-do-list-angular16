import { Component, Input, inject } from '@angular/core';
import { formOptions } from 'src/app/config/options';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodosService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo?: Todo;

  private todosServices = inject(TodosService);
  public statusOptions = formOptions;

  get optionSelected() {
    return { value: this.todo?.status, name: traductions[this.todo?.status!] }
  }

  public removeTodo() {

    if(!this.todo) return
    this.todosServices.removeTodo(this.todo.id)
  }
}
