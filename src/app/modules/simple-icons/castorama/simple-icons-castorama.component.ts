import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-castorama',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Castorama icon</title><path d="M8.91 16.106c-2.129 0-3.659-1.794-3.659-4.266 0-2.148 1.468-4.095 3.488-4.095 2.275 0 3.545 1.857 3.545 1.857l2.939-3.298c-.91-1.062-2.598-2.882-6.503-2.882-4.388 0-8.209 3.489-8.209 8.456 0 4.766 3.475 8.532 8.266 8.532 3.855 0 5.572-2.017 6.54-3.129l-2.831-2.969c0 .001-1.415 1.794-3.576 1.794zM18.283 0v9.988h-2.064a1.92 1.92 0 1 0 0 3.84h2.064V24h5.205V0h-5.205z"/></svg>`,
    styles: []
})
export class SimpleIconsCastoramaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0078D7';
    @Input() className: string = 'simple-icons-castorama'
    constructor() {}
    ngOnInit(): void {}
}