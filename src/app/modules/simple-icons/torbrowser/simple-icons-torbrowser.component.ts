import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-torbrowser',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tor Browser icon</title><path d="M12 21.82v-1.46A8.36 8.36 0 0020.36 12 8.36 8.36 0 0012 3.64V2.18A9.83 9.83 0 0121.82 12 9.83 9.83 0 0112 21.82zm0-5.09A4.74 4.74 0 0016.73 12 4.74 4.74 0 0012 7.27V5.82A6.17 6.17 0 0118.18 12 6.17 6.17 0 0112 18.18zm0-7.27A2.54 2.54 0 0114.55 12 2.54 2.54 0 0112 14.54zM0 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 000 12z"/></svg>`,
    styles: []
})
export class SimpleIconsTorbrowserComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7D4698';
    @Input() className: string = 'simple-icons-torbrowser'
    constructor() {}
    ngOnInit(): void {}
}
