import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-peertube',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>PeerTube icon</title><path d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545"/></svg>`,
    styles: []
})
export class SimpleIconsPeertubeComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F1680D';
    @Input() className: string = 'simple-icons-peertube'
    constructor() {}
    ngOnInit(): void {}
}
