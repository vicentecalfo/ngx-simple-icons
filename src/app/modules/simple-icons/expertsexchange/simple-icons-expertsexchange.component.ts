import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-expertsexchange',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Experts Exchange icon</title><path d="M7.28.9H0L8.36 12 0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06 3.64 4.82zM14.42 20.05l2.3 3.05H24l-5.94-7.88z"/></svg>`,
    styles: []
})
export class SimpleIconsExpertsexchangeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00AAE7';
    @Input() className: string = 'simple-icons-expertsexchange'
    constructor() {}
    ngOnInit(): void {}
}
