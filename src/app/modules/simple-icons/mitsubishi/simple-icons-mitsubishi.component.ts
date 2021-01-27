import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-mitsubishi',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mitsubishi icon</title><path d="M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z"/></svg>`,
    styles: []
})
export class SimpleIconsMitsubishiComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E60012';
    @Input() className: string = 'simple-icons-mitsubishi'
    constructor() {}
    ngOnInit(): void {}
}
