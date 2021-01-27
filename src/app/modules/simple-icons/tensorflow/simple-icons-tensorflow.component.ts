import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-tensorflow',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TensorFlow icon</title><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"/></svg>`,
    styles: []
})
export class SimpleIconsTensorflowComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF6F00';
    @Input() className: string = 'simple-icons-tensorflow'
    constructor() {}
    ngOnInit(): void {}
}
