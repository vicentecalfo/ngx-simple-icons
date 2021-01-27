import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-codio',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Codio icon</title><path d="M11.997 24L1.605 17.997v-12L12 0l10.396 5.997L16.5 9.402 12 6.8 7.496 9.4v5.2l4.502 2.6 4.5-2.6 5.895 3.397L12.003 24h-.006z"/></svg>`,
    styles: []
})
export class SimpleIconsCodioComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4574E0';
    @Input() className: string = 'simple-icons-codio'
    constructor() {}
    ngOnInit(): void {}
}