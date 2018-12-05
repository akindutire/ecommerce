import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from './../../model/product.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	totalAmountDetector: Subject<number> = new Subject<number>();
	itemsInCartDetector: Subject<any[]> = new Subject<any[]>();

	private totalAmount: number = 0.0;
	private itemsInCart: { productRef: { key: number; qty: number } }[] = [];

	constructor(private productSvc: ProductService) {}

	add(product: ProductModel) {
		this.totalAmount += product.discountPrice;
		product.itemInStock -= 1;
		this.productSvc.updateProduct(product, product.key);

		let tmpQtyFlag: number = 1;

		for (let xproductIndex in this.itemsInCart) {
			if (this.itemsInCart[xproductIndex].productRef.key == product.key) {
				this.itemsInCart[xproductIndex].productRef.qty += 1;
				tmpQtyFlag = 0;
				break;
			}
		}

		if (tmpQtyFlag === 1) this.itemsInCart.push({ productRef: { key: product.key, qty: 1 } });

		this.productSvc.productDetector.next(this.productSvc.loadProducts());
		this.totalAmountDetector.next(this.totalAmount);
		this.itemsInCartDetector.next(this.itemsInCart);
	}

	remove(product) {
		this.totalAmount -= product.discountPrice;

		product.itemInStock += 1;
		this.productSvc.updateProduct(product, product.key);

		for (let xproductIndex in this.itemsInCart) {
			if (this.itemsInCart[xproductIndex].productRef.key == product.key) {
				if (this.itemsInCart[xproductIndex].productRef.qty === 1) {
					this.itemsInCart.splice(+xproductIndex, 1);
				} else {
					this.itemsInCart[xproductIndex].productRef.qty -= 1;
				}
				break;
			}
		}

		this.productSvc.productDetector.next(this.productSvc.loadProducts());
		this.totalAmountDetector.next(this.totalAmount);
		this.itemsInCartDetector.next(this.itemsInCart);
	}
}
