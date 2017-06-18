import {Component, Input} from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-user-list',
  template: `<div></div>`
})
export class MockUserListComponent {
  @Input()
  users: User[];
  constructor() {
  }
}
