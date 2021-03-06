import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pandora',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Pandora icon</title><path d="M1.882 0v24H8.32a1.085 1.085 0 001.085-1.085v-4.61h1.612c7.88 0 11.103-4.442 11.103-9.636C22.119 2.257 17.247 0 12.662 0H1.882Z"/></svg>`,
    styles: []
})
export class SimpleIconsPandoraComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#224099';
    @Input() className: string = 'simple-icons-pandora'
    constructor() {}
    ngOnInit(): void {}
}
