import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-hexo',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Hexo icon</title><path d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02.02-12zm4.828 17.14l-.96.558-.969-.574V12.99H9.081v4.15l-.96.558-.969-.574V6.854l.964-.552.965.563v4.145h5.838V6.86l.965-.552.964.563z"/></svg>`,
    styles: []
})
export class SimpleIconsHexoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0E83CD';
    @Input() className: string = 'simple-icons-hexo'
    constructor() {}
    ngOnInit(): void {}
}
