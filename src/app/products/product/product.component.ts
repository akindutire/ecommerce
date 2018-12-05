import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductModel } from './../../model/product.model';
import { StyleService } from './../../service/widget/style.service';
import { CartService } from './../../service/product/cart.service';
import { WishService } from './../../service/product/wish.service';
@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: [ './product.component.css' ]
})
export class ProductComponent implements OnInit, OnChanges {
	@Input('productItemContract') product: ProductModel;

	@Input('btnWidgetBgContract') btnWidgetBg: string;
	@Input('btnWidgetColorContract') btnWidgetColor: string;

	btnOutlineColor: string;
	productFontSize: string = '0.8rem';

	constructor(private widgetSvc: StyleService, private cartSvc: CartService, private wishSvc: WishService) {}

	ngOnInit() {
		this.btnOutlineColor = this.widgetSvc.getWidgetOutline();
	}

	ngOnChanges() {}

	addToCart() {
		this.cartSvc.add(this.product);
	}

	addToWish() {
		this.wishSvc.add(this.product);
	}
}
