import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-monster',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Monster icon</title><path d="M0 0V24H5.42V12.39L12 18.19L18.58 12.39V24H24V0L12 11.23L0 0Z"/></svg>`,
    styles: []
})
export class SimpleIconsMonsterComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#6E46AE';
    @Input() className: string = 'simple-icons-monster'
    constructor() {}
    ngOnInit(): void {}
}