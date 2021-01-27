import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-osano',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Osano icon</title><path d="M12 6.091A5.909 5.909 0 1017.909 12 5.91 5.91 0 0012 6.091M12 0A12 12 0 110 12 12 12 0 0112 0z"/></svg>`,
    styles: []
})
export class SimpleIconsOsanoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7764FA';
    @Input() className: string = 'simple-icons-osano'
    constructor() {}
    ngOnInit(): void {}
}
