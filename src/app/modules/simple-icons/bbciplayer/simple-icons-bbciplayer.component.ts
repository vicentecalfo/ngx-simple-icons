import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-bbciplayer',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>BBC iPlayer icon</title><path d="M8.315 0H2.382v6.022h5.933V3.506l9.618 8.45-9.618 8.538V8.99H2.382V24h5.933l13.303-12.045Z"/></svg>`,
    styles: []
})
export class SimpleIconsBbciplayerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F54997';
    @Input() className: string = 'simple-icons-bbciplayer'
    constructor() {}
    ngOnInit(): void {}
}
