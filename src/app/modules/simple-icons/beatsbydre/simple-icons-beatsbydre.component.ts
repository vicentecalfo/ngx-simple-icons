import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-beatsbydre',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Beats by Dre icon</title><path d="M12.0099 15.5996A3.5995 3.5995 0 1 0 8.4103 12a3.5995 3.5995 0 0 0 3.5996 3.5996zm0-15.5981a11.9985 11.9985 0 0 0-3.5996.552v6.6471A5.9992 5.9992 0 1 1 6.0106 12V1.6033A11.9985 11.9985 0 1 0 12.01.0015z"/></svg>`,
    styles: []
})
export class SimpleIconsBeatsbydreComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E01F3D';
    @Input() className: string = 'simple-icons-beatsbydre'
    constructor() {}
    ngOnInit(): void {}
}
