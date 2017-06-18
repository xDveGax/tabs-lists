import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MdTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTabComponent } from './components/users/user-tab/user-tab.component';
import { AlbumTabComponent } from './components/albums/album-tab/album-tab.component';
import { TodoTabComponent } from './components/todos/todo-tab/todo-tab.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UserService } from './components/users/user.service';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { TodoService } from './components/todos/todo.service';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { AlbumService } from './components/albums/album.service';
import { AlbumListComponent } from './components/albums/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    UserTabComponent,
    AlbumTabComponent,
    TodoTabComponent,
    UserListComponent,
    TodoListComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule // MUST BE THE LATEST IMPORT MODULE BECAUSE OF THE DEFAULT ** ROUTE PATH
  ],
  providers: [
    UserService,
    TodoService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
