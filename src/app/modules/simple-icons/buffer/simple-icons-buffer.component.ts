import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-buffer',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Buffer icon</title><path d="M1.371 5.476L11.943 0l10.686 5.476-10.686 5.495zm3.36 4.81l7.212 3.547 7.288-3.547 3.398 1.655-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911 7.288-3.91 3.398 1.815L11.943 24 1.371 18.273z"/></svg>`,
    styles: []
})
export class SimpleIconsBufferComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#231F20';
    @Input() className: string = 'simple-icons-buffer'
    constructor() {}
    ngOnInit(): void {}
}