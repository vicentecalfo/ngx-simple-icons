import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-spectrum',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spectrum icon</title><path d="M0 10.2A1.8 1.8 0 001.8 12h1.8a8.4 8.4 0 018.4 8.4v1.8a1.8 1.8 0 001.8 1.8h8.4a1.8 1.8 0 001.8-1.8v-1.8C24 9.133 14.867 0 3.6 0H1.8A1.8 1.8 0 000 1.8v8.4z"/></svg>`,
    styles: []
})
export class SimpleIconsSpectrumComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7B16FF';
    @Input() className: string = 'simple-icons-spectrum'
    constructor() {}
    ngOnInit(): void {}
}
