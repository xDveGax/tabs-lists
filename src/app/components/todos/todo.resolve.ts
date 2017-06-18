import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Injectable()
export class TodoResolve implements Resolve<Todo[]> {

  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Todo[]> {
    return this.todoService
      .getList();
  }
}
