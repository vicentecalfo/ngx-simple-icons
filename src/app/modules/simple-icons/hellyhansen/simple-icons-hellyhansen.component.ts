import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-hellyhansen',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Helly Hansen icon</title><path d="M4.27 10.09h4.08V5.63h4.11L9.98 18.37H8.34V14H4.26v4.37H0V5.63h4.27zm15.45 3.82h-4.07v4.46h-4.1l2.47-12.74h1.64V10h4.08V5.63H24v12.74h-4.28Z"/></svg>`,
    styles: []
})
export class SimpleIconsHellyhansenComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#DA2128';
    @Input() className: string = 'simple-icons-hellyhansen'
    constructor() {}
    ngOnInit(): void {}
}
