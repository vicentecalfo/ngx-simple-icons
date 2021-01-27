import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-vbulletin',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>vBulletin icon</title><path d="M1.09 10.316V24h21.82V0h-2.417l-5.461 19.613h-6.09l-3.134-9.246zm9.283-4.444l1.363 6.308L13.955 0H1.089v5.872Z"/></svg>`,
    styles: []
})
export class SimpleIconsVbulletinComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#184D66';
    @Input() className: string = 'simple-icons-vbulletin'
    constructor() {}
    ngOnInit(): void {}
}
