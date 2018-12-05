import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent implements OnInit {
  private headerBg = "#4a148c";
  private headerColor = "#fff";

  constructor() {}

  ngOnInit() {}

  getHeaderBg() {
    return this.headerBg;
  }

  getHeaderColor() {
    return this.headerColor;
  }

  enableFixedBottom() {
    return true;
  }
}
