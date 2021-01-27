import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-metrodelaciudaddemexico',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Metro de la Ciudad de México icon</title><path d="M3.965 8.704V24H.008V6.864h2.097c1.066 0 1.86.774 1.86 1.84m2.366-1.84c.268.521.521 1.315.521 1.84V24h3.685V8.704a1.784 1.784 0 0 0-1.84-1.84M17.4 24V8.704a1.795 1.795 0 0 0-1.844-1.84h-2.382c.269.521.269 1.315.269 1.84V24M.008 3.953V0h15.549c4.75 0 8.435 3.953 8.435 8.704V24h-3.685V8.704a4.735 4.735 0 0 0-4.75-4.75z"/></svg>`,
    styles: []
})
export class SimpleIconsMetrodelaciudaddemexicoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F77E1C';
    @Input() className: string = 'simple-icons-metrodelaciudaddemexico'
    constructor() {}
    ngOnInit(): void {}
}
