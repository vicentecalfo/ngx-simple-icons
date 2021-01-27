import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-facebookgaming',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook Gaming icon</title><path d="M0 0v24h15.67v-7.35H7.35v-9.3H24V0zm8.33 15.68h8.32V24H24V8.32H8.33Z"/></svg>`,
    styles: []
})
export class SimpleIconsFacebookgamingComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005FED';
    @Input() className: string = 'simple-icons-facebookgaming'
    constructor() {}
    ngOnInit(): void {}
}
