import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-beats',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Beats icon</title><path d="M2.625 0v15h8.25a7.5 7.5 0 0 0 0-15zm17.016 11.705c-1.571 3.261-4.91 5.517-8.766 5.517h-8.25V24h11.25a7.5 7.5 0 0 0 5.766-12.295z"/></svg>`,
    styles: []
})
export class SimpleIconsBeatsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005571';
    @Input() className: string = 'simple-icons-beats'
    constructor() {}
    ngOnInit(): void {}
}
