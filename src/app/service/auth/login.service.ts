import { Injectable } from '@angular/core';
import { UserDataModel } from './../../model/userdata.model';
import { InfoService } from './../page/info.service';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	users: UserDataModel[] = [
		new UserDataModel(
			1,
			'Akindutire, Ayomide Samuel',
			'akindutire33@gmail.com',
			'g',
			'https://source.unsplash.com/random/75x75/?celebrity'
		),
		new UserDataModel(
			2,
			'Alade, Samson Garet',
			'alade@gmail.com',
			'alade',
			'https://source.unsplash.com/random/75x75/?celebrity'
		),
		new UserDataModel(
			3,
			'Pele, Johnson Folu',
			'pele@gmail.com',
			'pele',
			'https://source.unsplash.com/random/75x75/?celebrity'
		),
		new UserDataModel(
			4,
			'Dara, Akin George',
			'dara@gmail.com',
			'dara',
			'https://source.unsplash.com/random/75x75/?celebrity'
		),
		new UserDataModel(
			5,
			'Olowokanga, Tomiwa Ige',
			'olowokanga@gmail.com',
			'olowokanga',
			'https://source.unsplash.com/random/75x75/?celebrity'
		)
	];

	constructor(private info: InfoService) {}

	authenticateClient(logindetails: { email: any; password: any }) {
		let email = logindetails.email;
		let password = logindetails.password;
		let currentUser = null;

		for (let user of this.users) {
			if (user.email == email && user.password == password) {
				currentUser = user;
				break;
			}
		}

		return currentUser;
	}
}
