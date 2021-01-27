import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-mcdonalds',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>McDonald's icon</title><path d="M17.243 3.006c2.066 0 3.742 8.714 3.742 19.478H24c0-11.588-3.042-20.968-6.766-20.968-2.127 0-4.007 2.81-5.248 7.227-1.241-4.416-3.121-7.227-5.231-7.227C3.031 1.516 0 10.888 0 22.476h3.014c0-10.763 1.658-19.47 3.724-19.47 2.066 0 3.741 8.05 3.741 17.98h2.997c0-9.93 1.684-17.98 3.75-17.98Z"/></svg>`,
    styles: []
})
export class SimpleIconsMcdonaldsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FBC817';
    @Input() className: string = 'simple-icons-mcdonalds'
    constructor() {}
    ngOnInit(): void {}
}