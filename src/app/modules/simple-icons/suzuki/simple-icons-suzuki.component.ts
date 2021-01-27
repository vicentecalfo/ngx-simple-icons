import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-suzuki',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Suzuki icon</title><path d="M17.369 19.995C13.51 22.39 12 24 12 24L.105 15.705s5.003-3.715 9.186-.87l5.61 3.882.683-.453L.106 7.321s2.226-.65 6.524-3.315C10.49 1.609 12 0 12 0l11.895 8.296s-5.003 3.715-9.187.87L9.1 5.281l-.683.454L23.893 16.68s-2.224.649-6.524 3.315Z"/></svg>`,
    styles: []
})
export class SimpleIconsSuzukiComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E30613';
    @Input() className: string = 'simple-icons-suzuki'
    constructor() {}
    ngOnInit(): void {}
}
