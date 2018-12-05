import { Injectable } from '@angular/core';
import { UserDataModel } from '../../model/userdata.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UInfoService {
	currentUserDetailsDetector: Subject<UserDataModel> = new Subject<UserDataModel>();
	constructor() {}
}
