import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-flutter',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Flutter icon</title><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>`,
    styles: []
})
export class SimpleIconsFlutterComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#02569B';
    @Input() className: string = 'simple-icons-flutter'
    constructor() {}
    ngOnInit(): void {}
}
