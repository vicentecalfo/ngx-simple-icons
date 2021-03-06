import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-bookmeter',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bookmeter icon</title><path d="M.678 14.262h6.089V24H.678v-9.738zm8.215 9.717h6.089V7.11H8.893v16.869zM17.234 0v24h6.089V0h-6.089z"/></svg>`,
    styles: []
})
export class SimpleIconsBookmeterComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#64BC4B';
    @Input() className: string = 'simple-icons-bookmeter'
    constructor() {}
    ngOnInit(): void {}
}
