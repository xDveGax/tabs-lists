import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTabComponent } from './todo-tab.component';
import {MockTodoListComponent} from '../todo-list/todo-list.component.mock';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('TodoTabComponent', () => {
  let component: TodoTabComponent;
  let fixture: ComponentFixture<TodoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoTabComponent,
        MockTodoListComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
