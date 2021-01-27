import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-conekta',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Conekta icon</title><path d="M8.25 19.502L2.7 12l5.55-7.5 3.45 4.65L9.447 12l2.25 3-3.45 4.502zM12.45 24l8.85-12-8.85-12h-6.9l9 12-9 12h6.9z"/></svg>`,
    styles: []
})
export class SimpleIconsConektaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#414959';
    @Input() className: string = 'simple-icons-conekta'
    constructor() {}
    ngOnInit(): void {}
}
