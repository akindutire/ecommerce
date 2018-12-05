import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StyleService {
  private btnWidgetBg = "#7b1fa2";
  private btnWidgetColor = "#fff";
  private WidgetOutline = "#e1bee7";

  constructor() {}

  getbtnWidgetBg() {
    return this.btnWidgetBg;
  }

  getbtnWidgetColor() {
    return this.btnWidgetColor;
  }

  getWidgetOutline() {
    return this.WidgetOutline;
  }
}
