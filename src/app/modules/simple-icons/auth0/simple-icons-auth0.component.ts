import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-auth0',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Auth0 icon</title><path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z"/></svg>`,
    styles: []
})
export class SimpleIconsAuth0Component implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#EB5424';
    @Input() className: string = 'simple-icons-auth0'
    constructor() {}
    ngOnInit(): void {}
}
