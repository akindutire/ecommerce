import { Component, OnInit, OnDestroy } from '@angular/core';
import { UInfoService } from './../../service/user/info.service';
import { CartService } from './../../service/product/cart.service';
import { WishService } from './../../service/product/wish.service';
import { InfoService } from './../../service/page/info.service';
import { UserDataModel } from './../../model/userdata.model';
import { CartComponent } from '../../products/cart/cart.component';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: [ './notification.component.css' ]
})
export class NotificationComponent implements OnInit, OnDestroy {
	currentUser: UserDataModel;
	currentUserSubscription: Subscription;
	AuthValidSubscription: Subscription;
	totalAmountSubscription: Subscription;
	itemsInCartSubscription: Subscription;

	wish: { count: 5 };
	cart: { totalAmount: number };

	itemsInCart: { productRef: { key: number; qty: number } }[];

	authValid: boolean = false;
	constructor(
		private user: UInfoService,
		private pageInfoSvc: InfoService,
		private cartSvc: CartService,
		private wishSvc: WishService,
		private router: Router
	) {}

	ngOnInit() {
		this.currentUserSubscription = this.user.currentUserDetailsDetector.subscribe((userdetails: UserDataModel) => {
			this.currentUser = userdetails;
		});

		this.AuthValidSubscription = this.pageInfoSvc.isAuthValidDetector.subscribe((auth: boolean) => {
			if (auth) {
				this.authValid = auth;
			} else {
				this.router.navigate([ '/' ]);
			}
		});

		this.totalAmountSubscription = this.cartSvc.totalAmountDetector.subscribe((amount: number) => {
			this.cart = { totalAmount: amount };
		});

		this.itemsInCartSubscription = this.cartSvc.itemsInCartDetector.subscribe(
			(ITC: { productRef: { key: number; qty: number } }[]) => {
				this.itemsInCart = ITC;
			}
		);

		//	if (this.wishSvc.getTotalWish() > 0) this.wish.count = this.wishSvc.getTotalWish();
	}

	ngOnDestroy() {
		this.currentUserSubscription.unsubscribe();
		this.AuthValidSubscription.unsubscribe();
		this.totalAmountSubscription.unsubscribe();
		this.itemsInCartSubscription.unsubscribe();
	}
}
