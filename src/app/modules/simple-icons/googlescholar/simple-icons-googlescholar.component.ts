import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-googlescholar',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Google Scholar icon</title><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>`,
    styles: []
})
export class SimpleIconsGooglescholarComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#4285F4';
    @Input() className: string = 'simple-icons-googlescholar'
    constructor() {}
    ngOnInit(): void {}
}
