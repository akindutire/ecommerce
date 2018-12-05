import {
  Directive,
  OnInit,
  ElementRef,
  ViewContainerRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2
} from "@angular/core";
import { InfoService } from "../service/page/info.service";
@Directive({
  selector: "[productChangeDetector]"
})
export class ProductChangeDetectorDirective implements OnInit {
  @Input("productChangeDetector")
  itemsInStock: number;

  constructor(
    private elRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  @HostListener("click")
  productClicked(e: Event) {
    /**
     * Assert that the current product is still available
     */

    console.log(this.itemsInStock);
  }
}
