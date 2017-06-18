import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlbumService } from './album.service';


@Injectable()
export class AlbumResolve implements Resolve<Album[]> {
  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Album[]> {
    return this.albumService
      .getList();
  }

}
