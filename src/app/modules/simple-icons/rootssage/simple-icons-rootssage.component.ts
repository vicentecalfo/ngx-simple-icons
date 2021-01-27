import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-rootssage',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Roots Sage icon</title><path d="M7.384 4.232l1.71 5.075-4.478-3.136L0 9.403l1.753 5.2.01.03H7.3L2.82 17.77l1.754 5.2.01.03h5.705L12 17.925l1.7 5.045.01.03h5.707l1.763-5.23-4.48-3.137h5.537L24 9.403l-4.616-3.232-4.479 3.136 1.711-5.075L12 1zm.105 10.342l1.723-5.111h5.576l1.723 5.111-4.51 3.16z"/></svg>`,
    styles: []
})
export class SimpleIconsRootssageComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#525DDC';
    @Input() className: string = 'simple-icons-rootssage'
    constructor() {}
    ngOnInit(): void {}
}
