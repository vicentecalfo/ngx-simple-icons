import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-dunked',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dunked icon</title><path d="M13.799 0v19.8599A4.2002 4.2002 0 0018.0003 24h4.2002V4.1411A4.2002 4.2002 0 0017.9992 0H13.798zM6.2983 15.0014a4.5008 4.5008 0 00-4.4988 4.3906v.2224a4.5008 4.5008 0 008.9986 0v-.2154a4.5008 4.5008 0 00-4.4998-4.3986z"/></svg>`,
    styles: []
})
export class SimpleIconsDunkedComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#2DA9D7';
    @Input() className: string = 'simple-icons-dunked'
    constructor() {}
    ngOnInit(): void {}
}
