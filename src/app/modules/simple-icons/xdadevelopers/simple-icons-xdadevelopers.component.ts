import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-xdadevelopers',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>XDA Developers icon</title><path d="M13.84 3.052V0h7.843v17.583H13.84v-3.024h4.591V3.052zM5.569 14.53V3.024h4.592V0H2.318v17.583H6.98L10.16 24v-9.483z"/></svg>`,
    styles: []
})
export class SimpleIconsXdadevelopersComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EA7100';
    @Input() className: string = 'simple-icons-xdadevelopers'
    constructor() {}
    ngOnInit(): void {}
}
