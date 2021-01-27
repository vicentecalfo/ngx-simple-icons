import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-framer',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Framer icon</title><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/></svg>`,
    styles: []
})
export class SimpleIconsFramerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0055FF';
    @Input() className: string = 'simple-icons-framer'
    constructor() {}
    ngOnInit(): void {}
}
