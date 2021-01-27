import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-monogram',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Monogram icon</title><path d="M23.158 0v23.503c0 .451-.533.668-.83.338L12 12.38 3.301 2.73.842 0h22.316zM11.029 13.46L1.672 23.841c-.297.33-.83.111-.83-.338V0l10.187 13.46z"/></svg>`,
    styles: []
})
export class SimpleIconsMonogramComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FDB22A';
    @Input() className: string = 'simple-icons-monogram'
    constructor() {}
    ngOnInit(): void {}
}
