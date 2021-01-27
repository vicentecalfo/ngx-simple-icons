import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-bandcamp',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bandcamp icon</title><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/></svg>`,
    styles: []
})
export class SimpleIconsBandcampComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#408294';
    @Input() className: string = 'simple-icons-bandcamp'
    constructor() {}
    ngOnInit(): void {}
}
