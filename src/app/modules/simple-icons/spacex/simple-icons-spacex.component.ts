import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-spacex',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SpaceX icon</title><path d="M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"/></svg>`,
    styles: []
})
export class SimpleIconsSpacexComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-spacex'
    constructor() {}
    ngOnInit(): void {}
}
