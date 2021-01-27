import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-farfetch',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Farfetch icon</title><path d="M9.635 0L4.883 4.811V24h4.752v-9.593h7.119V9.6H9.635V4.811h9.482V0Z"/></svg>`,
    styles: []
})
export class SimpleIconsFarfetchComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-farfetch'
    constructor() {}
    ngOnInit(): void {}
}
