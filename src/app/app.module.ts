import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { UserService } from "./user/user.service"

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MenuComponent,
		DashboardComponent,
		UserListComponent,
		UserEditComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
	],
	providers: [
		UserService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
