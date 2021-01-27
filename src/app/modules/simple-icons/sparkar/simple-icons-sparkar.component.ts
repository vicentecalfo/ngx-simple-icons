import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-sparkar',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spark AR icon</title><path d="M3.199 20.001L20.801 12v8.001L11.999 24l-8.8-3.999zm8.8 3.999zm-.001-24L3.199 3.999V12l17.602-8.001L11.998 0zM3.803 12.275l7.592 3.453 8.803-4.002-7.594-3.45-8.801 3.999z"/></svg>`,
    styles: []
})
export class SimpleIconsSparkarComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF5C83';
    @Input() className: string = 'simple-icons-sparkar'
    constructor() {}
    ngOnInit(): void {}
}
