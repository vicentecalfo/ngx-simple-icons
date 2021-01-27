import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-dynamics365',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Dynamics 365 icon</title><path d="M4.59 7.41l4.94 3.54L4.59 24zm0-7.41v6.36l9.53 5.29 4.59-3.52zm0 24l14.82-8.47v-6.7Z"/></svg>`,
    styles: []
})
export class SimpleIconsDynamics365Component implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#002050';
    @Input() className: string = 'simple-icons-dynamics365'
    constructor() {}
    ngOnInit(): void {}
}
