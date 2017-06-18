import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  @Input()
  albums: Album[];

  constructor() { }

  ngOnInit() {
  }

}
