import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {ServiceService} from './service.service';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserdetailComponent } from './users/userdetail/userdetail.component';
import { UserItemComponent } from './users/userlist/user-item/user-item.component';
import { UsersStartComponent } from './users/users-start/users-start.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {DataStorage} from './shared/data-storage.service';
import {UsersEditComponent} from './users/users-edit/users-edit.component';
import {UsersService} from './users/users.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserlistComponent,
    UserdetailComponent,
    UserItemComponent,
    HeaderComponent,
    DropdownDirective,
    UsersStartComponent,
    UsersEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServiceService, DataStorage, UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
