import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-reverbnation',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ReverbNation icon</title><path d="M24 9.324l-9.143-.03L11.971.57 9.143 9.294 0 9.324h.031l7.367 5.355-2.855 8.749h.029l7.459-5.386 7.396 5.386-2.855-8.73L24 9.315"/></svg>`,
    styles: []
})
export class SimpleIconsReverbnationComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E43526';
    @Input() className: string = 'simple-icons-reverbnation'
    constructor() {}
    ngOnInit(): void {}
}
