import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InfoService {
	public scopeDetector = new Subject<string>();

	private scope: string = 'less';

	isAuthValidDetector: Subject<boolean> = new Subject<boolean>();

	constructor() {}

	setPageInfoScope(scope: string) {
		this.scope = scope;
	}

	getPageInfoScope() {
		return this.scope;
	}
}
