import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-polymerproject',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Polymer Project icon</title><path d="M14.4 3.686L7.2 16.16 4.8 12l4.8-8.314H4.8L0 12l2.4 4.159 2.4 4.155h4.8l7.2-12.469L19.2 12l-4.8 8.314h4.8l2.4-4.155L24 12l-2.4-4.155-2.4-4.159Z"/></svg>`,
    styles: []
})
export class SimpleIconsPolymerprojectComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF4470';
    @Input() className: string = 'simple-icons-polymerproject'
    constructor() {}
    ngOnInit(): void {}
}
