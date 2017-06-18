import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit, OnDestroy {

  users: User[];
  private subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe((data: {users: User[]}) => {
        this.users = data.users;
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
    this.subs = [];
  }

}
