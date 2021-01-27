import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-keras',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Keras icon</title><path d="M24 0H0v24h24V0zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4-5.14 5.1 5.47 7.94-.2.3h-1.94l-4.65-6.88-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17h1.48z"/></svg>`,
    styles: []
})
export class SimpleIconsKerasComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#D00000';
    @Input() className: string = 'simple-icons-keras'
    constructor() {}
    ngOnInit(): void {}
}
