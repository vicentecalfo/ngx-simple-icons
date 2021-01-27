import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-litecoin',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Litecoin icon</title><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z"/></svg>`,
    styles: []
})
export class SimpleIconsLitecoinComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#A6A9AA';
    @Input() className: string = 'simple-icons-litecoin'
    constructor() {}
    ngOnInit(): void {}
}
