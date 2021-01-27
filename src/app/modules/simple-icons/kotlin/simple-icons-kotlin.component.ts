import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-kotlin',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kotlin icon</title><path d="M0 24V13.848L13.505 0H24L0 24zM0 0v12.672L12.05 0H0zm1.335 24H24L12.699 12.618 1.335 24z"/></svg>`,
    styles: []
})
export class SimpleIconsKotlinComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0095D5';
    @Input() className: string = 'simple-icons-kotlin'
    constructor() {}
    ngOnInit(): void {}
}