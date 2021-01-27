import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-envato',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Envato icon</title><path d="M20.058 1.043C16.744-2.841 6.018 4.682 6.104 14.38a.459.459 0 0 1-.45.451.459.459 0 0 1-.388-.221 10.387 10.387 0 0 1-.412-7.634.42.42 0 0 0-.712-.412 10.284 10.284 0 0 0-2.784 7.033A10.284 10.284 0 0 0 11.76 23.999c14.635-.332 11.257-19.491 8.298-22.956z"/></svg>`,
    styles: []
})
export class SimpleIconsEnvatoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#81B441';
    @Input() className: string = 'simple-icons-envato'
    constructor() {}
    ngOnInit(): void {}
}
