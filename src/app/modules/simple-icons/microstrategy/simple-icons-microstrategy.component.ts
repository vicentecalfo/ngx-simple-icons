import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-microstrategy',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MicroStrategy icon</title><path d="M9.095 2.572h5.827v18.856H9.096zM0 2.572h5.825v18.856H.001zm18.174 0v18.854H24V8.33z"/></svg>`,
    styles: []
})
export class SimpleIconsMicrostrategyComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#D9232E';
    @Input() className: string = 'simple-icons-microstrategy'
    constructor() {}
    ngOnInit(): void {}
}
