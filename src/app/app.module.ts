import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { UserService } from "./user/user.service";
import { ConfirmDialogComponent } from './tools/confirm-dialog/confirm-dialog.component'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MenuComponent,
		DashboardComponent,
		UserListComponent,
		UserEditComponent,
		ConfirmDialogComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MatDialogModule,
		BrowserAnimationsModule,
	],
	providers: [
		UserService,
	],
	entryComponents: [
		ConfirmDialogComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
