import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pexels',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Pexels icon</title><path d="M1.5 0A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0h-21zm6.75 6.75h5.2715a3.843 3.843 0 01.627 7.6348V17.25H8.25V6.75zm1.5 1.5v7.5h2.8984v-2.8145h.873a2.343 2.343 0 100-4.6855H9.75Z"/></svg>`,
    styles: []
})
export class SimpleIconsPexelsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#05A081';
    @Input() className: string = 'simple-icons-pexels'
    constructor() {}
    ngOnInit(): void {}
}
