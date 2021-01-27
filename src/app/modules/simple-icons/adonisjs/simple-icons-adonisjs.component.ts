import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-adonisjs',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>AdonisJS icon</title><path d="M13.333 1.333l-.596 1.193-2.404 4.807L8 2.667l-8 16h4.667l-2 4H24zm0 2.982l8.51 17.018H4.823l1.334-2.666H16l-4.922-9.843Z"/></svg>`,
    styles: []
})
export class SimpleIconsAdonisjsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#220052';
    @Input() className: string = 'simple-icons-adonisjs'
    constructor() {}
    ngOnInit(): void {}
}
