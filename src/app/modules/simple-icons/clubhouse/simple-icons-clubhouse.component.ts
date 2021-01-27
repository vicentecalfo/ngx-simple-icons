import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-clubhouse',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clubhouse icon</title><path d="M1.74219 17.9588C0.78125 17.9588 0 18.7528 0 19.7294C0 20.6981 0.78125 21.5 1.74219 21.5C2.70312 21.5 3.48438 20.6981 3.48438 19.7294C3.48438 18.7528 2.71094 17.9588 1.74219 17.9588ZM23.1797 2.5L12.2188 6.05704V2.54764L0.390624 6.38257V16.5694L10.5938 13.2585V16.752L24 12.4089L20.3672 8.80422L23.1797 2.5ZM10.5938 11.5117L2.02344 14.2906V7.58943L10.5938 4.81049V11.5117ZM20.9688 11.6546L12.2188 14.4971V7.8038L20.2734 5.18366L18.4219 9.15357L20.9688 11.6546Z"/></svg>`,
    styles: []
})
export class SimpleIconsClubhouseComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#6515DD';
    @Input() className: string = 'simple-icons-clubhouse'
    constructor() {}
    ngOnInit(): void {}
}
