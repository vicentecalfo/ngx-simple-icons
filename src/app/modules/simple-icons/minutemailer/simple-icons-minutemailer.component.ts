import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-minutemailer',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Minutemailer icon</title><path d="M5.564 2.703l3.45 3.734-2.434 4.798 5.14-.921 2.34 5.646L24 2.926 5.564 2.703zm-.636 8.088l.957-.787-1.234.39-.126-.18.51-.495-.669.27C1.813 10.979 0 13.455 0 16.35c0 1.951.822 3.705 2.133 4.947-.563-.99-.885-2.134-.885-3.355 0-2.865 1.809-5.415 4.315-6.42l.315-.766-.75.331-.211-.285.011-.011zm4.364-1.97L10.89 6l9.398-2.201L9.292 8.821z"/></svg>`,
    styles: []
})
export class SimpleIconsMinutemailerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#3ABFE6';
    @Input() className: string = 'simple-icons-minutemailer'
    constructor() {}
    ngOnInit(): void {}
}
