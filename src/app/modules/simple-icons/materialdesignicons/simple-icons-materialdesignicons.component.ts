import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-materialdesignicons',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Material Design Icons icon</title><path d="M0 0h7.2v2.4h9.6V0H24v7.2h-2.4v9.6H24V24h-7.2v-2.4H7.2V24H0v-7.2h2.4V7.2H0V0m16.8 7.2V4.8H7.2v2.4H4.8v9.6h2.4v2.4h9.6v-2.4h2.4V7.2M2.4 2.4v2.4h2.4V2.4m14.4 0v2.4h2.4V2.4M2.4 19.2v2.4h2.4v-2.4m14.4 0v2.4h2.4v-2.4z"/></svg>`,
    styles: []
})
export class SimpleIconsMaterialdesigniconsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#2196F3';
    @Input() className: string = 'simple-icons-materialdesignicons'
    constructor() {}
    ngOnInit(): void {}
}
