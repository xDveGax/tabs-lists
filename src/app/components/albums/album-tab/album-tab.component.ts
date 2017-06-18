import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-album-tab',
  templateUrl: './album-tab.component.html',
  styleUrls: ['./album-tab.component.css']
})
export class AlbumTabComponent implements OnInit, OnDestroy {

  albums: Album[];
  private subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe((data: {albums: Album[]}) => {
        this.albums = data.albums;
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
