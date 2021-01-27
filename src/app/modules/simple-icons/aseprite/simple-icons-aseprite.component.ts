import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-aseprite',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Aseprite icon</title><path d="M4.006 0v1.6h15.988V0zm15.988 1.6v1.6h1.6V1.6zm1.6 1.6v14.4h-1.6v1.6H4.006v-1.6h-1.6V3.2H.809v17.6h1.599v1.6h1.599V24h15.988v-1.6h1.6v-1.6h1.598V3.2zm-19.187 0h1.599V1.6h-1.6zm4.796 3.2v6.4h1.6V6.4zm7.995 0v6.4h1.599V6.4z"/></svg>`,
    styles: []
})
export class SimpleIconsAsepriteComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7D929E';
    @Input() className: string = 'simple-icons-aseprite'
    constructor() {}
    ngOnInit(): void {}
}
