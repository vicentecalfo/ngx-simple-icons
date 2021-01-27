import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-crehana',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Crehana icon</title><path d="M12,0C5.371,0,0,5.371,0,12c0,6.626,5.371,12,12,12s12-5.374,12-12C24,5.371,18.626,0,12,0z M17.94,9.843v7.915h-3.957 v-3.892h-3.895v3.83H6.13v-3.957h3.833V9.843H6.06V5.948h3.957v3.895h3.965V5.948h3.957V9.843z"/></svg>`,
    styles: []
})
export class SimpleIconsCrehanaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4B22F4';
    @Input() className: string = 'simple-icons-crehana'
    constructor() {}
    ngOnInit(): void {}
}
