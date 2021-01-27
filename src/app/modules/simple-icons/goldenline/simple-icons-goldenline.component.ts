import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-goldenline',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GoldenLine icon</title><path d="M11.997 24a11.995 11.995 0 0 0 11.949-13.04h-6.781v2.943h1.226a6.667 6.667 0 1 1-.114-4.156h5.509A11.995 11.995 0 1 0 12 23.991z"/></svg>`,
    styles: []
})
export class SimpleIconsGoldenlineComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FFE005';
    @Input() className: string = 'simple-icons-goldenline'
    constructor() {}
    ngOnInit(): void {}
}
