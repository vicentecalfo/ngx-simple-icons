import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-slashdot',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slashdot icon</title><path d="M19.777 0L7.037 24H1.868L14.605 0h5.172zm2.354 19.801c0 2.268-1.841 4.105-4.109 4.105s-4.107-1.838-4.107-4.105 1.839-4.107 4.107-4.107 4.109 1.839 4.109 4.107z"/></svg>`,
    styles: []
})
export class SimpleIconsSlashdotComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#026664';
    @Input() className: string = 'simple-icons-slashdot'
    constructor() {}
    ngOnInit(): void {}
}
