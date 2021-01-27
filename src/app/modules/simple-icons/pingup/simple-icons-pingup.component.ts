import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pingup',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pingup icon</title><path d="M13.667 0H1.721v24h7.536V9.717h-2.76c-.504 0-.65-.314-.32-.698l4.324-5.044c.327-.384.867-.384 1.195 0l4.324 5.044c.314.384.18.698-.33.698h-2.759v6.676h.73c6.225 0 8.617-4.309 8.617-8.481C22.291 3.906 19.666 0 13.667 0"/></svg>`,
    styles: []
})
export class SimpleIconsPingupComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00B1AB';
    @Input() className: string = 'simple-icons-pingup'
    constructor() {}
    ngOnInit(): void {}
}
