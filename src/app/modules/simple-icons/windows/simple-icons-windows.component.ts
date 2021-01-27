import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-windows',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Windows icon</title><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`,
    styles: []
})
export class SimpleIconsWindowsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0078D6';
    @Input() className: string = 'simple-icons-windows'
    constructor() {}
    ngOnInit(): void {}
}
