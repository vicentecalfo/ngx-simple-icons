import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-verizon',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Verizon icon</title><path d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z"/></svg>`,
    styles: []
})
export class SimpleIconsVerizonComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#CD040B';
    @Input() className: string = 'simple-icons-verizon'
    constructor() {}
    ngOnInit(): void {}
}
