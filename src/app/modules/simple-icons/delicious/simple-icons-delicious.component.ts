import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-delicious',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Delicious icon</title><path d="M12 12H0v12h12V12zM24 0H12v12h12V0z"/></svg>`,
    styles: []
})
export class SimpleIconsDeliciousComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0000FF';
    @Input() className: string = 'simple-icons-delicious'
    constructor() {}
    ngOnInit(): void {}
}
