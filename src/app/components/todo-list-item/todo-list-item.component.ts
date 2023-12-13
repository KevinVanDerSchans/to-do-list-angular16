import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo?: Todo;
}
