import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-julia',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Julia icon</title><path d="M11.138 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zm6.431-11.138a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zM24 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0z"/></svg>`,
    styles: []
})
export class SimpleIconsJuliaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#9558B2';
    @Input() className: string = 'simple-icons-julia'
    constructor() {}
    ngOnInit(): void {}
}
