import {Component, Input} from '@angular/core';
import {Album} from 'app/components/albums/album.model';

@Component({
  selector: 'app-album-list',
  template: `<div></div>`
})
export class MockAlbumListComponent {
  @Input()
  albums: Album[];
  constructor() {
  }
}
