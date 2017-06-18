import {Component, Input} from '@angular/core';
import {Todo} from '../todo.model';

@Component({
  selector: 'app-todo-list',
  template: `<div></div>`
})
export class MockTodoListComponent {
  @Input()
  todos: Todo[];

  constructor() {
  }
}
