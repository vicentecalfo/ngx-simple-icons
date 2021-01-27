import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-x-pack',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X-Pack icon</title><path d="M13.7 19.55l5.88-5.89 3.35 3.36a3.57 3.57 0 0 1 0 5.05l-.83.83a3.57 3.57 0 0 1-5.05 0zM22.92 1.9l-.83-.83a3.57 3.57 0 0 0-5.05 0L12 6.12 6.95 1.07a3.57 3.57 0 0 0-5.05 0l-.83.83a3.57 3.57 0 0 0 0 5.05L6.12 12l-5.05 5.05a3.57 3.57 0 0 0 0 5.05l.83.83a3.57 3.57 0 0 0 5.05 0L12 17.88l3.68-3.68 2.2-2.2 5.05-5.05a3.57 3.57 0 0 0 0-5.05z"/></svg>`,
    styles: []
})
export class SimpleIconsXPackComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005571';
    @Input() className: string = 'simple-icons-x-pack'
    constructor() {}
    ngOnInit(): void {}
}
