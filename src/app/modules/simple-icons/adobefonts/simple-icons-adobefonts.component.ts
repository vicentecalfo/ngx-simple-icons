import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-adobefonts',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe Fonts icon</title><path d="M13.272 10.083c-.531 1.828-.977 3.588-1.508 5.31a9.623 9.623 0 0 1-1.052 2.488 2.952 2.952 0 0 1-2.351 1.294c-.73 0-1.45-.35-1.45-1.138a1.007 1.007 0 0 1 .872-.943.44.44 0 0 1 .398.233c.36.662.701 1.05.863 1.05.16 0 .285-.224.55-1.177l1.887-7.117h-1.347a.699.699 0 0 1 .218-.768h1.346a12.251 12.251 0 0 1 .996-2.49c.644-1.195 1.677-2.139 3.1-2.139 1.08 0 1.526.535 1.526 1.206a1.109 1.109 0 0 1-.92 1.089c-.227 0-.34-.175-.417-.429-.246-.943-.56-1.225-.749-1.225-.19 0-.476.35-.787 1.09a18.332 18.332 0 0 0-.948 2.888h1.64a.66.66 0 0 1-.227.768h-1.64zM0 .553v22.893h24V.554H0zm1.12.953h21.928v20.988H1.12Z"/></svg>`,
    styles: []
})
export class SimpleIconsAdobefontsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#323232';
    @Input() className: string = 'simple-icons-adobefonts'
    constructor() {}
    ngOnInit(): void {}
}
