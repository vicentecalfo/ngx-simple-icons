import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-giphy',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GIPHY icon</title><path d="M2.666 0v24h18.668V8.666l-2.668 2.668v10H5.334V2.668H10L12.666 0zm10.668 0v8h8V5.334h-2.668V2.668H16V0"/></svg>`,
    styles: []
})
export class SimpleIconsGiphyComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF6666';
    @Input() className: string = 'simple-icons-giphy'
    constructor() {}
    ngOnInit(): void {}
}
