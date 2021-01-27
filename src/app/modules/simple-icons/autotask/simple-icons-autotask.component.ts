import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-autotask',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Autotask icon</title><path d="M17.93 11.626l2.782 6.988h-4.298l-1.825-4.736-9.885 6.667L1 12.6h.815l4.39 3.418 7.61-4.148-1.085-2.82-1.168 2.481-4.938 2.716 3.553-9.342h5.077l2.022 5.08L24 6.32V0H0v24h24V7.532z"/></svg>`,
    styles: []
})
export class SimpleIconsAutotaskComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E51937';
    @Input() className: string = 'simple-icons-autotask'
    constructor() {}
    ngOnInit(): void {}
}
