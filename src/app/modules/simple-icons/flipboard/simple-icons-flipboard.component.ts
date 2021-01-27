import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-flipboard',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Flipboard icon</title><path d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4v4.8z"/></svg>`,
    styles: []
})
export class SimpleIconsFlipboardComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E12828';
    @Input() className: string = 'simple-icons-flipboard'
    constructor() {}
    ngOnInit(): void {}
}
