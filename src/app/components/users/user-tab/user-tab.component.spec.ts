import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabComponent } from './user-tab.component';
import {MockUserListComponent} from '../user-list/user-list.component.mock';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('UserTabComponent', () => {
  let component: UserTabComponent;
  let fixture: ComponentFixture<UserTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserTabComponent,
        MockUserListComponent
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
    fixture = TestBed.createComponent(UserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
