import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-snapcraft',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Snapcraft icon</title><path d="M13.804 13.367V5.69l5.292 2.362-5.292 5.315zM3.701 23.514l6.49-12.22 2.847 2.843L3.7 23.514zM0 .486l13.355 4.848v8.484L0 .486zM21.803 5.334H14.11L24 9.748z"/></svg>`,
    styles: []
})
export class SimpleIconsSnapcraftComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#82BEA0';
    @Input() className: string = 'simple-icons-snapcraft'
    constructor() {}
    ngOnInit(): void {}
}
