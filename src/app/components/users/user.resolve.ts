import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable()
export class UserResolve implements Resolve<User[]> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService
      .getList();
  }
}
