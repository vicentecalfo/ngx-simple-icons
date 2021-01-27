import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-stitcher',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stitcher icon</title><path d="M19.59 8.516H24v6.928h-4.41zM0 8.854h4.41v7.803H0zm4.914-1.328h4.388v8.572H4.914zm4.892.725h4.388v8.81H9.806zm4.892-1.312h4.388v9.158h-4.388Z"/></svg>`,
    styles: []
})
export class SimpleIconsStitcherComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-stitcher'
    constructor() {}
    ngOnInit(): void {}
}
