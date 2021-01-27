import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-buzzfeed',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>BuzzFeed icon</title><path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-4.148-.273l-.977-6.94-6.5 2.624 2.575 1.487-2.435 4.215L8.3 10.68l-4.153 7.19 2.327 1.346 2.812-4.868L13.5 16.78l3.777-6.54 2.575 1.487z"/></svg>`,
    styles: []
})
export class SimpleIconsBuzzfeedComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EE3322';
    @Input() className: string = 'simple-icons-buzzfeed'
    constructor() {}
    ngOnInit(): void {}
}
