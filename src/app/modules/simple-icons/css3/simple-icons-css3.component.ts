import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-css3',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,
    styles: []
})
export class SimpleIconsCss3Component implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#1572B6';
    @Input() className: string = 'simple-icons-css3'
    constructor() {}
    ngOnInit(): void {}
}
