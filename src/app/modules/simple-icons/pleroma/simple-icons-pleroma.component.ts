import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pleroma',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pleroma icon</title><path d="M6.36 0A1.868 1.868 0 004.49 1.868V24h5.964V0zm7.113 0v12h4.168a1.868 1.868 0 001.868-1.868V0zm0 18.036V24h4.168a1.868 1.868 0 001.868-1.868v-4.096Z"/></svg>`,
    styles: []
})
export class SimpleIconsPleromaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FBA457';
    @Input() className: string = 'simple-icons-pleroma'
    constructor() {}
    ngOnInit(): void {}
}
