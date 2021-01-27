import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-adobe',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe icon</title><path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"/></svg>`,
    styles: []
})
export class SimpleIconsAdobeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF0000';
    @Input() className: string = 'simple-icons-adobe'
    constructor() {}
    ngOnInit(): void {}
}
