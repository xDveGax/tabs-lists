import { Component, OnInit } from '@angular/core';
import { URLS } from '../../config/urls';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabLinks: any[];
  constructor() {
    this.tabLinks = [
      {link: '', label: 'Users'},
      {link: '/' + URLS.ALBUMS, label: 'Albums'},
      {link: '/' + URLS.TODOS, label: 'Todos'}
    ];
  }

  ngOnInit() {
  }
}
