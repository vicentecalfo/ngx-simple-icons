import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-nintendo',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nintendo icon</title><path d="M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6"/></svg>`,
    styles: []
})
export class SimpleIconsNintendoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#8F8F8F';
    @Input() className: string = 'simple-icons-nintendo'
    constructor() {}
    ngOnInit(): void {}
}
