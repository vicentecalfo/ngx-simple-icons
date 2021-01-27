import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-zend',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Zend icon</title><path d="M24 .467L9.01 20.217H20.54A3.46 3.46 0 0024 16.757V.468zM3.459 3.783C1.585 3.783 0 5.153 0 7.1v16.433l15.063-19.75H3.459Z"/></svg>`,
    styles: []
})
export class SimpleIconsZendComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0679EA';
    @Input() className: string = 'simple-icons-zend'
    constructor() {}
    ngOnInit(): void {}
}
