import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-angular',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Angular icon</title><path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"/></svg>`,
    styles: []
})
export class SimpleIconsAngularComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#DD0031';
    @Input() className: string = 'simple-icons-angular'
    constructor() {}
    ngOnInit(): void {}
}
