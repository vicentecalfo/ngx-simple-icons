import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-bulma',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Bulma icon</title><path d="M11.25 0l-6 6 -1.5 10.5 7.5 7.5 9 -6 -6 -6 4.5 -4.5 -7.5 -7.5Z"/></svg>`,
    styles: []
})
export class SimpleIconsBulmaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00D1B2';
    @Input() className: string = 'simple-icons-bulma'
    constructor() {}
    ngOnInit(): void {}
}
