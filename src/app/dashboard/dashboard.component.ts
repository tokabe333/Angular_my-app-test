import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	message: string;

	constructor() {
		this.message = "This is a sample of Angular Application Bebebe.";
	}

	ngOnInit(): void {
	}

}
