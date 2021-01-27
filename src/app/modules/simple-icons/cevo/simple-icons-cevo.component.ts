import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-cevo',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><title>CEVO icon</title><path d="M3.5 6h12l6 10.3L24 12 18 1.6H6L3.5 6zm-.9 1.5L0 12l6 10.4h12l2.6-4.5-2.5-4.3-2.6 4.5h-7L5 12l2.6-4.5h-5z"/></svg>`,
    styles: []
})
export class SimpleIconsCevoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1EABE2';
    @Input() className: string = 'simple-icons-cevo'
    constructor() {}
    ngOnInit(): void {}
}
