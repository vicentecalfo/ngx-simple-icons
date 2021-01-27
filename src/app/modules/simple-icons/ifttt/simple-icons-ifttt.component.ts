import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-ifttt',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>IFTTT icon</title><path d="M0 8.82h2.024v6.36H0zm11.566 0h-3.47v2.024h1.446v4.337h2.024v-4.337h1.446V8.82zm5.494 0h-3.47v2.024h1.446v4.337h2.024v-4.337h1.446V8.82zm5.494 0h-3.47v2.024h1.446v4.337h2.024v-4.337H24V8.82zM7.518 10.843V8.82H2.892v6.36h2.024v-1.734H6.65v-2.024H4.916v-.578z"/></svg>`,
    styles: []
})
export class SimpleIconsIftttComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-ifttt'
    constructor() {}
    ngOnInit(): void {}
}
