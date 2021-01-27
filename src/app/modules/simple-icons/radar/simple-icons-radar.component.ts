import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-radar',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Radar icon</title><path d="M12 0L2.197 23.975 12 19.952 21.803 24z"/></svg>`,
    styles: []
})
export class SimpleIconsRadarComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#007AFF';
    @Input() className: string = 'simple-icons-radar'
    constructor() {}
    ngOnInit(): void {}
}
