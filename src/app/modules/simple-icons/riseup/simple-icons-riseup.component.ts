import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-riseup',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Riseup icon</title><path d="M10.5 24l-1.485-9.007-8.961-1.738L8.16 9.06 7.045 0l6.495 6.414 8.271-3.861-4.093 8.16 6.228 6.673-9.024-1.372z"/></svg>`,
    styles: []
})
export class SimpleIconsRiseupComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF0000';
    @Input() className: string = 'simple-icons-riseup'
    constructor() {}
    ngOnInit(): void {}
}
