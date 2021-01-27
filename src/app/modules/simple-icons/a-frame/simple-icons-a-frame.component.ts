import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-a-frame',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>A-Frame icon</title><path d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.3zm-.39-1.13l-5-14.96-5.03 14.98h10.03Z"/></svg>`,
    styles: []
})
export class SimpleIconsAFrameComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EF2D5E';
    @Input() className: string = 'simple-icons-a-frame'
    constructor() {}
    ngOnInit(): void {}
}
