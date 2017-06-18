import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UserTabComponent } from '../components/users/user-tab/user-tab.component';
import { AlbumTabComponent } from '../components/albums/album-tab/album-tab.component';
import { TodoTabComponent } from 'app/components/todos/todo-tab/todo-tab.component';
import { URLS } from '../config/urls';
import { UserResolve } from '../components/users/user.resolve';
import { TodoResolve } from '../components/todos/todo.resolve';
import { AlbumResolve } from 'app/components/albums/album.resolve';

const routerConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UserTabComponent,
        resolve: {
          users: UserResolve
        }
      },
      {
        path: URLS.ALBUMS,
        component: AlbumTabComponent,
        resolve: {
          albums: AlbumResolve
        }
      },
      {
        path: URLS.TODOS,
        component: TodoTabComponent,
        resolve: {
          todos: TodoResolve
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserResolve,
    TodoResolve,
    AlbumResolve
  ]
})
export class AppRoutingModule {
}
