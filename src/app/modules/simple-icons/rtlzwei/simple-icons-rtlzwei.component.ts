import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-rtlzwei',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>RTLZWEI icon</title><path d="M0 0v24h7.38v-3.69H3.692L3.69 3.69h9.229V0H0zm16.61 0v3.69h3.7v16.62h-9.238V24H24V0h-7.39zm-.003 6.49l-3.689.717v9.227l3.69-.715V6.49zm-5.535 1.076l-3.69.715v9.229l3.69-.717V7.566z"/></svg>`,
    styles: []
})
export class SimpleIconsRtlzweiComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00BCF6';
    @Input() className: string = 'simple-icons-rtlzwei'
    constructor() {}
    ngOnInit(): void {}
}
