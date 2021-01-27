import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-monzo',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Monzo icon</title><path d="M11.99 17.264H12l5.93-5.92v11.04a.45.45 0 00.76.31l4.98-4.97a1.11 1.11 0 00.32-.8V5.294l.01-.01-3.98-3.97a.44.44 0 00-.63 0L12 8.694l-7.41-7.4a.44.44 0 00-.63 0L0 5.284h.01H0v11.66a1.11 1.11 0 00.32.79l4.97 4.98a.45.45 0 00.76-.32l.01-11.06 5.93 5.94z"/></svg>`,
    styles: []
})
export class SimpleIconsMonzoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#14233C';
    @Input() className: string = 'simple-icons-monzo'
    constructor() {}
    ngOnInit(): void {}
}
