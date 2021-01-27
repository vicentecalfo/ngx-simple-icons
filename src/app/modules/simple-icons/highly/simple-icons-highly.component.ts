import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-highly',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Highly icon</title><path d="M10.2 20.4H13.799999999999999V24H10.2zM9 0H15V18H9z"/></svg>`,
    styles: []
})
export class SimpleIconsHighlyComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF3C00';
    @Input() className: string = 'simple-icons-highly'
    constructor() {}
    ngOnInit(): void {}
}
