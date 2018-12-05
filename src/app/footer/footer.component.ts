import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from './../service/page/info.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.css' ]
})
export class FooterComponent implements OnInit, OnDestroy {
	private footerBg = '#4a148c';
	private footerColor = '#fff';
	private fixedBottom = false;

	private scopeDetectorSubscription: Subscription;
	constructor(private pageInfoSvc: InfoService) {}

	ngOnInit() {
		this.scopeDetectorSubscription = this.pageInfoSvc.scopeDetector.subscribe((scope: string) => {
			if (scope == 'less') this.fixedBottom = true;
		});
	}

	ngOnDestroy() {
		this.scopeDetectorSubscription.unsubscribe();
	}

	getFooterBg() {
		return this.footerBg;
	}

	getFooterColor() {
		return this.footerColor;
	}
}
