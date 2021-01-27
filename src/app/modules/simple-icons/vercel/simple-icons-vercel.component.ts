import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-vercel',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel icon</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>`,
    styles: []
})
export class SimpleIconsVercelComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-vercel'
    constructor() {}
    ngOnInit(): void {}
}
