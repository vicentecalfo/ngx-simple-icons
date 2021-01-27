import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-linuxfoundation',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Linux Foundation icon</title><path d="M4.8 19.2h9.6V24H0V9.6h4.8v9.6zM0 0v7.2h4.8V4.822h14.4V19.2h-2.4V24H24V0H0z"/></svg>`,
    styles: []
})
export class SimpleIconsLinuxfoundationComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#003764';
    @Input() className: string = 'simple-icons-linuxfoundation'
    constructor() {}
    ngOnInit(): void {}
}
