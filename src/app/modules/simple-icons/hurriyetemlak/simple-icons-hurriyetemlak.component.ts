import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-hurriyetemlak',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Hurriyetemlak icon</title><path d="M24 16.085L11.994 4.091 0 16.097l3.817 3.812 8.182-8.189 8.189 8.182z"/></svg>`,
    styles: []
})
export class SimpleIconsHurriyetemlakComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E02826';
    @Input() className: string = 'simple-icons-hurriyetemlak'
    constructor() {}
    ngOnInit(): void {}
}
