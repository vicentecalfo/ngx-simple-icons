import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-transferwise',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TransferWise icon</title><path d="M9.871 24h3.11L23.127 0H3.694l3.748 6.291-6.571 6.283h11.361l1.068-2.517H7.03l3.792-3.783L8.61 2.516h10.337z"/></svg>`,
    styles: []
})
export class SimpleIconsTransferwiseComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00B9FF';
    @Input() className: string = 'simple-icons-transferwise'
    constructor() {}
    ngOnInit(): void {}
}
