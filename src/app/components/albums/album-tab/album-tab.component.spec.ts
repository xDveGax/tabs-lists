import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTabComponent } from './album-tab.component';
import { MockAlbumListComponent } from '../album-list/album-list.component.mock';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

describe('AlbumTabComponent', () => {
  let component: AlbumTabComponent;
  let fixture: ComponentFixture<AlbumTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlbumTabComponent,
        MockAlbumListComponent
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
    fixture = TestBed.createComponent(AlbumTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
