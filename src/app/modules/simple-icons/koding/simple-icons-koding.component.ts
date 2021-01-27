import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-koding',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Koding icon</title><path d="M.8 0H23v6H1V0zm0 9H18v6H.7V9zm0 9H23v6H1v-6z"/></svg>`,
    styles: []
})
export class SimpleIconsKodingComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00B057';
    @Input() className: string = 'simple-icons-koding'
    constructor() {}
    ngOnInit(): void {}
}
