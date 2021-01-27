import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-hulu',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Hulu icon</title><path d="M14.394 7.367h-3.598a5.895 5.895 0 00-2.058.404V0H2.963v24h5.785v-9.486a1.606 1.606 0 011.556-1.696h3.382a1.586 1.586 0 011.586 1.556v9.566h5.765V13.536c0-4.399-2.244-6.147-5.885-6.147"/></svg>`,
    styles: []
})
export class SimpleIconsHuluComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#3DBB3D';
    @Input() className: string = 'simple-icons-hulu'
    constructor() {}
    ngOnInit(): void {}
}
