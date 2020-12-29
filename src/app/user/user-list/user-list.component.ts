import { Component, OnInit } from '@angular/core';
import { User } from "../user";
@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	users!: User[];
	constructor() { }

	ngOnInit(): void {
		this.users = [
			{ id: 1, name: "Yamada", email: "yamada@example.com" },
			{ id: 2, name: "Suzuki", email: "suzuki@example.com" },
			{ id: 3, name: "Tanaka", email: "Tanaka@example.com" },
		]
	}

}
