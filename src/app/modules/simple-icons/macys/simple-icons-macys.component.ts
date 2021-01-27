import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-macys',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Macy’s icon</title><path d="M12.015.624L9.19 9.293H0l7.445 5.384-2.819 8.673L12 17.986l7.422 5.393-2.835-8.713L24 9.292h-9.162L12.015.622v.002z"/></svg>`,
    styles: []
})
export class SimpleIconsMacysComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E21A2C';
    @Input() className: string = 'simple-icons-macys'
    constructor() {}
    ngOnInit(): void {}
}
