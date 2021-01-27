import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-lighthouse',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Lighthouse icon</title><path d="M12 0l5.5 3.5v5H20v3h-2.25l2 12.5H4.25l2-12.5H4v-3h2.5V3.53zm2.94 13.25l-6.22 2.26L8 20.04l7.5-2.75zM12 3.56L9.5 5.17V8.5h5V5.15Z"/></svg>`,
    styles: []
})
export class SimpleIconsLighthouseComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#F44B21';
    @Input() className: string = 'simple-icons-lighthouse'
    constructor() {}
    ngOnInit(): void {}
}
