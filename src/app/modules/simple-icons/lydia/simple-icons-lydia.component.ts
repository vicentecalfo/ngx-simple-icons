import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-lydia',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Lydia icon</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.895 17.611a.421.421 0 01-.168.035h-1.155a.608.608 0 01-.56-.377l-4-9.613-3.991 9.607a.61.61 0 01-.56.377H6.273a.42.42 0 01-.385-.59L10.91 5.575a.793.793 0 01.726-.475h.748a.792.792 0 01.726.48l5.003 11.482a.42.42 0 01-.218.549z"/></svg>`,
    styles: []
})
export class SimpleIconsLydiaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0180FF';
    @Input() className: string = 'simple-icons-lydia'
    constructor() {}
    ngOnInit(): void {}
}
