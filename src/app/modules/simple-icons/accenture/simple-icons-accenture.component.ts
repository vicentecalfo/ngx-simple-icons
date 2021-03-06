import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-accenture',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Accenture icon</title><path d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z"/></svg>`,
    styles: []
})
export class SimpleIconsAccentureComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#A100FF';
    @Input() className: string = 'simple-icons-accenture'
    constructor() {}
    ngOnInit(): void {}
}
