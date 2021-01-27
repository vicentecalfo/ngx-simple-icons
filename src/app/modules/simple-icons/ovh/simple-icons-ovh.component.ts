import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-ovh',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OVH icon</title><path d="M19.881 10.095l2.563-4.45C23.434 7.389 24 9.404 24 11.555c0 2.88-1.017 5.523-2.71 7.594h-6.62l2.04-3.541h-2.696l3.176-5.513h2.691zm-2.32-5.243L9.333 19.14l.003.009H2.709C1.014 17.077 0 14.435 0 11.555c0-2.152.57-4.17 1.561-5.918L5.855 13.1 10.6 4.852h6.961z"/></svg>`,
    styles: []
})
export class SimpleIconsOvhComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#123F6D';
    @Input() className: string = 'simple-icons-ovh'
    constructor() {}
    ngOnInit(): void {}
}
