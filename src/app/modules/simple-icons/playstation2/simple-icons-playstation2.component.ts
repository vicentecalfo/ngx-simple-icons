import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-playstation2',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PlayStation 2 icon</title><path d="M7.46 13.779v.292h4.142v-3.85h3.796V9.93h-4.115v3.85zm16.248-3.558v1.62h-7.195v2.23H24v-.292h-7.168v-1.646H24V9.929h-7.487v.292zm-16.513 0v1.62H0v2.23h.292v-1.938H7.46V9.929H0v.292Z"/></svg>`,
    styles: []
})
export class SimpleIconsPlaystation2Component implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#003791';
    @Input() className: string = 'simple-icons-playstation2'
    constructor() {}
    ngOnInit(): void {}
}
