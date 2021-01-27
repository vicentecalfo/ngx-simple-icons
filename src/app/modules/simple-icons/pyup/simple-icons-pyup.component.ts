import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pyup',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>PyUp icon</title><path d="M12 0L1.608 6v12l3.984 2.3v-12L12 4.6l6.408 3.7v7.4L12 19.4l-2.95-1.705v4.602L12 24l10.392-6V6zm0 8.593l-2.95 1.703v3.408L12 15.407l2.95-1.703v-3.408z"/></svg>`,
    styles: []
})
export class SimpleIconsPyupComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#9F55FF';
    @Input() className: string = 'simple-icons-pyup'
    constructor() {}
    ngOnInit(): void {}
}
