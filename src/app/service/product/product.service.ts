import { Injectable } from '@angular/core';
import { ProductModel } from './../../model/product.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	productDetector = new Subject<ProductModel[]>();

	private productCount: number = 0;
	private products: ProductModel[] = [
		new ProductModel(
			1,
			'Hp2000',
			'Computer',
			1,
			'fast and strong',
			5,
			'https://source.unsplash.com/random/200x250?technology',
			'',
			'',
			'',
			'',
			'',
			900,
			895
		),
		new ProductModel(
			2,
			'Dell Latitude 1082',
			'Computer',
			1,
			'fast and strong',
			2,
			'https://source.unsplash.com/random/200x251?technology',
			'',
			'',
			'',
			'',
			'',
			950,
			925
		),
		new ProductModel(
			3,
			'iPhone7',
			'Phone',
			2,
			'fast and strong',
			3,
			'https://source.unsplash.com/random/200x252?technology',
			'',
			'',
			'',
			'',
			'',
			650,
			650
		),
		new ProductModel(
			4,
			'Infinix Hot 5',
			'Phone',
			2,
			'fast and strong',
			5,
			'https://source.unsplash.com/random/201x250?technology',
			'',
			'',
			'',
			'',
			'',
			400,
			390
		),
		new ProductModel(
			5,
			"Brazilian hair 14' brown",
			'Fashion',
			3,
			'classic',
			9,
			'https://source.unsplash.com/random/200x250?fashion',
			'',
			'',
			'',
			'',
			'',
			250,
			220
		),
		new ProductModel(
			6,
			"Indian hair 12' white",
			'Fashion',
			3,
			'attractive',
			2,
			'https://source.unsplash.com/random/202x250?fashion',
			'',
			'',
			'',
			'',
			'',
			245,
			240
		),
		new ProductModel(
			7,
			"Bombay Jean 3'",
			'Wears',
			4,
			'well fitted',
			5,
			'https://source.unsplash.com/random/201x250?fashion',
			'',
			'',
			'',
			'',
			'',
			240,
			235
		),
		new ProductModel(
			8,
			'Sony Beat X',
			'Electronics',
			5,
			'audible and classic',
			18,
			'https://source.unsplash.com/random/200x250?electronic',
			'',
			'',
			'',
			'',
			'',
			300,
			298
		),
		new ProductModel(
			9,
			"Plasma tv 25'",
			'Electronics',
			5,
			'sound, visuals and color',
			9,
			'https://source.unsplash.com/random/202x250?technology',
			'',
			'',
			'',
			'',
			'',
			340,
			335
		)
	];
	constructor() {}

	loadProducts() {
		const products = this.products.filter((product: ProductModel) => {
			return product.itemInStock > 0;
		});

		this.productCount = products.length;
		return products;
	}

	getProductCount() {
		return this.productCount;
	}

	searchProducts(key: number) {
		let tmpProduct = null;

		// tmpProduct = this.products.find((value: ProductModel) => {
		//   value.key == key;
		// });

		tmpProduct = this.products.filter((product: ProductModel) => {
			return product.key == key;
		});

		return tmpProduct[0];
	}

	updateProduct(product: ProductModel, key: number) {
		this.products.forEach((product: ProductModel, productIndex: number) => {
			if (product.key == key) {
				this.products[productIndex] = product;
			}
		});
	}

	removeProduct(key: number) {
		let productIndex = 0;
		for (let product of this.products) {
			productIndex += 1;

			if (product.key == key) {
				this.products.splice(productIndex, 1);
				break;
			}
		}
	}
}
