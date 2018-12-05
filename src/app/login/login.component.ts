import { Component, OnInit } from '@angular/core';
import { StyleService } from './../service/widget/style.service';
import { LoginService } from './../service/auth/login.service';
import { InfoService } from './../service/page/info.service';
import { UInfoService } from './../service/user/info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	userlogindetails: { email: string; password: any };
	loginErrMessage: string;

	constructor(
		private widgetService: StyleService,
		private loginService: LoginService,
		private pageInfoSvc: InfoService,
		private router: Router,
		private user: UInfoService
	) {}

	ngOnInit() {
		this.pageInfoSvc.scopeDetector.next('less');
	}

	getbtnWidgetBg() {
		return this.widgetService.getbtnWidgetBg();
	}

	getbtnWidgetColor() {
		return this.widgetService.getbtnWidgetColor();
	}

	getFormOutline() {
		return this.widgetService.getWidgetOutline();
	}

	loginUser(e: HTMLInputElement, p: HTMLInputElement) {
		this.userlogindetails = { email: e.value, password: p.value };

		this.loginErrMessage = 'Processing';

		let userw = this.loginService.authenticateClient(this.userlogindetails);

		if (userw === null) {
			this.loginErrMessage = 'User login combination incorrect';
			this.pageInfoSvc.isAuthValidDetector.next(false);
		} else {
			this.loginErrMessage = '';
			this.user.currentUserDetailsDetector.next(userw);
			this.pageInfoSvc.isAuthValidDetector.next(true);
			this.router.navigate([ '/products' ]);
		}
	}
}
