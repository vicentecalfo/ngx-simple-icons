import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-unsplash',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Unsplash icon</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg>`,
    styles: []
})
export class SimpleIconsUnsplashComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-unsplash'
    constructor() {}
    ngOnInit(): void {}
}
