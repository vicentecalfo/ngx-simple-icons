import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-marketo',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Marketo icon</title><path d="M16.146 0v24l6.134-4.886V3.334zM13.293 18.758l-4.939 2.157V2.086l4.939 1.462zM1.721 18.205l3.78-.999V5.188l-3.762-.606z"/></svg>`,
    styles: []
})
export class SimpleIconsMarketoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#5C4C9F';
    @Input() className: string = 'simple-icons-marketo'
    constructor() {}
    ngOnInit(): void {}
}
