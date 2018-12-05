import { Injectable } from "@angular/core";
import { CategoryModel } from "./../../model/category.model";
@Injectable({
  providedIn: "root"
})
export class ListService {
  private category: CategoryModel[] = [
    new CategoryModel(1, "Computer", 8),
    new CategoryModel(2, "Phone", 3),
    new CategoryModel(3, "Fashion", 3),
    new CategoryModel(4, "Wears", 1),
    new CategoryModel(5, "Electronics", 2)
  ];
  constructor() {}

  getCategory() {
    return this.category;
  }
}
