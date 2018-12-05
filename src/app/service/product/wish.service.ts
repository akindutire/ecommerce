import { Injectable } from "@angular/core";
import { ProductModel } from "./../../model/product.model";

@Injectable({
  providedIn: "root"
})
export class WishService {
  itemsInWishList: { productRef: number }[] = [];
  constructor() {}

  add(product: ProductModel) {
    let existFlag: boolean = false;

    for (let xproductIndex in this.itemsInWishList) {
      if (this.itemsInWishList[xproductIndex].productRef == product.key) {
        existFlag = true;
        break;
      }
    }

    if (existFlag === false)
      this.itemsInWishList.push({ productRef: product.key });
  }

  remove(product: ProductModel) {
    for (let xproductIndex in this.itemsInWishList) {
      if (this.itemsInWishList[xproductIndex].productRef == product.key) {
        this.itemsInWishList.splice(+xproductIndex, 1);
        break;
      }
    }
  }

  getTotalWish() {
    return this.itemsInWishList.length;
  }
}
