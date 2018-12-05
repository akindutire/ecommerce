import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ProductModel } from './../../model/product.model';
import { ProductService } from './../../service/product/product.service';
import { StyleService } from './../../service/widget/style.service';
import { InfoService } from './../../service/page/info.service';
import { Router } from '@angular/router';
import { Subscription, Subject, Observable, Observer } from 'rxjs';

@Component({
	selector: 'app-productlist',
	templateUrl: './productlist.component.html',
	styleUrls: [ './productlist.component.css' ]
})
export class ProductlistComponent implements OnInit, OnChanges, OnDestroy {
	products: ProductModel[];
	productNotLoaded: boolean = true;

	productSubscription: Subscription;
	constructor(
		private productSvc: ProductService,
		private widgetSvc: StyleService,
		private pageInfoSvc: InfoService,
		private router: Router
	) {}

	ngOnInit() {
		this.getProduct();
	}

	ngOnChanges(changes: SimpleChanges) {}

	ngOnDestroy() {
		this.productSubscription.unsubscribe();
	}

	getProduct() {
		this.productSubscription = this.productSvc.productDetector.subscribe((product: ProductModel[]) => {
			this.products = product;
		});

		this.productSvc.productDetector.next(this.productSvc.loadProducts());

		if (this.productSvc.getProductCount() > 0) this.productNotLoaded = false;
		if (this.productSvc.getProductCount() > 3) this.pageInfoSvc.scopeDetector.next('much');
	}

	getbtnWidgetBg() {
		return this.widgetSvc.getbtnWidgetBg();
	}

	getbtnWidgetColor() {
		return this.widgetSvc.getbtnWidgetColor();
	}

	getFormOutline() {
		return this.widgetSvc.getWidgetOutline();
	}
}
