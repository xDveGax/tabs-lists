import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-tab',
  templateUrl: './todo-tab.component.html',
  styleUrls: ['./todo-tab.component.css']
})
export class TodoTabComponent implements OnInit {

  todos: Todo[];
  private subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe((data: {todos: Todo[]}) => {
        this.todos = data.todos;
      })
    );
  }

}
