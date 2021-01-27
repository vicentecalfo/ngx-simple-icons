import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-houzz',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Houzz icon</title><path d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z"/></svg>`,
    styles: []
})
export class SimpleIconsHouzzComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4DBC15';
    @Input() className: string = 'simple-icons-houzz'
    constructor() {}
    ngOnInit(): void {}
}
