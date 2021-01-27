import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-esea',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ESEA icon</title><path d="M14.054 2.767L8.95 9.511 0 9.65l5.832 4.47L1.042 21l8.491-4.088 5.711 4.322V14.12L24 9.796l-17.255 4.02a12.575 12.575 0 001.589-1.955 5.475 5.475 0 00.617-1.786l5.593-.15z"/></svg>`,
    styles: []
})
export class SimpleIconsEseaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0E9648';
    @Input() className: string = 'simple-icons-esea'
    constructor() {}
    ngOnInit(): void {}
}