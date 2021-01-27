import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-netapp',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>NetApp icon</title><path d="M0 2v20h9.33V10h5.34v12H24V2Z"/></svg>`,
    styles: []
})
export class SimpleIconsNetappComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0067C5';
    @Input() className: string = 'simple-icons-netapp'
    constructor() {}
    ngOnInit(): void {}
}
