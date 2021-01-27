import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-strava',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Strava icon</title><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>`,
    styles: []
})
export class SimpleIconsStravaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FC4C02';
    @Input() className: string = 'simple-icons-strava'
    constructor() {}
    ngOnInit(): void {}
}
