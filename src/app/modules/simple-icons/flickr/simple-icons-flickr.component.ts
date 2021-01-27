import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-flickr',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flickr icon</title><path d="M0 12c0 3.074 2.494 5.564 5.565 5.564 3.075 0 5.569-2.49 5.569-5.564S8.641 6.436 5.565 6.436C2.495 6.436 0 8.926 0 12zm12.866 0c0 3.074 2.493 5.564 5.567 5.564C21.496 17.564 24 15.074 24 12s-2.492-5.564-5.564-5.564c-3.075 0-5.57 2.49-5.57 5.564z"/></svg>`,
    styles: []
})
export class SimpleIconsFlickrComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0063DC';
    @Input() className: string = 'simple-icons-flickr'
    constructor() {}
    ngOnInit(): void {}
}