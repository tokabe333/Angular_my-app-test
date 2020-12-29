import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";

const routes: Routes = [
	{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "users", component: UserListComponent },
	{ path: "users/:id/edit", component: UserEditComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
