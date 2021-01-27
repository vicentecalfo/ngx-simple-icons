import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-xsplit',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>XSplit icon</title><path d="M24 19.5c-.7-.1-2.5-.3-2.7-.3-.1 0-2.8 2.3-4 3.399l-.1.101c.1-1.3.3-2.601.399-3.9C11.7 18.1 5.9 17.4 0 16.7V1.5v-.2H.3C.9 1.4 22.9 3.9 24 4v15.5zm-2.6-2.6V6.2C15.1 5.5 8.7 4.7 2.4 4v10.6c6.3.8 12.7 1.5 19 2.3z"/></svg>`,
    styles: []
})
export class SimpleIconsXsplitComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0095DE';
    @Input() className: string = 'simple-icons-xsplit'
    constructor() {}
    ngOnInit(): void {}
}
