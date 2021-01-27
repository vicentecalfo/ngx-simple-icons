import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-scrimba',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Scrimba icon</title><path d="M24 6.222a2.222 2.222 0 01-2.222 2.222h-8.89a2.222 2.222 0 010-4.444h8.89C23.005 4 24 4.995 24 6.222zm-7.333 9.334h-8.89a2.222 2.222 0 000 4.444h8.89a2.222 2.222 0 000-4.444zm0-5.778H13.11a2.222 2.222 0 000 4.444h3.556a2.222 2.222 0 000-4.444zM2.222 15.556a2.222 2.222 0 100 4.444 2.222 2.222 0 000-4.444z"/></svg>`,
    styles: []
})
export class SimpleIconsScrimbaComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#2B283A';
    @Input() className: string = 'simple-icons-scrimba'
    constructor() {}
    ngOnInit(): void {}
}
