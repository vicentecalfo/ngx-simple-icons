import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pepsi',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Pepsi icon</title><path d="M18.43 3.277A10.839 10.839 0 002.718 17.594c7.455-2.033 13.503-7 15.712-14.317M12 22.84a10.839 10.839 0 009.21-16.574 7.607 7.607 0 01-2.873 8.195c-3.285 2.416-8.06 2.432-14.649 4.494A10.817 10.817 0 0012 22.84M24 12A12 12 0 1112 0a12 12 0 0112 12"/></svg>`,
    styles: []
})
export class SimpleIconsPepsiComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#2151A1';
    @Input() className: string = 'simple-icons-pepsi'
    constructor() {}
    ngOnInit(): void {}
}
