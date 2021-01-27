import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-alitalia',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Alitalia icon</title><path d="M5.429 20.551H0l14.257-14.87c1.622-1.765 2.878-2.232 4.686-2.232H24L21.602 20.55h-4.17L19.49 5.907M15.7 20.551l1.384-9.842-9.457 9.842Z"/></svg>`,
    styles: []
})
export class SimpleIconsAlitaliaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#006643';
    @Input() className: string = 'simple-icons-alitalia'
    constructor() {}
    ngOnInit(): void {}
}
