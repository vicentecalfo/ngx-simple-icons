import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-anydesk',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>AnyDesk icon</title><path d="M8.322 3.677L0 12l8.322 8.323L16.645 12zm7.371.01l-1.849 1.85 6.49 6.456-6.49 6.49 1.85 1.817L24 11.993Z"/></svg>`,
    styles: []
})
export class SimpleIconsAnydeskComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EF443B';
    @Input() className: string = 'simple-icons-anydesk'
    constructor() {}
    ngOnInit(): void {}
}
