import { Component, OnInit } from "@angular/core";
import { ListService } from "./../service/category/list.service";
import { CategoryModel } from "./../model/category.model";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  category: CategoryModel[];
  constructor(private categorySvc: ListService) {}

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.category = this.categorySvc.getCategory();
  }
}
