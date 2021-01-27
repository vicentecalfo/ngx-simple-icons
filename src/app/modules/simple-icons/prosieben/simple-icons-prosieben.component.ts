import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-prosieben',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ProSieben icon</title><path d="M.24 0H23.68V6.64H.24M23.76 7.92V24H.24s2.88-7.84 10.48-12.48c7.12-4.4 13.04-3.6 13.04-3.6Z"/></svg>`,
    styles: []
})
export class SimpleIconsProsiebenComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E6000F';
    @Input() className: string = 'simple-icons-prosieben'
    constructor() {}
    ngOnInit(): void {}
}
