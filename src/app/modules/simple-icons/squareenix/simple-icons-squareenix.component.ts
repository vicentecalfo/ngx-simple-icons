import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-squareenix',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Square Enix icon</title><path d="M1.723 0v24h20.554v-4.496H7.037V4.088h15.006V0zm9.751 9.46v4.497h8.584V9.459z"/></svg>`,
    styles: []
})
export class SimpleIconsSquareenixComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#ED1C24';
    @Input() className: string = 'simple-icons-squareenix'
    constructor() {}
    ngOnInit(): void {}
}
