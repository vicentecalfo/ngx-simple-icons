import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-spdx',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SPDX icon</title><path d="M0 0v24H8.222l2.089-2.373 2.09-2.374V13.2H18.978l2.51-2.488L24 8.223V0H12zm5.2 5.2h13.791L12.2 12c-3.735 3.74-6.838 6.8-6.896 6.8-.057 0-.104-3.06-.104-6.8zm8.4 8.8v10H24V14h-5.2z"/></svg>`,
    styles: []
})
export class SimpleIconsSpdxComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4398CC';
    @Input() className: string = 'simple-icons-spdx'
    constructor() {}
    ngOnInit(): void {}
}
