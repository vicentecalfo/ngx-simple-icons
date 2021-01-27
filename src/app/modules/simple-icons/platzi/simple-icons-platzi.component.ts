import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-platzi',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Platzi icon</title><path d="M10.6392 1.127L2.486 9.282a3.842 3.842 0 000 5.4361l8.1552 8.1552a3.842 3.842 0 005.4361 0l2.719-2.718-2.719-2.7181-2.718 2.718-8.1562-8.1551 8.1552-8.1552 5.437 5.4371-5.437 5.4361 2.718 2.719 5.4371-5.437a3.842 3.842 0 000-5.4372l-5.448-5.436a3.828 3.828 0 00-5.4252 0z"/></svg>`,
    styles: []
})
export class SimpleIconsPlatziComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#98CA3F';
    @Input() className: string = 'simple-icons-platzi'
    constructor() {}
    ngOnInit(): void {}
}
