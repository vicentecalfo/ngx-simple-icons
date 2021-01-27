import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-starlingbank',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Starling Bank icon</title><path d="M12 0C5.3726 0 0 5.3727 0 12c0 6.627 5.3726 12 12 12 6.6279 0 12-5.373 12-12 0-6.6273-5.3721-12-12-12zm3.6094 4.7559v1.4668c-3.1771 0-5.754 2.5766-5.754 5.7539H8.3888c0-3.9882 3.2327-7.2207 7.2207-7.2207zm-1.4649 7.2207h1.4668c0 3.9889-3.233 7.2226-7.2226 7.2226v-1.4687c3.1787 0 5.7558-2.5757 5.7558-5.754Z"/></svg>`,
    styles: []
})
export class SimpleIconsStarlingbankComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#7433FF';
    @Input() className: string = 'simple-icons-starlingbank'
    constructor() {}
    ngOnInit(): void {}
}
