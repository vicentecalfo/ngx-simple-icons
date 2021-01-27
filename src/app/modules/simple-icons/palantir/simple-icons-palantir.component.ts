import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-palantir',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Palantir icon</title><path d="M20.147 18L12 21.178 3.853 18 2.5 20.343 12 24l9.5-3.657L20.147 18zM12 0a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0 16.078a6.568 6.568 0 1 1 0-13.136 6.568 6.568 0 0 1 0 13.136z"/></svg>`,
    styles: []
})
export class SimpleIconsPalantirComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#101113';
    @Input() className: string = 'simple-icons-palantir'
    constructor() {}
    ngOnInit(): void {}
}
