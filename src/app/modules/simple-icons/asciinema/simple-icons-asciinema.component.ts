import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-asciinema',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>asciinema icon</title><path d="M1.61 0V24L22.39 12L1.61 0M5.76 7.2L10.06 9.68L5.76 12.16V7.2M12.55 11.12L14.08 12L5.76 16.8V15.04L12.55 11.12Z"/></svg>`,
    styles: []
})
export class SimpleIconsAsciinemaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#D40000';
    @Input() className: string = 'simple-icons-asciinema'
    constructor() {}
    ngOnInit(): void {}
}
