import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: Todo[] = [
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

  public addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  public removeTodo(todoId: Todo['id']) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  public getTodos(): Todo[] {
    return this.todos;
  }
}
