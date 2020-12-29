import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private users!: User[];

	constructor() {
		this.users = [
			{ id: 1, name: "Yamada", email: "yamada@example.com" },
			{ id: 2, name: "Suzuki", email: "suzuki@example.com" },
			{ id: 3, name: "Tanaka", email: "Tanaka@example.com" },
		];
	}

	getUsers(): User[] {
		return this.users;
	}

	getUser(id: number): User | undefined {
		return this.users.find(user => user.id == id);

	}

	setUser(user: User): void {
		for (let i = 0; i < this.users.length; ++i) {
			if (this.users[i].id == user.id) {
				this.users[i] = user;
			}
		}
	}
}
