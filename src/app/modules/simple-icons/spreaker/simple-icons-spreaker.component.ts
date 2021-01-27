import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-spreaker',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spreaker icon</title><path d="M14.615 0l-5.64 6.54L.529 4.718l8.68 7.372-8.537 7.463 8.411-1.984L14.843 24l.71-8.601 7.918-3.483-7.963-3.33L14.621 0h-.006z"/></svg>`,
    styles: []
})
export class SimpleIconsSpreakerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F5C300';
    @Input() className: string = 'simple-icons-spreaker'
    constructor() {}
    ngOnInit(): void {}
}
