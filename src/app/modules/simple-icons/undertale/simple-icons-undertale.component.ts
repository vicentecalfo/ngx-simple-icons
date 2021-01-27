import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-undertale',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Undertale icon</title><path d="M3 0v1.5H1.5V3H0v12h3v3h3v3h3v3h6v-3h3v-3h3v-3h3V3h-1.5V1.5H21V0h-3v1.5h-3V3h-1.5v3h-3V3H9V1.5H6V0z"/></svg>`,
    styles: []
})
export class SimpleIconsUndertaleComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E71D29';
    @Input() className: string = 'simple-icons-undertale'
    constructor() {}
    ngOnInit(): void {}
}
