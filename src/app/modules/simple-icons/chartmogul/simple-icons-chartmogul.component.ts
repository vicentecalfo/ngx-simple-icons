import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-chartmogul',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>ChartMogul icon</title><path d="M10.621 19.89V8.75L2.867 19.89H0V4.11h2.758v11.112l7.754-11.113h2.867v11.14L21.16 4.11H24v15.782h-2.73V8.75l-7.755 11.14Z"/></svg>`,
    styles: []
})
export class SimpleIconsChartmogulComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#13324B';
    @Input() className: string = 'simple-icons-chartmogul'
    constructor() {}
    ngOnInit(): void {}
}
