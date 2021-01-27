import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-futurelearn',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>FutureLearn icon</title><path d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z"/></svg>`,
    styles: []
})
export class SimpleIconsFuturelearnComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#DE00A5';
    @Input() className: string = 'simple-icons-futurelearn'
    constructor() {}
    ngOnInit(): void {}
}
