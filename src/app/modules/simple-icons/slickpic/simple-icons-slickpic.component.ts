import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-slickpic',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SlickPic icon</title><path d="M21.483 18.308L6.056 14.085l2.52-9.201L24 9.104l-2.517 9.204zm-13.414-5.37l12.263 3.354 1.654-6.033L9.72 6.9l-1.65 6.034v.004zM8.526 15.795l-4.891 1.311-1.625-6.045 4.146-1.11.501-1.835L0 9.902l2.478 9.215 9.178-2.467"/></svg>`,
    styles: []
})
export class SimpleIconsSlickpicComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF880F';
    @Input() className: string = 'simple-icons-slickpic'
    constructor() {}
    ngOnInit(): void {}
}