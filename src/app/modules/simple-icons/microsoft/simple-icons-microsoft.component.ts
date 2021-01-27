import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-microsoft',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft icon</title><path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"/></svg>`,
    styles: []
})
export class SimpleIconsMicrosoftComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#5E5E5E';
    @Input() className: string = 'simple-icons-microsoft'
    constructor() {}
    ngOnInit(): void {}
}
