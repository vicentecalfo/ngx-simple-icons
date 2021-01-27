import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-plex',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Plex icon</title><path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12"/></svg>`,
    styles: []
})
export class SimpleIconsPlexComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E5A00D';
    @Input() className: string = 'simple-icons-plex'
    constructor() {}
    ngOnInit(): void {}
}
