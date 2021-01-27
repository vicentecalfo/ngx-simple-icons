import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-googlehangouts',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Hangouts icon</title><path d="M12 0C6.2 0 1.5 4.7 1.5 10.5c0 5.5 5 10 10.5 10V24c6.35-3.1 10.5-8.2 10.5-13.5C22.5 4.7 17.8 0 12 0zm-.5 12c0 1.4-.9 2.5-2 2.5V12H7V7.5h4.5V12zm6 0c0 1.4-.9 2.5-2 2.5V12H13V7.5h4.5V12z"/></svg>`,
    styles: []
})
export class SimpleIconsGooglehangoutsComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0C9D58';
    @Input() className: string = 'simple-icons-googlehangouts'
    constructor() {}
    ngOnInit(): void {}
}
