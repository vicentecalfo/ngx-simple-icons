import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-dropbox',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dropbox icon</title><path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"/></svg>`,
    styles: []
})
export class SimpleIconsDropboxComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0061FF';
    @Input() className: string = 'simple-icons-dropbox'
    constructor() {}
    ngOnInit(): void {}
}
