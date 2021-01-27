import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-producthunt',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Product Hunt icon</title><path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z"/></svg>`,
    styles: []
})
export class SimpleIconsProducthuntComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#DA552F';
    @Input() className: string = 'simple-icons-producthunt'
    constructor() {}
    ngOnInit(): void {}
}
