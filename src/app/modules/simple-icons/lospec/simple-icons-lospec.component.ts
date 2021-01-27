import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-lospec',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Lospec icon</title><path d="M4.23 0v24h15.541v-8.4004h-7.1719v3.5996H11.402V0z"/></svg>`,
    styles: []
})
export class SimpleIconsLospecComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EAEAEA';
    @Input() className: string = 'simple-icons-lospec'
    constructor() {}
    ngOnInit(): void {}
}
