import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import {ServiceService} from './service.service';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserdetailComponent } from './users/userdetail/userdetail.component';
import { UserItemComponent } from './users/userlist/user-item/user-item.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserlistComponent,
    UserdetailComponent,
    UserItemComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
