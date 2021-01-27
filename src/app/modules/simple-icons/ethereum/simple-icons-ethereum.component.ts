import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-ethereum',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ethereum icon</title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/></svg>`,
    styles: []
})
export class SimpleIconsEthereumComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#3C3C3D';
    @Input() className: string = 'simple-icons-ethereum'
    constructor() {}
    ngOnInit(): void {}
}
