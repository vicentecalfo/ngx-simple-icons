import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-stackexchange',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Exchange icon</title><path d="M21.728 15.577v1.036c0 1.754-1.395 3.177-3.1 3.177h-.904L13.645 24v-4.21H5.371c-1.704 0-3.099-1.423-3.099-3.181v-1.032h19.456zM2.275 10.463h19.323v3.979H2.275v-3.979zm0-5.141h19.323v3.979H2.275V5.322zM18.575 0c1.681 0 3.023 1.42 3.023 3.178v1.034H2.275V3.178C2.275 1.422 3.67 0 5.375 0h13.2z"/></svg>`,
    styles: []
})
export class SimpleIconsStackexchangeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1E5397';
    @Input() className: string = 'simple-icons-stackexchange'
    constructor() {}
    ngOnInit(): void {}
}