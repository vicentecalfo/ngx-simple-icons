import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pluscodes',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Plus Codes icon</title><path d="M2.578 14.583A2.58 2.58 0 010 12a2.58 2.58 0 012.578-2.584A2.58 2.58 0 015.156 12a2.58 2.58 0 01-2.578 2.583zm9.486-9.377a2.58 2.58 0 01-2.579-2.584A2.58 2.58 0 0112.064.038a2.58 2.58 0 012.578 2.584 2.58 2.58 0 01-2.578 2.584zm9.358 9.377A2.58 2.58 0 0118.844 12a2.58 2.58 0 012.578-2.584A2.58 2.58 0 0124 12a2.58 2.58 0 01-2.578 2.583zm-6.78 6.795a2.58 2.58 0 01-2.578 2.584 2.58 2.58 0 01-2.579-2.584 2.58 2.58 0 012.579-2.584 2.58 2.58 0 012.578 2.584m-2.578-6.795A2.58 2.58 0 019.485 12a2.58 2.58 0 012.579-2.584A2.58 2.58 0 0114.642 12a2.58 2.58 0 01-2.578 2.583Z"/></svg>`,
    styles: []
})
export class SimpleIconsPluscodesComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#57C4D2';
    @Input() className: string = 'simple-icons-pluscodes'
    constructor() {}
    ngOnInit(): void {}
}
