import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private users!: User[];
	private url = "http://localhost:8888";

	constructor(
		private http: HttpClient
	) {
		// this.users = [
		// 	{ id: 1, name: "Yamada", email: "yamada@example.com" },
		// 	{ id: 2, name: "Suzuki", email: "suzuki@example.com" },
		// 	{ id: 3, name: "Tanaka", email: "Tanaka@example.com" },
		// ];
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${this.url}/users`).pipe(catchError(this.handleError(`getUsers`, [])));
	}

	getUser(id: number): Observable<User> {
		return this.http.get<User>(`${this.url}/users/${id}`).pipe(catchError(this.handleError<User>(`getUser id=${id}`)));
	}

	setUser(user: User): Observable<User> {
		const id = user.id;
		return this.http.post<User>(`${this.url}/users/${id}`, user).pipe(catchError(this.handleError<User>(`setUser id=${id}`)));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}

	// getUsers(): User[] {
	// 	return this.users;
	// }

	// getUser(id: number): User | undefined {
	// 	return this.users.find(user => user.id == id);

	// }

	// setUser(user: User): void {
	// 	for (let i = 0; i < this.users.length; ++i) {
	// 		if (this.users[i].id == user.id) {
	// 			this.users[i] = user;
	// 		}
	// 	}
	// }
}
