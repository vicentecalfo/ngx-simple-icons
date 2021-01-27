import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-airfrance',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Air France icon</title><path d="M13.776 3.9L5.184 16.332C4.051 17.969 2.208 19.548 0 19.721v.379h9.552c2.544 0 4.397-1.656 5.616-3.48L24 3.9Z"/></svg>`,
    styles: []
})
export class SimpleIconsAirfranceComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#002157';
    @Input() className: string = 'simple-icons-airfrance'
    constructor() {}
    ngOnInit(): void {}
}
