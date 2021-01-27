import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-pagekit',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pagekit icon</title><path d="M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401z"/></svg>`,
    styles: []
})
export class SimpleIconsPagekitComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#212121';
    @Input() className: string = 'simple-icons-pagekit'
    constructor() {}
    ngOnInit(): void {}
}
