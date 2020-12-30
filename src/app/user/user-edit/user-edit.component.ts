import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../../tools/confirm-dialog/confirm-dialog.component";

import { User } from "../user";
import { UserService } from "../user.service";

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
	user: User = { id: 0, name: "", email: "" };

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service: UserService,
		private dialog: MatDialog
	) { }

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get("id"));
		this.service.getUser(id).subscribe(res => { this.user = res; })
	}

	onSubmit(form: any): void {
		let user = {
			id: form.id,
			name: form.name,
			email: form.email
		};
		// this.service.setUser(user);
		// this.router.navigate(["/users"]);

		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: "300px",
			data: {
				title: "Confirm",
				message: "Are you sure you want to update this user?"
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result == true) {
				this.service.setUser(user).subscribe(() => { this.router.navigate(["/users"]); });
			}
		});
	}
}
