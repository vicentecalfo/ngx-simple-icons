import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-chase',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Chase icon</title><path d="M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z"/></svg>`,
    styles: []
})
export class SimpleIconsChaseComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#117ACA';
    @Input() className: string = 'simple-icons-chase'
    constructor() {}
    ngOnInit(): void {}
}