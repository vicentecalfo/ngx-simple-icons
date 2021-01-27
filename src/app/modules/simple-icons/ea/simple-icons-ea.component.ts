import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-ea',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>EA icon</title><path d="M16.635 6.162l-5.928 9.377H4.24l1.508-2.3h4.024l1.474-2.335H2.264L.79 13.239h2.156L0 17.84h12.072l4.563-7.259 1.652 2.66h-1.401l-1.473 2.299h4.347l1.473 2.3H24zm-11.461.107L3.7 8.604l9.52-.035 1.474-2.3z"/></svg>`,
    styles: []
})
export class SimpleIconsEaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-ea'
    constructor() {}
    ngOnInit(): void {}
}
